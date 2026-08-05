import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';

const features = [
    {
        title: 'Auto Restream 24/7',
        description: 'Tự động phát lại nguồn video liên tục, không cần giữ máy tính bật.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        ),
    },
    {
        title: 'Tự động ghim sản phẩm',
        description: 'Ghim và thả sản phẩm TikTok Shop tự động ngay trong lúc live.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3ZM6 6h.008v.008H6V6Z" />
        ),
    },
    {
        title: 'Hoá đơn điện tử VAT',
        description: 'Xuất hoá đơn điện tử hợp pháp qua Minvoice cho từng đơn hàng.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m3-8.25c0-1.036-1.007-1.875-2.25-1.875h-1.5c-1.243 0-2.25.84-2.25 1.875s1.007 1.875 2.25 1.875h1.5c1.243 0 2.25.84 2.25 1.875S13.243 15.75 12 15.75h-1.5c-1.243 0-2.25-.84-2.25-1.875" />
        ),
    },
    {
        title: 'Mã khuyến mãi',
        description: 'Áp dụng mã bonus, ưu đãi linh hoạt cho khách hàng mới và cũ.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
        ),
    },
    {
        title: 'Đại lý & tài khoản con',
        description: 'Phân quyền nhiều cấp cho đại lý, tạo và quản lý tài khoản con dễ dàng.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        ),
    },
    {
        title: 'Bảo mật & chống vi phạm',
        description: 'Giám sát thiết bị, IP và cảnh báo vi phạm tài khoản theo thời gian thực.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25S3 16.556 3 12c0-1.014.163-1.99.463-2.897A11.94 11.94 0 0 0 12 2.25a11.94 11.94 0 0 0 8.537 6.853c.3.907.463 1.883.463 2.897Z" />
        ),
    },
];

export default function Features() {
    return (
        <section id="tinh-nang" className="container-lg py-16 sm:py-20">
            <Reveal as="div" className="mx-auto max-w-2xl text-center">
                <p className="text-base font-medium text-[var(--hero-glow)]">
                    Tính năng
                </p>
                <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Đầy đủ công cụ cho một hệ thống livestream chuyên nghiệp
                </h2>
            </Reveal>

            <RevealGroup as="div" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <RevealItem
                        as="div"
                        key={feature.title}
                        className="glass rounded-2xl p-6"
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
