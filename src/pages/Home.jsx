import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { EXPERIENCE } from '../data/experience'
import { EDUCATION, CERTIFICATIONS } from '../data/education'
import { SKILLS } from '../data/skills'
import '../styles/home.css'

const EMAILJS_SERVICE_ID  = 'service_0wym43n'
const EMAILJS_TEMPLATE_ID = 'template_metknli'
const EMAILJS_PUBLIC_KEY  = 'kqfUagLVb89qhUvgm'

/* ── Swap this path to change the hero/about profile photo ── */
const HERO_IMAGE = 'images/hero.jpg'

const PROJECTS = [
  {
    id: 1,
    title: 'Obstacle Avoidance & Line-Following Robot',
    category: 'Robotics · Embedded Systems',
    description: 'Sensor-integrated robotic navigation system with optimized hardware-software interaction for autonomous path following.',
    tags: ['Arduino', 'Sensors', 'C++', 'Embedded Systems'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 2,
    title: 'Sound & Remote Controlled Robots',
    category: 'Robotics · Prototyping',
    description: 'Sound and remote-controlled robotic prototypes with full hardware-software integration and responsive control systems.',
    tags: ['Arduino', 'Motor Control', 'RF/Bluetooth', 'C++'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 3,
    title: 'Smart Medicine Dispenser',
    category: 'Robotics · IoT · Prototyping',
    description: 'Automated dispenser opening compartments based on time and proximity; includes GSM notifications for patient medication reminders.',
    tags: ['Arduino', 'RTC Module', 'GSM', 'Servo', 'C++'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 4,
    title: 'Self-Balancing Robot — ESP32 Firmware',
    category: 'Robotics · Embedded Systems',
    description: 'ESP32 firmware for a self-balancing two-wheel robot, implementing real-time sensor fusion and PID control for dynamic stability.',
    tags: ['ESP32', 'PID Control', 'C++', 'Sensor Fusion'],
    github: 'https://github.com/Alpha107/Self-Balancing-Robot-ESP32-Firmware'
  },
  {
    id: 5,
    title: 'Wall-E-Inspired Balancing Robot',
    category: 'Robotics · Mechanical Design',
    description: 'A personal robot inspired by Wall-E, featuring two drive wheels, a support wheel, and a sensor-equipped head — exploring mechanical design, sensor integration, and balance management.',
    tags: ['Arduino', 'Mechanical Design', 'Ultrasonic Sensors', 'C++'],
    github: 'https://github.com/Alpha107/Wall-E-Inspired-Two-Wheel-Balancing-Robot'
  },
  {
    id: 6,
    title: 'Wildfire Detection System',
    category: 'Embedded Systems · IoT · Safety',
    description: 'ESP32-based early fire detection system using MQ-2 smoke sensors and infrared flame sensors; triggers local alarms and dispatches timestamped SMS alerts via GSM module for real-time forest fire monitoring.',
    tags: ['ESP32', 'IoT', 'GSM', 'Sensors', 'C++'],
    github: 'https://github.com/Alpha107/Wildfire-Detection-System-Using-ESP32'
  },
  {
    id: 7,
    title: 'ESP32 Battery Telemetry Monitor',
    category: 'Embedded Systems · IoT · Dashboard',
    description: 'Real-time battery telemetry monitoring system streaming voltage, current, and health metrics from an ESP32 to a live web dashboard.',
    tags: ['ESP32', 'IoT', 'TypeScript', 'Real-Time Dashboard'],
    github: 'https://github.com/Alpha107/ESP32-Based-Battery-Telemetry-Monitor'
  },
  {
    id: 8,
    title: 'IoT Smart Systems',
    category: 'IoT · Automation',
    description: 'Smart irrigation, parking, and water tank monitoring systems built with IoT principles and real-time data feedback loops.',
    tags: ['IoT', 'Arduino', 'Automation', 'C++'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 9,
    title: 'Smart Attendance System — Face Recognition',
    category: 'IoT · Computer Vision',
    description: 'Face-recognition-based attendance system using an ESP32-CAM for image capture and Python for recognition and logging, automating classroom or office check-ins.',
    tags: ['ESP32-CAM', 'Face Recognition', 'Python', 'OpenCV', 'IoT'],
    github: 'https://github.com/Alpha107/Smart-Attendance-System-Face-Recognition-via-ESP32-CAM'
  },
  {
    id: 10,
    title: 'Smart Energy Monitor',
    category: 'IoT · Automation · Data Visualization',
    description: 'Real-time energy consumption monitoring system tracking usage patterns and providing data-driven insights for efficiency optimization.',
    tags: ['Python', 'IoT', 'Data Visualization', 'Automation'],
    github: 'https://github.com/Alpha107/Smart-Energy-Monitor'
  },
  {
    id: 11,
    title: 'Video-in-Video Steganography',
    category: 'Deep Learning · Major Project',
    description: 'Embedded one video inside another using deep learning; developed optimized encoding/decoding pipelines for imperceptible data hiding.',
    tags: ['Deep Learning', 'Python', 'CNNs', 'Data Security'],
    github: 'https://github.com/Alpha107/Deep-Learning-Based-Video-in-Video-Steganography'
  },
  {
    id: 12,
    title: 'Fruit Spoilage Detection System',
    category: 'Computer Vision · Minor Project',
    description: 'CNN-based spoilage detection across Apple, Banana, Orange, and Grapes. Built a custom combined_generator enabling multi-preprocessing pipelines simultaneously — iterating 8-10 models to reach 97.82% accuracy and 98% F1-score.',
    tags: ['CNN', 'Python', 'OpenCV', 'Custom Generator', 'Adam Optimizer'],
    github: 'https://github.com/Alpha107/Fruit-Spoilage-Detection-System'
  },
  {
    id: 13,
    title: 'Handwritten Digit Recognition',
    category: 'Deep Learning · CNN',
    description: 'CNN model for MNIST handwritten digit classification; tuned hyperparameters to reduce overfitting and compared architectures for optimal performance.',
    tags: ['CNN', 'Python', 'NumPy', 'MNIST', 'Deep Learning'],
    github: 'https://github.com/Alpha107'
  },
  {
    id: 14,
    title: 'Nepali Plate Recognition',
    category: 'ML · Computer Vision · Digit Recognition',
    description: 'Automatic number plate recognition system recognizing English and Nepali characters; addresses multilingual and compound glyph complexities.',
    tags: ['CNN', 'OpenCV', 'TensorFlow', 'Python', 'NumPy'],
    github: 'https://github.com/Alpha107/Nepali-Number-Plate-Recognition-System'
  },
  {
    id: 15,
    title: 'RoboInventory',
    category: 'Web Application · Management',
    description: 'Full-stack inventory and workflow management for robotics labs; centralizes component tracking, workflow, and financial logging.',
    tags: ['Flask', 'HTML/CSS/JS', 'Python', 'MySQL'],
    github: 'https://github.com/Alpha107/RoboInventory'
  },
  {
    id: 16,
    title: 'AgroNepal Intelligence',
    category: 'Web App · ML · NLP',
    description: 'AI-driven agricultural platform for all 77 Nepal districts; combines satellite climate data, ML, and geographic visualization for crop recommendations.',
    tags: ['Python', 'ML', 'Data Visualization', 'NLP', 'Flask'],
    github: 'https://github.com/Alpha107/AgroNepal-Intelligence'
  },
  {
    id: 17,
    title: 'Nepal News Map Intelligence',
    category: 'Web App · NLP · Geospatial',
    description: 'Bilingual (English & Nepali) intelligence dashboard that geographically tags and visualizes breaking news across all 77 Nepal districts using custom NER, choropleth mapping, and a real-time async ingestion pipeline.',
    tags: ['FastAPI', 'Python', 'Leaflet.js', 'SQLite', 'NLP'],
    github: 'https://github.com/Alpha107/Nepal-News-Map-Intelligence-Platform'
  },
  {
    id: 18,
    title: 'WorldNewsViewer — 3D Globe',
    category: 'Web App · AI · Data Visualization',
    description: 'Real-time geopolitical dashboard on a WebGL 3D globe; performs in-browser AI sentiment analysis and semantic event clustering across 6 news categories using TensorFlow.js and Universal Sentence Encoder — no backend required.',
    tags: ['Three.js', 'Globe.gl', 'TensorFlow.js', 'JavaScript', 'WebGL'],
    github: 'https://github.com/Alpha107/WorldNewsViewer-3D-Global-News-Simulator'
  },
  {
    id: 19,
    title: 'Breast Cancer Detection System',
    category: 'ML · Medical AI · Classification',
    description: 'Comparative study of CNN, Random Forest, Logistic Regression, and Decision Tree on 569 breast mass samples; CNN achieved 98.25% accuracy with full precision/recall/F1 analysis and correlation heatmaps.',
    tags: ['CNN', 'Scikit-learn', 'Python', 'Random Forest', 'Pandas'],
    github: 'https://github.com/Alpha107/Breast-Cancer-Detection-System-using-CNN-Logistic-Regression-and-Random-Forest-Classifier'
  },
  {
    id: 20,
    title: 'Nvidia Stock Price Prediction',
    category: 'Deep Learning · Time Series · Finance',
    description: 'Parallel CNN and LSTM models predicting Nvidia stock prices from historical OHLCV data; CNN outperformed LSTM achieving R² of 0.986, RMSE of 1.40 — demonstrating CNN\'s strength in local time-series pattern extraction.',
    tags: ['CNN', 'LSTM', 'TensorFlow', 'Python', 'Time Series'],
    github: 'https://github.com/Alpha107/Nvidia-Stock-Price-Prediction-Model-using-CNN-and-LSTM'
  },
  {
    id: 21,
    title: 'Audio Steganography — Spread Spectrum',
    category: 'Signal Processing · Data Security',
    description: 'Covert data embedding in audio using Direct Sequence Spread Spectrum (DSSS); spreads hidden data across wide frequency bands via pseudo-random sequences — achieving SNR of 40.27 dB and MSE of 1.44×10⁻⁶ for imperceptible hiding.',
    tags: ['Python', 'DSP', 'DSSS', 'Signal Processing', 'Audio'],
    github: 'https://github.com/Alpha107/Audio-Steganography-using-Spread-Spectrum'
  },
  {
    id: 22,
    title: 'Location-Based Restaurant Discovery App',
    category: 'Web App · FastAPI · Streamlit',
    description: 'A location-based restaurant discovery app powered entirely by free and open data sources — no API key, billing, or credit card required.',
    tags: ['FastAPI', 'Streamlit', 'Python', 'Geolocation'],
    github: 'https://github.com/Alpha107/Recipe-Generator'
  },
  {
    id: 23,
    title: 'Face Mask Detection System',
    category: 'Computer Vision · CNN',
    description: 'CNN-based real-time face mask detection system for public health compliance monitoring.',
    tags: ['CNN', 'OpenCV', 'Python', 'Computer Vision'],
    github: 'https://github.com/Alpha107/Face-Mask-Detection-System'
  },
  {
    id: 24,
    title: 'Loan Approval Prediction',
    category: 'ML · Classification',
    description: 'CNN-based model predicting loan approval outcomes from applicant financial and demographic data.',
    tags: ['CNN', 'Python', 'TensorFlow', 'Classification'],
    github: 'https://github.com/Alpha107/Loan-Approval-Prediction-using-Convolutional-Neural-Network-CNN-'
  },
  {
    id: 25,
    title: 'Audio Steganography — DCT',
    category: 'Signal Processing · Data Security',
    description: 'Covert data embedding in audio signals using Discrete Cosine Transform (DCT) coefficients for imperceptible, frequency-domain data hiding.',
    tags: ['Python', 'DSP', 'DCT', 'Signal Processing', 'Audio'],
    github: 'https://github.com/Alpha107/Audio-Steganography-using-DCT'
  },
  {
    id: 26,
    title: 'Audio Steganography — DWT',
    category: 'Signal Processing · Data Security',
    description: 'Covert data embedding in audio using Discrete Wavelet Transform (DWT) decomposition for robust, imperceptible data hiding across frequency sub-bands.',
    tags: ['Python', 'DSP', 'DWT', 'Signal Processing', 'Audio'],
    github: 'https://github.com/Alpha107/Audio-Steganography-using-DWT'
  }
]

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formSent, setFormSent] = useState(null) // null | 'sending' | 'success' | 'error'

  /* Scroll-in animations */
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSent('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setFormSent('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setFormSent('error')
    }
    setTimeout(() => setFormSent(null), 7000)
  }

  return (
    <div className="home-container">

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-grid-bg" />

        <div className="hero-content">
          <span className="hero-tag" data-animate>Engineer &amp; Creator</span>
          <h1 className="hero-title" data-animate data-delay="1">
            An Engineer by Degree,<br />
            <em>A Creator by Nature.</em>
          </h1>
          <p className="hero-description" data-animate data-delay="2">
            Computer engineer focusing on artificial intelligence, machine learning, and robotics.
            Previously instructed coding and robotics in Kathmandu — now actively seeking
            new opportunities to build systems that merge software with physical world applications.
          </p>
          <div className="hero-cta" data-animate data-delay="3">
            <a href="#projects" className="cta-btn primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Projects
            </a>
            <a href="#contact" className="cta-btn secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get in Touch
            </a>
            <Link to="/photography" className="cta-btn ghost">Photography Portfolio</Link>
          </div>
          <div className="hero-stats" data-animate data-delay="4">
            <div className="stat"><span className="stat-value">2025</span><span className="stat-label">BE Completed</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-value">150+</span><span className="stat-label">Students Mentored</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-value">26+</span><span className="stat-label">AI/ML Projects</span></div>
          </div>
        </div>

        <div className="hero-visual" data-animate data-delay="1">
          <div className="hero-photo-frame">
            <img src={HERO_IMAGE} alt="Abashesh Ranabhat" />
            <div className="hero-availability">
              <span className="avail-dot" />
              Open to opportunities
            </div>
          </div>
          <div className="hero-photo-accent" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="section-num">02</div>
        <div className="section-label" data-animate>About Me</div>
        <h2 className="section-title" data-animate>Graduate Engineer &amp; Creative Technologist</h2>

        <div className="about-body">
          <div className="about-columns">
            <div className="about-col" data-animate>
              <p>
                Growing up in <strong>Lamjung, Nepal</strong>, I was fascinated by how systems worked — mechanical,
                natural, and eventually computational. That curiosity carried me to Kathmandu, where I earned my
                <strong> Bachelor of Engineering in Computer Engineering</strong> from National College of Engineering in 2025,
                specializing in Artificial Intelligence, Machine Learning, and Robotics.
              </p>
              <p>
                My academic journey wasn't just classroom-deep. I presented original research at
                <strong> ICT-CEEL 2023</strong> at Khopa College of Engineering, exploring intelligent systems
                at the intersection of software and physical-world robotics. That experience cemented my belief
                that meaningful engineering lives at boundaries — between disciplines, between theory and hardware,
                between data and decision.
              </p>
            </div>
            <div className="about-col" data-animate data-delay="1">
              <p>
                After graduating, I completed a <strong>Data Science internship at Index IT Hub</strong> and worked
                as a <strong>Freelance Data Annotator</strong>, gaining hands-on exposure across the full machine
                learning pipeline — from raw data curation to model evaluation. These experiences sharpened my
                understanding of what separates academic prototypes from production-grade systems.
              </p>
              <p>
                Most recently, as a <strong>Coding &amp; Robotics Instructor at Mero Coding Class</strong>, I designed
                and delivered structured training in Python, AI/ML, and hands-on robotics for students of all levels.
                Teaching proved to be the most clarifying exercise of my technical career — explaining complex systems
                precisely enough for a student to rebuild them from scratch is a discipline that made every
                subsequent project more thoughtful. I am now looking ahead to new challenges.
              </p>
            </div>
          </div>

          <div className="about-journey" data-animate data-delay="1">
            <p className="about-journey-text">
              Outside engineering, I practice <strong>street photography</strong> — documenting urban life,
              architecture, and quiet moments across the Kathmandu valley — and I <strong>paint</strong>, an
              observational discipline that trains the eye for composition and the subtleties that algorithms
              still cannot fully capture. Both feed back into my technical work, shaping how I design interfaces,
              visualize data, and communicate ideas to people who have never written a line of code.
            </p>
          </div>

          <div className="about-facts" data-animate data-delay="2">
            {[
              { value: '2025', label: 'BE Computer Engineering', sub: 'National College of Engineering' },
              { value: '26+',  label: 'AI / ML Projects Built',  sub: 'Computer vision · NLP · Robotics' },
              { value: '150+', label: 'Students Mentored',       sub: 'Python · AI · Embedded Systems' },
              { value: '2',    label: 'Creative Disciplines',    sub: 'Street Photography · Painting' },
            ].map((f, i) => (
              <div key={i} className="about-fact-card">
                <span className="fact-value">{f.value}</span>
                <span className="fact-label">{f.label}</span>
                <span className="fact-sub">{f.sub}</span>
              </div>
            ))}
          </div>

          <div className="about-contact" data-animate data-delay="3">
            <a href="mailto:ranajames983@gmail.com" className="contact-chip">✉ ranajames983@gmail.com</a>
            <a href="tel:+9779866255983" className="contact-chip">☎ +977-9866255983</a>
            <span className="contact-chip">◎ Bhaisepati, Lalitpur, Nepal</span>
            <a href="https://github.com/Alpha107" target="_blank" rel="noreferrer" className="contact-chip">⌥ github.com/Alpha107</a>
            <a href="https://linkedin.com/in/AbasheshRanabhat" target="_blank" rel="noreferrer" className="contact-chip">in linkedin.com/in/AbasheshRanabhat</a>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="section-num">03</div>
        <div className="section-label" data-animate>Skills</div>
        <h2 className="section-title" data-animate>Technical &amp; Professional Skills</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([key, cat], i) => (
            <div key={key} className="skills-cat-card" data-animate data-delay={String(i % 3)}>
              <h4 className="skills-cat-title">{cat.label}</h4>
              <div className="skills-chips">
                {cat.items.map((skill, j) => (
                  <span key={j} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="section-num">04</div>
        <div className="section-label" data-animate>Experience</div>
        <h2 className="section-title" data-animate>Professional Journey</h2>
        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.id} className="timeline-item" data-animate data-delay={String(i)}>
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="tl-header">
                  <div>
                    <h3 className="tl-title">{exp.title}</h3>
                    <p className="tl-org">{exp.company} &middot; {exp.location}</p>
                  </div>
                  <span className="tl-period">{exp.period}</span>
                </div>
                <p className="tl-desc">{exp.description}</p>
                <ul className="tl-highlights">
                  {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="section-num">05</div>
        <div className="section-label" data-animate>Projects</div>
        <h2 className="section-title" data-animate>AI, ML &amp; Robotics Work</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card" data-animate data-delay={String((project.id - 1) % 3)}>
              <span className="project-num">{project.id < 10 ? `0${project.id}` : project.id}</span>
              <div className="project-cat">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education">
        <div className="section-num">06</div>
        <div className="section-label" data-animate>Education</div>
        <h2 className="section-title" data-animate>Academic Background</h2>
        <div className="edu-grid">
          <div className="edu-degrees">
            {EDUCATION.map((edu, i) => (
              <div key={edu.id} className="edu-card" data-animate data-delay={String(i)}>
                <div className="edu-year">{edu.year}</div>
                <div className="edu-body">
                  <h3>{edu.degree}</h3>
                  <p className="edu-field">{edu.field}</p>
                  <p className="edu-institution">{edu.institution} &middot; {edu.location}</p>
                  {edu.highlights && (
                    <ul className="edu-highlights">
                      {edu.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="edu-certs" data-animate>
            <div className="certs-block">
              <h3 className="certs-title">Certifications</h3>
              <div className="certs-list">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="cert-item">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="certs-block">
              <h3 className="certs-title">Conference</h3>
              <div className="cert-item">
                <span className="cert-name">ICT-CEEL 2023</span>
                <span className="cert-issuer">Khopa College of Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREATIVE ── */}
      <section id="creative">
        <div className="section-label" data-animate>Creative Work</div>
        <h2 className="section-title" data-animate>Beyond Engineering</h2>
        <p className="section-intro" data-animate>
          Visual arts and technical prototyping complement each other in my practice.
        </p>
        <div className="creative-grid">
          {[
            { to: '/photography', icon: '◉', title: 'Street Photography', desc: 'Urban life, architecture, flowers, and daily moments from the Kathmandu valley. Started 2025.', cta: 'View Gallery →' },
            { to: '/painting',    icon: '◈', title: 'Painting & Visual Art', desc: 'Observational practice linking photographic composition with brushwork — expression where coding cannot reach.', cta: 'View Gallery →' },
            { to: '/robotics',    icon: '◇', title: 'Robotics Prototypes', desc: 'Obstacle avoidance, line-following, IoT systems, and AI-driven vision robots built from scratch.', cta: 'View Projects →' },
          ].map((item, i) => (
            <Link key={i} to={item.to} className="creative-card" data-animate data-delay={String(i)}>
              <div className="creative-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="creative-link">{item.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="section-label" data-animate>Contact</div>
        <h2 className="section-title" data-animate>Let's Connect</h2>
        <p className="section-intro" data-animate>
          Open to full-time roles, research collaborations, freelance projects, and conversations about
          AI, ML, Robotics, or anything in between.
        </p>
        <div className="contact-grid">
          <div className="contact-details" data-animate>
            {[
              { icon: '✉', label: 'Email',    val: 'ranajames983@gmail.com', href: 'mailto:ranajames983@gmail.com' },
              { icon: '☎', label: 'Phone',    val: '+977-9866255983',             href: 'tel:+9779866255983' },
              { icon: '⌥', label: 'GitHub',   val: 'github.com/Alpha107',         href: 'https://github.com/Alpha107' },
              { icon: 'in', label: 'LinkedIn', val: 'linkedin.com/in/AbasheshRanabhat', href: 'https://linkedin.com/in/AbasheshRanabhat' },
              { icon: '◎', label: 'Location', val: 'Bhaisepati, Lalitpur, Nepal', href: null },
            ].map((item, i) => (
              <div key={i} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <span className="contact-item-label">{item.label}</span>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.val}</a>
                    : <span>{item.val}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-animate data-delay="1">
            {formSent === 'success' && (
              <div className="form-banner form-banner--success">
                Message sent successfully — I'll get back to you soon!
              </div>
            )}
            {formSent === 'error' && (
              <div className="form-banner form-banner--error">
                Something went wrong. Please try again or email me directly.
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleFormChange} required placeholder="Abashesh Ranabhat" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleFormChange} required placeholder="hello@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleFormChange} required placeholder="Project collaboration / Job opportunity / ..." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleFormChange} required placeholder="Tell me about your project or opportunity..." />
            </div>
            <button type="submit" className="form-submit" disabled={formSent === 'sending'}>
              {formSent === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-logo">Abashesh <span>Ranabhat</span></span>
            <p>Computer Engineer · AI / ML / Robotics</p>
            <p className="footer-copy">© 2025 · Bhaisepati, Lalitpur, Nepal</p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <span className="footer-col-label">Navigate</span>
              <a href="#about"      onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) }}>Experience</a>
              <a href="#projects"   onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>Projects</a>
              <a href="#education"  onClick={(e) => { e.preventDefault(); document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }) }}>Education</a>
              <a href="#contact"    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-label">Work</span>
              <Link to="/photography">Photography</Link>
              <Link to="/painting">Painting</Link>
              <Link to="/robotics">Robotics</Link>
            </div>
            <div className="footer-col">
              <span className="footer-col-label">Connect</span>
              <a href="https://github.com/Alpha107" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/AbasheshRanabhat" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:ranajames983@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Built with React &amp; Vite</span>
          <span>Bhaisepati, Lalitpur, Nepal</span>
        </div>
      </footer>

    </div>
  )
}
