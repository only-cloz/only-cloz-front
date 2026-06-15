const logos = ['TechScale', 'B2B Experts', 'Fintech Pro', 'GrowthCo', 'DataSync', 'SalesForce+', 'LeadGen360', 'ProspectHub']

export default function LogosMarqueeSection() {
  return (
    <section className="py-5 border-y border-[#7C3AED]/10 bg-[#F9FAFB] overflow-hidden">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-14 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-[#111827]/30 font-heading font-bold text-base hover:text-[#7C3AED] transition-colors cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}