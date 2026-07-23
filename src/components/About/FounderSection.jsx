import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

export default function FounderSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* Left — Content */}
        <div className="flex-1 pt-0 lg:pt-15">

          {/* Badge */}
          <div className="inline-block mb-5">
            <span
              className="font-inter text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest"
              style={{ background: "#EEF2FF", color: "#0B2E6F", fontSize: "11px", letterSpacing: "0.1em" }}
            >
              Meet Our Leadership
            </span>
          </div>
          <AnimateOnScroll direction="right" delay={0.1}>
            {/* Heading */}
            <h2
              className="font-inter mb-6"
              style={{ color: "#0B1C30", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 600, lineHeight: "1.2", letterSpacing: "-0.4px" }}
            >
              A Message from Our Founder
            </h2>

          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={0.1}>
            {/* Quote Block */}
            <div
              className="mb-6 pl-5"
              style={{ borderLeft: "3px solid #0B2E6F" }}
            >
              <p
                className="font-inter italic text-gray-700 mb-4"
                style={{ fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#0B1C30" }}
              >
                "At Pingal Capital, we don't just manage wealth; we build legacies. Our commitment to transparency and innovation is the foundation of every relationship we build."
              </p>
              <div>
                <div
                  className="font-inter font-bold"
                  style={{ color: "#0B1C30", fontSize: "24px", lineHeight: "32px", fontWeight: 600 }}
                >
                  Ajay Sahore
                </div>
                <div
                  className="font-inter font-medium"
                  style={{ color: "#0B2E6F", fontSize: "16px", lineHeight: "24px", fontWeight: 500 }}
                >
                  Founder
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="font-inter text-gray-500"
              style={{ fontWeight: 500, fontSize: "16px", lineHeight: "26px" }}
            >
              With over 20 years of experience in finance and wealth management, Ajay has dedicated his career to helping high-net-worth individuals and corporations navigate complex financial landscapes. His vision for Pingal Capital is rooted in the belief that personalized, transparent guidance is the key to long-term financial success and peace of mind.
            </p>
          </AnimateOnScroll>

        </div>

        {/* Right — Image */}
        <div className="w-full lg:w-[420px] flex-shrink-0">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
          >
            <Image
              src="/founder.jpg"
              alt="Ajay Sahore - Founder & CEO"
              width={420}
              height={480}
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}