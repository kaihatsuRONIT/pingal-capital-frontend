import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import PersonalLoanDocumentationSection from "./PersonalLoanDocSection";
import PersonalLoanHero from "./PersonalLoanHero";
import Footer from "@/components/Footer";
import PersonalLoanInfoSection from "./PersonalLoanInfoSection";
const faqs = [
    {
        question: "What can a personal loan be used for?",
        answer: "Personal loans can be used for any general financial need — such as medical emergencies, travel, weddings, education, debt consolidation, or big purchases.",
    },
    {
        question: "Do I need collateral for a personal loan?",
        answer: "No — most personal loans are unsecured and do not require any collateral.",
    },
    {
        question: "How quickly can I get a personal loan?",
        answer: "With complete documents and good credentials, many lenders offer fast approval and disbursal, sometimes within a few days.",
    },
    {
        question: "How are personal loan interest rates determined?",
        answer: "Interest rates depend on your credit score, income level, employment type, and overall repayment capacity, and may vary across lenders.",
    },
    {
        question: "Can self-employed individuals get a personal loan?",
        answer: "Yes — self-employed applicants with stable business income and adequate documentation can qualify for personal loans.",
    },
];
export default function PersonalLoan() {
    return (
        <>
            <PersonalLoanHero />
            <PersonalLoanInfoSection/>
            <PersonalLoanDocumentationSection/>
            <FAQ faqs={faqs}/>
            <PartnersSection/>
            <Footer/>
        </>
    )
}