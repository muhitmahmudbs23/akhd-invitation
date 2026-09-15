import { useEffect, useMemo, useState } from 'react'
import { copy, couple, event, verse } from '../content.js'
import { asset } from '../asset.js'
import Petals from './Petals.jsx'

const COUNTDOWN_UNITS = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Mins'],
  ['seconds', 'Secs'],
]

function OrnamentalRule() {
  return (
    <svg className="ornament-rule" viewBox="0 0 280 16" aria-hidden="true">
      <line x1="0" y1="8" x2="108" y2="8" />
      <path d="M140 2 L144 8 L140 14 L136 8 Z" />
      <line x1="172" y1="8" x2="280" y2="8" />
    </svg>
  )
}

function SideVine({ side }) {
  return (
    <svg className={`side-vine ${side}`} viewBox="0 0 72 520" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path className="vine-stem" d="M36 8 C28 90 48 170 32 250 C18 330 50 400 36 512" />
        <ellipse className="vine-leaf" cx="18" cy="70" rx="14" ry="7" transform="rotate(-35 18 70)" />
        <ellipse className="vine-leaf" cx="54" cy="120" rx="16" ry="8" transform="rotate(28 54 120)" />
        <ellipse className="vine-leaf" cx="16" cy="190" rx="15" ry="7" transform="rotate(-40 16 190)" />
        <ellipse className="vine-leaf" cx="56" cy="250" rx="14" ry="7" transform="rotate(32 56 250)" />
        <ellipse className="vine-leaf" cx="20" cy="320" rx="16" ry="8" transform="rotate(-28 20 320)" />
        <ellipse className="vine-leaf" cx="52" cy="390" rx="15" ry="7" transform="rotate(36 52 390)" />
        <ellipse className="vine-leaf" cx="22" cy="460" rx="14" ry="7" transform="rotate(-32 22 460)" />
        <g className="vine-bloom" transform="translate(36 96)">
          <circle r="3.2" />
          <ellipse cx="0" cy="-9" rx="4" ry="7" />
          <ellipse cx="8" cy="-2" rx="4" ry="7" transform="rotate(72)" />
          <ellipse cx="5" cy="8" rx="4" ry="7" transform="rotate(144)" />
          <ellipse cx="-5" cy="8" rx="4" ry="7" transform="rotate(216)" />
          <ellipse cx="-8" cy="-2" rx="4" ry="7" transform="rotate(288)" />
        </g>
        <g className="vine-bloom" transform="translate(36 280)">
          <circle r="3.2" />
          <ellipse cx="0" cy="-9" rx="4" ry="7" />
          <ellipse cx="8" cy="-2" rx="4" ry="7" transform="rotate(72)" />
          <ellipse cx="5" cy="8" rx="4" ry="7" transform="rotate(144)" />
          <ellipse cx="-5" cy="8" rx="4" ry="7" transform="rotate(216)" />
          <ellipse cx="-8" cy="-2" rx="4" ry="7" transform="rotate(288)" />
        </g>
        <g className="vine-bloom" transform="translate(36 430)">
          <circle r="3.2" />
          <ellipse cx="0" cy="-9" rx="4" ry="7" />
          <ellipse cx="8" cy="-2" rx="4" ry="7" transform="rotate(72)" />
          <ellipse cx="5" cy="8" rx="4" ry="7" transform="rotate(144)" />
          <ellipse cx="-5" cy="8" rx="4" ry="7" transform="rotate(216)" />
          <ellipse cx="-8" cy="-2" rx="4" ry="7" transform="rotate(288)" />
        </g>
      </g>
    </svg>
  )
}

function CornerFlourish({ className }) {
  return <img src={asset('jasmine-flourish.png')} alt="" className={className} aria-hidden="true" />
}

function useCountdown(iso) {
  const target = useMemo(() => new Date(iso).getTime(), [iso])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const remain = Math.max(0, target - now)
  return {
    days: Math.floor(remain / 86_400_000),
    hours: Math.floor((remain / 3_600_000) % 24),
    minutes: Math.floor((remain / 60_000) % 60),
    seconds: Math.floor((remain / 1000) % 60),
    done: remain <= 0,
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Invitation({ visible }) {
  const time = useCountdown(event.dateISO)

  useEffect(() => {
    if (!visible) return
    const nodes = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-in')
        })
      },
      { threshold: 0.18 },
    )
    nodes.forEach((node) => io.observe(node))
    requestAnimationFrame(() => {
      nodes[0]?.classList.add('is-in')
    })
    return () => io.disconnect()
  }, [visible])

  return (
    <main className={`invite ${visible ? 'is-visible' : ''}`}>
      <div className="invite-bg paper-fill" />
      <div className="invite-glow" aria-hidden="true" />
      {visible && <Petals />}
      <CornerFlourish className="invite-flourish tl" />
      <CornerFlourish className="invite-flourish tr" />
      <CornerFlourish className="invite-flourish bl" />
      <CornerFlourish className="invite-flourish br" />
      <SideVine side="left" />
      <SideVine side="right" />

      <header className="section hero" data-reveal>
        <p className="arabic bismillah-hero" lang="ar" dir="rtl">
          {copy.bismillah}
        </p>
        <p className="caps kicker">{copy.kicker}</p>
        <h1 className="hero-names">
          <span className="name">{couple.groom}</span>
          <span className="amp">&</span>
          <span className="name">{couple.bride}</span>
        </h1>
        <p className="lede">{copy.lede}</p>
      </header>

      <section className="section" data-reveal>
        <OrnamentalRule />
        <p className="caps panel-label">A verse for the heart</p>
        <p className="arabic verse-arabic" lang="ar" dir="rtl">
          {verse.arabic}
        </p>
        <p className="caps ayah-ref">{verse.ref}</p>
        <blockquote className="translation">{verse.english}</blockquote>
      </section>

      <section className="section" data-reveal>
        <OrnamentalRule />
        <p className="words">{copy.words}</p>
      </section>

      <section className="section details-panel" data-reveal>
        <OrnamentalRule />
        <p className="caps panel-label">Join us</p>
        <div className="detail-duo">
          <article className="detail-col">
            <p className="caps detail-label">The hour</p>
            <p className="detail-num">{event.dateDay}</p>
            <p className="detail-title">{event.weekday}</p>
            <p className="detail-sub">
              {event.dateMonth} {event.dateYear}
              <br />
              {event.timeLabel}
            </p>
            <a className="text-link" href={event.calendarFile}>
              {copy.addCalendar}
            </a>
          </article>

          <div className="detail-rule" aria-hidden="true" />

          <article className="detail-col">
            <p className="caps detail-label">The place</p>
            <p className="detail-title is-venue">{event.venue}</p>
            <p className="detail-sub">
              {event.venueLine}
              <br />
              {event.city}
            </p>
            <a className="text-link" href={event.mapsUrl} target="_blank" rel="noreferrer">
              {copy.findWay}
            </a>
          </article>
        </div>
      </section>

      <section className="section countdown-panel" data-reveal>
        <OrnamentalRule />
        <p className="caps panel-label">Until we meet</p>
        {time.done ? (
          <p className="meta-value is-done">With gratitude</p>
        ) : (
          <div className="clock">
            {COUNTDOWN_UNITS.map(([unit, label]) => (
              <span key={unit}>
                <b>{pad(time[unit])}</b>
                <small>{label}</small>
              </span>
            ))}
          </div>
        )}
      </section>

      <section className="section gifts-panel" data-reveal>
        <OrnamentalRule />
        <p className="gifts-copy">{copy.gifts}</p>
      </section>

      <footer className="section closing" data-reveal>
        <img src={asset('wax-seal.png')} alt="" className="closing-seal" />
        <p className="caps">{copy.closing}</p>
        <p className="sign">
          {couple.groom} & {couple.bride}
        </p>
      </footer>
    </main>
  )
}
