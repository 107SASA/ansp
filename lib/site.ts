/**
 * Single source of truth for company contact details.
 *
 * PENDING CLIENT CONFIRMATION: the approved company domain and email addresses.
 * The website domain and email domain currently differ (anspl.co.in vs automationnetwork.net).
 * Once the client confirms, update the values below — header, footer and contact page all read from here.
 */
export const SITE = {
  name: 'Automation Network & Services Pvt. Ltd.',
  shortName: 'ANSPL',
  domain: 'anspl.co.in',
  email: {
    primary: 'kiran@automationnetwork.net',
    support: 'msupport@automationnetwork.net',
  },
  phones: ['+91 98305 05000', '+91 93395 05012', '+91 95648 24342'],
  whatsapp: '919830505000',
  location: 'Kolkata, West Bengal',
  offices: [
    {
      label: 'Head Office & Works',
      short: 'Ramchandrapur, Narendrapur\nKolkata – 700 103',
      lines: ['Ramchandrapur, Narendrapur', 'P.S. Sonarpur, Kolkata – 700 103', 'West Bengal, India'],
      map: 'https://maps.google.com/?q=Ramchandrapur+Narendrapur+Kolkata',
    },
    {
      label: 'Corporate Office',
      short: '3rd Floor, 44A, Shyama Pally\nJadavpur, Kolkata – 700 032',
      lines: ['3rd Floor, 44A, Shyama Pally', 'Jadavpur, Kolkata – 700 032', 'West Bengal, India'],
      map: 'https://maps.google.com/?q=44A+Shyama+Pally+Jadavpur+Kolkata',
    },
  ],
} as const

export const tel = (p: string) => `tel:${p.replace(/\s+/g, '')}`
