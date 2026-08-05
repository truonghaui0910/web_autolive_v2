import DraggableMarquee from '@/Components/Landing/motion/DraggableMarquee';
import { Reveal } from '@/Components/Landing/motion/Reveal';

const rowOne = [
    {
        name: 'Nguyễn Quang Minh',
        role: 'Chủ kênh Gaming',
        quote: 'Dùng AutoLive gần 1 năm nay, hệ thống rất ổn định, hầu như không bị rớt live.',
    },
    {
        name: 'Phạm Thúy Anh',
        role: 'Kinh doanh online',
        quote: 'Giao diện dễ dùng, livestream bán hàng trên nhiều nền tảng cùng lúc tiết kiệm rất nhiều thời gian.',
    },
    {
        name: 'Bùi Thanh Tiến',
        role: 'Streamer tự do',
        quote: 'Chất lượng hình ảnh mượt, hỗ trợ 4K rõ nét. Giá cả hợp lý hơn hẳn tự thuê VPS.',
    },
];

const rowTwo = [
    {
        name: 'Lê Hoàng Nam',
        role: 'Quản lý fanpage',
        quote: 'Đội support phản hồi nhanh, xử lý sự cố gần như ngay lập tức mỗi khi cần.',
    },
    {
        name: 'Trần Bảo Ngọc',
        role: 'Host bán hàng Shopee Live',
        quote: 'Lên lịch phát tự động giúp mình duy trì live đều đặn mà không cần trực máy tính.',
    },
    {
        name: 'Đỗ Minh Khôi',
        role: 'Content creator',
        quote: 'Chuyển từ tự dựng VPS sang AutoLive là quyết định tiết kiệm thời gian nhất năm nay.',
    },
];

function TestimonialCard({ testimonial }) {
    return (
        <figure className="glass w-[360px] shrink-0 rounded-2xl p-6">
            <blockquote className="text-sm leading-relaxed text-white/80">
                “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full border border-white/10 text-sm font-medium text-[var(--hero-glow)]">
                    {testimonial.name.charAt(0)}
                </span>
                <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                </div>
            </figcaption>
        </figure>
    );
}

export default function Testimonials() {
    return (
        <section className="overflow-hidden py-16 sm:py-20">
            <Reveal as="div" className="container-sm text-center">
                <p className="text-base font-medium text-[var(--hero-glow)]">
                    Khách hàng nói gì
                </p>
                <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Được tin dùng bởi hàng nghìn nhà sáng tạo nội dung
                </h2>
            </Reveal>

            <div className="mt-14 space-y-4">
                <DraggableMarquee
                    items={rowOne}
                    renderItem={(testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    )}
                />

                <DraggableMarquee
                    reverse
                    items={rowTwo}
                    renderItem={(testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    )}
                />
            </div>
        </section>
    );
}
