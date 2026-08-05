import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function LandingAuthLayout({ pageTitle, title, subtitle, children }) {
    return (
        <div className="landing relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
            <Head title={pageTitle}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div
                className="pointer-events-none absolute inset-0 -z-20 opacity-[0.25]"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, #000 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, #000 40%, transparent 80%)',
                }}
            />
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--accent-purple)]/30 blur-[120px]" />

            <div className="relative w-full max-w-md">
                <Link href="/" className="flex items-center justify-center gap-3">
                    <ApplicationLogo className="h-12 w-12 object-contain" />
                    <span className="text-lg font-semibold tracking-tight text-white">
                        Auto<span className="text-[var(--hero-glow)]">Live</span>
                    </span>
                </Link>

                <div className="glass mt-8 rounded-3xl p-8 sm:p-10">
                    <div className="text-center">
                        <h1 className="text-2xl font-medium tracking-tight text-white sm:text-[28px]">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="mt-2 text-sm text-[var(--muted-foreground)]">{subtitle}</p>
                        )}
                    </div>

                    <div className="mt-8">{children}</div>
                </div>

                <p className="mt-6 text-center text-sm text-[var(--muted-foreground)]">
                    <Link href="/" className="transition hover:text-white">
                        ← Quay lại trang chủ
                    </Link>
                </p>
            </div>
        </div>
    );
}
