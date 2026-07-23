import PartnersSection from "@/components/Home/PartnersSection";
import FAQ from "../../FAQ";
import LoanAgainstRentalDoc from "./LoanAgainstRentalDoc";
import LoanAgainstRentalsHero from "./LoanAgainstRentalHero";
import LoanAgainstRentalInfo from "./LoanAgainstRentalInfo";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function LoanAgainstRental(){
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("/api/content?page=home-loan")
      .then((r) => r.json())
      .then((json) => setFaqs(json.content));
  }, []);
    return (
        <>
        <LoanAgainstRentalsHero/>
        <LoanAgainstRentalInfo/>
        <LoanAgainstRentalDoc/>
        <FAQ faqs={faqs?.faq?.items} />
        <PartnersSection/>
        <Footer/>
        </>
    )
}