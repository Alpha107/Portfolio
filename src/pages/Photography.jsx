import { useState } from 'react'
import { PHOTOS } from '../data/photos'
import '../styles/photography.css'

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'street', 'nature']
  const filteredPhotos = filter === 'all' ? PHOTOS : PHOTOS.filter(p => p.cat === filter)

  return (
    <div className="photography-container">
      <section id="photography-hero">
        <div className="section-header">
          <h1>Photography</h1>
          <p>Urban life, architecture, flowers, and daily moments from the Kathmandu valley. Handle: Abashesh_Photography.</p>
        </div>
      </section>

      <section id="photography-journey">
        <div className="journey-body">
          <p>
            I bought my first camera in 2025 — a second-hand one, saved for over five months from my first
            income, because it mattered enough to wait for. It wasn't a hobby I'd been building toward, but
            a way to finally hold onto something I'd wanted since childhood: the ability to actually keep a
            moment instead of just remembering it. Growing up in Lamjung and later moving through the streets
            of Kathmandu, I'd always noticed the small, unrepeatable things — light falling a certain way, a
            stranger's expression, a building weathered just so — and never had a way to hold onto them
            beyond memory. The camera changed that.
          </p>
          <p>
            Since then, street photography has become the practice that pulls me out of screens and code
            and back into paying attention — to faces in passing, to Boudhanath at dusk, to the quiet
            architecture of the valley. It's also taught me things that feed back into my engineering work:
            framing, patience, and knowing when to wait for the right moment instead of forcing it. What
            started as catching up on years of moments I'd missed has become a discipline of its own — one
            photograph, one walk through the city, at a time.
          </p>
        </div>
      </section>

      <section id="photography-filters">
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section id="photography-gallery">
        <div className="gallery-grid">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => setSelectedImage(photo)}
            >
              <img src={photo.src} alt={photo.title} />
              <div className="gallery-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="image-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.year} · {selectedImage.cat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
