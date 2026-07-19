import '../styles/robotics.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Obstacle Avoidance RC Car',
    category: 'Robotics · Embedded Systems',
    description: 'Autonomous robot that detects and avoids obstacles using ultrasonic sensors, demonstrating sensor-based navigation and real-time decision-making.',
    year: '2023',
    tags: ['Arduino', 'Ultrasonic Sensors', 'C++', 'Embedded Systems'],
    github: 'https://github.com/Alpha107/Obstacle-Avoidance-RC-Car-Using-Arduino-Uno'
  },
  {
    id: 2,
    title: 'Line-Following Robot — ESP32',
    category: 'Robotics · Embedded Systems',
    description: 'Sensor-integrated robotic navigation system with optimized hardware-software interaction for autonomous path following.',
    year: '2023',
    tags: ['ESP32', 'IR Sensors', 'C++', 'Embedded Systems'],
    github: 'https://github.com/Alpha107/Line-Following-Robot-Using-ESP32'
  },
  {
    id: 3,
    title: 'Sound-Controlled Robot',
    category: 'Robotics · Prototyping',
    description: 'Remote-controlled robot that responds to sound commands such as claps or loud noises, demonstrating analog signal processing and motor control based on audio input.',
    year: '2023',
    tags: ['Arduino', 'Sound Sensor', 'Motor Control', 'C++'],
    github: 'https://github.com/Alpha107/Sound-Controlled-Robot-Using-Arduino-Uno'
  },
  {
    id: 4,
    title: 'RC Fire-Fighting Truck — ESP32',
    category: 'Robotics · Prototyping',
    description: 'Autonomous and remote-controlled robot designed to detect fires and extinguish them using sensors and a water pump, combining robotics, sensor integration, and actuator control.',
    year: '2023',
    tags: ['ESP32', 'Flame Sensor', 'Water Pump', 'C++'],
    github: 'https://github.com/Alpha107/RC-Fire-Fighting-Truck-Using-ESP32'
  },
  {
    id: 5,
    title: 'Smart Medicine Dispenser',
    category: 'Robotics · IoT · Prototyping',
    description: 'Automated dispenser opening compartments based on time and proximity; includes GSM notifications for patient medication reminders.',
    year: '2023',
    tags: ['Arduino', 'RTC Module', 'GSM Module', 'Servo', 'C++'],
    github: 'https://github.com/Alpha107/Smart-Medicine-Dispenser-Using-Arduino-Uno'
  },
  {
    id: 6,
    title: 'Self-Balancing Robot — ESP32 Firmware',
    category: 'Robotics · Embedded Systems',
    description: 'ESP32 firmware for a self-balancing two-wheel robot, implementing real-time sensor fusion and PID control for dynamic stability.',
    year: '2026',
    tags: ['ESP32', 'PID Control', 'C++', 'Sensor Fusion'],
    github: 'https://github.com/Alpha107/Self-Balancing-Robot-ESP32-Firmware'
  },
  {
    id: 7,
    title: 'Wall-E-Inspired Balancing Robot',
    category: 'Robotics · Mechanical Design',
    description: 'A personal robot inspired by Wall-E, featuring two drive wheels, a support wheel, and a sensor-equipped head — exploring mechanical design, sensor integration, and balance management.',
    year: '2025',
    tags: ['Arduino', 'Mechanical Design', 'Ultrasonic Sensors', 'C++'],
    github: 'https://github.com/Alpha107/Wall-E-Inspired-Two-Wheel-Balancing-Robot'
  },
  {
    id: 8,
    title: 'Wildfire Detection System',
    category: 'Embedded Systems · IoT · Safety',
    description: 'ESP32-based early fire detection system using MQ-2 smoke sensors and infrared flame sensors; triggers local alarms and dispatches timestamped SMS alerts via GSM module for real-time forest fire monitoring.',
    year: '2025',
    tags: ['ESP32', 'IoT', 'GSM', 'Sensors', 'C++'],
    github: 'https://github.com/Alpha107/Wildfire-Detection-System-Using-ESP32'
  },
  {
    id: 9,
    title: 'ESP32 Battery Telemetry Monitor',
    category: 'Embedded Systems · IoT · Dashboard',
    description: 'Real-time battery telemetry monitoring system streaming voltage, current, and health metrics from an ESP32 to a live web dashboard.',
    year: '2026',
    tags: ['ESP32', 'IoT', 'TypeScript', 'Real-Time Dashboard'],
    github: 'https://github.com/Alpha107/ESP32-Based-Battery-Telemetry-Monitor'
  },
  {
    id: 10,
    title: 'Smart Parking System — ESP32',
    category: 'IoT · Automation',
    description: 'Automated parking management system that detects slot availability using sensors and provides guidance via LEDs and an LCD display.',
    year: '2023',
    tags: ['ESP32', 'IoT', 'Sensors', 'Automation'],
    github: 'https://github.com/Alpha107/Smart-Parking-System-Using-ESP32'
  },
  {
    id: 11,
    title: 'Smart Irrigation System',
    category: 'IoT · Automation',
    description: 'Automated irrigation system that monitors soil moisture and water levels to water plants efficiently, demonstrating sensor-based automation and actuator control.',
    year: '2023',
    tags: ['Arduino', 'Soil Moisture Sensor', 'IoT', 'Automation'],
    github: 'https://github.com/Alpha107/Smart-Irrigation-System-Using-Arduino-Uno'
  },
  {
    id: 12,
    title: 'Smart Attendance System — Face Recognition',
    category: 'IoT · Computer Vision',
    description: 'Face-recognition-based attendance system using an ESP32-CAM for image capture and Python for recognition and logging, automating classroom or office check-ins.',
    year: '2026',
    tags: ['ESP32-CAM', 'Face Recognition', 'Python', 'OpenCV', 'IoT'],
    github: 'https://github.com/Alpha107/Smart-Attendance-System-Face-Recognition-via-ESP32-CAM'
  },
  {
    id: 13,
    title: 'Smart Energy Monitor',
    category: 'IoT · Automation · Data Visualization',
    description: 'Real-time energy consumption monitoring system tracking usage patterns and providing data-driven insights for efficiency optimization.',
    year: '2026',
    tags: ['Python', 'IoT', 'Data Visualization', 'Automation'],
    github: 'https://github.com/Alpha107/Smart-Energy-Monitor'
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
            13 projects spanning autonomous robots, embedded systems, and IoT automation.
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
