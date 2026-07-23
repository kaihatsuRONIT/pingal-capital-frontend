import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import { useRouter } from "next/navigation";

const features = [
  "Strategic Capital Partnerships",
  "Expert Financial Advisory",
  "Customized Funding Solutions",
  "End-to-End Support",
];

export default function AboutSection() {
  const router = useRouter();
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left — Image */}
        <div className="w-full lg:w-[420px] flex-shrink-0">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0px 25px 50px -12px #00000040",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
            }}
          >
            <Image
              src="/founder.jpg"
              alt="Pingal Capital Representative"
              width={420}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <AnimateOnScroll direction="left" delay={0.1}>
          {/* Right — Content */}
          <div className="flex-1">

            {/* Badge */}
            <div className="inline-block mb-4">
              <span
                className="font-inter text-sm font-semibold px-4 py-1.5 rounded-full"
                style={{
                  background: "#E6C76A",
                  color: "#1a2472",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "1.5",
                }}
              >
                About Pingal Capital
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-playfair mb-5"
              style={{
                background: "linear-gradient(135deg, #0B2E6F 0%, #D4A437 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "60px",
              }}
            >
              Your Strategic Financial
              <br />
              Growth Partner
            </h2>

            {/* Paragraphs */}
            <p
              className="font-inter text-gray-600 mb-4"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
            >
              At Pingal Capital, we understand that every business has unique financial needs and growth aspirations. With over 15 years of expertise in the financial services sector, we've helped hundreds of businesses secure the capital they need to thrive.
            </p>
            <p
              className="font-inter text-gray-600 mb-6"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
            >
              Our comprehensive approach combines strategic financial planning, tailored funding solutions, and ongoing advisory support to ensure your business not only secures capital but uses it effectively to accelerate growth.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: "#D4A437", flexShrink: 0 }} />
                  <span
                    className="font-inter text-gray-700"
                    style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "22px" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <button
              className="font-inter flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer"
              onClick={()=> router.push("/about")}
              style={{
                background: "linear-gradient(135deg, #0B2E6F 0%, #0D3B8F 100%)",
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "22px",
              }}
            >
              Learn More
              <ArrowRight size={16} />
            </button>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}