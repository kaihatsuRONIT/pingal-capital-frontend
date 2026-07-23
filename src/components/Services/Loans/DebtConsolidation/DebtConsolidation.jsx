import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import DebtConsolidationDocumentationSection from "./DebtConsolidationDocSection";
import DebtConsolidationHero from "./DebtConsolidationHero";
import DebtConsolidationInfoSection from "./DebtConsolidationInfoSection";
import Footer from "@/components/Footer";

const faqs = [
    {
        question: "What debts can be consolidated?",
        answer: "Most unsecured debts like credit card balances, personal loans, and consumer loans can be consolidated into one loan.",
    },
    {
        question: "Will consolidation reduce my monthly payments?",
        answer: "Yes — by combining your debts and potentially securing a lower interest rate or longer tenure, you may reduce your total monthly outflows.",
    },
    {
        question: "Is consolidation the same as debt settlement?",
        answer: "No. Debt consolidation rolls multiple debts into one new loan, while debt settlement involves negotiating with creditors, often reducing the total owed, which may have a different impact on your credit profile than consolidation.",
    },
    {
        question: "How long does the consolidation process take?",
        answer: "Depending on documentation and lender processing, it can take anywhere from a few days to a couple of weeks.",
    },
    {
        question: "Will debt consolidation improve my credit score?",
        answer: "In many cases, consolidating and paying regularly can improve your credit score over time by simplifying repayment and reducing missed payments.",
    },
];
export default function DebtConsolidation(){
    return (
        <>
        <DebtConsolidationHero/>
        <DebtConsolidationInfoSection/>
        <DebtConsolidationDocumentationSection/>
        <FAQ faqs={faqs}/>
        <PartnersSection/>
        <Footer/>
        </>
    )
}