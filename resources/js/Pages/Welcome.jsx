import CtaBanner from '@/Components/Landing/CtaBanner';
import Faq from '@/Components/Landing/Faq';
import Features from '@/Components/Landing/Features';
import Hero from '@/Components/Landing/Hero';
import HowItWorks from '@/Components/Landing/HowItWorks';
import PlatformOrbit from '@/Components/Landing/PlatformOrbit';
import Pricing from '@/Components/Landing/Pricing';
import ProductPreview from '@/Components/Landing/ProductPreview';
import StatsBanner from '@/Components/Landing/StatsBanner';
import Testimonials from '@/Components/Landing/Testimonials';
import LandingLayout from '@/Layouts/LandingLayout';

export default function Welcome({ auth, canLogin, canRegister }) {
    return (
        <LandingLayout
            title="AutoLive - Livestream tự động đa nền tảng 24/7"
            auth={auth}
            canLogin={canLogin}
            canRegister={canRegister}
        >
            <Hero canRegister={canRegister} />
            <PlatformOrbit />
            <Features />
            <HowItWorks />
            <ProductPreview />
            <StatsBanner />
            <Testimonials />
            <Pricing canRegister={canRegister} />
            <Faq />
            <CtaBanner canRegister={canRegister} />
        </LandingLayout>
    );
}
