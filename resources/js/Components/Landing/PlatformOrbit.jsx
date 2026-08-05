import { useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'motion/react';
import { Reveal } from '@/Components/Landing/motion/Reveal';

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

// Relative-to-center (x, y) path each platform badge flies along, plus its
// scale/opacity over the same 12 keyframes — sampled with a Catmull-Rom
// spline so the motion curves instead of moving in straight lines.
const X_KEYFRAMES = [960, 400, -250, -500, -380, 5, 390, 560, 270, -580, -580, -960];
const Y_KEYFRAMES = [540, 500, 270, 30, -190, -270, -190, 10, 255, 520, 580, 780];
const SCALE_KEYFRAMES = [0.28, 0.75, 0.83, 0.84, 0.8, 0.75, 0.8, 0.84, 0.88, 0.62, 0.35, 0.28];
const OPACITY_KEYFRAMES = [0, 0.8, 0.86, 0.9, 0.8, 0.72, 0.8, 0.9, 0.88, 0.58, 0.22, 0];

function catmullRom1D(points, t) {
    const n = points.length;
    const clampedT = clamp(t, 0, n - 1);
    let i = Math.floor(clampedT);
    if (i >= n - 1) i = n - 2;
    if (i < 0) i = 0;
    const localT = clampedT - i;

    const p0 = points[Math.max(i - 1, 0)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(i + 2, n - 1)];

    const t2 = localT * localT;
    const t3 = t2 * localT;

    return 0.5 * (
        2 * p1 +
        (-p0 + p2) * localT +
        (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
        (-p0 + 3 * p1 - 3 * p2 + p3) * t3
    );
}

function logoSplineT(sharedProgress, index) {
    const logoProgress = clamp(1.75 * sharedProgress - 0.09 * index, 0, 1);
    return logoProgress * (X_KEYFRAMES.length - 1);
}

function viewportScaleFor(width) {
    if (width < 640) return 0.4;
    if (width < 1024) return 0.55;
    if (width < 1440) return 0.7;
    return Math.min(1.1, width / 1280);
}

// Separate, more aggressive scale for the flight-path radius (X/Y_KEYFRAMES)
// so badges stay inside the viewport on narrow screens instead of swinging
// off past the edge — badge size alone shrinking isn't enough, since the
// path amplitude is authored in desktop pixels relative to screen center.
function orbitScaleFor(width) {
    if (width < 480) return 0.4;
    if (width < 640) return 0.52;
    if (width < 1024) return 0.55;
    if (width < 1440) return 0.8;
    return Math.min(1, width / 1280);
}

function useResponsiveScale() {
    const [scale, setScale] = useState({ iconScale: 0.7, orbitScale: 0.8 });
    useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            setScale({ iconScale: viewportScaleFor(width), orbitScale: orbitScaleFor(width) });
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return scale;
}

const PLATFORMS = [
    { name: 'YouTube', icon: 'youtube' },
    { name: 'TikTok', icon: 'tiktok' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitch', icon: 'twitch' },
    { name: 'TikTok', icon: 'tiktok' },
    { name: 'YouTube', icon: 'youtube' },
    { name: 'Facebook', icon: 'facebook' },
];

const ICON_SIZE = { width: '9rem', height: '9rem' };

function PlatformIcon({ icon, style }) {
    const common = {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        style,
    };

    switch (icon) {
        case 'youtube':
            return (
                <svg {...common}>
                    <rect x="2.5" y="6" width="19" height="12" rx="4" />
                    <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" stroke="none" />
                </svg>
            );
        case 'facebook':
            return (
                <svg {...common}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg {...common}>
                    <path d="M13 4v10.6a3.4 3.4 0 1 1-2-3.1" />
                    <path d="M13 4c.3 2 1.8 3.6 4 4" />
                </svg>
            );
        case 'instagram':
            return (
                <svg {...common}>
                    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" stroke="none" />
                </svg>
            );
        case 'twitch':
            return (
                <svg {...common}>
                    <path d="M4 3h16v11l-4 4h-4l-3 3v-3H4V3z" />
                    <path d="M11 7.5v4M15.5 7.5v4" />
                </svg>
            );
        default:
            return null;
    }
}

function OrbitPlatform({ name, icon, index, viewportScale, orbitScale, sharedProgress }) {
    const x = useTransform(sharedProgress, (v) => catmullRom1D(X_KEYFRAMES, logoSplineT(v, index)) * orbitScale);
    const y = useTransform(sharedProgress, (v) => catmullRom1D(Y_KEYFRAMES, logoSplineT(v, index)) * orbitScale);
    const scale = useTransform(sharedProgress, (v) => catmullRom1D(SCALE_KEYFRAMES, logoSplineT(v, index)));
    const opacity = useTransform(sharedProgress, (v) => catmullRom1D(OPACITY_KEYFRAMES, logoSplineT(v, index)));

    const size = 104 * 1.5 * viewportScale;

    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
                style={{ x, y, scale, opacity, width: size, height: size }}
                className="glass flex items-center justify-center overflow-hidden rounded-2xl text-white shadow-[0_0_55px_rgba(124,92,255,0.75)]"
                title={name}
            >
                <PlatformIcon icon={icon} style={ICON_SIZE} />
            </motion.div>
        </div>
    );
}

function HeadlineWord({ text, threshold, serif, sharedProgress }) {
    const revealEnd = threshold + 0.09;
    const opacity = useTransform(sharedProgress, [threshold, revealEnd], [0, 1]);
    const y = useTransform(sharedProgress, [threshold, revealEnd], [10, 0]);
    const blur = useTransform(sharedProgress, [threshold, revealEnd], [serif ? 10 : 18, 0]);
    const filter = useMotionTemplate`blur(${blur}px)`;

    return (
        <motion.span
            style={{
                opacity,
                y,
                filter,
                fontFamily: serif ? "Georgia, 'Times New Roman', serif" : undefined,
                fontStyle: serif ? 'italic' : undefined,
                fontWeight: serif ? 400 : undefined,
            }}
            className="inline-block"
        >
            {text}
        </motion.span>
    );
}

const HEADLINE_LINE_1 = [
    { text: 'Được', threshold: 0 },
    { text: 'hàng nghìn', threshold: 0.06 },
    { text: 'nhà sáng tạo', threshold: 0.12 },
];

const HEADLINE_LINE_2 = [
    { text: 'tin dùng để', threshold: 0.19 },
    { text: 'livestream', threshold: 0.26, serif: true },
    { text: 'mỗi ngày.', threshold: 0.33, serif: true },
];

const CHAPTER_CLOSE_START = 0.62;
const CHAPTER_CLOSE_END = 0.88;

export default function PlatformOrbit() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
    const remapped = useTransform(scrollYProgress, (v) => 0.03 + 0.85 * v);
    const smoothProgress = useSpring(remapped, { stiffness: 90, damping: 22, restDelta: 0.001 });
    const { iconScale, orbitScale } = useResponsiveScale();

    const closeOpacity = useTransform(smoothProgress, [CHAPTER_CLOSE_START, CHAPTER_CLOSE_END], [1, 0]);
    const closeY = useTransform(smoothProgress, [CHAPTER_CLOSE_START, CHAPTER_CLOSE_END], [0, -40]);
    const closeBlur = useTransform(smoothProgress, [CHAPTER_CLOSE_START, CHAPTER_CLOSE_END], [0, 16]);
    const closeFilter = useMotionTemplate`blur(${closeBlur}px)`;

    return (
        <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
            <motion.div
                className="sticky top-0 h-screen overflow-hidden"
                style={{ opacity: closeOpacity, y: closeY, filter: closeFilter }}
            >
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--hero-glow)] opacity-20 blur-[120px]"
                />

                <div aria-hidden="true">
                    {PLATFORMS.map((platform, i) => (
                        <OrbitPlatform
                            key={`${platform.name}-${i}`}
                            name={platform.name}
                            icon={platform.icon}
                            index={i}
                            viewportScale={iconScale}
                            orbitScale={orbitScale}
                            sharedProgress={smoothProgress}
                        />
                    ))}
                </div>

                <Reveal
                    as="p"
                    className="relative z-10 pt-16 text-center text-sm font-medium text-[var(--hero-glow)] sm:pt-20"
                >
                    Đối tác &amp; nền tảng
                </Reveal>

                <h2 className="relative z-10 mx-auto flex h-[calc(100%-4rem)] max-w-sm flex-col items-center justify-center gap-y-1 px-6 text-center text-[21px] font-medium leading-[1.2] tracking-tight text-white/80 sm:max-w-lg sm:text-[38px]">
                    <span className="flex flex-wrap items-center justify-center gap-x-2">
                        {HEADLINE_LINE_1.map((word) => (
                            <HeadlineWord
                                key={word.text}
                                text={word.text}
                                threshold={word.threshold}
                                serif={word.serif}
                                sharedProgress={smoothProgress}
                            />
                        ))}
                    </span>
                    <span className="flex flex-wrap items-center justify-center gap-x-2">
                        {HEADLINE_LINE_2.map((word) => (
                            <HeadlineWord
                                key={word.text}
                                text={word.text}
                                threshold={word.threshold}
                                serif={word.serif}
                                sharedProgress={smoothProgress}
                            />
                        ))}
                    </span>
                </h2>
            </motion.div>
        </div>
    );
}
