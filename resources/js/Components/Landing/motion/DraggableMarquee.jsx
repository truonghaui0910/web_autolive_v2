import { useEffect, useRef } from 'react';

const BASE_SPEED = 0.045; // px/ms baseline auto-drift speed
const FRICTION = 0.94; // velocity decay factor applied per ~16ms

export default function DraggableMarquee({ items, renderItem, reverse = false, className = '' }) {
    const trackRef = useRef(null);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const state = {
            dragging: false,
            startX: 0,
            startScrollLeft: 0,
            lastMoveX: 0,
            lastMoveTs: 0,
            velocity: (reverse ? -1 : 1) * BASE_SPEED,
            lastTs: null,
            rafId: null,
            touchActive: false,
            lastScrollLeft: 0,
            lastScrollTs: 0,
        };

        const initFrame = requestAnimationFrame(() => {
            el.scrollLeft = el.scrollWidth / 3;
            state.lastScrollLeft = el.scrollLeft;
            state.lastScrollTs = performance.now();
        });

        function wrap() {
            const third = el.scrollWidth / 3;
            if (third <= 0) return;
            if (el.scrollLeft < third * 0.5) {
                el.scrollLeft += third;
                state.startScrollLeft += third;
            } else if (el.scrollLeft > third * 1.5) {
                el.scrollLeft -= third;
                state.startScrollLeft -= third;
            }
        }

        function settleToBaseline(fallbackReverse) {
            if (Math.abs(state.velocity) < BASE_SPEED) {
                const sign = state.velocity < 0 ? -1 : state.velocity > 0 ? 1 : fallbackReverse ? -1 : 1;
                state.velocity = sign * BASE_SPEED;
            }
        }

        function tick(ts) {
            if (state.lastTs == null) state.lastTs = ts;
            const dt = Math.min(ts - state.lastTs, 48);
            state.lastTs = ts;

            if (!state.dragging && !state.touchActive) {
                const sign = state.velocity < 0 ? -1 : 1;
                const magnitude = Math.abs(state.velocity);
                if (magnitude > BASE_SPEED) {
                    const decayed = BASE_SPEED + (magnitude - BASE_SPEED) * Math.pow(FRICTION, dt / 16);
                    state.velocity = sign * decayed;
                }
                el.scrollLeft += state.velocity * dt;
            }

            wrap();
            state.rafId = requestAnimationFrame(tick);
        }
        state.rafId = requestAnimationFrame(tick);

        function onPointerDown(e) {
            if (e.pointerType !== 'mouse') return;
            state.dragging = true;
            state.startX = e.clientX;
            state.startScrollLeft = el.scrollLeft;
            state.lastMoveX = e.clientX;
            state.lastMoveTs = performance.now();
            state.velocity = 0;
            el.setPointerCapture(e.pointerId);
            el.classList.add('cursor-grabbing');
        }

        function onPointerMove(e) {
            if (!state.dragging) return;
            const now = performance.now();
            const prevScrollLeft = el.scrollLeft;
            el.scrollLeft = state.startScrollLeft - (e.clientX - state.startX);

            const dt = now - state.lastMoveTs;
            if (dt > 0) {
                const instVelocity = (el.scrollLeft - prevScrollLeft) / dt;
                state.velocity = state.velocity ? state.velocity * 0.7 + instVelocity * 0.3 : instVelocity;
            }
            state.lastMoveTs = now;
        }

        function onPointerUp() {
            if (!state.dragging) return;
            state.dragging = false;
            el.classList.remove('cursor-grabbing');
            settleToBaseline(reverse);
            state.lastTs = null;
        }

        function onTouchStart() {
            state.touchActive = true;
            state.velocity = 0;
            state.lastScrollLeft = el.scrollLeft;
            state.lastScrollTs = performance.now();
        }

        function onScroll() {
            if (!state.touchActive) return;
            const now = performance.now();
            const dt = now - state.lastScrollTs;
            if (dt > 0) {
                state.velocity = (el.scrollLeft - state.lastScrollLeft) / dt;
            }
            state.lastScrollLeft = el.scrollLeft;
            state.lastScrollTs = now;
        }

        function onTouchEnd() {
            state.touchActive = false;
            settleToBaseline(reverse);
            state.lastTs = null;
        }

        el.addEventListener('pointerdown', onPointerDown);
        el.addEventListener('pointermove', onPointerMove);
        el.addEventListener('pointerup', onPointerUp);
        el.addEventListener('pointercancel', onPointerUp);
        el.addEventListener('touchstart', onTouchStart, { passive: true });
        el.addEventListener('touchend', onTouchEnd, { passive: true });
        el.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(initFrame);
            cancelAnimationFrame(state.rafId);
            el.removeEventListener('pointerdown', onPointerDown);
            el.removeEventListener('pointermove', onPointerMove);
            el.removeEventListener('pointerup', onPointerUp);
            el.removeEventListener('pointercancel', onPointerUp);
            el.removeEventListener('touchstart', onTouchStart);
            el.removeEventListener('touchend', onTouchEnd);
            el.removeEventListener('scroll', onScroll);
        };
    }, [reverse]);

    return (
        <div
            ref={trackRef}
            className={`no-scrollbar flex cursor-grab gap-4 overflow-x-auto [touch-action:pan-x] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
            style={{ scrollBehavior: 'auto' }}
        >
            {[...items, ...items, ...items].map((item, index) => renderItem(item, index))}
        </div>
    );
}
