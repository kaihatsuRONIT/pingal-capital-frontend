"use client";
import {
  ClipboardList,
  TrendingUp,
  Briefcase,
  BarChart2,
  Home,
  LineChart,
  FileText,
  Calculator,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import { useRouter } from "next/navigation";
const services = [
  {
    icon: <Home size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #FF2056 0%, #EC003F 100%)",
    title: "Home Loan",
    description: "Flexible home loan solutions to help you own your dream home with ease.",
    link: "/services/home-loan"
  },
  {
    icon: <BarChart2 size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #F6339A 0%, #E60076 100%)",
    title: "Loan Against Property",
    description: "Unlock the value of your commercial or residential property for business growth.",
    link: "/services/loan-against-property"
  },
  {
    icon: <TrendingUp size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #615FFF 0%, #4F39F6 100%)",
    title: "Working Capital Finance",
    description: "Maintain smooth operations with optimized working capital solutions for your business.",
    link: "/services/working-capital"
  },
  {
    icon: <LineChart size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #FF6900 0%, #F54900 100%)",
    title: "Balance Transfer",
    description: "Transfer your existing loans to better terms and reduce your overall interest burden.",
    link: "/services/balance-transfer-and-top-up"
  },
  {
    icon: <BarChart2 size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #F6339A 0%, #E60076 100%)",
    title: "MSME Funding",
    description: "Specialized funding programs designed specifically for Micro, Small & Medium Enterprises.",
    link: "/services/cgtmse"
  },
  {
    icon: <Calculator size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #D4A437 0%, #E6C76A 100%)",
    title: "Mortgage Consulting",
    description: "Expert guidance on mortgage planning, risk management, and optimal loan structuring.",
    link: "/services/loan-against-rentals"
  },
  {
    icon: <ClipboardList size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #2B7FFF 0%, #155DFC 100%)",
    title: "Business Loans",
    description: "Flexible financing solutions tailored to your business expansion needs and growth objectives.",
    link: "/services/business-loan"
  },
  {
    icon: <FileText size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #FE9A00 0%, #E17100 100%)",
    title: "Debt Structuring",
    description: "Restructure existing debt to improve cash flow and reduce financial burden.",
    link: "/services/debt-consolidation"
  },
];

const gradientTextStyle = {
  background: "linear-gradient(135deg, #0B2E6F 0%, #D4A437 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function ServicesSection() {
  const router = useRouter();
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <AnimateOnScroll direction="up" delay={0.1}>
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span
              className="font-inter text-sm font-semibold px-4 py-1.5 rounded-full"
              style={{ background: "#E6C76A", color: "#1a2472" }}
            >
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-playfair text-center mb-4"
            style={{
              color: "#0B2E6F",
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 500,
              lineHeight: "1.15",
            }}
          >
            Comprehensive Financial Solutions
          </h2>

          {/* Subtext */}
          <p
            className="font-inter text-center text-gray-500 max-w-xl mx-auto mb-12"
            style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
          >
            From startups to established enterprises, we offer a full spectrum of financial services to fuel your business growth at every stage.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={0.1}>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl p-6"
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
                onClick={() => router.push(`${service.link}`)}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: service.iconBg,
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "rotate(360deg)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "rotate(0deg)";
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: "#0B2E6F"
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-inter text-gray-500"
                  style={{ fontSize: "14px", fontWeight: 400, lineHeight: "22.75px" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="down" delay={0.1}>
          {/* Bottom note */}
          <p
            className="font-inter text-center text-gray-400 mt-12"
            style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "14px", lineHeight: "22px" }}
          >
            Can't find what you're looking for? Contact Us
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}