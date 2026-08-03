import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { fadeUp } from '@/Components/Landing/motion/Reveal';
import { BorderBeam } from '@/Components/Landing/motion/BorderBeam';

const platforms = [
    { name: 'YouTube', icon: 'youtube' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'TikTok', icon: 'tiktok' },
    { name: 'Twitch', icon: 'twitch' },
    { name: 'Shopee Live', icon: 'shopee' },
];

const heroStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const bars = [6, 10, 16, 22, 14, 24, 12, 18, 9, 20, 13, 8];

function PlatformIcon({ icon, className = 'size-4' }) {
    const common = {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className,
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
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="M14 8.5h-1.4c-1 0-1.6.55-1.6 1.6v1.9h3l-.4 3h-2.6v6" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg {...common}>
                    <path d="M13 4v10.6a3.4 3.4 0 1 1-2-3.1" />
                    <path d="M13 4c.3 2 1.8 3.6 4 4" />
                </svg>
            );
        case 'twitch':
            return (
                <svg {...common}>
                    <path d="M4 3h16v11l-4 4h-4l-3 3v-3H4V3z" />
                    <path d="M11 7.5v4M15.5 7.5v4" />
                </svg>
            );
        case 'shopee':
            return (
                <svg {...common}>
                    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                    <path d="M5.5 8h13l-1 12h-11l-1-12z" />
                </svg>
            );
        default:
            return null;
    }
}

export default function Hero({ canRegister }) {
    const spotlightRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        if (spotlightRef.current) {
            spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(124,92,255,0.16), transparent 60%)`;
        }
    };

    return (
        <section
            className="relative overflow-hidden pb-24 pt-[168px] sm:pt-[200px]"
            onMouseMove={handleMouseMove}
        >
            {/* dot-grid base */}
            <div
                className="pointer-events-none absolute inset-0 -z-20 opacity-[0.25]"
                style={{
                    backgroundImage:
                        'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                    maskImage:
                        'radial-gradient(ellipse 60% 50% at 50% 30%, #000 40%, transparent 80%)',
                    WebkitMaskImage:
                        'radial-gradient(ellipse 60% 50% at 50% 30%, #000 40%, transparent 80%)',
                }}
            />

            {/* aurora blobs */}
            <motion.div
                className="pointer-events-none absolute left-[8%] top-[6%] -z-20 size-[26rem] rounded-full bg-[var(--hero-glow)] opacity-25 blur-[110px]"
                animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="pointer-events-none absolute right-[10%] top-[18%] -z-20 size-[22rem] rounded-full bg-fuchsia-500/15 blur-[110px]"
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* mouse-follow spotlight */}
            <div ref={spotlightRef} className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-300" />

            {/* rotating accent rings */}
            <motion.div
                className="pointer-events-none absolute left-1/2 top-24 -z-10 size-[36rem] -translate-x-1/2 sm:size-[46rem]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[14%] rounded-full border border-white/10" />
                <div className="absolute inset-[28%] rounded-full border border-white/10" />
                <div className="absolute inset-0 rounded-full bg-[var(--hero-glow)]/10 blur-3xl" />
                <span className="absolute left-[12%] top-[20%] size-1 rounded-full bg-white/40" />
                <span className="absolute right-[18%] top-[35%] size-1 rounded-full bg-white/30" />
                <span className="absolute bottom-[22%] left-[30%] size-1 rounded-full bg-white/20" />
                <span className="absolute bottom-[15%] right-[24%] size-1.5 rounded-full bg-white/30" />
            </motion.div>

            <motion.div
                className="container-sm relative text-center"
                initial="hidden"
                animate="visible"
                variants={heroStagger}
            >
                <motion.span
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70"
                >
                    <span className="size-1.5 animate-pulse rounded-full bg-[var(--hero-glow)]" />
                    Đang LIVE hơn 1.200 kênh mỗi ngày
                </motion.span>

                <div className="relative">
                    {/* floating badge — top left */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute -left-4 top-6 hidden lg:-left-32 lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="glass flex items-center gap-2 rounded-full px-3.5 py-2 text-xs text-white/80 shadow-lg"
                        >
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/70" />
                                <span className="relative inline-flex size-2 rounded-full bg-red-500" />
                            </span>
                            Kênh Gaming Tối · LIVE
                        </motion.div>
                    </motion.div>

                    {/* floating badge — bottom right */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute -right-4 bottom-2 hidden lg:-right-32 lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                            className="glass flex items-center gap-2 rounded-full px-3.5 py-2 text-xs text-white/80 shadow-lg"
                        >
                            <PlatformIcon icon="tiktok" className="size-3.5 text-[var(--hero-glow)]" />
                            2.4K đang xem
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="mx-auto mt-6 max-w-3xl text-[40px] font-medium leading-[1.1] tracking-tight text-white sm:text-[56px] lg:text-[72px] lg:leading-[80px]"
                    >
                        Livestream tự động trên nhiều nền tảng, liên tục 24/7
                    </motion.h1>
                </div>

                <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]"
                >
                    Không cần máy tính bật liên tục, không cần thuê VPS. AutoLive
                    giúp bạn phát trực tiếp đồng thời trên YouTube, Facebook,
                    TikTok, Twitch và Shopee Live chỉ với vài thao tác đơn giản.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                    {canRegister && (
                        <Link
                            href={route('register')}
                            className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 px-8 py-3 text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60 sm:w-auto"
                        >
                            <BorderBeam size={60} duration={5} halo={false} />
                            <span className="relative z-10">Đăng ký dùng thử miễn phí</span>
                        </Link>
                    )}
                    <a
                        href="#tinh-nang"
                        className="w-full rounded-full border border-white/15 px-8 py-3 text-sm text-white transition hover:border-white/25 sm:w-auto"
                    >
                        Xem tính năng
                    </a>
                </motion.div>

                {/* compact hero visual — multi-platform simulcast preview */}
                <motion.div variants={fadeUp} className="relative mx-auto mt-16 max-w-lg sm:mt-20">
                    <div className="glass overflow-hidden rounded-2xl text-left">
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-300">
                                <span className="size-1.5 rounded-full bg-red-400" />
                                LIVE
                            </span>
                            <span className="text-xs text-white/40">08:14:32</span>
                        </div>

                        <div className="flex items-end gap-1 px-5 pb-2 pt-5">
                            {bars.map((h, i) => (
                                <motion.span
                                    key={i}
                                    className="w-full rounded-full"
                                    style={{
                                        height: h,
                                        backgroundImage:
                                            'linear-gradient(to top, rgba(124,92,255,0.8), rgba(124,92,255,0.15))',
                                    }}
                                    animate={{ scaleY: [0.5, 1.4, 0.7, 1, 0.5] }}
                                    transition={{
                                        duration: 1.6 + (i % 4) * 0.3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.08,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-between px-5 pb-5 pt-1">
                            <p className="text-xs text-white/40">Đang phát đồng thời trên</p>
                            <div className="flex -space-x-2">
                                {platforms.map((p) => (
                                    <span
                                        key={p.name}
                                        title={p.name}
                                        className="glass-soft flex size-7 items-center justify-center rounded-full text-white/70"
                                    >
                                        <PlatformIcon icon={p.icon} className="size-3.5" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass absolute -bottom-5 -left-5 hidden rounded-xl px-4 py-3 sm:block">
                        <p className="text-xl font-medium text-white">5 nền tảng</p>
                        <p className="text-xs text-white/40">Cùng một lúc</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="mx-auto mt-20 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3"
                >
                    {platforms.map((platform) => (
                        <span
                            key={platform.name}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/40 transition hover:border-white/20 hover:text-white/70"
                        >
                            <PlatformIcon icon={platform.icon} className="size-3.5" />
                            {platform.name}
                        </span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
