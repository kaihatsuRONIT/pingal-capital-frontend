import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import BusinessLoanDocumentationSection from "./BusinessLoanDocSection";
import BusinessLoanHero from "./BusinessLoanHero";
import BusinessLoanInfoSection from "./BusinessLoanInfoSection";
import Footer from "@/components/Footer";
const faqs = [
    {
        question: "What can a business loan be used for?",
        answer: "A business loan can fund expansion, inventory purchases, working capital, marketing, equipment upgrades, payroll, and other operational needs.",
    },
    {
        question: "Do I need collateral for a business loan?",
        answer: "Some business loans require collateral, but many lenders offer unsecured options with no collateral, especially for small and medium enterprises.",
    },
    {
        question: "How do interest rates vary?",
        answer: "Interest rates depend on your business credit score, financials, lender policies, and whether the loan is secured or unsecured.",
    },
    {
        question: "Can a startup get a business loan?",
        answer: "Yes — many lenders finance startups, especially if you have a credible business plan and financial documentation demonstrating repayment capacity.",
    },
    {
        question: "How soon can I get funds?",
        answer: "With complete documentation and eligibility, many business loan applications are processed quickly — often within a few days to a couple of weeks, depending on lender workflows.",
    },
];
export default function BusinessLoan(){
    return (
        <>
        <BusinessLoanHero/>
        <BusinessLoanInfoSection/>
        <BusinessLoanDocumentationSection/>
        <FAQ faqs={faqs}/>
        <PartnersSection/>
        <Footer/>
        </>
    )
}