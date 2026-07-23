import Image from "next/image";
import { Shield, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect, useState } from "react";
const iconMap = {
    Shield: <Shield size={20} style={{ color: "#0B2E6F" }} />,
    Clock: <Clock size={20} style={{ color: "#0B2E6F" }} />,
};

export default function HomeLoanInfoSection() {
    const [content, setContent] = useState(null);
    useEffect(() => {
        fetch("/api/content?page=home-loan")
            .then((r) => r.json())
            .then((json) => setContent(json.content));
    }, []);

    if (!content) return null;
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <AnimateOnScroll direction="right" delay={0.1}>
                    {/* Left — Image with stat card */}
                    <div className="w-full lg:w-[460px] flex-shrink-0 relative">
                        <div
                            className="rounded-2xl overflow-hidden"
                            style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                        >
                            <Image
                                src={content.info.image}
                                alt="Home Loan"
                                width={460}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Stat Card */}
                        <div
                            className="absolute bottom-[-50] right-[-30] bg-white rounded-xl px-5 py-4"
                            style={{ boxShadow: "0px 8px 24px rgba(0,0,0,0.12)" }}
                        >
                            <div
                                className="font-playfair font-bold mb-1"
                                style={{ color: "#0B2E6F", fontSize: "28px", lineHeight: "36px" }}
                            >
                                {content.info.stat.value}
                            </div>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "12px", lineHeight: "18px", maxWidth: "140px" }}
                            >
                                {content.info.stat.label}
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="left" delay={0.1}>
                    {/* Right — Content */}
                    <div className="flex-1">

                        {/* Heading */}
                        <h2
                            className="font-playfair mb-5"
                            style={{ color: "#0B2E6F", fontSize: "38px", fontWeight: 700, lineHeight: "50px" }}
                        >
                            {content.info.heading}
                        </h2>

                        {/* Paragraph */}
                        <p
                            className="font-inter text-gray-500 mb-8"
                            style={{ fontSize: "15px", lineHeight: "26px" }}
                        >
                            {content.info.paragraph}
                        </p>

                        {/* Features */}
                        <div className="space-y-6">
                            {content.info.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: "#EEF2FF" }}
                                    >
                                        {iconMap[feature.icon]}
                                    </div>
                                    <div>
                                        <h4
                                            className="font-inter font-semibold mb-1"
                                            style={{ color: "#0B2E6F", fontSize: "15px", lineHeight: "22px" }}
                                        >
                                            {feature.title}
                                        </h4>
                                        <p
                                            className="font-inter text-gray-500"
                                            style={{ fontSize: "14px", lineHeight: "22px" }}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}