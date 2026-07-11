function IsometricGrid() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3">
        <rect x="10" y="35" width="20" height="15" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 20 42)" />
        <rect x="35" y="25" width="20" height="15" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 45 32)" />
        <rect x="60" y="20" width="20" height="15" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 70 27)" />
        <rect x="85" y="30" width="20" height="15" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 95 37)" />
        <rect x="22" y="48" width="20" height="15" rx="1" stroke="#4a4b4e" strokeWidth="0.6" fill="none" transform="rotate(-15 32 55)" />
        <rect x="47" y="45" width="20" height="15" rx="1" stroke="#4a4b4e" strokeWidth="0.6" fill="none" transform="rotate(-15 57 52)" />
        <rect x="72" y="42" width="20" height="15" rx="1" stroke="#4a4b4e" strokeWidth="0.6" fill="none" transform="rotate(-15 82 49)" />
      </g>
    </svg>
  );
}

function IsometricCube() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3">
        <rect x="35" y="25" width="30" height="25" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 50 37)" />
        <rect x="40" y="20" width="30" height="25" rx="1" stroke="#4a4b4e" strokeWidth="0.6" fill="none" transform="rotate(-15 55 32)" />
        <rect x="45" y="15" width="30" height="25" rx="1" stroke="#3a3b3e" strokeWidth="0.6" fill="none" transform="rotate(-15 60 27)" />
        <circle cx="80" cy="55" r="8" stroke="#6b7280" strokeWidth="0.6" fill="none" />
        <circle cx="88" cy="50" r="5" stroke="#4a4b4e" strokeWidth="0.5" fill="none" />
      </g>
    </svg>
  );
}

function IsometricStaircase() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3">
        <rect x="20" y="55" width="18" height="10" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 29 60)" />
        <rect x="30" y="45" width="18" height="10" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 39 50)" />
        <rect x="40" y="35" width="18" height="10" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 49 40)" />
        <rect x="50" y="25" width="18" height="10" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 59 30)" />
        <rect x="60" y="15" width="18" height="10" rx="1" stroke="#6b7280" strokeWidth="0.8" fill="none" transform="rotate(-15 69 20)" />
        <line x1="20" y1="60" x2="78" y2="20" stroke="#4a4b4e" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

const cards = [
  {
    fig: "FIG 3.2",
    title: "Built for purpose",
    description:
      "Linear is shaped by the practices and principles of world-class product teams.",
    illustration: IsometricGrid,
  },
  {
    fig: "FIG 3.3",
    title: "Powered by AI agents",
    description:
      "Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.",
    illustration: IsometricCube,
  },
  {
    fig: "FIG 3.4",
    title: "Designed for speed",
    description:
      "Reduce noise and restore momentum to help teams ship with high velocity and focus.",
    illustration: IsometricStaircase,
  },
];

export default function FeatureCards() {
  return (
    <section className="py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-[#121316] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[40px] flex flex-col hover:border-[rgba(255,255,255,0.1)] transition-all duration-200"
            >
              <span className="text-[11px] text-[#4a4b4e] font-medium mb-6">
                {card.fig}
              </span>
              <div className="mb-6 flex justify-center">
                <card.illustration />
              </div>
              <h3 className="text-[16px] font-semibold text-[#f5f5f7]">
                {card.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-[#8a8f98]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
