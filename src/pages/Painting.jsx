import { useState } from 'react'
import { PAINTINGS } from '../data/paintings'
import '../styles/painting.css'

export default function Painting() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="painting-container">
      <section id="painting-hero">
        <div className="section-header">
          <h1>Painting &amp; Visual Art</h1>
          <p>Observational practice linking photographic composition with brushwork — expression where coding cannot reach.</p>
        </div>
      </section>

      <section id="painting-gallery">
        <div className="gallery-grid">
          {PAINTINGS.map((painting) => (
            <div
              key={painting.id}
              className="gallery-item"
              onClick={() => setSelectedImage(painting)}
            >
              <img src={painting.src} alt={painting.caption} />
              <div className="gallery-overlay">
                <h3>{painting.caption}</h3>
                <p>{painting.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <div className="image-info">
              <h2>{selectedImage.caption}</h2>
              <p>{selectedImage.meta}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
