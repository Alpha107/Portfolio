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
