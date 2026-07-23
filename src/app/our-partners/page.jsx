"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/Home/PartnersSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
// FINANCIAL PARTNERS (Top Builders)
// Removed from old list: Tata Housing, Adani Groups, Bestech Group, Mahindra Lifespaces, Migsun Group
const financialPartners = [
    { name: "County Group", url: '/partners/financial/County-Group.jpeg' },
    { name: "Godrej Properties", url: '/partners/financial/Godrej-Properties-Logo.webp' }, // existing
    { name: "ACE Group", url: '/partners/financial/ACE-Group.jpeg' },
    { name: "M3M", url: '/partners/financial/M3M.jpeg' },
    { name: "DLF Groups", url: '/partners/financial/DLF.webp' }, // existing
    { name: "Experion", url: '/partners/financial/Experion.jpeg' },
    { name: "Gaur Group", url: '/partners/financial/Gaur-Group.webp' }, // existing
    { name: "Prestige Group", url: '/partners/financial/Prestige.webp' }, // existing
    { name: "Shobha Limited", url: '/partners/financial/Shobha-Limited.jpeg' }, // existing
    { name: "Eldeco", url: '/partners/financial/Eldeco.jpeg' },
    { name: "Central Park", url: '/partners/financial/Central-Park.jpeg' },
    { name: "Shapoorji Pallonji", url: '/partners/financial/Shapoorji-Pallonji.webp' }, // existing
    { name: "MAX Estates", url: '/partners/financial/MAX-Estates.jpeg' },
    { name: "Oberoi Realty", url: '/partners/financial/Oberoi-Realty.jpeg' },
];

// BANKING PARTNERS (Top Banks & NBFCs)
const bankingPartners = [
    { name: "Indian Bank", url: '/partners/banking/Indian-Bank.jpeg' },
    { name: "Indian Overseas Bank", url: '/partners/banking/Indian-Overseas-Bank.jpeg' },
    { name: "Punjab National Bank", url: '/partners/banking/Punjab-National-Bank.jpeg' },
    { name: "SBI Bank", url: '/partners/banking/SBI-Bank.jpeg' },
    { name: "HDFC Bank", url: '/partners/banking/HDFC-Bank.jpeg' },
    { name: "ICICI Bank", url: '/partners/banking/ICICI-Bank.jpeg' },
    { name: "Axis Bank", url: '/partners/banking/Axis-Bank.jpeg' },
    { name: "IDBI Bank", url: '/partners/banking/IDBI-Bank.jpeg' },
    { name: "TATA Capital", url: '/partners/banking/TATA-Capital.jpeg' },
    { name: "Aditya Birla Capital", url: '/partners/banking/Aditya-Birla.jpeg' },
    { name: "Cholamandalam", url: '/partners/banking/CholaMandalam.jpeg' },
    { name: "Piramal Finance", url: '/partners/banking/Piramal-Finance.jpeg' },
    { name: "Godrej Capital", url: '/partners/banking/Godrej-Capital.jpeg' },
    { name: "PNB Housing Finance", url: '/partners/banking/PNB-Housing-Finance.jpeg' },
    { name: "L&T Finance", url: '/partners/banking/LT-Finance.jpeg' },
];

export default function OurFinancialPartners() {
    const [tab, setTab] = useState("financial");
    const partners = tab === "financial" ? financialPartners : bankingPartners;
    return (
        <>
            {/* ── NAVBAR ── */}
            <div className="bg-[#0B2E6F] z-10">
                <AnimateOnScroll direction="right" delay={0.05}>
                    <Navbar />
                </AnimateOnScroll>
            </div>
            <section className="bg-[#0B2E6F] pt-20 pb-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, #0B2E6F 50%, #D4A437 100%)" }}>
                <AnimateOnScroll direction="right" delay={0.1}>
                    <div className="max-w-6xl mx-auto">
                        <span
                            className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase mb-4 block"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Trusted Institutions
                        </span>
                        <h1
                            className="text-white mb-6"
                            style={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(36px, 5vw, 64px)",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                maxWidth: "640px",
                            }}
                        >
                            Meet Our <span className="text-[#D4A437]">Partners</span>
                        </h1>
                        <p
                            className="text-white/70 max-w-xl text-base leading-relaxed"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Refer clients, we handle the rest. Earn commission on every successful disbursal — on time, every time.
                        </p>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Bottom wave
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                  viewBox="0 0 1440 80"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="w-full h-[80px]"
                >
                  <path d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="white" />
                </svg>
              </div> */}
            <AnimateOnScroll direction="right" delay={0.1}>
                {/* Tabs */}
                <div className="flex rounded-xl overflow-hidden mt-10 mb-5 mx-auto justify-center">
                    {[
                        { key: "financial", label: "Approved Project Finance" },
                        { key: "banking", label: "Banking Partners" },
                    ].map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setTab(t.key)}
                            className="px-5 py-2.5 text-sm font-semibold transition-all duration-200 rounded-xl ml-2"
                            style={{
                                fontFamily: "Manrope, sans-serif",
                                background: tab === t.key ? "#0B2E6F" : "#fff",
                                color: tab === t.key ? "#fff" : "#0B2E6F",
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative flex flex-col items-center justify-between bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#D4A437] hover:shadow-lg transition-all duration-300"
                        >
                            <div className="h-40 flex items-center justify-center w-full">
                                <img src={`${partner?.url}`} className="h-40 w-auto object-contain" style={{ maxHeight: '160px' }} />
                            </div>
                            <div className="w-8 h-px bg-[#D4A437] my-3" />
                            <p
                                className="text-[#0B2E6F] text-center text-sm font-semibold leading-tight mb-2"
                                style={{ fontFamily: "Manrope, sans-serif" }}
                            >
                                {partner.name}
                            </p>
                        </div>
                    ))}
                </div>
                <section className="bg-white py-20 px-6">
                    <div className="max-w-6xl mx-auto">

                    </div>
                </section>
            </AnimateOnScroll>

            <Footer />
        </>
    );
}