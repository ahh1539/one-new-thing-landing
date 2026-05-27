import { landingFaqs } from "@/content/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="font-mono text-[11px] text-secondary">§ 05</span>
          <h2
            id="faq-heading"
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Questions.
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {landingFaqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-border py-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3
                className="pr-4 font-serif text-[20px] font-medium leading-[1.2] tracking-[-0.3px] text-ink sm:text-[22px]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {faq.q}
              </h3>
              <p className="mt-3 max-w-[640px] text-[15px] leading-[1.65] text-secondary">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
