import Navbar from "@/components/Navbar";
import AnimateOnScroll from "../AnimateOnScroll";

export default function AboutHero() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <div className="bg-[#0B2E6F] z-10">
        <AnimateOnScroll direction="right" delay={0.05}>
          <Navbar />
        </AnimateOnScroll>
      </div>
      <div
        className="relative min-h-[320px] overflow-hidden bg-[#0B2E6F]"
        style={{ background: "linear-gradient(to bottom right, #0B2E6F 50%, #D4A437 100%)" }}
      >

        <AnimateOnScroll direction="right" delay={0.1}>
          {/* Content */}
          <div className="relative z-10 px-16 pt-20 pb-16 max-w-6xl mx-auto">

            {/* Badge */}
            <div className="inline-block mb-4">
              <span
                className="font-inter font-semibold px-4 py-1.5 rounded-full border border-white text-[#051E44] bg-white tracking-widest uppercase whitespace-nowrap"
                style={{ fontSize: "11px", letterSpacing: "0.1em" }}
              >
                Premium Financial Partner
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-inter text-white font-bold mb-4"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Company Profile
            </h1>

            {/* Subtext */}
            <p
              className="font-inter text-white/80"
              style={{ fontSize: "18px", fontWeight: 400, lineHeight: "28px", maxWidth: "672px" }}
            >
              Building trust through precision, innovation, and unwavering commitment to your financial growth.
            </p>

          </div>
        </AnimateOnScroll>

        {/* Bottom wave
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div> */}
      </div>
    </>
  );
}