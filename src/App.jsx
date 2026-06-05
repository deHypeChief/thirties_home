import { useEffect, useState } from 'react'
import './App.css'

/* ============================================================
   Content
   ============================================================ */

// Real Thirties Home & Studios photography, served from /public/img.
const IMG = {
  heroA: '/img/space/space-03.jpg', // bold lounge set
  heroB: '/img/clients/client-08.jpg', // behind the scenes
  manifesto: '/img/space/space-04.jpg', // the lounge
  prod: '/img/clients/client-01.jpg', // interview / content production
  ad: '/img/clients/client-04.jpg', // short-film result
  gear: '/img/props/prop-05.jpg', // camcorder from the rental kit
  space: '/img/space/space-01.jpg', // creative space rental
  spaceA: '/img/space/space-15.jpg', // gallery — tall
  spaceB: '/img/space/space-05.jpg', // gallery
  spaceC: '/img/space/space-12.jpg', // gallery
}

const NAV = [
  ['About', '#about'],
  ['Services', '#services'],
  ['The Space', '#space'],
  ['Contact', '#contact'],
]

const SERVICES = [
  {
    n: '01',
    title: 'Content Production',
    body:
      'High-end video for brands, businesses, and people with something to say — from the first frame to the final cut.',
    tags: ['Brand films', 'Social content', 'Interviews', 'Music & events'],
    img: IMG.prod,
    cap: 'On the interview set',
  },
  {
    n: '02',
    title: 'Advertisement Creation',
    body:
      'Concept to camera. We develop and produce premium ads that look the part and do the work they were made for.',
    tags: ['Concept dev', 'Scripting', 'Direction', 'Delivery'],
    img: IMG.ad,
    cap: 'Campaign — On set',
  },
  {
    n: '03',
    title: 'Equipment Rental',
    body:
      'Professional cameras, lighting, and filming gear — ready when you are, without the agency markup.',
    tags: ['Cameras', 'Lighting', 'Audio', 'Grip & support'],
    img: IMG.gear,
    cap: 'Rental — The kit room',
  },
  {
    n: '04',
    title: 'Creative Space Rental',
    body:
      'A fully equipped space for shoots, interviews, and content days. Show up with an idea; leave with the footage.',
    tags: ['Studio floor', 'Set styling', 'Hourly / daily', 'Crew-ready'],
    img: IMG.space,
    cap: 'Space — Studio A',
  },
]

const VALUES = [
  ['Creativity', 'Every brief starts with a blank page and a better idea.'],
  ['Quality', 'Premium from pre-production to the final export.'],
  ['Innovation', 'New tools, new formats, new ways to tell it.'],
  ['Professionalism', 'On time, on brief, and easy to work with.'],
  ['Collaboration', 'Your vision and our craft, in the same room.'],
]

const ROOF = [
  'Professional cameras',
  'Lighting equipment',
  'Sound & audio',
  'Studio / creative space',
  'Editing suite & software',
]

const CONTACT = {
  address: '275 Ikenga Close, Durumi, Abuja',
  maps:
    'https://www.google.com/maps/search/?api=1&query=275+Ikenga+Close+Durumi+Abuja',
  phoneDisplay: '0901 693 3666',
  phone: '+2349016933666',
  whatsapp: '2349016933666', // international format for wa.me links
  email: 'thirtieshomeandstudios@gmail.com',
  hours: [
    ['Mon — Sat', '8:00am – 6:00pm'],
    ['Sunday', '2:00pm – 6:00pm'],
  ],
}

/* ============================================================
   Bits
   ============================================================ */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function Plate({ src, cap, className = '', i = 0 }) {
  // Rich purple gradient backs every image, so a failed load still reads
  // as an intentional duotone plate rather than a broken icon.
  return (
    <figure className={`plate ${className}`} data-reveal style={{ '--d': `${i * 90}ms` }}>
      <span className="plate__bg" />
      <img
        src={src}
        alt={cap}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      {cap && <figcaption>{cap}</figcaption>}
    </figure>
  )
}

/* ============================================================
   Navigation
   ============================================================ */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const thumbs = [
    ['/img/space/space-10.jpg', 'The space'],
    ['/img/props/prop-04.jpg', 'Rentals'],
    ['/img/clients/client-01.jpg', 'On set'],
    ['/img/space/space-13.jpg', 'The set'],
  ]

  return (
    <>
      <header
        className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-hidden' : ''}`}
      >
        <div className="wrap nav__inner">
          <a href="#top" className="nav__logo" aria-label="Thirties Home & Studios">
            <img src="/logo.png" alt="Thirties Home & Studios" />
          </a>

          <div className="nav__right">
            <a href="#contact" className="btn btn--solid nav__cta">
              Book the studio <span className="arr">↗</span>
            </a>
            <button
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="primary-menu"
              onClick={() => setOpen(true)}
            >
              <span className="nav__toggle-txt">Menu</span>
              <span className="nav__toggle-bars" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`menu ${open ? 'is-open' : ''}`}
        id="primary-menu"
        aria-hidden={!open}
      >
        <div className="menu__inner wrap">
          <div className="menu__top">
            <img
              src="/logo.png"
              alt="Thirties Home & Studios"
              className="menu__logo"
            />
            <button
              className="menu__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="menu__links" aria-label="Primary">
            {NAV.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ '--d': `${i * 60 + 140}ms` }}
              >
                <span className="menu__i">0{i + 1}</span>
                <span className="menu__label">{label}</span>
                <span className="menu__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          <div className="menu__foot">
            <div className="menu__contact">
              <span className="index-tag">Get in touch</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
              <span className="menu__addr">{CONTACT.address}</span>
            </div>
            <div className="menu__thumbs" aria-hidden="true">
              {thumbs.map(([src, cap], i) => (
                <figure
                  key={i}
                  className="menu__thumb"
                  style={{ '--d': `${i * 80 + 300}ms` }}
                >
                  <span className="menu__thumb-bg" />
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <figcaption>{cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ============================================================
   Hero
   ============================================================ */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__lead">
          <span className="eyebrow" data-reveal>
            Creative media house &amp; studio
          </span>
          <h1 className="hero__title">
            <span data-reveal style={{ '--d': '60ms' }}>the gear, the space,</span>
            <span data-reveal style={{ '--d': '160ms' }}>
              and the <em>eye</em> —
            </span>
            <span data-reveal style={{ '--d': '260ms' }}>all in one place.</span>
          </h1>
          <p className="lead hero__sub" data-reveal style={{ '--d': '360ms' }}>
            Thirties Home &amp; Studios gives creators and brands the equipment, the
            room, and the creative direction to make content that actually lands.
          </p>
          <div className="hero__cta" data-reveal style={{ '--d': '440ms' }}>
            <a href="#contact" className="btn btn--solid">
              Book the studio <span className="arr">↗</span>
            </a>
            <a href="#services" className="tlink">
              Explore our services <span className="arr">→</span>
            </a>
          </div>
          <ul className="hero__meta" data-reveal style={{ '--d': '540ms' }}>
            <li>Durumi, Abuja</li>
            <li>Gear · Space · Direction</li>
            <li>Mon–Sat · 8–6</li>
          </ul>
        </div>

        <div className="hero__media">
          <Plate src={IMG.heroA} cap="On set — Studio A" className="plate--heroA" i={2} />
          <Plate src={IMG.heroB} cap="Rolling" className="plate--heroB" i={4} />
          <div className="hero__badge" data-reveal style={{ '--d': '620ms' }}>
            <span className="hero__badge-num">04</span>
            <span className="hero__badge-txt">services under one roof</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to explore">
        <span className="it">scroll to explore</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}

/* ============================================================
   Marquee
   ============================================================ */

function Marquee() {
  const items = [
    'Content Production',
    'Advertisement Creation',
    'Equipment Rental',
    'Creative Space',
    'Creative Direction',
    'Post & Delivery',
  ]
  const track = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((t, i) => (
          <span key={i} className="marquee__item">
            {t}
            <span className="marquee__star">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   Manifesto / USP
   ============================================================ */

function Manifesto() {
  return (
    <section className="section manifesto" id="about">
      <div className="wrap manifesto__grid">
        <div className="manifesto__copy">
          <span className="eyebrow" data-reveal>
            Not just a production company
          </span>
          <h2 className="manifesto__title" data-reveal style={{ '--d': '80ms' }}>
            Most studios hand you a camera and point at the door. We built a{' '}
            <em>home</em> instead.
          </h2>
          <p className="lead" data-reveal style={{ '--d': '180ms' }}>
            Gear, space, and creative direction in one place — so your story never has
            to leave the building to get made. From the first idea to the final export,
            it all happens under one roof.
          </p>

          <div className="manifesto__mv">
            <div data-reveal style={{ '--d': '240ms' }}>
              <span className="index-tag">Mission</span>
              <p>
                To give creators and brands the tools, space, and creative direction to
                produce high-quality, impactful visual content.
              </p>
            </div>
            <div data-reveal style={{ '--d': '320ms' }}>
              <span className="index-tag">Vision</span>
              <p>
                To become a leading creative hub where innovation, storytelling, and
                premium production meet.
              </p>
            </div>
          </div>
        </div>

        <Plate
          src={IMG.manifesto}
          cap="Inside the studio"
          className="manifesto__img"
          i={2}
        />
      </div>
    </section>
  )
}

/* ============================================================
   Services
   ============================================================ */

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" data-reveal>
              What we do
            </span>
            <h2 className="services__title" data-reveal style={{ '--d': '80ms' }}>
              Four ways to <em>make</em> it.
            </h2>
          </div>
          <p className="services__intro" data-reveal style={{ '--d': '160ms' }}>
            One creative home covering everything from concept to final cut — pick the
            part you need, or all of it.
          </p>
        </div>

        <div className="services__list">
          {SERVICES.map((s, i) => (
            <article className="srv" key={s.n}>
              <div className="srv__text">
                <span className="srv__n" data-reveal>
                  {s.n}
                </span>
                <h3 className="srv__title" data-reveal style={{ '--d': '60ms' }}>
                  {s.title}
                </h3>
                <p className="srv__body" data-reveal style={{ '--d': '120ms' }}>
                  {s.body}
                </p>
                <ul className="srv__tags" data-reveal style={{ '--d': '180ms' }}>
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <Plate src={s.img} cap={s.cap} className="srv__img" i={1} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   The Space (dark feature)
   ============================================================ */

function Space() {
  return (
    <section className="section space" id="space">
      <div className="wrap space__grid">
        <div className="space__copy">
          <span className="eyebrow" data-reveal>
            The space &amp; the kit
          </span>
          <h2 className="space__title" data-reveal style={{ '--d': '80ms' }}>
            A room that’s already <em>ready</em> to roll.
          </h2>
          <p className="lead space__lead" data-reveal style={{ '--d': '160ms' }}>
            Book the studio by the hour or the day, with professional gear on hand and a
            crew that knows the room. Everything you need to shoot is already here.
          </p>

          <ul className="roof" data-reveal style={{ '--d': '240ms' }}>
            {ROOF.map((r, i) => (
              <li key={r}>
                <span className="roof__n">0{i + 1}</span>
                {r}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--ghost-light space__btn" data-reveal>
            Check availability <span className="arr">↗</span>
          </a>
        </div>

        <div className="space__gallery">
          <Plate src={IMG.spaceA} cap="The lounge" className="g g1" i={1} />
          <Plate src={IMG.spaceB} cap="The set" className="g g2" i={2} />
          <Plate src={IMG.spaceC} cap="The studio" className="g g3" i={3} />
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Values
   ============================================================ */

function Values() {
  return (
    <section className="section values">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" data-reveal>
              What we stand on
            </span>
            <h2 className="values__title" data-reveal style={{ '--d': '80ms' }}>
              Five things we don’t <em>compromise</em>.
            </h2>
          </div>
        </div>

        <ol className="values__list">
          {VALUES.map(([title, body], i) => (
            <li className="val" key={title} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="val__n">0{i + 1}</span>
              <h3 className="val__title">{title}</h3>
              <p className="val__body">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ============================================================
   Pull quote
   ============================================================ */

function Quote() {
  return (
    <section className="section quote">
      <div className="wrap quote__inner">
        <span className="quote__mark" aria-hidden="true">
          ”
        </span>
        <blockquote className="quote__text" data-reveal>
          No two projects ever leave here the <em>same</em>.
        </blockquote>
        <p className="quote__by" data-reveal style={{ '--d': '120ms' }}>
          — The Thirties Home ethos
        </p>
      </div>
    </section>
  )
}

/* ============================================================
   Contact
   ============================================================ */

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__grid">
        <div className="contact__head">
          <span className="eyebrow" data-reveal>
            Let’s make something
          </span>
          <h2 className="contact__title" data-reveal style={{ '--d': '80ms' }}>
            Tell us the idea. We’ll bring the <em>room</em>.
          </h2>
          <p className="lead" data-reveal style={{ '--d': '160ms' }}>
            Booking a shoot, renting gear, or just need a creative space for the day —
            reach out and we’ll sort the rest.
          </p>
          <div className="contact__actions" data-reveal style={{ '--d': '220ms' }}>
            <a href={`mailto:${CONTACT.email}`} className="btn btn--solid">
              Send an email <span className="arr">↗</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                "Hi Thirties Home & Studios! I'd like to enquire about booking the studio."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon />
              WhatsApp {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="contact__cards">
          <div className="ccard" data-reveal>
            <span className="index-tag">Visit</span>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="ccard__big">
              {CONTACT.address}
            </a>
            <span className="ccard__sub">Durumi, Abuja — by appointment</span>
          </div>

          <div className="ccard" data-reveal style={{ '--d': '90ms' }}>
            <span className="index-tag">Talk</span>
            <a href={`tel:${CONTACT.phone}`} className="ccard__big">
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="ccard__mail">
              {CONTACT.email}
            </a>
          </div>

          <div className="ccard" data-reveal style={{ '--d': '180ms' }}>
            <span className="index-tag">Open hours</span>
            <ul className="hours">
              {CONTACT.hours.map(([d, t]) => (
                <li key={d}>
                  <span>{d}</span>
                  <span className="hours__t">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Footer
   ============================================================ */

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png" alt="Thirties Home & Studios" className="footer__logo" />
            <p className="footer__tag">
              A creative home for content worth making. Equipment, space, and direction —
              all under one roof in Abuja.
            </p>
            <a href="#contact" className="tlink footer__cta">
              Start a project <span className="arr">→</span>
            </a>
          </div>

          <nav className="footer__col">
            <span className="index-tag">Studio</span>
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <nav className="footer__col">
            <span className="index-tag">Connect</span>
            <a href="https://www.instagram.com/thirties_home/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            <a href={`mailto:${CONTACT.email}`}>Email</a>
          </nav>

          <div className="footer__col">
            <span className="index-tag">Visit</span>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer">
              {CONTACT.address}
            </a>
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
            <span className="footer__hours">Mon–Sat 8–6 · Sun 2–6</span>
          </div>
        </div>

        <div className="footer__watermark" aria-hidden="true">
          thirties<span>home</span>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} Thirties Home &amp; Studios</span>
          <span>Durumi · Abuja · Nigeria</span>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   App
   ============================================================ */

export default function App() {
  // Single observer drives every [data-reveal] entrance.
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Space />
        <Values />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
