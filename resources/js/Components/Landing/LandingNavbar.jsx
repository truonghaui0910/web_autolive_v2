import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const links = [
    { href: '#tinh-nang', label: 'Tính năng' },
    { href: '#bang-gia', label: 'Bảng giá' },
    { href: '#faq', label: 'FAQ' },
    { href: '#lien-he', label: 'Liên hệ' },
];

export default function LandingNavbar({ auth, canLogin, canRegister }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="glass-bar fixed inset-x-0 top-0 z-50 h-[88px]">
            <nav className="container-lg flex h-full items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <ApplicationLogo className="h-14 w-14 object-contain" />
                    <span className="text-lg font-semibold tracking-tight text-white">
                        Auto<span className="text-[var(--hero-glow)]">Live</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-white/70 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-3 sm:flex">
                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white transition hover:border-white/25"
                            >
                                Vào Dashboard
                            </Link>
                        ) : (
                            <>
                                {canLogin && (
                                    <Link
                                        href={route('login')}
                                        className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white transition hover:border-white/25"
                                    >
                                        Đăng nhập
                                    </Link>
                                )}
                                {canRegister && (
                                    <Link
                                        href={route('register')}
                                        className="rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 px-4 py-1.5 text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60"
                                    >
                                        Dùng thử miễn phí
                                    </Link>
                                )}
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="inline-flex size-9 items-center justify-center rounded-full text-white/70 hover:bg-white/5 md:hidden"
                        aria-label="Mở menu"
                    >
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18 18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'} />
                        </svg>
                    </button>
                </div>
            </nav>

            {open && (
                <div className="border-t border-white/10 bg-[var(--background)] px-5 py-4 md:hidden">
                    <div className="flex flex-col gap-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-sm text-white"
                            >
                                Vào Dashboard
                            </Link>
                        ) : (
                            <>
                                {canLogin && (
                                    <Link
                                        href={route('login')}
                                        className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-sm text-white"
                                    >
                                        Đăng nhập
                                    </Link>
                                )}
                                {canRegister && (
                                    <Link
                                        href={route('register')}
                                        className="flex-1 rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 px-4 py-2 text-center text-sm font-medium text-[#f4f0ff]"
                                    >
                                        Dùng thử
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
