import { Award, Target, Zap, Users } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const reasons = [
    {
        icon: <Award size={26} color="#fff" />,
        iconBg: "linear-gradient(135deg, #4A90D9 0%, #357ABD 100%)",
        title: "Industry Expertise",
        description:
            "Over 15 years of deep financial sector experience across diverse industries and business models.",
    },
    {
        icon: <Target size={26} color="#fff" />,
        iconBg: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
        title: "Tailored Funding Solutions",
        description:
            "Customized financial strategies designed specifically for your business goals and requirements.",
    },
    {
        icon: <Zap size={26} color="#fff" />,
        iconBg: "linear-gradient(135deg, #F97316 0%, #EF4444 100%)",
        title: "Faster Approval Process",
        description:
            "Streamlined procedures and efficient processing to get you funded quickly when it matters most.",
    },
    {
        icon: <Users size={26} color="#fff" />,
        iconBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        title: "Dedicated Relationship Managers",
        description:
            "Personalized support from experienced advisors who understand your business inside out.",
    },
];
const stats = [
    { value: "₹1000+ Cr", label: "Capital Disbursed" },
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
];

export default function WhyChooseSection() {
    return (
        <>
            <section className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <AnimateOnScroll direction="right" delay={0.1}>
                        {/* Heading */}
                        <h2
                            className="font-playfair text-center mb-3"
                            style={{ fontSize: "60px", fontWeight: 500, lineHeight: "60px" }}
                        >
                            <span style={{ color: "#0B2E6F" }}>Why Choose </span>
                            <span style={{ color: "#D4A437" }}>Pingal Capital</span>
                        </h2>

                        {/* Subtext */}
                        <p
                            className="font-inter text-center text-gray-400 mb-14"
                            style={{ fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#4A5565" }}
                        >
                            We go beyond traditional lending to become your strategic growth partner
                        </p>
                    </AnimateOnScroll>
                    {/* 2x2 Grid */}
                    <AnimateOnScroll direction="up" delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-4 rounded-2xl p-8"
                                    style={{
                                        background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                                        boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                        cursor: "default",
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
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: reason.iconBg,
                                            transition: "transform 0.5s ease",
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = "rotate(360deg)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = "rotate(0deg)";
                                        }}
                                    >
                                        {reason.icon}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="font-playfair"
                                        style={{
                                            color: "#0B2E6F",
                                            fontSize: "30px",
                                            fontWeight: 500,
                                            lineHeight: "36px",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="font-inter text-gray-500"
                                        style={{ fontSize: "16px", fontWeight: 400, lineHeight: "26px", color: "#4A5565" }}
                                    >
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>

                </div>
            </section>
            <AnimateOnScroll direction="up" delay={0.1}>
                <section className="px-6 pt-10 pb-20">
                    <div
                        className="max-w-[1300px] mx-auto rounded-2xl px-12 py-8"
                        style={{ background: "#0B2E6F" }}
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex-1 text-center"
                                    style={{
                                        borderRight: index < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                                    }}
                                >
                                    <div
                                        className="font-playfair mb-1"
                                        style={{
                                            color: "#E6C76A",
                                            fontSize: "36px",
                                            fontWeight: 600,
                                            lineHeight: "44px",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className="font-inter text-white"
                                        style={{ fontWeight: 400, fontSize: "14px", lineHeight: "20px" }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
        </>
    );
}