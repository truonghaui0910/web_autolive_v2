import { motion } from 'motion/react';

export function BorderBeam({
    className = '',
    size = 90,
    duration = 8,
    delay = 0,
    colorFrom = 'var(--hero-glow)',
    colorTo = '#f4f0ff',
    reverse = false,
    initialOffset = 0,
}) {
    return (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
            <motion.div
                className={`absolute aspect-square bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent ${className}`}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                    '--color-from': colorFrom,
                    '--color-to': colorTo,
                }}
                initial={{ offsetDistance: `${initialOffset}%` }}
                animate={{
                    offsetDistance: reverse
                        ? [`${100 - initialOffset}%`, `-${initialOffset}%`]
                        : [`${initialOffset}%`, `${100 + initialOffset}%`],
                }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration,
                    delay: -delay,
                }}
            />
        </div>
    );
}
