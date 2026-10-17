const screenshots = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/projects/${folder}/${i + 1}.jpg`);

export const portfolio = {
  name: 'Marc Eiron P. Hernandez',
  shortName: 'Marc Hernandez',
  title: 'Software Engineer',
  roles: ['Software Engineer', 'Web Developer', 'Data Analyst'],
  tagline:
    'Computer Science graduate who builds data-driven web apps, IoT systems, and automation tools from idea to deployment.',
  about:
    "I'm a Computer Science graduate exploring opportunities as a Software Engineer, Web Developer, " +
    'and Data Analyst. I enjoy working across the stack — from building responsive web and mobile apps ' +
    'to designing APIs, wrangling data, and even wiring up IoT hardware for real-world problems. I like ' +
    'taking a project from a rough idea all the way to something people can actually use, whether that ' +
    'means sketching out a database schema, building a clean and responsive interface, training a model ' +
    'on real-world data, or soldering together a sensor rig and getting it talking to the cloud. I\'m a ' +
    'fast learner who picks up new tools and frameworks quickly, and I care about writing code that is ' +
    'not just functional but maintainable and well-documented. I\'m comfortable moving between frontend, ' +
    'backend, data, and embedded systems, and I\'m always looking for the next interesting problem to ' +
    "solve alongside a team I can learn from and contribute to.",
  email: 'mark24hernandez@gmail.com',
  phone: '09391848365',
  location: 'Darasa, Tanauan City, Batangas — open to relocating to Manila',
  shortLocation: 'Batangas, PH',
  heroStack: ['React', 'Node.js', 'Python', 'Flask', 'C++', 'Power Apps', 'Power Automate'],
  social: {
    github: 'https://github.com/marc-eiron',
    linkedin: 'https://www.linkedin.com/in/mark-hernandez-84148b163',
    facebook: 'https://www.facebook.com/marc.hernandez.704631',
  },
  skills: [
    'Python',
    'C++',
    'JavaScript',
    'SQL',
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'Bootstrap',
    'React Native',
    'Expo Go',
    'Microsoft Power Apps',
    'Microsoft Power Automate',
    'MongoDB',
    'Microsoft SharePoint',
    'Firebase',
    'Flask',
    'ESP32',
    'Arduino IDE',
  ],
  projects: [
    {
      title: 'LIPAir CAST',
      description:
        'IoT-based air quality monitoring and volcanic smog forecasting system for Lipa City, built for my thesis. Detects pollutants such as particulate matter, CO, and NO2, and forecasts volcanic smog (laho) risk from Taal Volcano using an LSTM model.',
      tech: ['React', 'Flask', 'Python', 'C++', 'Firebase', 'LSTM', 'Render'],
      images: screenshots('lipaircast', 7),
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'MHUB Reservation System',
      description:
        'A school equipment reservation system that lets students and staff book tech equipment — microphones, speakers, HDMI cables, projectors, and more — ahead of time, reducing scheduling conflicts and manual tracking.',
      tech: ['React', 'Node.js', 'MongoDB'],
      images: screenshots('mhub', 7),
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Caffeinate',
      description:
        'A fully functional coffee shop point-of-sale mobile application. Handles order management, menu customization, and transaction processing, built and tested on a real device using Expo Go.',
      tech: ['React Native', 'Expo Go', 'MongoDB', 'Node.js'],
      images: screenshots('caffeinate', 4),
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'BARDY',
      description:
        'A locally-run, background AI study companion for Windows. Supports voice commands, AI flashcard and quiz generation, document summarization, and a focus mode, all processed on-device for privacy — no cloud dependency required.',
      tech: ['Tauri', 'React', 'TypeScript', 'Rust', 'Ollama', 'Python', 'FastAPI', 'SQLite'],
      images: screenshots('bardy', 17),
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Xtravagala',
      description:
        'An event organization and management web app for organizers and attendees. Organizers create events with location, schedule, type, and capacity, while attendees track the events they are joining, receive notifications, and add events to their calendar.',
      tech: ['React', 'MongoDB', 'GitHub'],
      images: screenshots('xtravagala', 6),
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Inventory Management System',
      description:
        'A web-based inventory management system that helps a company organize its stock efficiently. Supports full CRUD operations to keep item records accurate, plus sorting by item ID, stock quantity, and category for easier tracking.',
      tech: ['React', 'MongoDB', 'Git'],
      images: screenshots('inventory', 8),
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Job Finder',
      description:
        'A mobile app for searching job opportunities, applying to suitable positions, and tracking applications. Pulls live job listings from a REST API and uses MongoDB to store saved jobs and application records.',
      tech: ['React Native', 'MongoDB', 'REST API', 'Git', 'Expo Go'],
      images: screenshots('jobfinder', 4),
      liveUrl: '#',
      repoUrl: '#',
    },
  ],
  experience: [
    {
      role: 'ICT System Developer Intern',
      company: 'Makati Medical Center',
      period: 'Feb 2026 – Apr 2026',
      highlights: [
        'Developed and implemented a User Deactivation Tracker System for the ICT System Development Team, supporting account deactivation tracking across multiple departments.',
        'Built the frontend using Microsoft Power Apps and used Microsoft SharePoint as the database for storing and managing tracker records.',
        'Designed an automated workflow using Microsoft Power Automate to streamline the logging and tracking of accounts for deactivation of resigning employees.',
        'Supported coordination among ICT, HR, and Outsourced Employee Management departments through a centralized tracking process.',
      ],
    },
  ],
};
