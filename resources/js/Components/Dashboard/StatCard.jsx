export default function StatCard({ label, value, hint, icon, accent = 'rose' }) {
    const accents = {
        rose: 'bg-rose-600/10 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
        emerald: 'bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
        sky: 'bg-sky-600/10 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
        amber: 'bg-amber-600/10 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    };

    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {label}
                </span>
                <span className={`inline-flex size-9 items-center justify-center rounded-xl ${accents[accent]}`}>
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        {icon}
                    </svg>
                </span>
            </div>
            <p className="mt-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                {value}
            </p>
            {hint && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{hint}</p>
            )}
        </div>
    );
}
