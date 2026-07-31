import StatCard from '@/Components/Dashboard/StatCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

const channels = [
    {
        name: 'Kênh Gaming Tối',
        platform: 'YouTube',
        status: 'live',
        viewers: '2.4K',
        duration: '3h 12m',
        dot: 'bg-red-500',
    },
    {
        name: 'Shop Thời Trang ABC',
        platform: 'TikTok',
        status: 'live',
        viewers: '1.1K',
        duration: '1h 40m',
        dot: 'bg-gray-900 dark:bg-white',
    },
    {
        name: 'Fanpage Ẩm Thực',
        platform: 'Facebook',
        status: 'scheduled',
        viewers: '—',
        duration: 'Bắt đầu 20:00',
        dot: 'bg-blue-600',
    },
    {
        name: 'Kênh Nhạc Acoustic',
        platform: 'Twitch',
        status: 'offline',
        viewers: '—',
        duration: 'Đã dừng 2 giờ trước',
        dot: 'bg-purple-600',
    },
];

const activity = [
    { time: '20:05', text: 'Kênh Gaming Tối bắt đầu livestream trên YouTube.' },
    { time: '18:42', text: 'Đã kết nối thêm tài khoản TikTok mới.' },
    { time: 'Hôm qua', text: 'Gia hạn thành công gói LIVE 3 thêm 30 ngày.' },
    { time: '2 ngày trước', text: 'Kênh Nhạc Acoustic kết thúc buổi live sau 4h 20m.' },
];

const statusStyles = {
    live: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
    scheduled: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
    offline: 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400',
};

const statusLabels = {
    live: 'Đang live',
    scheduled: 'Đã lên lịch',
    offline: 'Ngừng phát',
};

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            Xin chào, {auth.user.name} 👋
                        </h2>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Đây là tổng quan hoạt động livestream của bạn hôm nay.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 self-start rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-rose-600/30 transition hover:bg-rose-500"
                    >
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Bắt đầu livestream mới
                    </button>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            label="Đang livestream"
                            value="2 kênh"
                            hint="Trên tổng số 4 kênh đã kết nối"
                            accent="rose"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5 19.5 8.25v7.5l-3.75-2.25M4.5 6.75h9a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z" />}
                        />
                        <StatCard
                            label="Giờ live tháng này"
                            value="128h"
                            hint="+18% so với tháng trước"
                            accent="emerald"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />}
                        />
                        <StatCard
                            label="Người xem trung bình"
                            value="1.240"
                            hint="Trên mỗi buổi livestream"
                            accent="sky"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />}
                        />
                        <StatCard
                            label="Gói hiện tại"
                            value="LIVE 3"
                            hint="Còn 18 ngày sử dụng"
                            accent="amber"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />}
                        />
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2 dark:border-white/10 dark:bg-gray-800">
                            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-white/10">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Kênh livestream của tôi
                                </h3>
                                <a href="#" className="text-sm font-medium text-rose-600 hover:underline dark:text-rose-400">
                                    Quản lý tất cả
                                </a>
                            </div>
                            <ul className="divide-y divide-gray-100 dark:divide-white/10">
                                {channels.map((channel) => (
                                    <li key={channel.name} className="flex items-center justify-between px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className={`size-9 rounded-lg ${channel.dot}`} />
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                    {channel.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {channel.platform} · {channel.duration}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="hidden text-sm text-gray-500 sm:block dark:text-gray-400">
                                                {channel.viewers} xem
                                            </span>
                                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[channel.status]}`}>
                                                {statusLabels[channel.status]}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-800">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Hạn mức gói LIVE 3
                                </h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    Đang dùng 2/3 luồng livestream đồng thời
                                </p>
                                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
                                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-rose-600 to-orange-500" />
                                </div>
                                <a
                                    href="#"
                                    className="mt-4 inline-block text-sm font-semibold text-rose-600 hover:underline dark:text-rose-400"
                                >
                                    Nâng cấp gói dịch vụ →
                                </a>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-800">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Hoạt động gần đây
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {activity.map((item, index) => (
                                        <li key={index} className="flex gap-3 text-sm">
                                            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rose-600" />
                                            <div>
                                                <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                                                <p className="text-xs text-gray-400">{item.time}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
