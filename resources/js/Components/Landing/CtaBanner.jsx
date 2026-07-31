import { Link } from '@inertiajs/react';

export default function CtaBanner({ canRegister }) {
    return (
        <section className="container-lg pb-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] px-8 py-16 text-center sm:px-16">
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--hero-glow)]/15 blur-3xl" />

                <h2 className="text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Bạn còn chờ gì nữa?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)]">
                    Bắt đầu livestream tự động ngay hôm nay với 2 ngày dùng thử
                    miễn phí, không cần thẻ thanh toán.
                </p>
                {canRegister && (
                    <Link
                        href={route('register')}
                        className="mt-8 inline-block rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 px-8 py-3.5 text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60"
                    >
                        Đăng ký dùng thử miễn phí
                    </Link>
                )}
            </div>
        </section>
    );
}
