import { Link } from '@inertiajs/react';
import { useState } from 'react';

const groups = {
    livestream: {
        label: 'Livestream thường',
        plans: [
            {
                name: 'LIVE 1',
                price: '200.000',
                highlight: false,
                features: [
                    '1 luồng phát trực tiếp',
                    'YouTube, Twitch phát 24/7',
                    'Facebook phát tối đa 8 giờ/lượt',
                    'Chất lượng tối đa 1080p',
                ],
            },
            {
                name: 'LIVE 3',
                price: '550.000',
                highlight: true,
                features: [
                    '3 luồng phát đồng thời',
                    'Quản lý tối đa 2 tài khoản',
                    'Hỗ trợ đa nền tảng',
                    'Chất lượng tối đa 1080p',
                ],
            },
            {
                name: 'LIVE 5',
                price: '900.000',
                highlight: false,
                features: [
                    '5 luồng phát đồng thời',
                    'Quản lý tối đa 3 tài khoản',
                    'Toàn bộ nền tảng hỗ trợ',
                    'Chất lượng tối đa 1080p',
                ],
            },
        ],
    },
    tiktok: {
        label: 'TikTok',
        plans: [
            {
                name: 'TIKTOK 1',
                price: '500.000',
                highlight: false,
                features: ['1 luồng phát trực tiếp', 'Tối đa 10 tài khoản TikTok', 'Chất lượng tối đa 1080p'],
            },
            {
                name: 'TIKTOK 3',
                price: '1.400.000',
                highlight: true,
                features: ['3 luồng phát đồng thời', 'Tối đa 30 tài khoản TikTok', 'Chất lượng tối đa 1080p'],
            },
            {
                name: 'TIKTOK 5',
                price: '2.300.000',
                highlight: false,
                features: ['5 luồng phát đồng thời', 'Tối đa 50 tài khoản TikTok', 'Chất lượng tối đa 1080p'],
            },
        ],
    },
    shopee: {
        label: 'Shopee Live',
        plans: [
            {
                name: 'SHOPEE 1',
                price: '300.000',
                highlight: false,
                features: ['1 luồng phát trực tiếp', 'Quản lý gian hàng Shopee', 'Chất lượng tối đa 1080p'],
            },
            {
                name: 'SHOPEE 3',
                price: '750.000',
                highlight: true,
                features: ['3 luồng phát đồng thời', 'Quản lý nhiều gian hàng', 'Chất lượng tối đa 1080p'],
            },
            {
                name: 'SHOPEE 5',
                price: '1.300.000',
                highlight: false,
                features: ['5 luồng phát đồng thời', 'Quản lý nhiều gian hàng', 'Chất lượng tối đa 1080p'],
            },
        ],
    },
};

export default function Pricing({ canRegister }) {
    const [active, setActive] = useState('livestream');
    const current = groups[active];

    return (
        <section id="bang-gia" className="container-lg pb-20 pt-24 sm:pt-32">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium text-[var(--hero-glow)]">
                    Bảng giá
                </p>
                <h2 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Gói dịch vụ linh hoạt cho mọi nhu cầu
                </h2>
                <p className="mt-4 text-base text-[var(--muted-foreground)]">
                    Dùng thử miễn phí 2 ngày cho tất cả các gói. Hỗ trợ 24/7,
                    không phát sinh phí ẩn.
                </p>
            </div>

            <div className="mx-auto mt-10 flex w-fit gap-1 rounded-full border border-white/10 p-1">
                {Object.entries(groups).map(([key, group]) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => setActive(key)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                            active === key
                                ? 'border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 text-white'
                                : 'text-white/50 hover:text-white'
                        }`}
                    >
                        {group.label}
                    </button>
                ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {current.plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col rounded-2xl border p-8 ${
                            plan.highlight
                                ? 'border-[var(--hero-glow)]/40 bg-[var(--card)]'
                                : 'border-white/10 bg-[var(--card)]'
                        }`}
                    >
                        {plan.highlight && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/60 px-3 py-1 text-xs font-medium text-[#f4f0ff]">
                                Phổ biến nhất
                            </span>
                        )}
                        <h3 className="text-lg font-semibold text-white">
                            {plan.name}
                        </h3>
                        <p className="mt-4 leading-none">
                            <span className="text-[56px] font-medium text-white">
                                {plan.price}đ
                            </span>
                            <span className="text-[var(--muted-foreground)]">
                                {' '}
                                / tháng
                            </span>
                        </p>

                        <ul className="mt-6 flex-1 space-y-3">
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-2 text-sm text-white/70"
                                >
                                    <svg className="mt-0.5 size-4 shrink-0 text-[var(--hero-glow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {canRegister && (
                            <Link
                                href={route('register')}
                                className={`mt-8 block rounded-lg border py-2.5 text-center text-sm font-medium transition ${
                                    plan.highlight
                                        ? 'border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 text-[#f4f0ff] hover:to-[var(--accent-purple)]/60'
                                        : 'border-white/15 text-white hover:border-white/25'
                                }`}
                            >
                                Dùng thử ngay
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
