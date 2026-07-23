import { Sparkles, ArrowRight } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const stats = [
    { value: "24/7", label: "Support Available" },
    { value: "Fast", label: "Approval Process" },
    { value: "100%", label: "Transparency" },
];

export default function CTASection() {
    return (
        <section
            className="relative overflow-hidden py-20 px-6"
            style={{ background: "linear-gradient(135deg, #0B2E6F 0%, #0D3B8F 50%, #1A4A9F 100%)" }}
        >
            {/* Subtle radial glow left */}
            <div
                className="absolute top-0 left-0 w-[40%] h-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at left center, rgba(255,255,255,0.06) 0%, transparent 70%)",
                }}
            />
            {/* Blur near "Ready" - top left */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: "256.63px",
                    height: "256.63px",
                    top: "78.95px",
                    left: "79.69px",
                    background: "#E6C76A",
                    filter: "blur(152.98px)",
                    borderRadius: "16818472px",
                    opacity: 0.55,
                }}
            />

            {/* Blur right side above stats */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: "382.44px",
                    height: "382.44px",
                    top: "400px",
                    left: "990px",
                    background: "#E6C76A",
                    filter: "blur(152.98px)",
                    borderRadius: "20050934px",
                    opacity: 0.55,
                }}
            />

            <div className="relative z-10 max-w-[978px] text-center mx-auto">

                {/* Sparkle Icon */}
                <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                    style={{ background: "#E6C76A" }}
                >
                    <Sparkles size={24} color="#0B2E6F" />
                </div>

                <AnimateOnScroll direction="right" delay={0.1}>
                    {/* Heading */}
                    <h2
                        className="font-playfair text-white mb-5"
                        style={{ fontSize: "60px", fontWeight: 500, lineHeight: "75px" }}
                    >
                        Ready to Accelerate Your{" "}
                        <span style={{ color: "#E6C76A" }}>Business Growth?</span>
                    </h2>

                    {/* Subtext */}
                    <p
                        className="font-inter text-white/90 mb-10 mx-auto"
                        style={{ fontSize: "24px", fontWeight: 400, lineHeight: "39px", maxWidth: "768px" }}
                    >
                        Partner with Pingal Capital and unlock the right funding opportunities for your business. Let's turn your growth vision into reality.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.1}>
                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <button
                        className="font-inter flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-opacity hover:opacity-90"
                        style={{
                            background: "linear-gradient(135deg, #D4A437 0%, #E6C76A 100%)",
                            color: "#0B2E6F",
                            fontSize: "15px",
                            fontWeight: 600,
                        }}
                    >
                        Get Started
                        <ArrowRight size={16} />
                    </button>
                    <button
                        className="font-inter px-6 py-3 rounded-full font-semibold border-2 text-white transition-colors hover:bg-white hover:text-[#0B2E6F]"
                        style={{
                            borderColor: "rgba(255,255,255,0.6)",
                            fontSize: "15px",
                            fontWeight: 600,
                        }}
                    >
                        Schedule Consultation
                    </button>
                </div>
                </AnimateOnScroll>

                {/* Divider */}
                <hr style={{ borderColor: "rgba(255,255,255,0.15)", marginBottom: "40px" }} />

                <AnimateOnScroll direction="up" delay={0.1}>
                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className="font-playfair"
                                style={{ color: "#E6C76A", fontSize: "36px", fontWeight: 600, lineHeight: "44px" }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="font-inter text-blue-200 mt-1"
                                style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "13px", lineHeight: "20px" }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
                </AnimateOnScroll>

            </div>

            {/* Bottom wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-[80px]"
                >
                    <path
                        d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z"
                        fill="white"
                    />
                </svg>
            </div>

        </section>
    );
}