import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];

const offsets = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
};

export function Reveal({ as = 'div', direction = 'up', delay = 0, className, children, ...props }) {
    const MotionTag = motion[as] ?? motion.div;
    const offset = offsets[direction] ?? offsets.up;

    return (
        <MotionTag
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE, delay }}
            className={className}
            {...props}
        >
            {children}
        </MotionTag>
    );
}

export const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function RevealGroup({ as = 'div', stagger = 0.12, className, children, ...props }) {
    const MotionTag = motion[as] ?? motion.div;
    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
    };

    return (
        <MotionTag
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className={className}
            {...props}
        >
            {children}
        </MotionTag>
    );
}

export function RevealItem({ as = 'div', direction = 'up', duration = 0.6, className, children, ...props }) {
    const MotionTag = motion[as] ?? motion.div;
    const offset = offsets[direction] ?? offsets.up;
    const variants = {
        hidden: { opacity: 0, ...offset },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: EASE } },
    };

    return (
        <MotionTag variants={variants} className={className} {...props}>
            {children}
        </MotionTag>
    );
}
