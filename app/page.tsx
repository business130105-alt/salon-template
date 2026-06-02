const salonData = {
  name: "Lumière",
  tagline: "Where hair becomes art",
  address: "Haarlemmerstraat 42, Amsterdam",
  phone: "020 123 4567",
  email: "info@lumiere.nl",
  hours: [
    { day: "Monday – Friday", time: "9:00 – 19:00", open: true },
    { day: "Saturday", time: "9:00 – 17:00", open: true },
    { day: "Sunday", time: "Closed", open: false },
  ],
  services: [
    { name: "Haircut & Blow-dry", category: "Cut", price: 55 },
    { name: "Full Colour", category: "Colour", price: 95 },
    { name: "Balayage", category: "Colour", price: 130 },
    { name: "Keratin Treatment", category: "Treatment", price: 150 },
    { name: "Men's Cut", category: "Cut", price: 35 },
    { name: "Deep Conditioning", category: "Treatment", price: 40 },
  ],
  team: [
    { name: "Lisa van den Berg", role: "Senior Stylist · 12 yrs" },
    { name: "Emma Jansen", role: "Colour Specialist" },
    { name: "Mia de Vries", role: "Texture & Treatment" },
  ],
};

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans">

      {/* Nav */}
      <nav className="flex justify-between items-center mb-12 border-b border-gray-200 pb-6">
        <span className="text-2xl font-light tracking-widest uppercase">{salonData.name}</span>
        <div className="flex gap-6 text-xs tracking-widest uppercase text-gray-400">
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">{salonData.address}</p>
        <h1 className="text-5xl font-light leading-tight mb-6">
          Where hair<br /><em>becomes art</em>
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
          A boutique salon for precision cutting, colour mastery and transformative treatments.
        </p>
        <button className="bg-black text-white text-xs tracking-widest uppercase px-7 py-3 mr-3">
          Book now
        </button>
        <button className="border border-gray-300 text-xs tracking-widest uppercase px-7 py-3">
          View services
        </button>
      </section>

      {/* Services */}
      <section id="services" className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Services & pricing</p>
        <div className="grid grid-cols-2 gap-0">
          {salonData.services.map((s) => (
            <div key={s.name} className="flex justify-between items-baseline border-b border-gray-100 py-4 pr-8">
              <div>
                <div className="text-sm">{s.name}</div>
                <div className="text-xs text-gray-400">{s.category}</div>
              </div>
              <div className="text-lg font-light">€{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">The team</p>
        <div className="grid grid-cols-3 gap-4">
          {salonData.team.map((m) => (
            <div key={m.name} className="border border-gray-100 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-light text-gray-400 mb-4">
                {m.name[0]}
              </div>
              <div className="text-sm font-medium">{m.name}</div>
              <div className="text-xs text-gray-400 mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Contact</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Address</div>
            <div className="text-sm">{salonData.address}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</div>
            <div className="text-sm">{salonData.phone}</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 mt-3">Email</div>
            <div className="text-sm">{salonData.email}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Opening hours</div>
            {salonData.hours.map((h) => (
              <div key={h.day} className="flex justify-between text-xs py-1 border-b border-gray-100 last:border-0">
                <span>{h.day}</span>
                <span className={h.open ? "text-green-600" : "text-gray-400"}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 pt-6 flex justify-between items-center">
        <span className="text-sm font-light tracking-widest uppercase">{salonData.name}</span>
        <span className="text-xs text-gray-400">© 2026 · Next.js + Vercel</span>
      </footer>

    </main>
  );
}
