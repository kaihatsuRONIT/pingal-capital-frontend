import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import WorkingCapitalDocumentationSection from "./WorkingCapitalDocSection";
import WorkingCapitalHero from "./WorkingCapitalHero";
import WorkingCapitalInfoSection from "./WorkingCapitalInfoSection";
import Footer from "@/components/Footer";

const faqs = [
    {
        question: "What is the minimum turnover required for a working capital loan?",
        answer: "Most lenders require a minimum annual turnover of ₹10-25 Lakhs, though this varies by lender and loan type. We work with lenders across all business sizes.",
    },
    {
        question: "How quickly can I get working capital funds?",
        answer: "Once documents are submitted and verified, most working capital facilities are approved and disbursed within 48-72 hours.",
    },
    {
        question: "Do I need collateral for a working capital loan?",
        answer: "Not always. Unsecured working capital loans (up to a certain limit) are available for businesses with good credit history and turnover. Secured options like CC/OD may require collateral for higher limits.",
    },
    {
        question: "What is the difference between Cash Credit and Overdraft?",
        answer: "Cash Credit (CC) is linked to your inventory/receivables and is ideal for businesses with regular stock cycles. Overdraft (OD) allows you to withdraw beyond your account balance and is more suitable for short-term cash flow gaps.",
    },
    {
        question: "Can a startup apply for working capital finance?",
        answer: "Most lenders prefer businesses with at least 1-2 years of operational history. However, certain NBFC and government-backed schemes (like CGTMSE) support newer businesses.",
    },
    {
        question: "What is the typical interest rate for working capital loans?",
        answer: "Interest rates typically range from 10% to 18% per annum depending on the lender, loan type, credit profile, and collateral offered.",
    },
    {
        question: "Is GST registration mandatory?",
        answer: "For most working capital products, yes. GST registration and returns are key documents lenders use to assess your business turnover and credibility.",
    },
    {
        question: "Can I use working capital for business expansion?",
        answer: "Working capital is primarily for operational needs. For expansion, a term loan or project funding may be more suitable. Our advisors can help you choose the right product.",
    },
];

export default function WorkingCapital() {
    return (
        <>
            <WorkingCapitalHero />
            <WorkingCapitalInfoSection />
            <WorkingCapitalDocumentationSection />
            <FAQ faqs={faqs} />
            <PartnersSection />
            <Footer />
        </>
    )
}