import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';
import { GlowBorder } from '@/Components/Landing/motion/GlowBorder';

const groups = {
    livestream: {
        label: 'Youtube/FB',
        type: 'tiered',
        plans: [
            { name: 'LIVE1', price: '200.000', originalPrice: null, streams: 1, accounts: 1 },
            { name: 'LIVE3', price: '550.000', originalPrice: '600.000', streams: 3, accounts: 2 },
            { name: 'LIVE5', price: '900.000', originalPrice: '1.000.000', streams: 5, accounts: 3 },
            { name: 'LIVE10', price: '1.800.000', originalPrice: '2.000.000', streams: 10, accounts: 4 },
            { name: 'LIVE20', price: '3.500.000', originalPrice: '4.000.000', streams: 20, accounts: 5 },
            { name: 'LIVE30', price: '5.200.000', originalPrice: '6.000.000', streams: 30, accounts: 6 },
            { name: 'LIVE50', price: '8.000.000', originalPrice: '10.000.000', streams: 50, accounts: 7 },
            { name: 'LIVE100', price: '15.000.000', originalPrice: '20.000.000', streams: 100, accounts: 7 },
            { name: 'LIVE150', price: '21.000.000', originalPrice: '30.000.000', streams: 150, accounts: 7 },
        ],
    },
    tiktok: {
        label: 'TikTok',
        type: 'simple',
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
        type: 'simple',
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

function CheckIcon() {
    return (
        <svg className="mt-0.5 size-4 shrink-0 text-[var(--hero-glow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    );
}

function Feature({ children }) {
    return (
        <RevealItem
            as="li"
            direction="left"
            duration={0.45}
            className="flex flex-wrap items-start gap-2 text-sm text-white/70"
        >
            <CheckIcon />
            <span>{children}</span>
        </RevealItem>
    );
}

function TieredPlanCard({ plan, canRegister }) {
    return (
        <RevealGroup as="div" stagger={0.06} className="flex flex-1 flex-col">
            <RevealItem as="h3" direction="left" duration={0.45} className="text-lg font-semibold text-white">
                {plan.name}
            </RevealItem>

            <RevealItem as="div" direction="left" duration={0.45} className="mt-4 h-5 text-sm text-red-400/80">
                {plan.originalPrice ? (
                    <span className="line-through">{plan.originalPrice}đ</span>
                ) : (
                    <span>-</span>
                )}
            </RevealItem>

            <RevealItem as="p" direction="left" duration={0.45} className="leading-none">
                <span className="text-[32px] font-medium text-white sm:text-[36px]">
                    {plan.price}đ
                </span>
                <span className="text-[var(--muted-foreground)]"> / tháng</span>
            </RevealItem>

            <ul className="mt-6 flex-1 space-y-3">
                <Feature>
                    Live cùng lúc <strong className="font-semibold text-white">{plan.streams} luồng</strong>
                </Feature>
                <Feature>
                    <strong className="font-semibold text-white">{plan.accounts} tài khoản quản lý</strong>
                </Feature>
                <Feature>
                    Live Youtube liên tục <strong className="font-semibold text-white">24/7</strong>
                </Feature>
                <Feature>
                    không cần <strong className="font-semibold text-white">Treo máy</strong>
                </Feature>
                <Feature>
                    không cần <strong className="font-semibold text-white">VPS</strong>
                </Feature>
                <Feature>
                    Chất lượng <strong className="font-semibold text-white">1080p</strong>{' '}
                    <span className="rounded-full bg-[var(--accent-purple)]/30 px-2 py-0.5 text-[11px] font-medium text-[var(--hero-glow)]">
                        Full HD
                    </span>
                </Feature>
                <Feature>
                    Hỗ trợ <strong className="font-semibold text-white">24/7</strong>
                </Feature>
            </ul>

            {canRegister && (
                <RevealItem as="div" direction="left" duration={0.45} className="mt-8">
                    <Link
                        href={route('register')}
                        className="block rounded-lg border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 py-2.5 text-center text-sm font-medium text-[#f4f0ff] transition hover:to-[var(--accent-purple)]/60"
                    >
                        Dùng thử ngay
                    </Link>
                </RevealItem>
            )}
        </RevealGroup>
    );
}

function SimplePlanCard({ plan, canRegister }) {
    return (
        <RevealGroup as="div" stagger={0.06} className="flex flex-1 flex-col">
            {plan.highlight && (
                <RevealItem
                    as="span"
                    direction="left"
                    duration={0.45}
                    className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/60 px-3 py-1 text-xs font-medium text-[#f4f0ff]"
                >
                    Phổ biến nhất
                </RevealItem>
            )}
            <RevealItem as="h3" direction="left" duration={0.45} className="text-lg font-semibold text-white">
                {plan.name}
            </RevealItem>
            <RevealItem as="p" direction="left" duration={0.45} className="mt-4 leading-none">
                <span className="text-[56px] font-medium text-white">{plan.price}đ</span>
                <span className="text-[var(--muted-foreground)]"> / tháng</span>
            </RevealItem>

            <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                    <Feature key={feature}>{feature}</Feature>
                ))}
            </ul>

            {canRegister && (
                <RevealItem as="div" direction="left" duration={0.45} className="mt-8">
                    <Link
                        href={route('register')}
                        className={`block rounded-lg border py-2.5 text-center text-sm font-medium transition ${
                            plan.highlight
                                ? 'border-white/20 bg-gradient-to-b from-[var(--accent-purple)]/0 to-[var(--accent-purple)]/40 text-[#f4f0ff] hover:to-[var(--accent-purple)]/60'
                                : 'border-white/15 text-white hover:border-white/25'
                        }`}
                    >
                        Dùng thử ngay
                    </Link>
                </RevealItem>
            )}
        </RevealGroup>
    );
}

export default function Pricing({ canRegister }) {
    const [active, setActive] = useState('livestream');
    const current = groups[active];

    return (
        <section id="bang-gia" className="container-lg pb-20 pt-24 sm:pt-32">
            <Reveal as="div" className="mx-auto max-w-2xl text-center">
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
            </Reveal>

            <Reveal as="div" delay={0.1} className="mx-auto mt-10 flex w-fit gap-1 rounded-full border border-white/10 p-1">
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
            </Reveal>

            <RevealGroup
                as="div"
                key={active}
                stagger={0.22}
                className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
                {current.plans.map((plan, index) => (
                    <RevealItem
                        as="div"
                        key={plan.name}
                        direction="left"
                        duration={0.8}
                        className="relative flex w-full max-w-xs"
                    >
                        <GlowBorder
                            className="flex flex-1 flex-col"
                            contentClassName="flex flex-1 flex-col p-8"
                            beam={active === 'livestream'}
                            beamDelay={(index * 10) / current.plans.length}
                        >
                            {current.type === 'tiered' ? (
                                <TieredPlanCard plan={plan} canRegister={canRegister} />
                            ) : (
                                <SimplePlanCard plan={plan} canRegister={canRegister} />
                            )}
                        </GlowBorder>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}
