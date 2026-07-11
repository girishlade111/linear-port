export default function Hero() {
  return (
    <section className="pt-[140px] pb-[80px] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(94,106,210,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] mb-8">
            <span className="w-[6px] h-[6px] rounded-full bg-[#22c55e]" />
            <span className="text-[12px] text-[#6b7280] font-medium">
              Built for product teams
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[56px] md:text-[64px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#f5f5f7] max-w-[800px]">
            The product development system for teams and agents
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-[#8a8f98] max-w-[520px]">
            Purpose-built for planning and building products. Designed for the AI era.
          </p>

          {/* Link */}
          <a
            href="#"
            className="mt-6 text-[13.5px] text-[#f5f5f7] hover:opacity-80 transition-opacity duration-200 no-underline"
          >
            New: Coding Sessions &rarr;
          </a>
        </div>

        {/* Product Mockup */}
        <div className="relative mt-16 mx-auto max-w-[1040px]">
          {/* Glow behind mockup */}
          <div className="absolute -inset-[80px] bg-gradient-to-b from-[rgba(94,106,210,0.06)] via-transparent to-transparent rounded-[24px] pointer-events-none" />

          {/* Macbook-like window frame */}
          <div className="relative bg-[#121316] rounded-[12px] border border-[rgba(255,255,255,0.06)] shadow-[0_0_0_1px_rgba(0,0,0,0.6),0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-[7px] px-4 h-[38px] bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)]">
              <span className="w-[9px] h-[9px] rounded-full bg-[rgba(255,255,255,0.1)]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[rgba(255,255,255,0.1)]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[rgba(255,255,255,0.1)]" />
              <span className="ml-3 text-[11px] text-[#4a4b4e] font-medium">Linear — issues</span>
            </div>

            {/* Main UI mockup */}
            <div className="flex h-[440px] md:h-[520px]">
              {/* Sidebar */}
              <div className="w-[200px] shrink-0 border-r border-[rgba(255,255,255,0.06)] p-4 hidden md:block">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-[16px] h-[16px] rounded bg-[rgba(255,255,255,0.08)]" />
                  <span className="text-[12px] text-[#6b7280] font-medium">My Issues</span>
                </div>
                {["Inbox", "Issues", "Projects", "Cycles", "Views"].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-[5px] px-2 rounded-[4px] hover:bg-[rgba(255,255,255,0.04)] cursor-pointer">
                    <span className="text-[12px] text-[#6b7280]">{item === "Issues" ? "●" : "○"}</span>
                    <span className={`text-[12px] ${item === "Issues" ? "text-[#f5f5f7]" : "text-[#6b7280]"}`}>{item}</span>
                    {item === "Inbox" && <span className="ml-auto text-[10px] text-[#5e6ad2] bg-[rgba(94,106,210,0.15)] px-[5px] py-[1px] rounded-[3px]">3</span>}
                    {item === "Issues" && <span className="ml-auto text-[10px] text-[#4a4b4e]">12</span>}
                  </div>
                ))}
              </div>

              {/* List view */}
              <div className="flex-1 p-4 overflow-hidden">
                {/* Column headers */}
                <div className="flex items-center gap-1 mb-4 text-[11px] text-[#4a4b4e] font-medium border-b border-[rgba(255,255,255,0.04)] pb-2">
                  <span className="w-[8px]" />
                  <span className="flex-1">Issue</span>
                  <span className="w-[60px] text-right hidden sm:block">Status</span>
                  <span className="w-[60px] text-right hidden sm:block">Priority</span>
                  <span className="w-[60px] text-right hidden sm:block">Assignee</span>
                </div>

                {/* Issues */}
                {[
                  { title: "Design system color tokens update", status: "In Progress", priority: "High", assignee: "AL", label: "design" },
                  { title: "Agent output review flow", status: "Backlog", priority: "Medium", assignee: "ST", label: "dev" },
                  { title: "User onboarding v2", status: "Todo", priority: "High", assignee: "MR", label: "product" },
                  { title: "API rate limiting implementation", status: "In Progress", priority: "Urgent", assignee: "JD", label: "dev" },
                  { title: "Q3 roadmap planning", status: "Todo", priority: "Medium", assignee: "LK", label: "product" },
                  { title: "Performance audit for dashboard", status: "Done", priority: "Low", assignee: "AL", label: "dev" },
                ].map((issue, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 py-[6px] px-2 rounded-[4px] hover:bg-[rgba(255,255,255,0.03)] cursor-pointer group"
                  >
                    <span className="w-[8px] h-[8px] rounded-full border border-[rgba(255,255,255,0.1)]" />
                    <div className="flex-1 flex items-center gap-2 min-w-0">
                      <span className="text-[12px] text-[#4a4b4e]">LIN-{121 + i}</span>
                      <span className="text-[13px] text-[#f5f5f7] truncate">{issue.title}</span>
                      <span className="text-[10px] text-[#5e6ad2] bg-[rgba(94,106,210,0.12)] px-[4px] py-[1px] rounded-[3px] font-medium">{issue.label}</span>
                    </div>
                    <span className={`text-[11px] w-[60px] text-right hidden sm:block ${
                      issue.status === "Done" ? "text-[#22c55e]" : "text-[#6b7280]"
                    }`}>{issue.status}</span>
                    <span className={`text-[11px] w-[60px] text-right hidden sm:block ${
                      issue.priority === "Urgent" ? "text-[#ef4444]" : issue.priority === "High" ? "text-[#f59e0b]" : "text-[#6b7280]"
                    }`}>{issue.priority}</span>
                    <span className="w-[60px] text-right hidden sm:block">
                      <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[rgba(255,255,255,0.08)] text-[9px] text-[#6b7280] font-medium">
                        {issue.assignee}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
