export default function SocialFeed() {
  return (
    <section id="social" style={{ padding: "80px 24px", background: "#f8fafc" }}>
      <div style={{ width: "100%" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#D4A437",
            marginBottom: "12px",
          }}>
            Stay Connected
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "48px",
            fontWeight: 700,
            color: "#1a2472",
            lineHeight: "1.2",
            margin: 0,
          }}>
            Follow Us on Social Media
          </h2>
        </div>

        {/* Elfsight Widget */}
        <div
          className="elfsight-app-57da3b24-033c-41b3-938c-2e89e40a03f1"
          data-elfsight-app-lazy
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}