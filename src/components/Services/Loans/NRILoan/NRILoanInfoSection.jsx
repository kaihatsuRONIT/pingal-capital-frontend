import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Home, Building2, RefreshCw, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const iconMap = {
    Home: <Home size={22} style={{ color: "#0B2E6F" }} />,
    Building2: <Building2 size={22} style={{ color: "#0B2E6F" }} />,
    RefreshCw: <RefreshCw size={22} style={{ color: "#0B2E6F" }} />,
};

const whyChoose = [
    "Buy property in India without full upfront funds",
    "Leverage assets (property, FD deposits) for liquidity",
    "Refinance existing loans for better terms",
    "Finance education, medical costs, family needs",
    "Pay EMIs conveniently from NRE/NRO accounts",
];

export default function NRILoanInfoSection() {
    const [content, setContent] = useState();
    useEffect(() => {
        fetch("/api/content?page=nri-loan")
            .then((r) => r.json())
            .then((json) => setContent(json.content));
    }, []);
    if (!content) return null;
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* What Is a NRI Loan — Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="w-full lg:w-[460px] flex-shrink-0">
                        <AnimateOnScroll direction="left" delay={0.1}>
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
                            >
                                <img
                                    src="/topup-loan-right.avif"
                                    alt="Top-Up Loan"
                                    width={460}
                                    height={380}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                        </AnimateOnScroll>
                    </div>
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div className="flex-1">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                                style={{ background: "#FEF9EC" }}
                            >
                                <span className="font-inter font-semibold" style={{ color: "#D4A437", fontSize: "12px" }}>
                                    {content.info.badge}
                                </span>
                            </div>
                            <h2
                                className="font-playfair mb-5"
                                style={{ color: "#0B2E6F", fontSize: "34px", fontWeight: 700, lineHeight: "44px" }}
                            >
                                {content.info.heading}
                            </h2>
                            <p
                                className="font-inter text-gray-500"
                                style={{ fontSize: "15px", lineHeight: "28px" }}
                            >
                                {content.info.paragraph}
                            </p>
                        </div>

                    </AnimateOnScroll>
                </div>

                {/* Loan Types */}
                <div>
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <h3
                            className="font-playfair mb-8"
                            style={{ color: "#0B2E6F", fontSize: "32px", fontWeight: 700, lineHeight: "38px" }}
                        >
                            {content.info.loansHeading}
                        </h3>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="up" delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {content?.info?.loanTypes?.map((loan, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-4 rounded-2xl p-7"
                                    style={{
                                        background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                                        boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "#EEF2FF" }}
                                    >
                                        {iconMap[loan.icon]}
                                    </div>
                                    <h4
                                        className="font-playfair font-bold"
                                        style={{ color: "#0B2E6F", fontSize: "17px", lineHeight: "26px" }}
                                    >
                                        {loan.title}
                                    </h4>
                                    <p
                                        className="font-inter text-gray-500"
                                        style={{ fontSize: "13px", lineHeight: "22px" }}
                                    >
                                        {loan.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Why NRIs Choose
        <div
          className="rounded-2xl p-8"
          style={{ background: "#EEF2FF" }}
        >
          <h3
            className="font-playfair mb-6"
            style={{ color: "#0B2E6F", fontSize: "26px", fontWeight: 700, lineHeight: "36px" }}
          >
            Why NRIs Choose These Loans
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={18} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                <span
                  className="font-inter text-gray-700"
                  style={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div> */}

                {/* Benefits
        <div>
          <h3
            className="font-playfair mb-8"
            style={{ color: "#0B2E6F", fontSize: "28px", fontWeight: 700, lineHeight: "38px" }}
          >
            Benefits of NRI Loans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-2xl p-7"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                  boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                  borderLeft: "4px solid #D4A437",
                }}
              >
                <h4
                  className="font-inter font-semibold"
                  style={{ color: "#0B2E6F", fontSize: "15px", lineHeight: "22px" }}
                >
                  {benefit.title}
                </h4>
                <p
                  className="font-inter text-gray-500"
                  style={{ fontSize: "13px", lineHeight: "22px" }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

            </div>
        </section>
    );
}