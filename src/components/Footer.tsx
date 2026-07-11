const footerColumns = [
  {
    title: "Product",
    links: ["Intake", "Plan", "Build", "Diffs", "Monitor", "Pricing", "Security"],
  },
  {
    title: "Features",
    links: [
      "Atlas",
      "Agents",
      "Coding Sessions",
      "Customer Requests",
      "Insights",
      "Mobile",
      "Integrations",
      "Changelog",
    ],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Blog", "Method", "Quality", "Brand"],
  },
  {
    title: "Resources",
    links: [
      "Switch",
      "Download",
      "Documentation",
      "Developers",
      "Status",
      "Enterprise",
      "Startups",
    ],
  },
  {
    title: "Connect",
    links: ["Contact us", "Community", "X (Twitter)", "GitHub", "YouTube"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-[60px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Top row with logo */}
        <div className="mb-10">
          <a href="/" className="flex items-center gap-2 text-[#f5f5f7] no-underline">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
              <path
                d="M2 17l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="text-[13px] font-medium">Linear</span>
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold text-[#f5f5f7] mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12.5px] text-[#6b7280] hover:text-[#f5f5f7] transition-colors duration-200 no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-[rgba(255,255,255,0.06)] text-center">
          <span className="text-[11px] text-[#4a4b4e]">
            Privacy &middot; Terms &middot; DPA &middot; AUP
          </span>
        </div>
      </div>
    </footer>
  );
}
