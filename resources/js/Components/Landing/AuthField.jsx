import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function AuthField(
    { label, error, type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <div className={className}>
            {label && (
                <label htmlFor={props.id} className="block text-sm font-medium text-white/80">
                    {label}
                </label>
            )}
            <input
                {...props}
                type={type}
                ref={localRef}
                className="mt-2 block w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[var(--hero-glow)]/60 focus:ring-2 focus:ring-[var(--hero-glow)]/30"
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
    );
});
