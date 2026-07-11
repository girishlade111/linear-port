const initiatives = [
  { name: "Core Product", color: "#5e6ad2", count: 3, bars: [{ start: 0, width: 45 }] },
  { name: "Infra stability", color: "#22c55e", count: 1, bars: [{ start: 20, width: 35 }] },
  { name: "Autonomous systems", color: "#f59e0b", count: 2, bars: [{ start: 30, width: 25 }] },
  { name: "Mobile apps", color: "#a855f7", count: 1, bars: [{ start: 40, width: 30 }] },
  { name: "APAC Expansion", color: "#ef4444", count: 2, bars: [{ start: 10, width: 20 }] },
  { name: "Japan Launch", color: "#06b6d4", count: 4, bars: [{ start: 50, width: 25 }] },
  { name: "Customer-driven priorities", color: "#f97316", count: 1, bars: [{ start: 60, width: 15 }] },
];

const months = ["MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"];

export default function FeaturePlan() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[40px] md:gap-[80px] mb-[60px]">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f5f5f7]">
              Define the product direction
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.6] text-[#8a8f98]">
              Plan and navigate from idea to launch. Align your team with product
              initiatives, strategic roadmaps, and clear, up-to-date PRDs.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-[13px] text-[#6b7280] hover:text-[#8a8f98] transition-colors duration-200 no-underline"
            >
              2.0 Plan &rarr;
            </a>
          </div>
        </div>

        {/* Roadmap/Gantt mockup */}
        <div className="bg-[#121316] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-5 overflow-hidden">
          {/* Header months */}
          <div className="flex mb-6">
            <div className="w-[160px] shrink-0 pr-3">
              <span className="text-[11px] text-[#4a4b4e] font-semibold uppercase tracking-wider">Initiatives</span>
            </div>
            <div className="flex-1 grid grid-cols-7 gap-0">
              {months.map((m) => (
                <span key={m} className="text-[11px] text-[#4a4b4e] font-medium text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Initiative rows */}
          {initiatives.map((init) => (
            <div key={init.name} className="flex items-center mb-3 last:mb-0">
              <div className="w-[160px] shrink-0 flex items-center gap-2 pr-3">
                <span
                  className="w-[6px] h-[6px] rounded-full shrink-0"
                  style={{ backgroundColor: init.color }}
                />
                <span className="text-[12px] text-[#8a8f98] truncate">{init.name}</span>
                <span className="text-[10px] text-[#4a4b4e] ml-auto">{init.count}</span>
              </div>
              <div className="flex-1 relative h-[20px] bg-[rgba(255,255,255,0.03)] rounded-[4px]">
                {init.bars.map((bar, i) => (
                  <div
                    key={i}
                    className="absolute top-[2px] h-[16px] rounded-[3px] opacity-70"
                    style={{
                      left: `${bar.start}%`,
                      width: `${bar.width}%`,
                      backgroundColor: init.color,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6">
          {["2.1 Projects", "2.2 Documents", "2.3 Initiatives", "2.4 Visual planning"].map((step) => (
            <span key={step} className="text-[12px] text-[#4a4b4e]">{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
