import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import OverdraftFacilityHero from "./OverdraftFacilityHero";
import Footer from "@/components/Footer";
import OverdraftFacilityInfoSection from "./OverdraftFacilityInfoSection";
import OverdraftFacilityDocumentationSection from "./OverdraftFacilityDocSection";
const faqs = [
    {
        question: "What's the difference between an overdraft and a traditional loan?",
        answer: "An overdraft lets you borrow up to a limit when needed and pay interest only on what you use, while traditional loans provide a fixed lump-sum amount with scheduled EMIs.",
    },
    {
        question: "Do I pay interest on the entire overdraft limit?",
        answer: "No — interest is charged only on the amount you actually utilise.",
    },
    {
        question: "Can an overdraft facility be secured against property?",
        answer: "Yes — overdrafts can be secured with assets like property or fixed deposits for higher limits and better rates.",
    },
    {
        question: "Is there a specific tenure for overdraft?",
        answer: "Overdrafts are generally short-term and revolving. The limit is renewed or reviewed periodically by the lender.",
    },
    {
        question: "Does an overdraft affect my credit score?",
        answer: "Responsible use and timely repayment can help build credit; delays in payment may negatively affect credit history.",
    },
];
export default function OverdraftFacility() {

    return (
        <>
            <OverdraftFacilityHero />
            <OverdraftFacilityInfoSection/>
            <OverdraftFacilityDocumentationSection/>
            <FAQ faqs={faqs}/>
            <PartnersSection/>
            <Footer/>
        </>
    )
}