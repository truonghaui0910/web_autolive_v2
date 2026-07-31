import { Link } from '@inertiajs/react';

const platforms = ['YouTube', 'Facebook', 'TikTok', 'Twitch', 'Shopee Live'];

export default function Hero({ canRegister }) {
    return (
        <section className="relative overflow-hidden pb-24 pt-[168px] sm:pt-[200px]">
            <div className="pointer-events-none absolute left-1/2 top-24 -z-10 size-[36rem] -translate-x-1/2 sm:size-[46rem]">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[14%] rounded-full border border-white/10" />
                <div className="absolute inset-[28%] rounded-full border border-white/10" />
                <div className="absolute inset-0 rounded-full bg-[var(--hero-glow)]/10 blur-3xl" />
                <span className="absolute left-[12%] top-[20%] size-1 rounded-full bg-white/40" />
                <span className="absolute right-[18%] top-[35%] size-1 rounded-full bg-white/30" />
                <span className="absolute bottom-[22%] left-[30%] size-1 rounded-full bg-white/20" />
                <span className="absolute bottom-[15%] right-[24%] size-1.5 rounded-full bg-white/30" />
            </div>

            <div className="container-sm relative text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70">
                    <span className="size-1.5 animate-pulse rounded-full bg-[var(--hero-glow)]" />
                    Đang LIVE hơn 1.200 kênh mỗi ngày
                </span>

                <h1 className="mx-auto mt-6 max-w-3xl text-[40px] font-medium leading-[1.1] tracking-tight text-white sm:text-[56px] lg:text-[72px] lg:leading-[80px]">
                    Livestream tự động trên nhiều nền tảng, liên tục 24/7
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
                    Không cần máy tính bật liên tục, không cần thuê VPS. AutoLive
                    giúp bạn phát trực tiếp đồng thời trên YouTube, Facebook,
                    TikTok, Twitch và Shopee Live chỉ với vài thao tác đơn giản.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    {canRegister && (
                        <Link
                            href={route('register')}
                            className="w-full rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 px-8 py-3 text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60 sm:w-auto"
                        >
                            Đăng ký dùng thử miễn phí
                        </Link>
                    )}
                    <a
                        href="#tinh-nang"
                        className="w-full rounded-full border border-white/15 px-8 py-3 text-sm text-white transition hover:border-white/25 sm:w-auto"
                    >
                        Xem tính năng
                    </a>
                </div>

                <div className="mx-auto mt-20 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {platforms.map((platform) => (
                        <span
                            key={platform}
                            className="text-sm font-medium uppercase tracking-wide text-white/40"
                        >
                            {platform}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
