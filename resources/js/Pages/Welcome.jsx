import CtaBanner from '@/Components/Landing/CtaBanner';
import Faq from '@/Components/Landing/Faq';
import Features from '@/Components/Landing/Features';
import Hero from '@/Components/Landing/Hero';
import LandingFooter from '@/Components/Landing/LandingFooter';
import LandingNavbar from '@/Components/Landing/LandingNavbar';
import Pricing from '@/Components/Landing/Pricing';
import ProductPreview from '@/Components/Landing/ProductPreview';
import StatsBanner from '@/Components/Landing/StatsBanner';
import Testimonials from '@/Components/Landing/Testimonials';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth, canLogin, canRegister }) {
    return (
        <>
            <Head title="AutoLive - Livestream tự động đa nền tảng 24/7">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="landing min-h-screen">
                <LandingNavbar auth={auth} canLogin={canLogin} canRegister={canRegister} />
                <Hero canRegister={canRegister} />
                <Features />
                <ProductPreview />
                <StatsBanner />
                <Testimonials />
                <Pricing canRegister={canRegister} />
                <Faq />
                <CtaBanner canRegister={canRegister} />
                <LandingFooter />
            </div>
        </>
    );
}
