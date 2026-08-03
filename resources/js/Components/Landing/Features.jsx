import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';

const features = [
    {
        title: 'Thao tác đơn giản',
        description:
            'Chỉ cần vài cú click chuột để tạo và khởi chạy một buổi livestream. Không yêu cầu kiến thức kỹ thuật hay cấu hình phức tạp.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75 19.5 19.5m-1.5-11.25a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z" />
        ),
    },
    {
        title: 'Ổn định vượt trội',
        description:
            'Hạ tầng máy chủ được tối ưu riêng cho livestream, hỗ trợ chất lượng tới 4K, hạn chế tối đa giật, lag hay gián đoạn.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 9 21l3.75-6.75L15 12l6.75-9M3 21h18" />
        ),
    },
    {
        title: 'Đa nền tảng cùng lúc',
        description:
            'Phát song song trên YouTube, Facebook, TikTok, Twitch và Shopee Live từ một nguồn duy nhất, tiếp cận tối đa khán giả.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.25 4.03 5.25 9s-2.495 9-5.25 9-5.25-4.03-5.25-9S9.245 3 12 3Zm-9 9h18" />
        ),
    },
    {
        title: 'Hỗ trợ 24/7',
        description:
            'Đội ngũ kỹ thuật túc trực liên tục, sẵn sàng đồng hành và xử lý sự cố nhanh chóng bất kể ngày đêm.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        ),
    },
];

export default function Features() {
    return (
        <section id="tinh-nang" className="container-lg py-16 sm:py-20">
            <Reveal as="div" className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium text-[var(--hero-glow)]">
                    Tính năng nổi bật
                </p>
                <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Mọi thứ bạn cần cho một buổi live chuyên nghiệp
                </h2>
            </Reveal>

            <RevealGroup as="div" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                    <RevealItem
                        as="div"
                        key={feature.title}
                        className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 backdrop-blur-xl"
                    >
                        <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-[var(--hero-glow)]">
                            <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                {feature.icon}
                            </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-white">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                            {feature.description}
                        </p>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}
