import PartnersSection from "@/components/Home/PartnersSection";
import NonResidentialLoanDoc from "./NonResidentialLoanDoc";
import NonResidentialLoanHero from "./NonResidentialLoanHero";
import NonResidentialLoanInfo from "./NonResidentialLoanInfo";
import Footer from "@/components/Footer";
import FAQ from "../../FAQ";
import { useEffect, useState } from "react";

const faqs = [
    {
        question: "What types of non-residential properties are eligible for a loan?",
        answer: "We finance offices, retail shops, warehouses, industrial units, and mixed-use commercial properties. The property must be legally registered and free from disputes.",
    },
    {
        question: "What is the maximum loan amount I can avail?",
        answer: "Loan amounts typically range from ₹10 lakhs to ₹10 crores, depending on the property value, your repayment capacity, and lender terms.",
    },
    {
        question: "What is the usual tenure for a non-residential premises loan?",
        answer: "Tenures generally range from 5 to 15 years, giving you flexibility to manage EMIs as per your business cash flow.",
    },
    {
        question: "Can I get a loan for a property I plan to rent out commercially?",
        answer: "Yes, rental-income-generating commercial properties are eligible. Lenders often factor in projected rental income while assessing your repayment capacity.",
    },
    {
        question: "How long does the approval process take?",
        answer: "Our advisors typically complete the initial assessment within one business day. Full loan approval, subject to documentation and verification, usually takes 7–15 working days.",
    },
];
export default function NonResidentialLoan() {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("/api/content?page=non-residential-premises")
            .then((r) => r.json())
            .then((json) => setFaqs(json.content));
    }, []);
    return (
        <>
            <NonResidentialLoanHero />
            <NonResidentialLoanInfo />
            <NonResidentialLoanDoc />
            <FAQ faqs={faqs?.faq?.items} />
            <PartnersSection />
            <Footer />
        </>
    )
}