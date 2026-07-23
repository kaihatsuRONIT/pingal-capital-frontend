import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const whoCanApply = [
    "Startups & early-stage ventures",
    "Small and medium enterprises (MSMEs)",
    "Established companies planning expansion",
    "Traders, manufacturers & service providers",
    "Self-employed professionals with business income",
];

export default function BusinessLoanInfoSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* What Is a Business Loan — Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/business-loan-left.avif"
                                    alt="Business Loan"
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
                                    Business Loan
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                What Is a Business Loan?
                            </h2>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                A business loan is a type of credit offered by financial institutions to entrepreneurs and companies to support business activities — from day-to-day expenses to long-term strategic growth. You can choose between secured loans (backed by collateral) or unsecured loans (no collateral required), depending on your business needs and credit profile.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Why Business Loans Matter — Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/business-loan-right.avif"
                                    alt="Why Business Loans Matter"
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
                                    Why It Matters
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                Why Business Loans Matter
                            </h2>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                Business financing allows you to access the funds your business needs when it matters most — without giving up equity or control. It can help you stay agile, competitive, and ready to seize new opportunities in a dynamic market.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                <AnimateOnScroll direction="up" delay={0.1}>
                    {/* Who Can Apply */}
                    <div
                        className="rounded-2xl p-8"
                        style={{ background: "#EEF2FF" }}
                    >
                        <h3
                            className="font-playfair font-bold mb-6"
                            style={{ color: "#0B2E6F", fontSize: "26px", lineHeight: "36px" }}
                        >
                            Who Can Apply?
                        </h3>
                        <p
                            className="font-inter text-gray-600 mb-5"
                            style={{ fontSize: "14px", lineHeight: "24px" }}
                        >
                            Business loans are ideal for:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {whoCanApply.map((item, index) => (
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
                            Each lender may have specific eligibility criteria based on turnover, business vintage, credit history and financials.
                        </p>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}