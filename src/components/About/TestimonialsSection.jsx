"use client"
const testimonials = [
  {
    quote:
      "As a small business owner, I needed reliable funding to expand my unit. Pingal Capital delivered a hassle-free experience and provided working capital at a crucial time. Their support and professionalism are unmatched in the industry.",
    name: "Mohd. Irfan",
    role: "Owner, Apex Garments",
  },
  {
    quote:
      "Pingal Capital helped us choose the right insurance and investment options for our family. Their experts explained everything in simple terms and made the whole process smooth. We now have peace of mind knowing our future is protected.",
    name: "Preeti & Raj Malhotra",
    role: "New Delhi",
  },
  {
    quote:
      "Pingal Capital has been a game-changer for our business. Their deep understanding of financial structuring and their ability to tailor funding solutions to our unique needs helped us scale our operations efficiently. Their team is highly professional and always goes the extra mile.",
    name: "Ravi Mehta",
    role: "Director, Mehta Infrastructure Pvt. Ltd.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span
            className="font-inter text-sm font-semibold px-5 py-1.5 rounded-full border"
            style={{ borderColor: "#0B2E6F", color: "#0B2E6F", "background": "#003EC71A", fontSize: "13px" }}
          >
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-playfair text-center mb-12"
          style={{ color: "#0B1C30", fontSize: "40px", fontWeight: 700, lineHeight: "52px" }}
        >
          What Our Clients Say?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl p-8 gap-8"
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
              {/* Quote mark */}
              <div>
                <div
                  className="font-serif font-bold mb-4"
                  style={{ color: "#E8642A", fontSize: "48px", lineHeight: "1" }}
                >
                  ❞
                </div>

                {/* Quote text */}
                <p
                  className="font-inter text-gray-600"
                  style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "14px", lineHeight: "26px" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="pt-4" style={{ borderTop: "1px solid #f0f0f0" }}>
                <div
                  className="font-inter font-bold"
                  style={{ color: "#0B1C30", fontSize: "15px", lineHeight: "22px" }}
                >
                  {t.name}
                </div>
                <div
                  className="font-inter text-gray-400"
                  style={{ fontSize: "12px", lineHeight: "18px" }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}