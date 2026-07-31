import ApplicationLogo from '@/Components/ApplicationLogo';

const columns = [
    {
        title: 'Sản phẩm',
        links: [
            { label: 'Tính năng', href: '#tinh-nang' },
            { label: 'Bảng giá', href: '#bang-gia' },
            { label: 'Câu hỏi thường gặp', href: '#faq' },
        ],
    },
    {
        title: 'Hỗ trợ',
        links: [
            { label: 'Nhóm cộng đồng Facebook', href: '#' },
            { label: 'Kênh hướng dẫn YouTube', href: '#' },
            { label: 'Chăm sóc khách hàng', href: '#' },
        ],
    },
    {
        title: 'Pháp lý',
        links: [
            { label: 'Chính sách bảo mật', href: '#' },
            { label: 'Điều khoản sử dụng', href: '#' },
            { label: 'Phương thức thanh toán', href: '#' },
        ],
    },
];

export default function LandingFooter() {
    return (
        <footer id="lien-he" className="border-t border-white/10">
            <div className="container-lg py-16">
                <div className="grid gap-10 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <ApplicationLogo className="h-7 w-7 text-[var(--hero-glow)]" />
                            <span className="text-lg font-semibold text-white">
                                Auto<span className="text-[var(--hero-glow)]">Live</span>
                            </span>
                        </div>
                        <p className="mt-4 max-w-xs text-sm text-[var(--muted-foreground)]">
                            Nền tảng livestream tự động đa nền tảng, đồng hành
                            cùng nhà sáng tạo nội dung Việt Nam.
                        </p>
                    </div>

                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold text-white">
                                {column.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-[var(--muted-foreground)] transition hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/30">
                    © {new Date().getFullYear()} AutoLive. Đã đăng ký bản quyền.
                </div>
            </div>
        </footer>
    );
}
