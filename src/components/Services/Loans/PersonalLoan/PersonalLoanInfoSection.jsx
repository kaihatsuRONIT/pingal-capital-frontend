import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const whoCanApply = [
    "Salaried professionals",
    "Self-employed individuals & business owners",
    "Individuals with stable income and credit history",
];

const loanDetails = [
    {
        label: "Loan Amount",
        value: "Based on income, credit score, and repayment capacity (varies by lender).",
    },
    {
        label: "Interest Rates",
        value: "Typically range from around 10.5% to 24% p.a. depending on lender, profile, and credit score.",
    },
];

export default function PersonalLoanInfoSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* What Is a Personal Loan — Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/personal-loan-left.avif"
                                    alt="Personal Loan"
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
                                    Personal Loan
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                What Is a Personal Loan?
                            </h2>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                A personal loan is a lump-sum credit that you repay in equated monthly instalments (EMIs) over an agreed tenure. The loan is typically unsecured, which means no asset is pledged as security. Approval is based on your income, credit score, employment status, and repayment capacity rather than collateral.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Loan Amount & Interest Rates — Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/personal-loan-right.avif"
                                    alt="Personal Loan Rates"
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
                                    Loan Details
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                Loan Amount & Interest Rates
                            </h2>
                            <div className="space-y-4">
                                {loanDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl p-5"
                                        style={{ background: "#F9FAFB", border: "1px solid #E2E8F0" }}
                                    >
                                        <p
                                            className="font-inter font-semibold mb-1"
                                            style={{ color: "#0B2E6F", fontSize: "13px" }}
                                        >
                                            {item.label}
                                        </p>
                                        <p
                                            className="font-inter text-gray-500"
                                            style={{ fontSize: "14px", lineHeight: "24px" }}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p
                                className="font-inter text-gray-400 mt-4"
                                style={{ fontSize: "12px", lineHeight: "20px" }}
                            >
                                * Actual rates offered depend on eligibility and lender policies.
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
                            Personal loans are available for:
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
                            Lenders assess eligibility based on income stability, credit score (typically 650+), employment type, and other financial factors.
                        </p>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}