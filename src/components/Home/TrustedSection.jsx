import { Users, TrendingUp, Award, Calendar } from "lucide-react";

const stats = [
    {
        icon: <Users size={28} color="#fff" />,
        value: "500+",
        label: "Businesses Funded",
    },
    {
        icon: <TrendingUp size={28} color="#fff" />,
        value: "₹1000+ Cr",
        label: "Capital Facilitated",
    },
    {
        icon: <Award size={28} color="#fff" />,
        value: "98%",
        label: "Client Satisfaction",
    },
    {
        icon: <Calendar size={28} color="#fff" />,
        value: "15+ Years",
        label: "Experience",
    },
];

const gradientTextStyle = {
    background: "linear-gradient(135deg, #0B2E6F 0%, #D4A437 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "48px",
};

export default function TrustedSection() {
    return (
        <section className="bg-white py-16 px-6">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2
                    className="font-playfair"
                    style={{
                        color: "#0B2E6F",
                        fontSize: "48px",
                        lineHeight: "48px",
                        fontWeight: 500,
                    }}
                >
                    Trusted by Growing Businesses
                </h2>
                <p
                    className="font-inter mt-3 text-gray-500 max-w-md mx-auto"
                    style={{ fontSize: "72px", fontWeight: 400, lineHeight: "90px", fontSize: "18px", lineHeight: "28px", maxWidth: "550px" }}
                >
                    Join hundreds of successful businesses that have accelerated their growth with Pingal Capital
                </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-4 rounded-2xl p-6"
                        style={{
                            background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                            boxShadow: "2px 8px 12px 4px #0000001A, 2px 12px 19px -1px #0000001A",
                            minWidth: "200px",
                            flex: "1 1 200px",
                            maxWidth: "240px",
                            transition: "transform 0.25s ease, box-shadow 0.25s ease",
                            cursor: "default",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-6px)";
                            e.currentTarget.style.boxShadow = "2px 16px 24px 4px #0000002A, 2px 20px 30px -1px #0000001A";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "2px 8px 12px 4px #0000001A, 2px 12px 19px -1px #0000001A";
                        }}
                    >
                        {/* Icon */}
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: "#1a2472" }}
                        >
                            {stat.icon}
                        </div>

                        {/* Value */}
                        <div
                            className="font-playfair"
                            style={gradientTextStyle}
                        >
                            {stat.value}
                        </div>

                        {/* Label */}
                        <p
                            className="font-inter text-gray-500"
                            style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "13px", lineHeight: "18px" }}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}