"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919899037555"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.2)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "32px", height: "32px" }}
      />
    </a>
  );
}