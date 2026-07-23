import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const whoCanBenefit = [
    "Individuals with multiple high-interest loans or credit card balances",
    "Borrowers struggling to manage several monthly EMIs",
    "People seeking lower monthly payments and less financial stress",
    "Those planning structured repayment and better credit health",
];

export default function DebtConsolidationInfoSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* What Is Debt Consolidation — Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <Image
                                    src="/debt-consolidation-info.avif"
                                    alt="Debt Consolidation"
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
                                style={{ background: "#EEF2FF" }}
                            >
                                <span className="font-inter font-semibold" style={{ color: "#0B2E6F", fontSize: "12px" }}>
                                    Debt Consolidation
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                What Is Debt Consolidation?
                            </h2>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                Debt consolidation is the process of taking one new loan to pay off multiple existing debts — such as credit card balances, personal loans, consumer loans, and other high-interest liabilities — so you're left with only one monthly payment to manage.
                            </p>
                            <p
                                className="font-inter text-gray-500 mt-4"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                Instead of juggling several EMIs with different interest rates and due dates, you repay a single consolidated loan — usually at a lower interest rate and with a clear repayment schedule.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                <AnimateOnScroll direction="up" delay={0.1}>
                    {/* Who Can Benefit */}
                    <div
                        className="rounded-2xl p-8"
                        style={{ background: "#EEF2FF" }}
                    >
                        <h3
                            className="font-playfair font-bold mb-6"
                            style={{ color: "#0B2E6F", fontSize: "26px", lineHeight: "36px" }}
                        >
                            Who Can Benefit from Debt Consolidation?
                        </h3>
                        <p
                            className="font-inter text-gray-600 mb-5"
                            style={{ fontSize: "14px", lineHeight: "24px" }}
                        >
                            Debt consolidation is ideal for:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {whoCanBenefit.map((item, index) => (
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
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}