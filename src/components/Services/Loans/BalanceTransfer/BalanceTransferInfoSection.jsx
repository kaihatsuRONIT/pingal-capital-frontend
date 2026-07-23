import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect, useState } from "react";

// const benefits = [
//   {
//     emoji: "💸",
//     title: "Lower Interest Rates & EMI Burden",
//     description: "Switching to a lender with a better interest rate can significantly reduce your total interest costs and monthly EMIs.",
//   },
//   {
//     emoji: "🧾",
//     title: "Flexible Repayment Terms",
//     description: "You can often extend or shorten your loan tenure to fit your current cash flow goals.",
//   },
//   {
//     emoji: "📈",
//     title: "Access Extra Funds with Top-Up",
//     description: "Top-up loans allow you to borrow additional money during the transfer — without taking a separate loan.",
//   },
//   {
//     emoji: "🔄",
//     title: "Better Loan Terms & Perks",
//     description: "Newer lenders may offer improved repayment features, lower processing fees, or online account access.",
//   },
// ];

const whoCanBenefit = [
    "Your current interest rate is higher than available market rates",
    "You want lower EMIs or reduced financial burden",
    "You need additional funds for personal or business needs",
    "You want better repayment flexibility",
];

export default function BalanceTransferInfoSection() {
    const [content, setContent] = useState()
    useEffect(() => {
        fetch("/api/content?page=balance-transfer")
            .then((r) => r.json())
            .then((json) => setContent(json.content));
    }, []);
    if (!content) return <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">Loading...</div>;
    const { info } = content;
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Balance Transfer */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 25px 50px -12px #00000040" }}>
                                <Image src={info.balanceTransfer.image} alt="Balance Transfer" width={460} height={380} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: "#EEF2FF" }}>
                                <span className="font-inter font-semibold" style={{ color: "#0B2E6F", fontSize: "12px" }}>{info.balanceTransfer.badge}</span>
                            </div>
                            <h2 className="font-playfair mb-5" style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}>{info.balanceTransfer.heading}</h2>
                            <p className="font-inter text-gray-500" style={{ fontSize: "15px", lineHeight: "28px" }}>{info.balanceTransfer.paragraph}</p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Top-Up */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <AnimateOnScroll direction="left" delay={0.1}>
                        <div className="w-full lg:w-[460px] flex-shrink-0">
                            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 25px 50px -12px #00000040" }}>
                                <Image src={info.topUp.image} alt="Top-Up Loan" width={460} height={380} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: "#FEF9EC" }}>
                                <span className="font-inter font-semibold" style={{ color: "#D4A437", fontSize: "12px" }}>{info.topUp.badge}</span>
                            </div>
                            <h2 className="font-playfair mb-5" style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}>{info.topUp.heading}</h2>
                            <p className="font-inter text-gray-500" style={{ fontSize: "15px", lineHeight: "28px" }}>{info.topUp.paragraph}</p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Who Can Benefit */}
                <AnimateOnScroll direction="up" delay={0.1}>
                    <div className="rounded-2xl p-8" style={{ background: "#EEF2FF" }}>
                        <h3 className="font-playfair font-bold mb-6" style={{ color: "#0B2E6F", fontSize: "26px", lineHeight: "36px" }}>{info.whoCanBenefit.heading}</h3>
                        <p className="font-inter text-gray-600 mb-5" style={{ fontSize: "14px", lineHeight: "24px" }}>{info.whoCanBenefit.subtext}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {info.whoCanBenefit.items?.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle size={17} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                                    <span className="font-inter text-gray-700" style={{ fontSize: "14px", lineHeight: "22px" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}