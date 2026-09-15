import { couple, event } from '../content.js'

function stageClass(phase) {
  return [
    'envelope-stage',
    phase === 'opening' && 'is-opening',
    phase === 'open' && 'is-open',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function Envelope({ phase, onOpen }) {
  return (
    <div className={stageClass(phase)}>
      <div className="envelope">
        <div className="env-lining" />

        <div className="letter-peek" aria-hidden={phase === 'closed'}>
          <p className="names">
            {couple.groom}
            <span className="amp">&</span>
            {couple.bride}
          </p>
          <p className="when">{event.dateLabel}</p>
        </div>

        <div className="env-body paper-fill" />

        <div className="env-half env-half-bottom">
          <div className="side-flap left paper-fill" aria-hidden="true" />
          <div className="side-flap right paper-fill" aria-hidden="true" />
          <img src="/jasmine-flourish.png" alt="" className="env-flourish bl" />
          <img src="/jasmine-flourish.png" alt="" className="env-flourish br" />

          <div className="flap bottom">
            <div className="flap-face flap-front paper-fill" />
            <div className="flap-face flap-liner" />
          </div>
        </div>

        <div className="env-half env-half-top">
          <div className="flap top">
            <div className="flap-face flap-front paper-fill">
              <img src="/jasmine-flourish.png" alt="" className="env-flourish tl" />
              <img src="/jasmine-flourish.png" alt="" className="env-flourish tr" />
              <svg className="creases" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="0" x2="50" y2="100" />
                <line x1="100" y1="0" x2="50" y2="100" />
              </svg>
            </div>
            <div className="flap-face flap-liner" />
          </div>
        </div>

        <div className="seal-anchor">
          <span className="seal-pulse" />
          <img src="/wax-seal.png" alt="" className="seal-img" />
        </div>

        <div className="crumbs" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
      </div>

      {phase === 'closed' && (
        <button className="open-hit" type="button" onClick={onOpen} aria-label="Open the invitation" />
      )}
    </div>
  )
}
