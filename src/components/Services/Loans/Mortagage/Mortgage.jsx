import EMICalculator from "@/components/Home/EmiCalculator";
import DocumentationSection from "./DocumentationSection";
import HomeownershipSection from "./HomeOwnershipSection";
import MortgageHero from "./MortgageHero";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import { useEffect, useState } from "react";
export default function Mortgage() {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("/api/content?page=loan-against-property")
      .then((r) => r.json())
      .then((json) => setFaqs(json.content));
  }, []);
  return (
    <>
      <MortgageHero />
      <HomeownershipSection />
      <DocumentationSection />
      <EMICalculator />
      <FAQ faqs={faqs?.faq?.items} />
      <PartnersSection />
      <Footer />
    </>
  )
}