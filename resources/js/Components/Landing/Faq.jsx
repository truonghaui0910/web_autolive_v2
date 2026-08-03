import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';

const faqs = [
    {
        question: 'AutoLive là gì?',
        answer: 'AutoLive là nền tảng livestream tự động, giúp bạn phát trực tiếp video lên nhiều nền tảng mạng xã hội cùng lúc mà không cần bật máy tính liên tục hay thuê VPS riêng.',
    },
    {
        question: 'Tại sao nên chọn AutoLive thay vì tự cấu hình VPS?',
        answer: 'AutoLive giúp bạn tiết kiệm thời gian và chi phí vận hành. Hệ thống máy chủ đã được tối ưu sẵn cho livestream, bạn chỉ cần đăng nhập và bấm phát mà không cần kiến thức kỹ thuật.',
    },
    {
        question: 'Tôi có thể phát tối đa bao nhiêu luồng cùng lúc?',
        answer: 'Tùy vào gói dịch vụ đã đăng ký, bạn có thể phát từ 1 đến 5 luồng livestream đồng thời trên nhiều nền tảng khác nhau.',
    },
    {
        question: 'AutoLive có giới hạn thời lượng phát không?',
        answer: 'Hầu hết các gói hỗ trợ phát 24/7 trên YouTube và Twitch. Riêng Facebook có giới hạn thời lượng theo chính sách của từng nền tảng, chi tiết được nêu rõ trong từng gói dịch vụ.',
    },
    {
        question: 'Tôi có thể thanh toán bằng những hình thức nào?',
        answer: 'AutoLive hỗ trợ thanh toán qua chuyển khoản ngân hàng, ví điện tử và các cổng thanh toán trực tuyến phổ biến tại Việt Nam.',
    },
    {
        question: 'Nếu gặp sự cố khi đang livestream thì liên hệ ai?',
        answer: 'Đội ngũ hỗ trợ kỹ thuật của AutoLive trực 24/7 qua nhóm cộng đồng, hotline và email, luôn sẵn sàng xử lý sự cố nhanh nhất có thể.',
    },
];

export default function Faq() {
    return (
        <section id="faq" className="container-sm py-16 sm:py-20">
            <Reveal as="div" className="text-center">
                <p className="text-sm font-medium text-[var(--hero-glow)]">
                    Câu hỏi thường gặp
                </p>
                <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Giải đáp thắc mắc của bạn
                </h2>
            </Reveal>

            <RevealGroup as="div" className="mt-12 space-y-3">
                {faqs.map((faq) => (
                    <RevealItem
                        as="details"
                        key={faq.question}
                        className="glass group rounded-2xl p-5"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-white">
                            {faq.question}
                            <svg className="size-5 shrink-0 text-white/40 transition group-open:rotate-45" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                            {faq.answer}
                        </p>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}
