import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { item: "Home", to: "/" },
      { item: "About Us", to: "/about" },
      { item: "Careers", to: "/career" },
      { item: "Join as a Partner", to: "/join-us" },
    ],
  },
  {
    heading: "Services",
    links: [
      { item: "Business Loans", to: "/services/business-loan" },
      { item: "Working Capital", to: "/services/working-capital" },
      { item: "MSME Funding", to: "/services/cgtmse" },
      { item: "Debt Consolidation", to: "/services/debt-consolidation" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { item: "Posts", to: "/#social" },
      { item: "FAQs", to: "/services/home-loan#faq" },
      { item: "Calculators", to: "/#emi-calculator" },
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebook size={18} />, label: "Facebook", link: "https://www.facebook.com/share/1EP5HSrG6L/?mibextid=wwXIfr" },
  { icon: <FaYoutube  size={18} />, label: "Twitter", link: "https://www.youtube.com/channel/UCv9kbIQ_hOMC_brMuFVwo6A" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", link: "https://www.linkedin.com/in/pingalcapital" },
  { icon: <FaInstagram size={18} />, label: "Instagram", link: "https://www.instagram.com/pingal_capital" },
];

export default function Footer() {
  return (
    <footer>
      {/* Top Section */}
      <div
        className="bg-white px-4 sm:px-8 lg:px-16 py-12"
        style={{ boxShadow: "0px -6px 5.9px 0px #0000002E" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-6">

          {/* Left — Logo + Info */}
          <div className="flex-shrink-0 lg:w-[300px]">
            <img
              src="/websiteLogo.png"
              alt="Pingal Capital"
              className="mb-6"
              style={{ maxWidth: "170px", height: "auto" }}
            />

            <p
              className="font-inter text-sm mb-6 leading-relaxed"
              style={{ color: "#0B2E6F", fontSize: "14px", lineHeight: "24px", maxWidth: "280px" }}
            >
              Your trusted partner in business growth and financial success. Empowering businesses with strategic capital solutions since 2011.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={15} style={{ color: "#0B2E6F", flexShrink: 0 }} />
                <span className="font-inter text-sm" style={{ color: "#0B2E6F" }}>+91 9999693669</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} style={{ color: "#0B2E6F", flexShrink: 0 }} />
                <span className="font-inter text-sm" style={{ color: "#0B2E6F" }}>info@pingalcapital.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} style={{ color: "#0B2E6F", flexShrink: 0, marginTop: "2px" }} />
                <span className="font-inter text-sm leading-relaxed" style={{ color: "#0B2E6F" }}>
                  516 5th floor Wave Silver Tower Sector 18 Noida Gautam Buddha Nagar Uttar Pradesh 201301
                </span>
              </div>
            </div>
          </div>

          {/* Right — Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((col, index) => (
              <div key={index}>
                <h4
                  className="font-inter font-semibold mb-4"
                  style={{ color: "#D4A437", fontSize: "15px", lineHeight: "22px" }}
                >
                  {col.heading}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.to}
                        className="font-inter text-sm transition-opacity hover:opacity-70"
                        style={{ color: "#0B2E6F", fontSize: "14px", lineHeight: "22px" }}
                      >
                        {link.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: "#0B2E6F", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} />

          {/* Copyright + Social + Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 text-center sm:text-left">
            <p
              className="font-inter text-blue-200"
              style={{ fontSize: "13px", lineHeight: "20px" }}
            >
              © 2026 Pingal Capital. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={`${social.link}`}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
                  target="_new"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <a href="#" className="font-inter text-blue-200 hover:text-white transition-colors" style={{ fontSize: "13px" }}>
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-blue-200 hover:text-white transition-colors" style={{ fontSize: "13px" }}>
                Terms of Service
              </a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} />

          {/* Disclaimer */}
          <p
            className="font-inter text-center text-blue-300 py-4 px-2"
            style={{ fontSize: "12px", lineHeight: "19.5px", fontWeight: 400 }}
          >
            Disclaimer: Pingal Capital is a financial services provider. All loans are subject to credit approval. Terms and conditions apply. Please read all scheme related documents carefully before availing services.
          </p>

        </div>
      </div>
    </footer>
  );
}