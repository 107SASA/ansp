import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, StatsBar, CTABanner, SectionLabel } from '@/components/UI'
export const metadata: Metadata = { title: 'Industries' }

const industries = [
  { n:'01', title:'Rolling Mills & Re-Melting Furnaces', img:'https://anspl.co.in/assets/TMTRollingMills3-D5h3I46v.jpg', desc:'Complete electrical and automation for rolling mill projects — flying shear, cooling bed, coil processing and full plant SCADA.', tags:['Flying Shear','Crop & Cobble Shear','Continuous Stands','Cooling Bed','Full Plant SCADA'] },
  { n:'02', title:'Coil Processing Lines', img:'https://anspl.co.in/assets/CoilProcessingLines3-Doxsw6bz.jpg', desc:'Cut-to-length, slitting and shearing line automation — complete drive, PLC and SCADA integration.', tags:['Cut-to-Length','Rotary Shear','Flying Shear','HR/CR Slitter','Coil Dividing'] },
  { n:'03', title:'Paper & Pulp', img:'https://anspl.co.in/assets/PulpPaper1-C-jgOJoy.webp', desc:'DCS implementation, rewinder upgrades, paper machine drives and PCC/MCC panels for pulp and paper plants.', tags:['Sectional Paper Mill Drive','DCS Systems','Rewinder Upgrades','Boiler Automation'] },
  { n:'04', title:'Building & Infrastructure Automation', img:'https://anspl.co.in/assets/BuildingAutomation1-B4qfWu4t.jpg', desc:'BMS, HVAC drive control, fire panels, car parking ventilation and energy management for commercial projects.', tags:['MCC/PLC for HVAC','Car Parking Ventilation','Fire Panels','BMS Software'] },
  { n:'05', title:'Wire Drawing', img:'https://anspl.co.in/assets/WireDrawingPlants0-CPzQ96lK.jpg', desc:'Multi-block sectional drive control — delivered 8-block multi-wire systems with precise speed synchronization.', tags:['Multi-Block Drive Systems','Sectional Drive Automation','PLC Control','SCADA Monitoring'] },
  { n:'06', title:'Machinery & CNC Automation', img:'https://anspl.co.in/assets/FurnacesCCM0-CeP1hwHz.webp', desc:'CNC machine retrofitment and Special Purpose Machine automation — servo integration and maintenance contracts.', tags:['CNC Retrofitment','SPM Automation','Machine Tool Design','CNC AMC'] },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries We Power & Automate" subtitle="25+ years delivering precision automation to demanding industrial verticals across India and South Asia." breadcrumb="Industries" imgSrc="https://anspl.co.in/assets/TMTRollingMills1-Bchznq5t.webp" />
      <StatsBar stats={[{n:'8+',l:'Industry Verticals'},{n:'500+',l:'Projects Delivered'},{n:'25+',l:'Years Experience'},{n:'3',l:'Countries'}]} />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Expertise</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Industry-Specific Solutions</h2>
          <div className="space-y-5">
            {industries.map((ind, i) => (
              <div key={ind.title} className={`grid lg:grid-cols-[320px_1fr] rounded-2xl overflow-hidden border border-gray-200 card-lift group`}>
                <div className="relative min-h-[220px] img-zoom overflow-hidden">
                  <Image src={ind.img} alt={ind.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-blue/30 transition-colors" />
                  <span className="absolute bottom-4 left-4 w-10 h-10 bg-amber text-navy font-heading font-black text-sm rounded-lg flex items-center justify-center">{ind.n}</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">{ind.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{ind.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.tags.map(t => <span key={t} className="bg-blue-light text-blue font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Don't See Your Industry?" sub="We work across many sectors. Tell us your specific requirement." primary={{ label:'Contact Our Engineers', href:'/contact' }} />
    </>
  )
}
