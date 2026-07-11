export default function FeatureBuild() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[40px] md:gap-[80px] mb-[60px]">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f5f5f7]">
              Move work forward across teams and agents
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.6] text-[#8a8f98]">
              Build and deploy AI agents that work alongside your team. Work on
              complex tasks together or delegate entire issues end-to-end.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-[13px] text-[#6b7280] hover:text-[#8a8f98] transition-colors duration-200 no-underline"
            >
              3.0 Build &rarr;
            </a>
          </div>
        </div>

        {/* Two panel mockup */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[1px] bg-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
          {/* Terminal / Code editor */}
          <div className="bg-[#121316]">
            <div className="flex items-center gap-2 px-4 h-[32px] bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)]">
              <span className="text-[10px] text-[#5e6ad2] font-medium">Codex</span>
              <span className="text-[10px] text-[#4a4b4e] ml-auto">~/agent</span>
            </div>
            <div className="p-4 font-mono text-[11px] leading-[1.6]">
              <div className="text-[#8a8f98]">&gt; Analyzing issue LIN-127...</div>
              <div className="text-[#8a8f98]">&gt; Checking project structure...</div>
              <div className="text-[#8a8f98]">&gt; Running tests...</div>
              <div className="text-[#22c55e] mt-1">✓ 12 tests passed</div>
              <div className="text-[#8a8f98]">&gt; Generating fix...</div>
              <div className="text-[#22c55e]">✓ Fix applied. PR opened.</div>
              <div className="mt-2 text-[#4a4b4e]">$ <span className="animate-pulse">_</span></div>
            </div>
          </div>

          {/* Assign to dropdown */}
          <div className="bg-[#121316] p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-[14px] h-[14px] rounded bg-[rgba(255,255,255,0.08)]" />
              <span className="text-[11px] text-[#6b7280] font-medium">LIN-127</span>
              <span className="ml-auto text-[10px] text-[#4a4b4e]">Unassigned</span>
            </div>
            <p className="text-[13px] text-[#f5f5f7] mb-4">Implement OAuth token refresh</p>
            <div className="text-[11px] text-[#6b7280] mb-2">Assign to...</div>
            <div className="flex flex-col gap-1">
              {[
                { name: "Codex", role: "Agent", icon: "C", color: "#5e6ad2" },
                { name: "Steven", role: "Engineer", icon: "S", color: "#22c55e" },
                { name: "Ema", role: "Designer", icon: "E", color: "#a855f7" },
                { name: "GitHub Copilot", role: "Agent", icon: "G", color: "#f59e0b" },
                { name: "Cursor", role: "Agent", icon: "C", color: "#06b6d4" },
                { name: "Meg", role: "PM", icon: "M", color: "#ef4444" },
              ].map((person) => (
                <div
                  key={person.name}
                  className="flex items-center gap-2 px-2 py-[5px] rounded-[4px] hover:bg-[rgba(255,255,255,0.04)] cursor-pointer"
                >
                  <span
                    className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px] font-medium shrink-0"
                    style={{ backgroundColor: `${person.color}20`, color: person.color }}
                  >
                    {person.icon}
                  </span>
                  <span className="text-[12px] text-[#f5f5f7]">{person.name}</span>
                  <span className="text-[10px] text-[#4a4b4e] ml-auto">{person.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6">
          {["3.1 Issues", "3.2 Agents", "3.3 Linear MCP", "3.4 Git automations", "3.5 Cycles"].map((step) => (
            <span key={step} className="text-[12px] text-[#4a4b4e]">{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
