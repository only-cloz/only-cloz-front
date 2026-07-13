const logos = ['TechScale', 'B2C Experts', 'Fintech Pro', 'GrowthCo', 'DataSync', 'SalesForce+', 'LeadGen360', 'ProspectHub']

export default function LogosMarqueeSection() {
  return (
    <section className="py-5 border-y border-[#EAB308]/10 bg-[#F9FAFB] overflow-hidden">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-14 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-[#111827]/30 font-heading font-bold text-base hover:text-[#EAB308] transition-colors cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}