import ApplicationLogo from '@/Components/ApplicationLogo';
import ThemeToggle from '@/Components/ThemeToggle';
import { Link } from '@inertiajs/react';

const highlights = [
    'Livestream đồng thời trên YouTube, Facebook, TikTok, Twitch',
    'Hạ tầng máy chủ ổn định, hỗ trợ chất lượng tới 4K',
    'Đội ngũ kỹ thuật hỗ trợ 24/7',
];

export default function AuthSplitLayout({ title, subtitle, children }) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-gray-950">
            <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-gray-900 to-rose-950 p-12 text-white lg:flex">
                <div className="pointer-events-none absolute inset-x-0 -top-20 flex justify-center blur-3xl">
                    <div className="aspect-square w-[32rem] rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 opacity-30" />
                </div>

                <Link href="/" className="relative flex items-center gap-2">
                    <ApplicationLogo className="h-9 w-9 text-rose-500" />
                    <span className="text-xl font-extrabold tracking-tight">
                        Auto<span className="text-rose-500">Live</span>
                    </span>
                </Link>

                <div className="relative">
                    <p className="text-3xl font-extrabold leading-tight">
                        Vận hành livestream tự động, không giới hạn nền tảng.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-rose-50/90">
                                <svg className="mt-0.5 size-5 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="relative text-xs text-rose-100/60">
                    © {new Date().getFullYear()} AutoLive. Đã đăng ký bản quyền.
                </p>
            </div>

            <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 lg:px-20">
                <div className="mx-auto w-full max-w-sm">
                    <div className="flex items-center justify-between lg:hidden">
                        <Link href="/" className="flex items-center gap-2">
                            <ApplicationLogo className="h-8 w-8 text-rose-600" />
                            <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                                Auto<span className="text-rose-600">Live</span>
                            </span>
                        </Link>
                        <ThemeToggle />
                    </div>

                    <div className="hidden justify-end lg:flex">
                        <ThemeToggle />
                    </div>

                    <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            {subtitle}
                        </p>
                    )}

                    <div className="mt-8">{children}</div>
                </div>
            </div>
        </div>
    );
}
