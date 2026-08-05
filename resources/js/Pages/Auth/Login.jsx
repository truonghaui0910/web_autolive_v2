import AuthField from '@/Components/Landing/AuthField';
import LandingAuthLayout from '@/Layouts/LandingAuthLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <LandingAuthLayout
            pageTitle="Đăng nhập - AutoLive"
            title="Đăng nhập"
            subtitle="Chào mừng trở lại! Đăng nhập để tiếp tục quản lý livestream của bạn."
        >
            {status && (
                <div className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <AuthField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    value={data.email}
                    autoComplete="username"
                    isFocused={true}
                    placeholder="ban@email.com"
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />

                <AuthField
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    name="password"
                    value={data.password}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-white/60">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="size-4 rounded border-white/20 bg-white/5 text-[var(--hero-glow)] focus:ring-[var(--hero-glow)]/40 focus:ring-offset-0"
                        />
                        Ghi nhớ đăng nhập
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-[var(--hero-glow)] transition hover:text-white"
                        >
                            Quên mật khẩu?
                        </Link>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="block w-full rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 py-2.5 text-center text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60 disabled:opacity-50"
                >
                    Đăng nhập
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
                Chưa có tài khoản?{' '}
                <Link href={route('register')} className="font-semibold text-[var(--hero-glow)] hover:text-white">
                    Đăng ký dùng thử miễn phí
                </Link>
            </p>
        </LandingAuthLayout>
    );
}
