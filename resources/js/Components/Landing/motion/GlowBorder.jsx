export function GlowBorder({ className = '', contentClassName = '', children }) {
    return (
        <div className={`relative rounded-2xl ${className}`}>
            <div
                className={`relative z-10 h-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] ${contentClassName}`}
            >
                {children}
            </div>

            <div className="pointer-events-none absolute -top-6 left-1/2 z-20 h-12 w-2/3 -translate-x-1/2 rounded-full bg-[var(--hero-glow)]/50 blur-2xl" />
            <div className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[var(--hero-glow)] to-transparent" />
        </div>
    );
}
