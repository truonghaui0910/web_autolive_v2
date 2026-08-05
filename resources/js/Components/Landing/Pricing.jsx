import PricingTable from '@/Components/Landing/PricingTable';

export default function Pricing({ canRegister }) {
    return <PricingTable canRegister={canRegister} limit={3} viewAllHref={route('pricing')} />;
}
