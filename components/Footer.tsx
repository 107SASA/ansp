import Image from 'next/image'
import Link from 'next/link'
import { IconPhone, IconFactory, IconBuilding, IconMapPin, IconGlobe } from '@/components/Icons'

const services  = ['Panel Manufacturing','VFD Drive Systems','PLC / SCADA','Energy Audit','AMC Services']
const company   = [['About Us','/about'],['Our Projects','/projects'],['Gallery','/gallery'],['Clients','/clients'],['Blog','/blog'],['Contact','/contact']]
const partners  = ['Balluff India SI','IPA India SI','ABB System House','Siemens Partner','Rittal Collaborator']

export default function Footer() {
  return (
    <footer className="bg-[#07101A] pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="relative h-12 w-44">
                <Image
                  src="/anspl-logo.png"
                  alt="ANSPL"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              One stop solution for electrical &amp; automation projects. Turnkey design, manufacturing &amp; commissioning across India &amp; South Asia since 1997.
            </p>
            {/* Phone numbers */}
            <div className="space-y-1.5 mb-6">
              {['+91 98305 05000', '+91 93395 05012', '+91 95648 24342'].map(p => (
                <a key={p} href={`tel:${p.replace(/\s/g,'')}`}
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-amber transition-colors">
                  <IconPhone className="w-3.5 h-3.5 text-amber shrink-0" />{p}
                </a>
              ))}
            </div>
            {/* Social links */}
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/company/anspl" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn" title="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#0A66C2] flex items-center justify-center transition-colors group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/anspl" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" title="Facebook"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#1877F2] flex items-center justify-center transition-colors group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@anspl" target="_blank" rel="noopener noreferrer"
                aria-label="YouTube" title="YouTube"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#FF0000] flex items-center justify-center transition-colors group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://wa.me/919830505000" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp" title="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#25D366] flex items-center justify-center transition-colors group">
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.003 3C9.376 3 4 8.373 4 14.997c0 2.17.586 4.2 1.604 5.95L4 29l8.267-1.578A12.916 12.916 0 0 0 16.003 28C22.627 28 28 22.627 28 16.003 28 9.376 22.627 3 16.003 3zm0 2c6.068 0 11 4.932 11 10.997C27.003 22.065 22.07 27 16.003 27a10.91 10.91 0 0 1-5.672-1.578l-.397-.238-4.906.937.977-4.777-.258-.41A10.927 10.927 0 0 1 5 14.997C5 8.93 9.936 5 16.003 5zm-3.27 5.5c-.22 0-.578.082-.882.41-.303.33-1.157 1.13-1.157 2.754s1.184 3.194 1.35 3.415c.165.22 2.315 3.538 5.62 4.823 2.784 1.08 3.35.866 3.955.812.606-.055 1.956-.8 2.232-1.572.275-.77.275-1.432.193-1.57-.083-.138-.303-.22-.633-.386-.33-.165-1.956-.966-2.26-1.075-.303-.11-.524-.165-.744.165-.22.33-.854 1.075-1.047 1.295-.192.22-.385.247-.715.083-.33-.165-1.393-.514-2.654-1.637-.98-.875-1.642-1.954-1.834-2.285-.193-.33-.02-.508.144-.672.148-.147.33-.385.495-.577.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.73-1.795-.998-2.455-.26-.633-.53-.55-.744-.56-.193-.01-.413-.013-.633-.013z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-5">Company</h5>
            <ul className="space-y-2.5">
              {company.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/45 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-5">Services</h5>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-white/45 text-sm hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
            <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mt-7 mb-4">Authorisations</h5>
            <ul className="space-y-2">
              {partners.map(p => (
                <li key={p} className="text-white/35 text-xs flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber inline-block shrink-0" />{p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-5">Offices</h5>
            <ul className="space-y-4">
              {[
                { Icon: IconFactory,  label:'H.O. & Works',     addr:'Ramchandrapur, Narendrapur\nKolkata – 700 103' },
                { Icon: IconBuilding, label:'Marketing Office',  addr:'3rd Floor, 44A, Shyama Pally\nJadavpur, Kolkata – 700 032' },
                { Icon: IconMapPin,   label:'Patna',             addr:'Kankarbagh, Patna – 800 020' },
                { Icon: IconGlobe,    label:'Dhaka',             addr:'College Gate, Tongi, Dhaka' },
              ].map(o => (
                <li key={o.label} className="flex gap-2.5 text-sm text-white/45">
                  <o.Icon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-0.5">{o.label}</span>
                    <span className="whitespace-pre-line">{o.addr}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/25 text-xs">
          <p>© 2025 Automation Network &amp; Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>ISO 9001:2015 Certified</span>
            <span>·</span>
            <a href="mailto:kiran@automationnetwork.net" className="hover:text-amber transition-colors">kiran@automationnetwork.net</a>
            <span>·</span>
            <span>anspl.co.in</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
