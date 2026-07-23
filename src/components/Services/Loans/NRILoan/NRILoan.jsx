import PartnersSection from "@/components/Home/PartnersSection";
import NRILoanDocumentationSection from "./NRILoanDocumentSection";
import NRILoanHero from "./NRILoanHero";
import NRILoanInfoSection from "./NRILoanInfoSection";
import Footer from "@/components/Footer";
import FAQ from "../../FAQ";
import { useEffect, useState } from "react";
export default function NRILoan() {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("/api/content?page=nri-loan")
            .then((r) => r.json())
            .then((json) => setFaqs(json.content));
    }, []);
    return (
        <>
            <NRILoanHero />
            <NRILoanInfoSection />
            <NRILoanDocumentationSection />
            <FAQ faqs={faqs?.faq?.items} />
            <PartnersSection />
            <Footer />
        </>
    )
}