import { asset } from './asset.js'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Jamiatul+Falah+Mosque+WASA+Chittagong'

export default function MasjidInvite() {
  return (
    <main className="masjid">
      <article className="card">
        <figure className="photo">
          <img
            src={asset('masjid/mosque-gombuz.png')}
            alt=""
          />
        </figure>

        <div className="inner">
          <p className="arabic" lang="ar" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="caps">The Akhd of</p>
          <h1>
            <span>Saidul</span>
            <span className="amp">&</span>
            <span>Kifayat</span>
          </h1>

          <p className="lede">
            Please join us at the masjid for a quiet Akhd, after Asar, in the
            company of family and friends.
          </p>

          <div className="rule" aria-hidden="true" />

          <p className="caps gold">After Asar</p>
          <p className="when">Monday, 28 September 2026</p>
          <p className="place">Jamiatul Falah Mosque</p>
          <p className="sub">WASA, Chittagong</p>

          <a className="way" href={MAPS_URL} target="_blank" rel="noreferrer">
            Find the way
          </a>

          <img
            className="khejur"
            src={asset('masjid/khejur.png')}
            alt=""
            aria-hidden="true"
          />

          <p className="ask">Your dua and your presence are all we ask for.</p>
          <p className="sign">Saidul & Kifayat</p>
        </div>
      </article>
    </main>
  )
}
