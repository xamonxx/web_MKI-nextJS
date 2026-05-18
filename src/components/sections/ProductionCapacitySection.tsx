import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/sections/Reveal";
import { productionMetrics, productionSection, workshopItems } from "@/constants/content";

export function ProductionCapacitySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-mki-orange">{productionSection.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-mki-charcoal md:text-5xl">{productionSection.title}</h2>
            <p className="mt-5 text-base leading-8 text-mki-gray">{productionSection.description}</p>
            <div className="mt-7 rounded-2xl border border-orange-100 bg-orange-50 p-5 text-sm font-semibold leading-7 text-mki-charcoal">
              {productionSection.summary}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {productionMetrics.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.04}>
              <article className="premium-card group h-full p-6 hover:-translate-y-1 hover:shadow-soft">
                <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-mki-gradient text-white">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <div className="mt-6 text-3xl font-black text-mki-charcoal">{item.value}</div>
                <h3 className="mt-2 text-base font-extrabold text-mki-charcoal">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-mki-gray">{item.description}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.12} className="mt-10 overflow-hidden rounded-2xl border border-border bg-mki-soft">
          <div className="border-b border-border bg-white px-4 py-3 md:px-5">
            <h3 className="text-sm font-black text-mki-charcoal">Data Workshop Aktif</h3>
            <p className="mt-1 text-xs leading-5 text-mki-gray">Ringkasan kapasitas dari company overview MKI.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <thead className="bg-mki-charcoal text-white">
                <tr>
                  <th className="px-4 py-3 font-extrabold md:px-5">Workshop</th>
                  <th className="px-4 py-3 font-extrabold md:px-5">Kapasitas</th>
                  <th className="px-4 py-3 font-extrabold md:px-5">Tim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {workshopItems.map((item) => (
                  <tr key={item.name} className="transition hover:bg-orange-50/60">
                    <td className="px-4 py-2.5 font-bold text-mki-charcoal md:px-5">{item.name}</td>
                    <td className="px-4 py-2.5 text-mki-gray md:px-5">{item.capacity}</td>
                    <td className="px-4 py-2.5 text-mki-gray md:px-5">{item.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
