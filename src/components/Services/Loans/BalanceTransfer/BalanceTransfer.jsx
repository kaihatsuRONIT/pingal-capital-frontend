import PartnersSection from "@/components/Home/PartnersSection";
import BalanceTransferDocumentationSection from "./BalanceTransferDocSection";
import BalanceTransferHero from "./BalanceTransferHero";
import BalanceTransferInfoSection from "./BalanceTransferInfoSection";
import Footer from "@/components/Footer";
import FAQ from "../../FAQ";
import { useEffect, useState } from "react";

export default function BalanceTransfer() {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("/api/content?page=balance-transfer")
            .then((r) => r.json())
            .then((json) => setFaqs(json.content));
    }, []);
    return (
        <>
            <BalanceTransferHero />
            <BalanceTransferInfoSection />
            <BalanceTransferDocumentationSection />
            <FAQ faqs={faqs?.faq?.items} />
            <PartnersSection />
            <Footer />
        </>
    )
}