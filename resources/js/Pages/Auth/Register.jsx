import AuthField from '@/Components/Landing/AuthField';
import LandingAuthLayout from '@/Layouts/LandingAuthLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <LandingAuthLayout
            pageTitle="Đăng ký - AutoLive"
            title="Đăng ký dùng thử"
            subtitle="Tạo tài khoản để bắt đầu livestream tự động miễn phí trong 2 ngày."
        >
            <form onSubmit={submit} className="space-y-5">
                <AuthField
                    id="name"
                    label="Họ và tên"
                    name="name"
                    value={data.name}
                    autoComplete="name"
                    isFocused={true}
                    placeholder="Nguyễn Văn A"
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    required
                />

                <AuthField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    value={data.email}
                    autoComplete="username"
                    placeholder="ban@email.com"
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                />

                <AuthField
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    name="password"
                    value={data.password}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                    required
                />

                <AuthField
                    id="password_confirmation"
                    label="Xác nhận mật khẩu"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    error={errors.password_confirmation}
                    required
                />

                <button
                    type="submit"
                    disabled={processing}
                    className="block w-full rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 py-2.5 text-center text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60 disabled:opacity-50"
                >
                    Tạo tài khoản
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
                Đã có tài khoản?{' '}
                <Link href={route('login')} className="font-semibold text-[var(--hero-glow)] hover:text-white">
                    Đăng nhập
                </Link>
            </p>
        </LandingAuthLayout>
    );
}
