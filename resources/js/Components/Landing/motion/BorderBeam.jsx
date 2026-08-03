import { motion } from 'motion/react';

export function BorderBeam({
    className = '',
    size = 160,
    duration = 10,
    delay = 0,
    colorFrom = '#ffffff',
    colorTo = 'var(--hero-glow)',
    reverse = false,
    initialOffset = 0,
    halo = true,
}) {
    const beamStyle = {
        width: size,
        offsetPath: `rect(0 auto auto 0 round ${size}px)`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
    };

    const animate = {
        offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `-${initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
    };

    const transition = {
        repeat: Infinity,
        ease: 'linear',
        duration,
        delay: -delay,
    };

    return (
        <>
            {/* soft halo — unmasked so the glow bleeds into the card content */}
            {halo && (
                <motion.div
                    className="absolute aspect-square rounded-full opacity-70 blur-2xl"
                    style={{
                        ...beamStyle,
                        background: 'radial-gradient(circle, var(--color-from) 0%, var(--color-to) 45%, transparent 72%)',
                    }}
                    initial={{ offsetDistance: `${initialOffset}%` }}
                    whileInView={animate}
                    viewport={{ once: true }}
                    transition={transition}
                />
            )}

            {/* crisp beam — clipped tightly to the border ring */}
            <div className="absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
                <motion.div
                    className={`absolute aspect-square bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent ${className}`}
                    style={beamStyle}
                    initial={{ offsetDistance: `${initialOffset}%` }}
                    whileInView={animate}
                    viewport={{ once: true }}
                    transition={transition}
                />
            </div>
        </>
    );
}
