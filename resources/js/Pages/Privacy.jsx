import PrivacyPolicy from '@/Components/Landing/PrivacyPolicy';
import LandingLayout from '@/Layouts/LandingLayout';

export default function Privacy({ auth, canLogin, canRegister }) {
    return (
        <LandingLayout
            title="Chính sách bảo mật - AutoLive"
            auth={auth}
            canLogin={canLogin}
            canRegister={canRegister}
        >
            <div className="pt-[168px] sm:pt-[200px]">
                <PrivacyPolicy />
            </div>
        </LandingLayout>
    );
}
