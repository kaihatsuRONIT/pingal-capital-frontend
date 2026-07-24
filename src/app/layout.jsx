import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import WhatsAppButton from "@/components/WhatsappButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pingal Capital",
  description: "Your One-Stop Destination for Finance, Loans, Insurance &amp; Real Estate Services Pingal Capital is a trusted provider of financial and insurance solutions, serving individuals, families &amp; Corporates with a commitment to integrity, innovation, and long-term value. we have helped thousands of clients secure their financial future through tailored strategies and expert guidance.",
};
const brandColors = {
  Facebook: "#1877F2",
  YouTube: "#FF0000",
  LinkedIn: "#0A66C2",
  Instagram: "#E1306C",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Top Bar */}
        <div style={{ background: "#0a2660" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3">
              <p className="font-inter text-blue-200" style={{ fontSize: "13px" }}>
                📞 +91 9999693669 | info@pingalcapital.com
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaFacebook size={18} />, label: "Facebook", link: "https://www.facebook.com/pingalcapital" },
                  { icon: <FaYoutube size={18} />, label: "YouTube", link: "https://www.youtube.com/channel/UCv9kbIQ_hOMC_brMuFVwo6A" },
                  { icon: <FaLinkedin size={18} />, label: "LinkedIn", link: "https://www.linkedin.com/in/ajay-sahore-a205b780/" },
                  { icon: <FaInstagram size={18} />, label: "Instagram", link: "https://www.instagram.com/pingal_capital" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg border transition-colors hover:bg-white/10"
                    style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {children}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <WhatsAppButton/>
      </body>
    </html >
  );
}
