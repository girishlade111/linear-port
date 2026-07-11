export default function CTA() {
  return (
    <section className="py-[120px] text-center">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#f5f5f7]">
          Built for the future.<br />Available today.
        </h2>
        <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center justify-center h-[44px] px-[24px] bg-[#f5f5f7] text-[#08090a] text-[14px] font-medium rounded-full hover:bg-[#e5e5e6] transition-all duration-200 no-underline"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-[44px] px-[24px] bg-transparent text-[#f5f5f7] text-[14px] font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.03)] transition-all duration-200 no-underline"
          >
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
}
