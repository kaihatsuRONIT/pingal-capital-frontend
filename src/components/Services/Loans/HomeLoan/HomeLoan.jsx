import EMICalculator from "@/components/Home/EmiCalculator";
import DocumentationSection from "../Mortagage/DocumentationSection";
import HomeLoanDocumentationSection from "./HomeLoanDocumentSection";
import HomeLoanHero from "./HomeLoanHero";
import HomeLoanInfoSection from "./HomeLoanInfoSection";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import { useEffect, useState } from "react";

export default function HomeLoan() {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("/api/content?page=home-loan")
            .then((r) => r.json())
            .then((json) => setFaqs(json.content));
    }, []);
    return (
        <>
            <HomeLoanHero />
            <HomeLoanInfoSection />
            <DocumentationSection />
            <EMICalculator />
            <FAQ faqs={faqs?.faq?.items} />
            <PartnersSection />
            <Footer />
        </>
    )
}