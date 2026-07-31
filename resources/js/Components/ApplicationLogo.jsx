export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="20" cy="20" r="5.5" fill="currentColor" />
            <path
                d="M12.5 12.5a10.5 10.5 0 0 0 0 15"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M27.5 12.5a10.5 10.5 0 0 1 0 15"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M6.5 6.5a18 18 0 0 0 0 27"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.45"
            />
            <path
                d="M33.5 6.5a18 18 0 0 1 0 27"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.45"
            />
        </svg>
    );
}
