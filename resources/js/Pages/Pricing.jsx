import PricingTable from '@/Components/Landing/PricingTable';
import LandingLayout from '@/Layouts/LandingLayout';

export default function Pricing({ auth, canLogin, canRegister }) {
    return (
        <LandingLayout
            title="Bảng giá - AutoLive"
            auth={auth}
            canLogin={canLogin}
            canRegister={canRegister}
        >
            <PricingTable canRegister={canRegister} sectionClassName="pb-20 pt-[168px] sm:pt-[200px]" />
        </LandingLayout>
    );
}
