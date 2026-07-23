import AboutDestinationSection from "@/components/About/AboutDestinationSection";
import AboutHero from "@/components/About/AboutHero";
import CoreValuesSection from "@/components/About/CorevaluesSection";
import FounderSection from "@/components/About/FounderSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import TestimonialsSection from "@/components/About/TestimonialsSection";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/Home/PartnersSection";
export default function Page(){
    return  (
        <>
        <AboutHero/>
        <AboutDestinationSection/>
        <FounderSection/>
        <MissionVisionSection/>
        <CoreValuesSection/>
        <TestimonialsSection/>
        <PartnersSection/>
        <Footer/>
        </>
    )
}