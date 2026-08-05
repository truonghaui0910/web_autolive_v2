import LandingFooter from '@/Components/Landing/LandingFooter';
import LandingNavbar from '@/Components/Landing/LandingNavbar';
import { Head } from '@inertiajs/react';

export default function LandingLayout({ title, auth, canLogin, canRegister, children }) {
    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="landing min-h-screen">
                <LandingNavbar auth={auth} canLogin={canLogin} canRegister={canRegister} />
                {children}
                <LandingFooter />
            </div>
        </>
    );
}
