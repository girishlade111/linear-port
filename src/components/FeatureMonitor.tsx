export default function FeatureMonitor() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[40px] md:gap-[80px] mb-[60px]">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f5f5f7]">
              Understand progress at scale
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.6] text-[#8a8f98]">
              Take the guesswork out of product development with project updates,
              analytics, and dashboards that surface what needs your attention.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-[13px] text-[#6b7280] hover:text-[#8a8f98] transition-colors duration-200 no-underline"
            >
              5.0 Monitor &rarr;
            </a>
          </div>
        </div>

        {/* Two panel mockup */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[1px] bg-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
          {/* Pulse card */}
          <div className="bg-[#121316] p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] text-[#6b7280] font-medium">Weekly Pulse for Jun 27</span>
              <span className="ml-auto text-[10px] text-[#22c55e] bg-[rgba(34,197,94,0.1)] px-[6px] py-[1px] rounded-[3px]">On track</span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { project: "UI Refresh", status: "On track", progress: 75, color: "#22c55e" },
                { project: "Tokyo Launch", status: "At risk", progress: 40, color: "#f59e0b" },
                { project: "Agent SDK v2", status: "On track", progress: 30, color: "#22c55e" },
              ].map((item) => (
                <div key={item.project} className="bg-[rgba(255,255,255,0.03)] rounded-[8px] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] text-[#f5f5f7] font-medium">{item.project}</span>
                    <span className={`text-[10px] ${
                      item.status === "On track" ? "text-[#22c55e]" : "text-[#f59e0b]"
                    }`}>{item.status}</span>
                  </div>
                  <div className="h-[4px] bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scatter plot */}
          <div className="bg-[#121316] p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] text-[#6b7280] font-medium">Cycle time by agent</span>
            </div>
            {/* Simple scatter visualization */}
            <div className="relative h-[160px] border-b border-l border-[rgba(255,255,255,0.06)] ml-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="absolute" style={{ left: `${15 + i * 15}%`, bottom: `${10 + Math.random() * 70}%` }}>
                  <span className="w-[5px] h-[5px] rounded-full bg-[#5e6ad2]" />
                </div>
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i + 10} className="absolute" style={{ left: `${10 + i * 18}%`, bottom: `${5 + Math.random() * 40}%` }}>
                  <span className="w-[5px] h-[5px] rounded-full bg-[#f59e0b]" />
                </div>
              ))}
              {/* Axis labels */}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-[#4a4b4e]">Complexity</span>
              <span className="absolute -left-5 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-[#4a4b4e]">Time (h)</span>
            </div>
            {/* Legend */}
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] rounded-full bg-[#5e6ad2]" />
                <span className="text-[10px] text-[#4a4b4e]">Agent</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-[5px] h-[5px] rounded-full bg-[#f59e0b]" />
                <span className="text-[10px] text-[#4a4b4e]">Human</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6">
          {["5.1 Pulse", "5.2 Insights", "5.3 Dashboards"].map((step) => (
            <span key={step} className="text-[12px] text-[#4a4b4e]">{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
