"use client"
import { Rocket, Eye } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const cards = [
    {
        icon: <Rocket size={36} style={{ color: "#0B2E6F" }} />,
        title: "Our Mission",
        description:
            "To Empower Customer With Smart, Flexible Financial And Insurance Solutions To Match Their Expectations & Need Under One Roof.",
    },
    {
        icon: <Eye size={22} style={{ color: "#0B2E6F" }} />,
        title: "Our Vision",
        description:
            "To Be A Leading Financial And Insurance Service Provider Known For Innovation, Customer Satisfaction & Empathy.",
    },
];

export default function MissionVisionSection() {
    return (
        <section className="py-16 px-6" style={{ background: "#0B2E6F" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-45">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 flex flex-col gap-5"
                        style={{
                            borderLeft: "10px solid #D4A437",
                            boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                            height: "100%",
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
                        <AnimateOnScroll direction="right" delay={0.1}>
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: "#EEF2FF",
                                    transition: "transform 0.5s ease",
                                }}
                            >
                                {card.icon}
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll direction="right" delay={0.1}>
                            <h3
                                className="font-inter"
                                style={{ color: "#0B1C30", fontSize: "44px", fontWeight: 600, lineHeight: "32px" }}
                            >
                                {card.title}
                            </h3>
                        </AnimateOnScroll>
                        <AnimateOnScroll direction="up" delay={0.1}>
                            <p
                                className="font-inter"
                                style={{ fontSize: "17px", fontWeight: 400, lineHeight: "26px", color: "#434656" }}
                            >
                                {card.description}
                            </p>
                        </AnimateOnScroll>
                    </div>
                ))}
            </div>
        </section>
    );
}