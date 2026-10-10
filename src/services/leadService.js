/*
  LEAD SERVICE
  ------------------------------------------------------------------
  The one place where form submissions are sent.

  TODAY (no backend): opens WhatsApp with the visitor's details filled in,
  so enquiries still reach the team.

  LATER (with an API): replace the body of submitLead() with a fetch call,
  e.g.
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error('Could not send your details');
      return { channel: 'api' };

  The Contact section does not need to change.
*/

import { siteConfig } from '@/data/siteConfig';

export async function submitLead(lead) {
  const message = [
    'New enquiry from the website',
    `Name: ${lead.name}`,
    `Work email: ${lead.email}`,
    `Mobile number: ${lead.phone}`,
    `Requirements: ${lead.requirement}`,
    lead.message ? `Message: ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  window.open(`${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  return { channel: 'whatsapp' };
}
