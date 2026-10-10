/*
  META ADS — LOCATIONS WE ALSO SERVED + OTHER SERVICES
  Long chip lists (collapsed to a few rows with a "Show all" button so the
  page stays short on phones). Content lives in this component.
*/

import { useState } from 'react';
import Icon from '@/assets/icons/Icon';

const content = {
  title: 'Locations We Also Served',
  // Unique city names, in the order they appear on the live page.
  locations: [...new Set(
    'Mumbai, Navi Mumbai, Thane, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Gurugram, Noida, Faridabad, Ghaziabad, Jaipur, Lucknow, Chandigarh, Mohali, Indore, Bhopal, Surat, Vadodara, Nagpur, Nashik, Visakhapatnam, Vijayawada, Coimbatore, Kochi, Thiruvananthapuram, Mysuru, Mangaluru, Madurai, Tiruchirappalli, Bhubaneswar, Cuttack, Patna, Ranchi, Raipur, Dehradun, Agra, Kanpur, Varanasi, Meerut, Prayagraj, Ludhiana, Amritsar, Jalandhar, Guwahati, Siliguri, Ajmer, Alwar, Kota, Udaipur, Jodhpur, Bikaner, Bareilly, Moradabad, Mathura, Haridwar, Roorkee, Shimla, Jammu, Srinagar, Jamshedpur, Dhanbad, Gwalior, Jabalpur, Aurangabad, Kolhapur, Solapur, Hubballi, Tirupati, Nellore, Salem, Tirunelveli, Puducherry, Thrissur, Kozhikode, Kannur, Dibrugarh, Shillong, Gangtok, Panaji, Margao, Bilaspur, Rourkela, Kalyan, Dombivli, Pimpri-Chinchwad, Rajkot, Jamnagar, Bhavnagar, Gandhinagar, Ujjain, Guntur, Warangal, Kakinada, Rajahmundry, Karimnagar, Nizamabad, Dharwad, Tumakuru, Shivamogga, Davanagere, Kalaburagi, Vellore, Erode, Tiruppur, Hosur, Durgapur, Asansol, Howrah, Kharagpur, Haldia, Malda, Darbhanga, Muzaffarpur, Gaya, Bhagalpur, Purnia, Bokaro, Hazaribag, Ambala, Panchkula, Sonipat, Panipat, Karnal, Hisar, Rohtak, Rewari, Bhiwani, Bathinda, Pathankot, Hoshiarpur, Moga, Firozpur, Patiala, Yamunanagar, Saharanpur, Muzaffarnagar, Firozabad, Rampur, Shahjahanpur, Sitapur, Faizabad, Ayodhya, Rae Bareli, Sultanpur, Bahraich, Unnao, Banda, Chitrakoot, Ratlam, Sagar, Satna, Rewa, Dewas, Khandwa, Burhanpur, Akola, Amravati, Nanded, Latur, Sangli, Jalgaon, Dhule, Ahmednagar, Satara, Nandurbar, Chandrapur, Bhandara, Yavatmal, Wardha, Gondia, Balaghat, Korba, Durg, Bhilai, Jagdalpur, Sambalpur, Balasore, Jharsuguda'.split(', '),
  )],
  otherTitle: 'Other Services',
  otherServices: [
    'Get Your Guide Listing Agency',
    'Tour Radar Listing Agency',
    'Klook Listing Agency',
    'Expedia listing Agency',
    'Amazon Marketing Agency',
    'Flipkart Listing Agency',
    'Instamart & Swiggy Listing Agency',
    'Meesho Listing Agency',
    'Zepto Listing Agency',
    'Zomato Listing Agency',
  ],
};

const COLLAPSED = 36;

export default function MetaLocations() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? content.locations : content.locations.slice(0, COLLAPSED);

  return (
    <section className="bg-[#f2f5f9] py-16 sm:py-20" aria-labelledby="meta-locations-title">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <h2 id="meta-locations-title" className="font-sans text-[clamp(1.5rem,2.8vw,2rem)] font-medium tracking-tight !text-navy">
            {content.title}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {list.map((city) => (
              <li key={city} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-charcoal">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                {city}
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => setShowAll((v) => !v)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1d5fbf]" aria-expanded={showAll}>
            {showAll ? 'Show fewer locations' : `Show all ${content.locations.length} locations`}
            <Icon name="chevronDown" className={`size-4 transition-transform ${showAll ? 'rotate-180' : ''}`} strokeWidth={2.4} />
          </button>
        </div>

        <aside className="self-start rounded-md bg-brand p-6 text-white">
          <h2 className="font-sans text-lg font-semibold tracking-normal !text-white">{content.otherTitle}</h2>
          <ul className="mt-4 space-y-2">
            {content.otherServices.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm">
                <span className="grid size-4 shrink-0 place-items-center rounded-full bg-white text-brand">
                  <Icon name="check" className="size-2.5" strokeWidth={3.5} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
