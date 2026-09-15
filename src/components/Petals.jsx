const PETALS = [
  { left: '8%', size: 22, delay: '0s', duration: '14s', drift: '-32px', rotStart: '-12deg', rotEnd: '280deg' },
  { left: '18%', size: 28, delay: '1.2s', duration: '16s', drift: '24px', rotStart: '8deg', rotEnd: '340deg' },
  { left: '28%', size: 19, delay: '2.4s', duration: '12s', drift: '-18px', rotStart: '-20deg', rotEnd: '260deg' },
  { left: '38%', size: 32, delay: '0.6s', duration: '18s', drift: '42px', rotStart: '14deg', rotEnd: '390deg' },
  { left: '48%', size: 24, delay: '3.1s', duration: '15s', drift: '-54px', rotStart: '-6deg', rotEnd: '310deg' },
  { left: '58%', size: 21, delay: '1.8s', duration: '13s', drift: '16px', rotStart: '22deg', rotEnd: '350deg' },
  { left: '68%', size: 30, delay: '4.2s', duration: '17s', drift: '-40px', rotStart: '-16deg', rotEnd: '295deg' },
  { left: '78%', size: 18, delay: '2.9s', duration: '11s', drift: '36px', rotStart: '10deg', rotEnd: '330deg' },
  { left: '88%', size: 26, delay: '5s', duration: '19s', drift: '-28px', rotStart: '-8deg', rotEnd: '370deg' },
  { left: '12%', size: 20, delay: '6.4s', duration: '14s', drift: '48px', rotStart: '18deg', rotEnd: '320deg' },
  { left: '24%', size: 34, delay: '7.1s', duration: '20s', drift: '-22px', rotStart: '-24deg', rotEnd: '400deg' },
  { left: '44%', size: 17, delay: '3.8s', duration: '10s', drift: '12px', rotStart: '6deg', rotEnd: '270deg' },
  { left: '54%', size: 29, delay: '8.2s', duration: '16s', drift: '-46px', rotStart: '-10deg', rotEnd: '360deg' },
  { left: '64%', size: 23, delay: '4.9s', duration: '13s', drift: '30px', rotStart: '16deg', rotEnd: '305deg' },
  { left: '74%', size: 27, delay: '9.5s', duration: '18s', drift: '-14px', rotStart: '-18deg', rotEnd: '385deg' },
  { left: '92%', size: 21, delay: '6.8s', duration: '12s', drift: '20px', rotStart: '4deg', rotEnd: '290deg' },
]

function PetalShape() {
  return (
    <svg viewBox="0 0 40 80" aria-hidden="true">
      <path d="M20 2 C10 18 6 42 20 78 C34 42 30 18 20 2Z" />
      <path d="M20 8 C16 28 15 48 20 72" />
    </svg>
  )
}

export default function Petals() {
  return (
    <div className="petal-layer" aria-hidden="true">
      {PETALS.map((petal, index) => {
        const { left, size, delay, duration, drift, rotStart, rotEnd } = petal
        return (
          <span
            key={index}
            className="petal"
            style={{
              left,
              width: size,
              animationDelay: delay,
              animationDuration: duration,
              '--drift': drift,
              '--rot-start': rotStart,
              '--rot-end': rotEnd,
            }}
          >
            <PetalShape />
          </span>
        )
      })}
    </div>
  )
}
