import { MessageSquare, FileText, CheckCircle, CreditCard } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const steps = [
  {
    icon: <MessageSquare size={28} color="#fff" />,
    title: "Consultation",
    description:
      "Initial discussion to understand your business needs, goals, and funding requirements.",
  },
  {
    icon: <FileText size={28} color="#fff" />,
    title: "Documentation",
    description:
      "Simple and streamlined documentation process with our expert team guiding you.",
  },
  {
    icon: <CheckCircle size={28} color="#fff" />,
    title: "Approval",
    description:
      "Fast-track approval process with transparent communication at every step.",
  },
  {
    icon: <CreditCard size={28} color="#fff" />,
    title: "Disbursement",
    description:
      "Quick fund disbursement directly to your account to kickstart your growth.",
  },
];

export default function FundingProcessSection() {
  return (
    <section className="py-30 px-6" style={{ background: "#F3F4F6" }}>
      <div className="max-w-6xl mx-auto">

        <AnimateOnScroll direction="right" delay={0.1}>
          {/* Heading */}
          <h2
            className="font-playfair text-center mb-4"
            style={{ fontSize: "60px", fontWeight: 500, lineHeight: "60px" }}
          >
            <span style={{ color: "#0B2E6F" }}>Our Funding </span>
            <span style={{ color: "#D4A437" }}>Process</span>
          </h2>

          {/* Subtext */}
          <p
            className="font-inter text-center text-gray-500 mb-14"
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: "28px", color: "#4A5565" }}
          >
            A simple, transparent, and efficient 4-step process to get your business funded
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-5 rounded-2xl p-8"
                style={{
                  background: "#fff",
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
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#0B2E6F" }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-playfair"
                  style={{
                    color: "#0B2E6F",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="font-inter text-gray-500"
                  style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "13px", lineHeight: "22px" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Average Processing Time Badge */}
          <div className="flex justify-center">
            <div
              className="text-center px-12 py-5 rounded-2xl"
              style={{ background: "#0B2E6F" }}
            >
              <p
                className="font-inter text-blue-200 mb-1"
                style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.05em" }}
              >
                Average Processing Time
              </p>
              <p
                className="font-playfair"
                style={{ color: "#E6C76A", fontSize: "32px", fontWeight: 600, lineHeight: "40px" }}
              >
                7-10 Days
              </p>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}