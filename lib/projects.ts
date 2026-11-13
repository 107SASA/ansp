/**
 * Project portfolio — shared by the homepage (Recent Projects) and /projects.
 *
 * CLIENT REVIEW (per homepage review, item 4): for each project confirm
 *  - client name (and permission to publish it)
 *  - precise location (city / state) — entries marked `loc: ''` or a broad region need detail
 *  - a short, verifiable description of the work completed
 */

const A = 'https://anspl.co.in/assets'

export type Project = {
  tag: string
  title: string
  client: string
  /** What the system does / where it is applied */
  application: string
  /** City / state. Leave empty until confirmed — the card hides empty values. */
  loc: string
  desc: string
  img: string
}

export const PROJECTS: Project[] = [
  {
    tag: 'Pulp & Paper', title: '130 TPD Paper Plant Automation', client: 'Balaji Paper & Newsprint Pvt. Ltd.',
    application: 'Turnkey electrical & DCS', loc: '',
    desc: 'HT substation, PCC/MCC panels, 35 sectional drives and a 2,000 I/O DCS for a 130 TPD paper plant.',
    img: `${A}/PulpPaper0-CFYr6q1z.jpeg`,
  },
  {
    tag: 'Wire Drawing', title: '8-Block Wire Drawing Automation', client: 'Miki Wire',
    application: 'Drives + PLC + SCADA', loc: 'West Bengal',
    desc: '8-block multi-wire drawing line with sectional drives, PLC control and SCADA monitoring for precise speed synchronisation.',
    img: `${A}/WireDrawingPlants1-Cx0gL6WJ.jpg`,
  },
  {
    tag: 'Rolling Mill', title: 'Rolling Mill — SCADA & PLC', client: 'Danieli Group',
    application: 'PLC + MCC + SCADA', loc: 'East India',
    desc: 'PLC control, MCC panels and plant SCADA for a rolling mill project.',
    img: `${A}/TMTRollingMills3-D5h3I46v.jpg`,
  },
  {
    tag: 'Electrification', title: 'Sand Plant Electrification', client: 'L&T',
    application: 'Turnkey EPC', loc: 'East India',
    desc: 'Turnkey electrification of a sand plant — design, panels, installation and commissioning.',
    img: `${A}/SiteErection2-CZuJ0WN6.jpg`,
  },
  {
    tag: 'SCADA / Energy', title: 'Energy Dashboard — WBSEDCL Monitoring', client: 'Industrial Plant',
    application: 'Software + Integration', loc: 'Kolkata',
    desc: 'Energy dashboard monitoring WBSEDCL grid and DG supply, with power utilisation reporting.',
    img: `${A}/SoftwareSCADA0-j6zzjK_i.jpg`,
  },
  {
    tag: 'Drive System', title: 'Sectional Drive System', client: 'Krishna Tissues',
    application: 'Paper machine sectional drive', loc: 'West Bengal',
    desc: 'Sectional drive system for a tissue paper machine.',
    img: `${A}/PulpPaper2-BZMfCP6t.jpg`,
  },
  {
    tag: 'Panel Mfg.', title: 'PCC Panel', client: 'Bengal Tools',
    application: 'Power control centre', loc: 'Kolkata',
    desc: 'PCC panel manufactured at our Narendrapur facility and supplied for plant power distribution.',
    img: `${A}/BoltedPanels0-DoAsP7Dl.jpg`,
  },
  {
    tag: 'System Integration', title: 'Steel Plant System Integration', client: 'Tenova India',
    application: 'System integration', loc: 'East India',
    desc: 'Electrical and automation system integration for a steel plant project.',
    img: `${A}/FurnacesCCM1-38eKbwjF.jpg`,
  },
  {
    tag: 'Electrification', title: '11kV VCB Panel — Sugar Plant', client: 'Sugar Plant',
    application: 'HT panel manufacturing', loc: 'East India',
    desc: '11kV HT VCB panel manufactured and supplied for a sugar plant.',
    img: `${A}/VCB1-C5Gp45-j.jpg`,
  },
  {
    tag: 'Building Auto.', title: 'BMS & HVAC Automation', client: 'Commercial Developer',
    application: 'BMS + HVAC + Fire', loc: 'Kolkata',
    desc: 'BMS, HVAC automation and fire panels for a commercial building project.',
    img: `${A}/BuildingAutomation2-B5qBP5yI.jpg`,
  },
]
