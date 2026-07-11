export default function FeatureIntake() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[40px] md:gap-[80px] mb-[60px]">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f5f5f7]">
              Make product operations self-driving
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.6] text-[#8a8f98]">
              Turn conversations and customer feedback into actionable issues
              that are routed, labeled, and prioritized for the right team.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-[13px] text-[#6b7280] hover:text-[#8a8f98] transition-colors duration-200 no-underline"
            >
              1.0 Intake &rarr;
            </a>
          </div>
        </div>

        {/* Mockup: Slack + Kanban */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[1px] bg-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
          {/* Slack/chat mockup */}
          <div className="bg-[#121316] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 border-b border-[rgba(255,255,255,0.06)]">
              <span className="w-[14px] h-[14px] rounded bg-[rgba(255,255,255,0.08)]" />
              <span className="text-[11px] text-[#6b7280] font-medium"># product-dev</span>
            </div>
            {[
              { name: "Sarah", msg: "The auth flow is failing on iOS 18. Anyone else seeing this?", time: "2m ago", color: "#5e6ad2" },
              { name: "Mike", msg: "Yes, repro on my end too. Looks like a session issue.", time: "1m ago", color: "#22c55e" },
            ].map((msg, i) => (
              <div key={i} className="flex gap-2">
                <span
                  className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-medium shrink-0 mt-[2px]"
                  style={{ backgroundColor: `${msg.color}30`, color: msg.color }}
                >
                  {msg.name[0]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#f5f5f7] font-medium">{msg.name}</span>
                    <span className="text-[10px] text-[#4a4b4e]">{msg.time}</span>
                  </div>
                  <p className="text-[12px] text-[#8a8f98] leading-[1.4]">{msg.msg}</p>
                </div>
              </div>
            ))}
            {/* Linear command */}
            <div className="mt-2 p-3 rounded-[8px] bg-[rgba(94,106,210,0.08)] border border-[rgba(94,106,210,0.15)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[14px] h-[14px] rounded bg-[#5e6ad2] flex items-center justify-center text-[7px] text-white font-bold">L</span>
                <span className="text-[11px] text-[#5e6ad2] font-medium">Linear</span>
              </div>
              <p className="text-[11px] text-[#8a8f98] leading-[1.4]">
                Create urgent issues and assign to me. Bug: Auth session failure on iOS 18
              </p>
            </div>
          </div>

          {/* Kanban board */}
          <div className="bg-[#121316] p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-[14px] h-[14px] rounded bg-[rgba(255,255,255,0.08)]" />
              <span className="text-[11px] text-[#6b7280] font-medium">Sprint Board</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: "Todo", items: ["Auth flow fix", "Onboarding tooltip", "Dark mode toggle"], color: "#6b7280" },
                { title: "In Progress", items: ["Design token migration", "Agent output review"], color: "#f59e0b" },
                { title: "Done", items: ["Q3 planning doc", "API rate limiter"], color: "#22c55e" },
              ].map((col) => (
                <div key={col.title} className="flex flex-col gap-2">
                  <span className="text-[10px] text-[#4a4b4e] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: col.color }} />
                    {col.title}
                  </span>
                  {col.items.map((item) => (
                    <div
                      key={item}
                      className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2"
                    >
                      <span className="text-[11px] text-[#8a8f98] leading-[1.3] block">{item}</span>
                      {item === "Auth flow fix" && (
                        <span className="inline-block mt-1 text-[9px] text-[#ef4444] bg-[rgba(239,68,68,0.1)] px-[4px] py-[1px] rounded-[3px] font-medium">
                          Bug
                        </span>
                      )}
                      {item === "Design token migration" && (
                        <span className="inline-block mt-1 text-[9px] text-[#5e6ad2] bg-[rgba(94,106,210,0.1)] px-[4px] py-[1px] rounded-[3px] font-medium">
                          Design
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6">
          {["1.1 Linear Agent", "1.2 Triage", "1.3 Customer Requests", "1.4 Linear Atlas"].map((step) => (
            <span key={step} className="text-[12px] text-[#4a4b4e]">
              {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
