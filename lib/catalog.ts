/**
 * Single source of truth for services, product categories and industries.
 * Used by the navigation, homepage, listing pages, detail pages and footer —
 * so names and descriptions stay identical everywhere.
 *
 * Copy on detail pages is drafted from content already on the website.
 * CLIENT REVIEW: confirm technical claims, figures and authorisations before publishing.
 */

const A = 'https://anspl.co.in/assets'

export type CatalogItem = {
  slug: string
  title: string
  /** One-line description used in menus and compact cards */
  short: string
  /** Longer description used on listing cards and the detail-page hero */
  summary: string
  img: string
  badge?: string
  overview: string[]
  /** Section heading for `points` (e.g. "What We Deliver", "Product Range") */
  pointsTitle: string
  points: string[]
  applications: string[]
  /** Slugs of related industries (for services/products) or services (for industries) */
  related?: string[]
}

/* ─────────────────────────── SERVICES ─────────────────────────── */

export const SERVICES: CatalogItem[] = [
  {
    slug: 'panel-manufacturing',
    title: 'Panel Manufacturing',
    short: '6,000 sq.ft. facility, 100 doors/month',
    summary: 'HT and LT panels designed and built at our in-house manufacturing facility at Narendrapur, Kolkata.',
    img: `${A}/Panel0-D3e2k-is.jpg`,
    badge: 'In-House',
    overview: [
      'Our in-house panel manufacturing facility at Ramchandrapur, Narendrapur, Kolkata covers 6,000 sq.ft. and produces up to 100 panel doors per month.',
      'An automatic busbar bending & shear machine — the only one in East India — together with an automatic stripper-cum-crimping machine and a wireman-friendly base-plate assembly system, keeps every panel build fast, precise and consistent.',
    ],
    pointsTitle: 'Panels We Build',
    points: [
      '33kV / 11kV HT VCB Panels',
      'LT Busduct & PCC / PDB Panels',
      'VFD Panels & PLC Panels',
      'DG Synchronization Panels',
      'Control Desks & Junction Boxes',
    ],
    applications: [
      'Power control and distribution for process plants',
      'Drive and automation panels for rolling mill, paper and wire drawing plants',
      'HVAC, fire and car-park ventilation panels for commercial buildings',
      'Generator synchronisation for captive power',
    ],
    related: ['tmt-rolling-mills', 'pulp-paper', 'building-automation'],
  },
  {
    slug: 'vfd-drive-systems',
    title: 'VFD & Drive Systems',
    short: '0.37kW – 1200kW AC & DC drives',
    summary: 'Selection, supply, panel integration and on-site commissioning of AC and DC drives from 0.37kW to 1200kW.',
    img: `${A}/ACDrive2-Otp3Yuwc.jpg`,
    badge: 'Drives',
    overview: [
      'We supply and commission Variable Frequency Drives from 0.37kW to 1200kW for all industrial motor applications, along with DC drives for retrofit and new installations.',
      'For multi-motor processes we engineer complete sectional drive packages — including panel integration, parameter setting and operator training.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'AC VFD (VVVF) drives up to 1200kW',
      'DC drives for retrofit & new installations',
      'Sectional drive systems for wire drawing & rolling mills',
      'Complete motor packages with panel integration',
      'On-site commissioning & operator training',
    ],
    applications: [
      'Multi-block wire drawing lines',
      'Rolling mill stands, shears and cooling beds',
      'Sectional paper machine drives',
      'Pumps, fans and HVAC motor control',
    ],
    related: ['wire-drawing', 'tmt-rolling-mills', 'pulp-paper'],
  },
  {
    slug: 'plc-scada-dcs',
    title: 'PLC, SCADA & DCS',
    short: 'SCADA, HMI & cloud dashboards',
    summary: 'PLC programming, SCADA software, HMI design and DCS packages — from design to commissioning.',
    img: `${A}/SoftwareSCADA1-DfJZpc-G.jpg`,
    badge: 'Automation',
    overview: [
      'Our engineering team delivers PLC-based automation from design through commissioning, with SCADA software, HMI design and cloud-based data acquisition built around each plant.',
      'We have delivered PLC, SCADA and DCS packages for projects with L&T, Danieli and Tenova, and DCS systems for paper and continuous process industries.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'PLC-based automation — design to commissioning',
      'DCS for paper & pulp and process industries',
      'SCADA software development',
      'HMI design and cloud-based data acquisition',
    ],
    applications: [
      'Full-plant SCADA for rolling mills',
      'DCS for paper machines and stock preparation',
      'Coil processing and cut-to-length line control',
      'Special purpose machine automation',
    ],
    related: ['tmt-rolling-mills', 'pulp-paper', 'coil-processing-lines'],
  },
  {
    slug: 'energy-management',
    title: 'Energy Management & Audit',
    short: 'Energy monitoring, audit & KWH reports',
    summary: 'Energy audits, real-time energy dashboards and power utilisation reporting for industrial plants.',
    img: `${A}/EMS0-DQTTRtlR.png`,
    badge: 'Energy & IoT',
    overview: [
      'Our Energy Management System (EMS) gives plants real-time visibility of power consumption, with KWH reports, power factor reporting and grid/DG supply monitoring.',
      'We also carry out energy audits and prepare power utilisation reports to identify where consumption can be reduced.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'Energy audit & power utilisation reports',
      'Real-time energy dashboards and KWH reports',
      'WBSEDCL grid & DG supply monitoring',
      'Power factor reporting',
      'IoT-based plant energy analytics',
    ],
    applications: [
      'Jute, paper and process industries',
      'Plants with mixed grid and DG power supply',
      'Commercial buildings and infrastructure',
    ],
    related: ['pulp-paper', 'building-automation'],
  },
  {
    slug: 'machine-management',
    title: 'Machine Management (MMS)',
    short: 'Machine analytics & IoT data',
    summary: 'Machine data acquisition, analytics and IoT dashboards that show how plant equipment is performing.',
    img: `${A}/MMS0-T2dTi101.jpg`,
    badge: 'Energy & IoT',
    overview: [
      'Our Machine Management System (MMS) collects operating data from plant machinery and presents it as analytics and IoT dashboards, so production teams can track machine utilisation and performance.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'Machine data acquisition from PLCs and controllers',
      'Machine utilisation and production analytics',
      'IoT dashboards',
      'Cloud-based data acquisition',
    ],
    applications: [
      'Machine shops and CNC lines',
      'Wire drawing and coil processing lines',
      'Multi-machine production plants',
    ],
    related: ['machinery-cnc', 'wire-drawing', 'coil-processing-lines'],
  },
  {
    slug: 'project-consultancy',
    title: 'Project Consultancy',
    short: 'HT/LT design, layout & supervision',
    summary: 'HT and LT system design, equipment layout, cable scheduling and supervision of erection and commissioning.',
    img: `${A}/SiteErection0-2JH8nkwL.jpg`,
    badge: 'Engineering',
    overview: [
      'Our engineers provide project engineering consultancy from HT substation design and single-line diagrams through to equipment layout and cable scheduling.',
      'We also supervise erection and commissioning at site, so the installed system matches the design intent.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'HT & LT system design and SLD',
      'HT substation design',
      'Equipment layout',
      'Cable scheduling',
      'Supervision of erection & commissioning',
    ],
    applications: [
      'New plant electrification',
      'Plant expansion and capacity upgrades',
      'HT substation projects',
    ],
    related: ['tmt-rolling-mills', 'pulp-paper'],
  },
  {
    slug: 'erection-commissioning',
    title: 'Site Erection & Commissioning',
    short: 'Turnkey installation & commissioning',
    summary: 'On-site installation, commissioning and after-sales support at customer plants across India and South Asia.',
    img: `${A}/SiteErection2-CZuJ0WN6.jpg`,
    badge: 'Turnkey EPC',
    overview: [
      'We provide on-site installation, commissioning and after-sales support at customer plants across India and South Asia.',
      'For turnkey projects we take responsibility from design and panel manufacturing through erection, commissioning and handover.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'Turnkey electrical EPC',
      'Panel, cable and equipment installation',
      'Drive, PLC and SCADA commissioning',
      'Load trials and handover',
      'Operator training',
    ],
    applications: [
      'Greenfield plant electrification',
      'Automation upgrades in running plants',
      'HT and LT panel installation',
    ],
    related: ['tmt-rolling-mills', 'pulp-paper', 'building-automation'],
  },
  {
    slug: 'drive-repair',
    title: 'AC / DC Drive Repairing',
    short: 'On-site servicing & spares',
    summary: 'Repair, servicing and spares support for AC and DC drives, on site and at our facility.',
    img: `${A}/ACDrive1-DFEnjOhF.webp`,
    badge: 'After-Sales',
    overview: [
      'We repair and service AC and DC drives to keep motor-driven processes running, with on-site support and spares backing.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'AC and DC drive fault diagnosis and repair',
      'On-site servicing',
      'Spares support',
      'Parameter backup and re-commissioning',
    ],
    applications: [
      'Rolling mills and wire drawing plants',
      'Paper machine sectional drives',
      'General industrial motor applications',
    ],
    related: ['tmt-rolling-mills', 'wire-drawing', 'pulp-paper'],
  },
  {
    slug: 'switchgear-maintenance',
    title: 'ACB & VCB Maintenance',
    short: 'LT ACB & 11–33kV HT VCB servicing',
    summary: 'Maintenance and servicing of LT air circuit breakers and 11kV–33kV vacuum circuit breakers.',
    img: `${A}/VCB1-C5Gp45-j.jpg`,
    badge: 'After-Sales',
    overview: [
      'We service and maintain LT air circuit breakers (ACB) and HT vacuum circuit breakers (VCB) from 11kV to 33kV, helping plants keep their switchgear reliable.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'Air circuit breaker (ACB) servicing',
      'HT vacuum circuit breaker (VCB) servicing — 11kV to 33kV',
      'Preventive and breakdown maintenance',
    ],
    applications: [
      'Plant HT substations',
      'LT power control centres',
      'Commercial building switchgear',
    ],
    related: ['tmt-rolling-mills', 'building-automation'],
  },
  {
    slug: 'amc',
    title: 'AMC & Repair',
    short: 'Annual maintenance contracts',
    summary: 'Annual maintenance contracts and after-sales support for electrical and automation systems.',
    img: `${A}/BalluffSiemens0-DhIy0x2s.jpg`,
    badge: 'After-Sales',
    overview: [
      'Our annual maintenance contracts cover electrical and automation systems, AC/DC drives and CNC machines.',
      'We provide on-site installation, commissioning and after-sales support at customer plants across India and South Asia.',
    ],
    pointsTitle: 'What We Deliver',
    points: [
      'Annual maintenance contracts (AMC)',
      'AC/DC drive repair',
      'CNC machine servicing and AMC',
      'On-site after-sales support',
    ],
    applications: [
      'Process and manufacturing plants',
      'Machine shops and CNC lines',
      'Commercial buildings',
    ],
    related: ['machinery-cnc', 'tmt-rolling-mills'],
  },
]

/* ─────────────────────────── PRODUCTS ─────────────────────────── */

export const PRODUCTS: CatalogItem[] = [
  {
    slug: 'ac-vfd-drives',
    title: 'AC / VFD Drives',
    short: '0.37kW – 1200kW, ABB System House',
    summary: 'Complete range of Variable Frequency Drives — selection, supply, panel integration and commissioning.',
    img: `${A}/ACDrive0-87i251cT.png`,
    badge: 'Authorised Distributor',
    overview: [
      'We supply Variable Frequency Drives from 0.37kW to 1200kW, covering every motor load, and support them with commissioning, repair, spares and AMC.',
    ],
    pointsTitle: 'Product Range & Support',
    points: [
      'AC drives (VVVF) for all applications',
      '0.37kW to 1200kW — covers every motor load',
      'On-site commissioning, parameter setting and training',
      'After-sales repair, spares and AMC support',
    ],
    applications: ['Wire drawing and rolling mills', 'Paper machines', 'Pumps, fans and HVAC'],
    related: ['wire-drawing', 'tmt-rolling-mills', 'pulp-paper'],
  },
  {
    slug: 'dc-drives',
    title: 'DC Drives',
    short: 'Retrofit & new DC installations',
    summary: 'DC drives for new installations and for retrofitting existing DC motor systems.',
    img: `${A}/ACDC0-qVDvyzPY.avif`,
    badge: 'Supply & Commission',
    overview: [
      'We supply and commission DC drives for new installations and retrofit ageing DC drive systems, extending the life of existing DC motors.',
    ],
    pointsTitle: 'Product Range & Support',
    points: [
      'DC drives for new installations',
      'Retrofit of existing DC drive systems',
      'Panel integration and commissioning',
      'Repair and spares support',
    ],
    applications: ['Rolling mills', 'Paper machines', 'Wire drawing'],
    related: ['tmt-rolling-mills', 'pulp-paper', 'wire-drawing'],
  },
  {
    slug: 'plc-controllers',
    title: 'PLC & Automation Controllers',
    short: 'Hardware, programming & servo control',
    summary: 'PLC hardware selection, programming, commissioning and operator training.',
    img: `${A}/SoftwareSCADA0-j6zzjK_i.jpg`,
    badge: 'System Integrator',
    overview: [
      'We select, program and commission PLC hardware and automation controllers, including servo controllers for machine tools and special purpose machines.',
    ],
    pointsTitle: 'Product Range & Support',
    points: [
      'PLC hardware selection and panel design',
      'Custom programming for process & sequence control',
      'Servo controllers for machine tools & SPMs',
      'DCS packages for continuous process industries',
    ],
    applications: ['Process plants', 'Machine tools and SPMs', 'Coil processing lines'],
    related: ['machinery-cnc', 'coil-processing-lines', 'pulp-paper'],
  },
  {
    slug: 'balluff-sensors',
    title: 'Balluff Sensors',
    short: 'Authorised SI — East India, Bangladesh & Nepal',
    summary: 'Authorised System Integrator for Balluff India covering East India, Bangladesh and Nepal — full sensor range.',
    img: `${A}/BalluffSiemens0-DhIy0x2s.jpg`,
    badge: 'Authorised SI',
    overview: [
      'As Authorised System Integrator for Balluff India in East India, Bangladesh and Nepal, we supply and integrate Balluff industrial sensors, RFID and IO-Link products.',
    ],
    pointsTitle: 'Product Range',
    points: [
      'Inductive, capacitive and magnetic proximity sensors',
      'Photoelectric sensors and linear position systems',
      'RFID for industrial track & trace',
      'IO-Link smart sensor technology',
    ],
    applications: ['Machine automation', 'Material handling and track & trace', 'Process monitoring'],
    related: ['machinery-cnc', 'coil-processing-lines'],
  },
  {
    slug: 'ipa-weighing',
    title: 'IPA Weighing Solutions',
    short: 'Load cells & weigh feeders',
    summary: 'Authorised System Integrator for IPA India — load cells, weigh feeders and weighing automation.',
    img: `${A}/IPA1-CuAJbc8b.jpg`,
    badge: 'Authorised SI',
    overview: [
      'As Authorised System Integrator for IPA India, we supply load cells, weigh feeders and belt weighers, and integrate them with plant PLC systems.',
    ],
    pointsTitle: 'Product Range',
    points: [
      'Load cells for industrial weighing & force measurement',
      'Gravimetric and volumetric weigh feeders',
      'Belt weighers and conveyor weighing systems',
      'Complete PLC integration and commissioning',
    ],
    applications: ['Bulk material dosing', 'Conveyor weighing', 'Batching systems'],
    related: ['furnaces-ccm', 'pulp-paper'],
  },
  {
    slug: 'bolted-panels',
    title: 'Bolted Panels (PCC/MCC)',
    short: 'PCC, MCC, control desks & junction boxes',
    summary: 'Bolted PCC and MCC panels, control desks and junction boxes built at our Narendrapur facility.',
    img: `${A}/BoltedPanels0-DoAsP7Dl.jpg`,
    badge: 'In-House Manufacturing',
    overview: [
      'We manufacture bolted PCC and MCC panels, control desks and junction boxes at our in-house facility at Narendrapur, Kolkata.',
    ],
    pointsTitle: 'Product Range',
    points: [
      'Power Control Centre (PCC) panels',
      'Motor Control Centre (MCC) panels',
      'Control desks and operator consoles',
      'Junction boxes and marshalling panels',
    ],
    applications: ['Plant power distribution', 'Motor control for process lines', 'Operator control rooms'],
    related: ['tmt-rolling-mills', 'pulp-paper', 'building-automation'],
  },
  {
    slug: 'lt-busduct',
    title: 'LT Busduct',
    short: 'Prefabricated busbar trunking',
    summary: 'Prefabricated LT busbar trunking for power distribution.',
    img: `${A}/LTBusduct0-CFfIjQlh.jpg`,
    badge: 'In-House Manufacturing',
    overview: [
      'We manufacture LT busducts — prefabricated busbar trunking for distributing power between transformers, PCCs and load centres.',
    ],
    pointsTitle: 'Product Range',
    points: [
      'Prefabricated LT busbar trunking',
      'Transformer-to-PCC connections',
      'Supply, installation and commissioning',
    ],
    applications: ['Industrial plant power distribution', 'Commercial buildings'],
    related: ['building-automation', 'tmt-rolling-mills'],
  },
]

/* ─────────────────────────── INDUSTRIES (approved list) ─────────────────────────── */

export const INDUSTRIES: CatalogItem[] = [
  {
    slug: 'tmt-rolling-mills',
    title: 'TMT Rolling Mills',
    short: 'Flying shear, cooling bed, full plant SCADA',
    summary: 'Complete electrical and automation for rolling mill projects — flying shear, cooling bed, coil processing and full plant SCADA.',
    img: `${A}/TMTRollingMills2-CFNQYEss.jpg`,
    overview: [
      'We deliver complete electrical and automation packages for TMT rolling mills, including drives, PLC control and full-plant SCADA.',
      'Our rolling mill work includes PLC, MCC and SCADA systems for projects with Danieli.',
    ],
    pointsTitle: 'Solutions',
    points: ['Flying Shear', 'Crop & Cobble Shear', 'Continuous Stands', 'Cooling Bed', 'Full Plant SCADA'],
    applications: ['Mill stand drives', 'Shear control', 'Plant-wide monitoring'],
    related: ['vfd-drive-systems', 'plc-scada-dcs', 'panel-manufacturing'],
  },
  {
    slug: 'furnaces-ccm',
    title: 'Furnaces & CCM',
    short: 'Induction furnace & continuous casting machine',
    summary: 'Electrical and automation for induction and re-melting furnaces and continuous casting machines.',
    img: `${A}/FurnacesCCM0-CeP1hwHz.webp`,
    overview: [
      'We provide electrical and automation solutions for induction and re-melting furnaces and continuous casting machines (CCM) in steel plants.',
    ],
    pointsTitle: 'Solutions',
    points: ['Induction & re-melting furnaces', 'Continuous casting machines (CCM)', 'Power distribution panels', 'PLC control & SCADA monitoring'],
    applications: ['Steel melt shops', 'Billet casting'],
    related: ['panel-manufacturing', 'plc-scada-dcs', 'vfd-drive-systems'],
  },
  {
    slug: 'coil-processing-lines',
    title: 'Coil Processing Lines',
    short: 'CTL, slitter, HR/CR automation',
    summary: 'Cut-to-length, slitting and shearing line automation — complete drive, PLC and SCADA integration.',
    img: `${A}/CoilProcessingLines1-H8Xt7Tav.webp`,
    overview: [
      'We automate cut-to-length, slitting and shearing lines for hot-rolled and cold-rolled coil, with complete drive, PLC and SCADA integration.',
    ],
    pointsTitle: 'Solutions',
    points: ['Cut-to-Length', 'Rotary Shear', 'Flying Shear', 'HR/CR Slitter', 'Coil Dividing'],
    applications: ['Steel service centres', 'Coil processing in steel plants'],
    related: ['vfd-drive-systems', 'plc-scada-dcs'],
  },
  {
    slug: 'pulp-paper',
    title: 'Pulp & Paper',
    short: 'DCS, rewinder, sectional drives',
    summary: 'DCS implementation, rewinder upgrades, paper machine drives and PCC/MCC panels for pulp and paper plants.',
    img: `${A}/PulpPaper1-C-jgOJoy.webp`,
    overview: [
      'We deliver DCS implementation, rewinder upgrades, sectional paper machine drives and PCC/MCC panels for pulp and paper plants.',
      'Our paper industry work includes a 130 TPD paper plant automation package covering the HT substation, PCC/MCC panels, 35 sectional drives and a 2,000 I/O DCS.',
    ],
    pointsTitle: 'Solutions',
    points: ['Sectional Paper Mill Drive', 'DCS Systems', 'Rewinder Upgrades', 'Boiler Automation'],
    applications: ['Paper machines', 'Rewinders', 'Boiler houses'],
    related: ['plc-scada-dcs', 'vfd-drive-systems', 'panel-manufacturing'],
  },
  {
    slug: 'wire-drawing',
    title: 'Wire Drawing',
    short: 'Multi-block drives, PLC control',
    summary: 'Multi-block sectional drive control with precise speed synchronisation.',
    img: `${A}/WireDrawingPlants0-CPzQ96lK.jpg`,
    overview: [
      'We engineer multi-block sectional drive systems for wire drawing plants, including 8-block multi-wire systems with precise speed synchronisation.',
    ],
    pointsTitle: 'Solutions',
    points: ['Multi-Block Drive Systems', 'Sectional Drive Automation', 'PLC Control', 'SCADA Monitoring'],
    applications: ['Multi-block wire drawing machines', 'Multi-wire lines'],
    related: ['vfd-drive-systems', 'plc-scada-dcs'],
  },
  {
    slug: 'building-automation',
    title: 'Building Automation',
    short: 'BMS, HVAC, fire & CPV panels',
    summary: 'BMS, HVAC drive control, fire panels, car parking ventilation and energy management for commercial projects.',
    img: `${A}/BuildingAutomation0-CIw5a8aZ.jpg`,
    overview: [
      'We provide BMS software, MCC/PLC panels for HVAC, fire panels, car parking ventilation (CPV) control and energy management for commercial and infrastructure projects.',
    ],
    pointsTitle: 'Solutions',
    points: ['MCC/PLC for HVAC', 'Car Parking Ventilation', 'Fire Panels', 'BMS Software'],
    applications: ['Commercial buildings', 'Infrastructure projects'],
    related: ['panel-manufacturing', 'energy-management'],
  },
  {
    slug: 'cold-storage-automation',
    title: 'Cold Storage Automation',
    short: 'Refrigeration & temperature control',
    summary: 'Refrigeration control and temperature monitoring for cold storage and cold chain facilities.',
    img: `${A}/ColdStorageAutomation0-CjPTIht3.jpg`,
    overview: [
      'We automate refrigeration and temperature control for cold storage and cold chain facilities, with control panels and monitoring.',
    ],
    pointsTitle: 'Solutions',
    points: ['Refrigeration control systems', 'Temperature monitoring', 'Control panels', 'Energy monitoring'],
    applications: ['Cold storages', 'Cold chain warehouses'],
    related: ['panel-manufacturing', 'energy-management'],
  },
  {
    slug: 'machinery-cnc',
    title: 'Machinery & CNC',
    short: 'Retrofitment, SPM automation',
    summary: 'CNC machine retrofitment and special purpose machine automation — servo integration and maintenance contracts.',
    img: `${A}/MMS1-TLPix5Vx.png`, // CLIENT REVIEW: replace with a CNC / machinery photo
    overview: [
      'We retrofit CNC machines and automate special purpose machines (SPMs), including servo integration, and support them with maintenance contracts.',
    ],
    pointsTitle: 'Solutions',
    points: ['CNC Retrofitment', 'SPM Automation', 'Machine Tool Design', 'CNC AMC'],
    applications: ['Machine shops', 'Automotive component plants', 'Special purpose machines'],
    related: ['plc-scada-dcs', 'machine-management', 'amc'],
  },
]

export const findService  = (slug: string) => SERVICES.find(s => s.slug === slug)
export const findProduct  = (slug: string) => PRODUCTS.find(s => s.slug === slug)
export const findIndustry = (slug: string) => INDUSTRIES.find(s => s.slug === slug)
