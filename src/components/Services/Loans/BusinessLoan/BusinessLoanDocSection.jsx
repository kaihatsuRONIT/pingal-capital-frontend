import AnimateOnScroll from "@/components/AnimateOnScroll";
import { AlertCircle, FileText, CreditCard, BarChart2, DollarSign, Briefcase } from "lucide-react";

const documents = [
    {
        icon: <Briefcase size={20} style={{ color: "#0B2E6F" }} />,
        title: "Business Registration / GST / PAN",
        description: "Certificate of incorporation, GST registration, and business PAN for entity verification.",
    },
    {
        icon: <CreditCard size={20} style={{ color: "#0B2E6F" }} />,
        title: "Identity & Address Proof",
        description: "PAN card and Aadhaar of the proprietor, partners, or directors along with business address proof.",
    },
    {
        icon: <BarChart2 size={20} style={{ color: "#0B2E6F" }} />,
        title: "Financial Statements",
        description: "Audited Profit & Loss statements and Balance Sheet for the last 2–3 financial years.",
    },
    {
        icon: <DollarSign size={20} style={{ color: "#0B2E6F" }} />,
        title: "Bank Statements",
        description: "Last 6–12 months statements of your primary business current account.",
    },
    {
        icon: <FileText size={20} style={{ color: "#0B2E6F" }} />,
        title: "Business Plan / Loan Usage Overview",
        description: "A brief outline of how the loan will be utilised — especially relevant for startups and new borrowers.",
    },
];

export default function BusinessLoanDocumentationSection() {
    return (
        <section className="py-20 px-6" style={{ background: "#0B2E6F" }}>
            <div className="max-w-6xl mx-auto">
                <AnimateOnScroll direction="right" delay={0.1}>
                    <h2
                        className="font-playfair text-white text-center mb-3"
                        style={{ fontSize: "42px", fontWeight: 700, lineHeight: "56px" }}
                    >
                        Required KYC Documents
                    </h2>
                    <p
                        className="font-inter text-blue-200 text-center mb-12 mx-auto"
                        style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "480px" }}
                    >
                        Keep these documents ready to ensure a smooth and fast business loan approval process.
                    </p>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {documents.map((doc, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-2xl p-6"
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
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: "#EEF2FF" }}
                                >
                                    {doc.icon}
                                </div>
                                <div>
                                    <h4
                                        className="font-inter font-semibold mb-1"
                                        style={{ color: "#0B2E6F", fontSize: "14px", lineHeight: "22px" }}
                                    >
                                        {doc.title}
                                    </h4>
                                    <p
                                        className="font-inter text-gray-500"
                                        style={{ fontSize: "13px", lineHeight: "20px" }}
                                    >
                                        {doc.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="right" delay={0.1}>
                    <div
                        className="flex items-start gap-3 rounded-xl px-5 py-4"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        <AlertCircle size={18} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                        <p
                            className="font-inter text-blue-200"
                            style={{ fontSize: "13px", lineHeight: "22px" }}
                        >
                            Exact documentation depends on lender and loan type. Our advisors will guide you through the specific checklist based on your business profile.
                        </p>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}