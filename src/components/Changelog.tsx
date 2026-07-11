const entries = [
  {
    title: "Agent-assisted project updates",
    description: "Agents can now draft and publish project updates automatically, keeping stakeholders informed without manual effort.",
    date: "Jun 24, 2026",
    color: "#f59e0b",
  },
  {
    title: "Coding sessions in Linear",
    description: "Launch coding environments directly from issues. Collaborate with agents in real-time without leaving Linear.",
    date: "Jun 18, 2026",
    color: "#ef4444",
  },
  {
    title: "Team documents",
    description: "A new document editor for specs, PRDs, and design docs. Built for collaboration with real-time editing.",
    date: "Jun 10, 2026",
    color: "#5e6ad2",
  },
  {
    title: "Linear Diffs",
    description: "Review code changes inline with structural diffs. Understand the full context of every PR and agent contribution.",
    date: "Jun 3, 2026",
    color: "#22c55e",
  },
];

export default function Changelog() {
  return (
    <section className="py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-[#f5f5f7]">
            Changelog
          </h2>
          <a
            href="#"
            className="text-[13px] text-[#6b7280] hover:text-[#8a8f98] transition-colors duration-200 no-underline"
          >
            View all &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {entries.map((entry) => (
            <a
              key={entry.title}
              href="#"
              className="bg-[#121316] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-5 hover:border-[rgba(255,255,255,0.1)] transition-all duration-200 no-underline block group"
            >
              <span
                className="w-[8px] h-[8px] rounded-full block mb-3"
                style={{ backgroundColor: entry.color }}
              />
              <h3 className="text-[13.5px] font-medium text-[#f5f5f7] group-hover:text-white transition-colors">
                {entry.title}
              </h3>
              <p className="mt-[6px] text-[12px] leading-[1.5] text-[#8a8f98] line-clamp-2">
                {entry.description}
              </p>
              <span className="block mt-3 text-[11px] text-[#4a4b4e]">
                {entry.date}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
