const stats = [
    { value: '40+', label: 'Máy chủ trên toàn quốc' },
    { value: '15.000+', label: 'Khách hàng tin dùng' },
    { value: '50.000+', label: 'Giờ livestream mỗi ngày' },
    { value: '99.9%', label: 'Thời gian hoạt động' },
];

export default function StatsBanner() {
    return (
        <section className="border-y border-white/10">
            <div className="container-lg grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="bg-gradient-to-b from-[#f4f0ff] to-[var(--hero-glow)] bg-clip-text text-3xl font-medium text-transparent sm:text-4xl">
                            {stat.value}
                        </p>
                        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
