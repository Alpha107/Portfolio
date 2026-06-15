import '../styles/robotics.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Video-in-Video Steganography',
    category: 'Deep Learning · Major Project',
    description: 'Embedded one video inside another using deep learning; developed optimized encoding/decoding pipelines for imperceptible data hiding.',
    year: '2024-2025',
    tags: ['Deep Learning', 'Python', 'CNNs', 'Data Security'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 2,
    title: 'Fruit Spoilage Detection System',
    category: 'Computer Vision',
    description: 'CNN-based real-time fruit classification with live camera feed integration; applied data augmentation for robust model performance.',
    year: '2024',
    tags: ['CNN', 'OpenCV', 'Python', 'Real-time Processing'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 3,
    title: 'Nepali Plate Recognition',
    category: 'ML · Computer Vision · Digit Recognition',
    description: 'Automatic number plate recognition system recognizing English and Nepali characters; addresses multilingual and compound glyph complexities.',
    year: '2023-2024',
    tags: ['CNN', 'OpenCV', 'TensorFlow', 'Python', 'NumPy'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 4,
    title: 'Obstacle Avoidance & Line-Following Robot',
    category: 'Robotics · Embedded Systems',
    description: 'Sensor-integrated robotic navigation systems with optimized hardware-software interaction for autonomous path following.',
    year: '2023',
    tags: ['Arduino', 'Sensors', 'C++', 'Embedded Systems'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 5,
    title: 'IoT Smart Systems',
    category: 'IoT · Automation',
    description: 'Smart irrigation, smart parking, and water tank monitoring systems built with IoT principles and real-time data feedback.',
    year: '2023',
    tags: ['IoT', 'Arduino', 'Automation', 'C++'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 6,
    title: 'Sound & Remote Controlled Robots',
    category: 'Robotics · Prototyping',
    description: 'Sound and remote-controlled robotic prototypes with full hardware-software integration and responsive control systems.',
    year: '2023',
    tags: ['Arduino', 'Motor Control', 'RF/Bluetooth', 'C++'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 7,
    title: 'RoboInventory',
    category: 'Web Application · Automation Management',
    description: 'Full-stack inventory and workflow management for robotics labs; centralizes tracking, component management, and financial logging.',
    year: '2024',
    tags: ['Flask', 'HTML/CSS/JS', 'Python', 'MySQL'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 8,
    title: 'Smart Medicine Dispenser',
    category: 'Robotics · IoT · Prototyping',
    description: 'Automated dispenser opening compartments based on time and proximity; includes GSM notifications for patient medication reminders.',
    year: '2023',
    tags: ['Arduino', 'RTC Module', 'GSM Module', 'Servo', 'C++'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 9,
    title: 'AgroNepal Intelligence',
    category: 'Web Application · ML · NLP',
    description: 'AI-driven agricultural platform for all 77 Nepal districts; combines satellite climate data, ML, and geographic visualization for crop recommendations.',
    year: '2024',
    tags: ['Python', 'ML', 'Data Visualization', 'NLP', 'Flask'],
    github: 'https://github.com/Alpha107'
  }
]

export default function Robotics() {
  return (
    <div className="robotics-container">
      <section id="robotics-hero">
        <div className="section-header">
          <h1>Robotics &amp; AI Projects</h1>
          <p>
            Exploring the intersection of artificial intelligence, robotics, and innovative technology.
            9 projects spanning deep learning, computer vision, IoT, and web applications.
          </p>
        </div>
      </section>

      <section id="robotics-projects">
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div>
                  <div className="project-cat">{project.category}</div>
                  <h3>{project.title}</h3>
                </div>
                {project.year && <span className="project-year">{project.year}</span>}
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
