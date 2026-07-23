"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const servicesMenu = [
    "Home Loan",
    "Loan Services for NRIs",
    "Loan Against Property",
    "Balance Transfer & Top Up",
    "Non Residential Premises Loan",
    "Loan Against Rentals",
    "Debt Consolidation",
    "Overdraft Facility",
    "Working Capital",
    "Business Loan",
    "Personal Loan",
    "CGTMSE",
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const router = useRouter();

    return (
        <div className="relative z-20 w-full px-4 sm:px-8 lg:px-16 pt-6 sm:pt-10">
            <nav
                className="flex items-center justify-between px-4 sm:px-6 py-10 rounded-full w-full mx-auto"
                style={{
                    background: "rgba(255,255,255,0.97)",
                    maxWidth: "1144px",
                    height: "70px",
                    borderRadius: "61px",
                    boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
                }}
            >
                {/* Logo */}
                <Link href="/">
                    <div style={{ width: "200px", height: "100px" }} className="flex items-center">
                        <img src="/websiteLogo.png" width={200} height={100} alt="Pingal Capital" style={{ objectFit: "contain" }} />
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium font-inter" style={{ color: "#051E44" }}>
                    <Link href="/" className="hover:opacity-60 transition-opacity whitespace-nowrap">Home</Link>
                    <Link href="/about" className="hover:opacity-60 transition-opacity whitespace-nowrap">About us</Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => { setServicesOpen(true); setActiveCategory(null); }}
                        onMouseLeave={() => { setServicesOpen(false); setActiveCategory(null); }}
                    >
                        <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity select-none whitespace-nowrap">
                            <span className="font-inter">Services</span>
                            <ChevronDown size={12} color="#1a2472" />
                        </div>

                        {servicesOpen && (
                            <div
                                className="absolute top-full left-0 py-2 rounded-xl z-50 min-w-[220px] max-h-[70vh] overflow-y-auto"
                                style={{ background: "#fff", boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
                            >
                                {servicesMenu.map((cat, i) => (
                                    <Link
                                        key={i}
                                        href={`/services/${cat.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`}
                                    >
                                        <div
                                            className="flex items-center px-4 py-2.5 cursor-pointer transition-colors hover:bg-gray-50"
                                            style={{ color: activeCategory === i ? "#D4A437" : "#1a2472" }}
                                            onMouseEnter={() => setActiveCategory(i)}
                                            onMouseLeave={() => setActiveCategory(null)}
                                        >
                                            <span className="font-inter text-sm font-medium">{cat}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/our-partners" className="hover:opacity-60 transition-opacity whitespace-nowrap">Our Partners</Link>
                    <Link href="/career" className="hover:opacity-60 transition-opacity whitespace-nowrap">Career</Link>
                    <Link href="/join-us" className="hover:opacity-60 transition-opacity whitespace-nowrap">Join as a Partner</Link>
                </div>

                {/* Contact Button — Desktop */}
                <button
                    onClick={() => router.push("/contact")}
                    className="hidden lg:block text-sm font-semibold text-white px-7 py-4 rounded-full transition-opacity hover:opacity-90 whitespace-nowrap cursor-pointer"
                    style={{ background: "#0D3785" }}
                >
                    Contact Us
                </button>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden p-2 flex flex-col gap-1.5"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-5 h-0.5 bg-gray-700 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`w-5 h-0.5 bg-gray-700 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                    <div className={`w-5 h-0.5 bg-gray-700 transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="lg:hidden mt-3 mx-auto rounded-2xl bg-white shadow-lg p-4 w-full"
                    style={{ maxWidth: "1144px" }}
                >
                    {[
                        { label: "Home", href: "/" },
                        { label: "About us", href: "/about" },
                        { label: "Our Partners", href: "/our-partners" },
                        { label: "Career", href: "/career" },
                        { label: "Join as a Partner", href: "/join-us" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2.5 px-3 font-inter text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                            style={{ color: "#1a2472" }}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Mobile Services */}
                    <div>
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="flex items-center justify-between w-full py-2.5 px-3 font-inter text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                            style={{ color: "#1a2472" }}
                        >
                            <span>Services</span>
                            <ChevronDown
                                size={14}
                                color="#1a2472"
                                style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                            />
                        </button>

                        {mobileServicesOpen && (
                            <div className="ml-3 mt-1 space-y-0.5">
                                {servicesMenu.map((cat, i) => (
                                    <Link
                                        key={i}
                                        href={`/services/${cat.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`}
                                        className="block py-2 px-4 font-inter text-sm rounded-lg hover:bg-gray-100 transition-colors"
                                        style={{ color: "#1a2472" }}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => { router.push("/contact"); setMobileOpen(false); }}
                        className="mt-3 w-full font-inter text-sm font-semibold text-white py-3 rounded-full"
                        style={{ background: "#0D3785" }}
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </div>
    );
}