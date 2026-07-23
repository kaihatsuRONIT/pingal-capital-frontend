import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import CGTMSEDocumentationSection from "./CgtmseDocSection";
import CGTMSEHero from "./CgtmseHero";
import CGTMSEInfoSection from "./CgtmseInfoSection";
import Footer from "@/components/Footer";
const faqs = [
    {
        question: "What is the primary benefit of the CGTMSE scheme?",
        answer: "It allows micro and small enterprises to secure collateral-free business loans by providing credit guarantee cover to lenders.",
    },
    {
        question: "How much loan amount can I get under CGTMSE?",
        answer: "Eligible businesses can access credit facilities up to ₹5 crore or more in some implementations, depending on lender and scheme extensions.",
    },
    {
        question: "Is collateral really not required?",
        answer: "Yes — with CGTMSE guarantee cover, most approved loans do not require collateral or third-party guarantees, reducing barriers for MSMEs.",
    },
    {
        question: "Who is eligible for higher guarantee cover?",
        answer: "Women-owned enterprises and businesses in North-East India may receive enhanced guarantee cover (up to 80% or more).",
    },
    {
        question: "What types of loans are covered?",
        answer: "CGTMSE supports both working capital and term loans, along with certain non-fund based facilities like bank guarantees.",
    },
];
export default function CGTMSE(){
    return (
        <>
        <CGTMSEHero/>
        <CGTMSEInfoSection/>
        <CGTMSEDocumentationSection/>
        <FAQ faqs={faqs}/>
        <PartnersSection/>
        <Footer/>
        </>
    )
}