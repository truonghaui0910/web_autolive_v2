import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';

const channels = [
    { name: 'Kênh Gaming Tối', platform: 'YouTube', tone: 'bg-[var(--hero-glow)]/25' },
    { name: 'Shop Thời Trang ABC', platform: 'TikTok', tone: 'bg-[var(--hero-glow)]/15' },
    { name: 'Fanpage Ẩm Thực', platform: 'Facebook', tone: 'bg-[var(--hero-glow)]/10' },
];

export default function ProductPreview() {
    return (
        <section className="container-lg py-16 sm:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                <Reveal as="div" direction="left">
                    <p className="text-base font-medium text-[var(--hero-glow)]">
                        Giao diện trực quan
                    </p>
                    <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                        Quản lý mọi buổi live chỉ trên một màn hình
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[var(--muted-foreground)]">
                        Theo dõi trạng thái, số người xem và thời lượng của từng
                        kênh đang phát theo thời gian thực. Bảng điều khiển được
                        thiết kế tối giản, dễ dùng trên cả máy tính lẫn điện
                        thoại.
                    </p>
                    <ul className="mt-6 space-y-3">
                        {[
                            'Khởi động / dừng livestream chỉ với 1 click',
                            'Lên lịch phát tự động theo khung giờ',
                            'Cảnh báo tức thì khi có sự cố kết nối',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                                <svg className="mt-0.5 size-5 shrink-0 text-[var(--hero-glow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal as="div" direction="right" delay={0.1} className="relative">
                    <div className="glass overflow-hidden rounded-2xl">
                        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                            <span className="size-2.5 rounded-full border border-white/20" />
                            <span className="size-2.5 rounded-full border border-white/20" />
                            <span className="size-2.5 rounded-full border border-white/20" />
                            <span className="ml-3 text-xs text-white/40">
                                autolive.vip/live
                            </span>
                        </div>
                        <RevealGroup as="div" className="space-y-3 p-5">
                            {channels.map((channel) => (
                                <RevealItem
                                    as="div"
                                    key={channel.name}
                                    className="glass-soft flex items-center justify-between rounded-xl p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`size-9 rounded-lg border border-white/10 ${channel.tone}`} />
                                        <div>
                                            <p className="text-sm font-semibold text-white">
                                                {channel.name}
                                            </p>
                                            <p className="text-xs text-white/40">
                                                {channel.platform}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hero-glow)]/30 px-2.5 py-1 text-xs font-medium text-[var(--hero-glow)]">
                                        <span className="size-1.5 rounded-full bg-[var(--hero-glow)]" />
                                        LIVE
                                    </span>
                                </RevealItem>
                            ))}
                        </RevealGroup>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
