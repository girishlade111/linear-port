const logos = ["Vercel", "Cursor", "Oscar", "OpenAI", "Coinbase", "Cash App", "Zoom", "Ramp"];

export default function LogoBar() {
  return (
    <section className="py-[60px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-[11px] text-[#4a4b4e] font-semibold tracking-[0.08em] uppercase mb-10">
          Trusted by leading product teams
        </p>
        <div className="flex items-center justify-center flex-wrap gap-x-[48px] gap-y-[24px]">
          {logos.map((name) => (
            <div
              key={name}
              className="text-[18px] font-semibold tracking-[-0.02em] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.8)] transition-all duration-200 cursor-default"
              style={{ fontKerning: "none" }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
