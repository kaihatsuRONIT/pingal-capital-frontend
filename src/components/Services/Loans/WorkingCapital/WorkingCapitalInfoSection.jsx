import Image from "next/image";
import { CheckCircle, TrendingUp, Clock, Shield, RefreshCw } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const features = [
    {
        icon: <Clock size={20} style={{ color: "#0B2E6F" }} />,
        title: "Quick Disbursal",
        description: "Get funds credited to your account within 48-72 hours of approval.",
    },
    {
        icon: <RefreshCw size={20} style={{ color: "#0B2E6F" }} />,
        title: "Revolving Credit",
        description: "Flexible credit lines that replenish as you repay — use funds as needed.",
    },
    {
        icon: <Shield size={20} style={{ color: "#0B2E6F" }} />,
        title: "Minimal Collateral",
        description: "Most working capital solutions require little to no collateral.",
    },
    {
        icon: <TrendingUp size={20} style={{ color: "#0B2E6F" }} />,
        title: "Scalable Limits",
        description: "Credit limits grow with your business performance and repayment history.",
    },
];

const useCases = [
    "Managing payroll and operational expenses",
    "Purchasing raw materials or inventory",
    "Bridging gaps between receivables and payables",
    "Funding seasonal business demands",
    "Covering unexpected business expenses",
    "Expanding operations or taking new orders",
];

const loanTypes = [
    {
        title: "Cash Credit (CC)",
        description: "A revolving credit facility against inventory or receivables. Ideal for businesses with regular stock cycles.",
    },
    {
        title: "Overdraft (OD)",
        description: "Withdraw beyond your account balance up to a sanctioned limit. Great for managing short-term cash flow gaps.",
    },
    {
        title: "Bill/Invoice Discounting",
        description: "Get immediate funds against your outstanding invoices. No need to wait for client payments.",
    },
    {
        title: "Bank Guarantee (BG)",
        description: "A lender's promise to cover your liability if you fail to fulfill a contractual obligation.",
    },
];

export default function WorkingCapitalInfoSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* What Is Working Capital — Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/working-capital-info.avif"
                                    alt="Working Capital"
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
                                className="inline-flex items-center px-4 py-1.5 rounded-full mb-5"
                                style={{ background: "#EEF2FF" }}
                            >
                                <span className="font-inter font-semibold" style={{ color: "#0B2E6F", fontSize: "12px" }}>
                                    Working Capital Finance
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                What Is Working Capital Finance?
                            </h2>
                            <p
                                className="font-inter text-gray-500 mb-6"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                Working capital finance refers to short-term funding solutions that help businesses cover their day-to-day operational expenses. Unlike long-term loans, working capital loans are designed to bridge the gap between your current assets and current liabilities — keeping your business running smoothly even during lean periods.
                            </p>

                            {/* Use Cases */}
                            <div
                                className="rounded-xl p-5"
                                style={{ background: "#EEF2FF" }}
                            >
                                <h4
                                    className="font-inter font-semibold mb-3"
                                    style={{ color: "#0B2E6F", fontSize: "14px" }}
                                >
                                    Common Use Cases:
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {useCases.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle size={14} style={{ color: "#D4A437", flexShrink: 0, marginTop: "3px" }} />
                                            <span className="font-inter text-gray-600" style={{ fontSize: "13px", lineHeight: "20px" }}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Types of Working Capital */}
                <div>
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div>
                            <h2
                                className="font-playfair mb-3"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                Types of Working Capital Solutions
                            </h2>
                            <p
                                className="font-inter text-gray-400 mb-8"
                                style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "560px" }}
                            >
                                We offer a range of working capital products tailored to different business needs and cycles.
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="up" delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {loanTypes.map((type, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-7"
                                style={{
                                    background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                                    boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                                    borderLeft: "4px solid #D4A437",
                                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0px 12px 24px -4px #0000002A, 0px 20px 30px -3px #0000001A";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A";
                                }}
                            >
                                <h4
                                    className="font-playfair font-bold mb-3"
                                    style={{ color: "#0B2E6F", fontSize: "18px", lineHeight: "26px" }}
                                >
                                    {type.title}
                                </h4>
                                <p
                                    className="font-inter text-gray-500"
                                    style={{ fontSize: "13px", lineHeight: "22px" }}
                                >
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    </AnimateOnScroll>
                </div>

            </div>
        </section>
    );
}