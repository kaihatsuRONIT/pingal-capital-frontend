import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoanAgainstRentalInfo() {
    const [content,setContent] = useState();
    useEffect(() => {
        fetch("/api/content?page=loan-against-rentals")
            .then((r) => r.json())
            .then((json) => setContent(json.content));
    }, []);
    if (!content) return <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">Loading...</div>;
    const {info} = content;
    return (
        <>
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* Image Left, Text Right */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimateOnScroll direction="right" delay={0.1}>
                            <div className="w-full lg:w-[460px] flex-shrink-0">
                                <div
                                    className="rounded-2xl overflow-hidden"
                                    style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                                >
                                    <img
                                        src={info.image}
                                        alt={info.badge}
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
                                        {info.badge}
                                    </span>
                                </div>
                                <h2
                                    className="font-playfair mb-5"
                                    style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                                >
                                    {info.heading}
                                </h2>
                                <p
                                    className="font-inter text-gray-500"
                                    style={{ fontSize: "15px", lineHeight: "28px" }}
                                >
                                    {info.paragraph}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll direction="up" delay={0.1}>
                        {/* Eligibility */}
                        <div
                            className="rounded-2xl p-8"
                            style={{ background: "#EEF2FF" }}
                        >
                            <h3
                                className="font-playfair font-bold mb-6"
                                style={{ color: "#0B2E6F", fontSize: "26px", lineHeight: "36px" }}
                            >
                                {info.eligibility.heading}
                            </h3>
                            <p
                                className="font-inter text-gray-600 mb-5"
                                style={{ fontSize: "14px", lineHeight: "24px" }}
                            >
                                {info.eligibility.subtext}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {info.eligibility.items.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle size={17} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                                        <span
                                            className="font-inter text-gray-700"
                                            style={{ fontSize: "14px", lineHeight: "22px" }}
                                        >
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>

                </div>
            </section>
        </>
    )
}