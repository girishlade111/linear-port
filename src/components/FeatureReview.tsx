export default function FeatureReview() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[40px] md:gap-[80px] mb-[60px]">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f5f5f7]">
              Review PRs and agent output
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.6] text-[#8a8f98]">
              Understand code changes at a glance with structural diffs for
              human and agent output. Review, discuss, and merge &mdash; all
              within Linear.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-[13px] text-[#6b7280] hover:text-[#8a8f98] transition-colors duration-200 no-underline"
            >
              4.0 Diffs &rarr;
            </a>
          </div>
        </div>

        {/* Code diff mockup */}
        <div className="bg-[#121316] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
          {/* File header */}
          <div className="flex items-center gap-2 px-4 h-[32px] bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] text-[#8a8f98] font-mono truncate">
              kinetic-ios/src/screens/ProfileViewController.swift
            </span>
            <span className="ml-auto text-[10px] text-[#22c55e]">+12 / -4</span>
          </div>

          {/* Diff content */}
          <div className="grid grid-cols-[1fr_1fr] gap-0">
            {/* Left panel - original */}
            <div className="border-r border-[rgba(255,255,255,0.06)]">
              <div className="px-4 py-[3px] bg-[rgba(255,255,255,0.02)]">
                <span className="text-[9px] text-[#4a4b4e] font-mono">original</span>
              </div>
              <div className="p-4 font-mono text-[11px] leading-[1.7]">
                <div className="text-[#6b7280]">23  func loadProfile() {'{'}</div>
                <div className="text-[#ef4444] bg-[rgba(239,68,68,0.08)]">24    let user = getUser()</div>
                <div className="text-[#ef4444] bg-[rgba(239,68,68,0.08)]">25    displayProfile(user)</div>
                <div className="text-[#6b7280]">26  {'}'}</div>
              </div>
            </div>

            {/* Right panel - modified */}
            <div>
              <div className="px-4 py-[3px] bg-[rgba(255,255,255,0.02)]">
                <span className="text-[9px] text-[#4a4b4e] font-mono">modified</span>
              </div>
              <div className="p-4 font-mono text-[11px] leading-[1.7]">
                <div className="text-[#6b7280]">23  func loadProfile() async {'{'}</div>
                <div className="text-[#22c55e] bg-[rgba(34,197,94,0.08)]">24    let user = await getUser()</div>
                <div className="text-[#22c55e] bg-[rgba(34,197,94,0.08)]">25    guard let user else {'{'} return {'}'}</div>
                <div className="text-[#22c55e] bg-[rgba(34,197,94,0.08)]">26    displayProfile(user)</div>
                <div className="text-[#6b7280]">27  {'}'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6">
          {["4.1 PRs", "4.2 Diffs"].map((step) => (
            <span key={step} className="text-[12px] text-[#4a4b4e]">{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
