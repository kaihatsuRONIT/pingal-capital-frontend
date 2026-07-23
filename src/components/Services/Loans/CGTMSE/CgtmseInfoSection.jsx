import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const whoCanAvail = [
    "New and existing micro & small enterprises",
    "Businesses engaged in manufacturing, trading, or services",
    "Startups and growing units needing collateral-free financing",
];

const steps = [
    {
        number: "01",
        text: "Prepare your business documents (registration, financials, projections).",
    },
    {
        number: "02",
        text: "Approach an eligible lender (bank or NBFC registered under CGTMSE).",
    },
    {
        number: "03",
        text: "The lender assesses your viability and submits the guarantee application to CGTMSE.",
    },
    {
        number: "04",
        text: "On approval, the lender sanctions your loan with guarantee cover.",
    },
];

export default function CGTMSEInfoSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* What Is CGTMSE — Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/cgtmse-left1.avif"
                                    alt="CGTMSE Scheme"
                                    width={460}
                                    height={380}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="flex-1">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                                style={{ background: "#EEF2FF" }}
                            >
                                <span className="font-inter font-semibold" style={{ color: "#0B2E6F", fontSize: "12px" }}>
                                    CGTMSE
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                What Is CGTMSE?
                            </h2>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                CGTMSE is a trust formed by the Government of India, SIDBI (Small Industries Development Bank of India), and the Ministry of Micro, Small & Medium Enterprises to support small businesses by providing credit guarantees to lenders. Through this scheme, banks and NBFCs can confidently extend loans — both term and working capital — to eligible enterprises without requiring collateral security.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* How to Apply — Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/cgtmse-right1.avif"
                                    alt="How to Apply for CGTMSE"
                                    width={460}
                                    height={380}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="flex-1">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                                style={{ background: "#FEF9EC" }}
                            >
                                <span className="font-inter font-semibold" style={{ color: "#D4A437", fontSize: "12px" }}>
                                    How to Apply
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-6"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                How to Apply for a CGTMSE Loan
                            </h2>
                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div
                                            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                                            style={{ background: "#EEF2FF" }}
                                        >
                                            <span
                                                className="font-inter font-bold"
                                                style={{ color: "#0B2E6F", fontSize: "12px" }}
                                            >
                                                {step.number}
                                            </span>
                                        </div>
                                        <p
                                            className="font-inter text-gray-500 pt-1.5"
                                            style={{ fontSize: "14px", lineHeight: "24px" }}
                                        >
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                <AnimateOnScroll direction="up" delay={0.1}>
                    {/* Who Can Avail */}
                    <div
                        className="rounded-2xl p-8"
                        style={{ background: "#EEF2FF" }}
                    >
                        <h3
                            className="font-playfair font-bold mb-6"
                            style={{ color: "#0B2E6F", fontSize: "26px", lineHeight: "36px" }}
                        >
                            Who Can Avail CGTMSE Loans?
                        </h3>
                        <p
                            className="font-inter text-gray-600 mb-5"
                            style={{ fontSize: "14px", lineHeight: "24px" }}
                        >
                            The scheme is designed for:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {whoCanAvail.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle size={17} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                                    <span
                                        className="font-inter text-gray-700"
                                        style={{ fontSize: "14px", lineHeight: "22px" }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p
                            className="font-inter text-gray-500 mt-6"
                            style={{ fontSize: "13px", lineHeight: "22px" }}
                        >
                            Note: Certain categories like educational institutions, SHGs, and agriculture may be excluded or need specific clarification.
                        </p>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}