export default function Testimonials() {
  return (
    <section className="py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {/* Card 1 - Blue/purple gradient */}
          <div
            className="rounded-[16px] p-[40px] flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #C8D8F0, #E8D5F5)",
            }}
          >
            <div>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-50">
                <path d="M0 0V20H10V8H6C6 4 8 0 12 0H0Z" fill="#1a1a2e" />
                <path d="M16 0V20H26V8H22C22 4 24 0 28 0H16Z" fill="#1a1a2e" />
              </svg>
              <blockquote className="text-[20px] leading-[1.4] font-medium text-[#1a1a2e]">
                &ldquo;You&rsquo;ll probably build a better product, just because
                of the craft that using Linear infuses on your brain.&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <span className="w-[32px] h-[32px] rounded-full bg-[rgba(26,26,46,0.15)] flex items-center justify-center text-[12px] font-semibold text-[#1a1a2e]">
                GP
              </span>
              <div>
                <div className="text-[13px] font-medium text-[#1a1a2e]">Gabriel Puel</div>
                <div className="text-[12px] text-[rgba(26,26,46,0.6)]">Staff Software Engineer, OpenAI</div>
              </div>
            </div>
          </div>

          {/* Card 2 - Yellow */}
          <div
            className="rounded-[16px] p-[40px] flex flex-col justify-between"
            style={{ backgroundColor: "#f5e642" }}
          >
            <div>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-50">
                <path d="M0 0V20H10V8H6C6 4 8 0 12 0H0Z" fill="#1a1a1a" />
                <path d="M16 0V20H26V8H22C22 4 24 0 28 0H16Z" fill="#1a1a1a" />
              </svg>
              <blockquote className="text-[20px] leading-[1.4] font-medium text-[#1a1a1a]">
                &ldquo;Our speed is intense and Linear helps us be action biased.&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <span className="w-[32px] h-[32px] rounded-full bg-[rgba(26,26,26,0.15)] flex items-center justify-center text-[12px] font-semibold text-[#1a1a1a]">
                NK
              </span>
              <div>
                <div className="text-[13px] font-medium text-[#1a1a1a]">Nik Kulev</div>
                <div className="text-[12px] text-[rgba(26,26,26,0.6)]">Head of Engineering, Ramp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
