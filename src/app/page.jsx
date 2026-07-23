"use client"
import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CtaSection";
import EMICalculator from "@/components/Home/EmiCalculator";
import Footer from "@/components/Footer";
import FundingProcessSection from "@/components/Home/FundingProcessingSection";
import HeroSection from "@/components/Home/HeroSection";
import PartnersSection from "@/components/Home/PartnersSection";
import ServicesSection from "@/components/Home/ServicesSections";
import SuccessStoriesSection from "@/components/Home/SuccessStoriesSection";
import TrustedSection from "@/components/Home/TrustedSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SocialFeed from "@/components/SocialFeed";
export default function Page() {
  return (
    <>
    <HeroSection />
    <ServicesSection/>
    <EMICalculator/>
    <CTASection/>
    <FundingProcessSection/>
    <WhyChooseSection/>
    <SocialFeed/>
    <AboutSection/>
    <SuccessStoriesSection/>
    <AnimateOnScroll direction="up" delay={0.1}>
      <TrustedSection/>
    </AnimateOnScroll>
    <AnimateOnScroll direction="right" delay={0.1}>
      <PartnersSection/>
    </AnimateOnScroll>
    <Footer/>
    </>
  )
}