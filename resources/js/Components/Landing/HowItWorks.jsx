import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';

const steps = [
    {
        number: '01',
        title: 'Kết nối tài khoản',
        description: 'Nhập RTMP key hoặc đăng nhập tài khoản nền tảng bạn muốn live.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
        ),
    },
    {
        number: '02',
        title: 'Chọn nguồn video',
        description: 'Tải lên hoặc liên kết video/stream nguồn từ Google Drive hay link có sẵn.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5 19.5 7.5v9l-3.75-3M4.5 6.75h9a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z" />
        ),
    },
    {
        number: '03',
        title: 'Bấm bắt đầu',
        description: 'Hệ thống tự động khởi chạy luồng livestream trên máy chủ của chúng tôi.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 9 21l3.75-6.75L15 12l6.75-9M3 21h18" />
        ),
    },
    {
        number: '04',
        title: 'Live 24/7 không gián đoạn',
        description: 'Theo dõi trạng thái, doanh thu và hoá đơn ngay trên dashboard.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5m-10.5 4.5h10.5m-10.5 4.5h10.5M4.5 3.75h15c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-15A1.125 1.125 0 0 1 3.375 7.125v-2.25c0-.621.504-1.125 1.125-1.125Zm0 9h15c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-15A1.125 1.125 0 0 1 3.375 16.125v-2.25c0-.621.504-1.125 1.125-1.125Z" />
        ),
    },
];

export default function HowItWorks() {
    return (
        <section id="quy-trinh" className="container-lg py-16 sm:py-20">
            <Reveal as="div" className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium text-[var(--hero-glow)]">Quy trình</p>
                <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Chỉ 4 bước để lên sóng tự động
                </h2>
            </Reveal>

            <RevealGroup as="div" className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                    <RevealItem as="div" key={step.number}>
                        <p className="bg-gradient-to-b from-[#f4f0ff] to-[var(--hero-glow)] bg-clip-text text-3xl font-medium text-transparent">
                            {step.number}
                        </p>
                        <div className="mt-3 inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-[var(--hero-glow)]">
                            <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                {step.icon}
                            </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                            {step.description}
                        </p>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}
