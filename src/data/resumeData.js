export const resume = {
  name: 'Marc Eiron P. Hernandez',
  headline: 'Computer Science Graduate | Software Development | Web Development',
  contactLine: '0939-184-8365 · mark24hernandez@gmail.com · Tanauan City, Batangas, Philippines',
  summary:
    'Recent Bachelor of Science in Computer Science graduate from De La Salle Lipa with hands-on ' +
    'experience in software development, web applications, database integration, automation, ' +
    'IoT-based systems, and mobile application development. Developed academic, internship, and ' +
    'personal projects using Python, C++, JavaScript, React, React Native, Node.js, MongoDB, SQL, ' +
    'Firebase, Flask, Microsoft Power Apps, Power Automate, SharePoint, ESP32, and Arduino. ' +
    'Adaptable and motivated to contribute to software development and technology projects while ' +
    'continuing to strengthen professional skills.',
  skillGroups: [
    { label: 'Programming', items: ['Python', 'C++', 'JavaScript', 'SQL'] },
    { label: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Bootstrap'] },
    { label: 'Mobile Development', items: ['React Native', 'Expo Go'] },
    { label: 'Application & Automation', items: ['Microsoft Power Apps', 'Microsoft Power Automate'] },
    { label: 'Database & Backend', items: ['MongoDB', 'Microsoft SharePoint', 'Firebase', 'Flask'] },
    { label: 'IoT & Embedded Systems', items: ['ESP32', 'Arduino IDE', 'C++'] },
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
  projects: [
    {
      title: 'BARDY',
      subtitle: 'Offline AI Study Companion',
      highlights: [
        'Developed a desktop application designed to help users stay focused on their studies, using Tauri 2 for desktop application integration.',
        'Integrated Ollama to provide offline AI assistance, allowing users to interact with an AI companion while studying independently. The application also features offline task tracking, enabling users to set goals and monitor their progress to make studying more engaging.',
        'Implemented a social media blocking feature to minimize distractions and improve study focus. Users must complete their designated tasks and achieve their progress goals before they can unblock access to social media platforms.',
      ],
    },
    {
      title: 'Xtravagala',
      subtitle: 'Event Organization & Management Web Application',
      highlights: [
        'Developed a React-based web application for event organizers and attendees, with MongoDB used for data storage.',
        'Implemented organizer functionality for account login, event creation, event location and schedule, event type, capacity, and other event details.',
        'Implemented user functionality for viewing events they are attending, receiving event notifications, and adding events to their calendar.',
      ],
    },
    {
      title: 'Caffeinate',
      subtitle: 'Coffee Shop POS Mobile Application',
      highlights: [
        'Personally developed a React Native point-of-sale application for coffee shop operations, with MongoDB used as the database and the application tested through Expo Go.',
        'Implemented core POS functionality including product selection, add-to-cart, checkout, payments, inventory/stock checking, and related transaction workflows.',
      ],
    },
    {
      title: 'LIPAir CAST',
      subtitle: 'IoT-Based Air Quality Monitoring and Volcanic Smog Forecasting in Lipa City Using LSTM',
      highlights: [
        'Developed an IoT-based device for monitoring air quality in Lipa City, Batangas, with data presented through a public-facing web application.',
        'Developed the backend using Firebase and Flask to support data management and integration of the machine learning model.',
        'Built the physical monitoring device using ESP32 and air pollutant sensors, with C++ code implemented in Arduino IDE.',
      ],
    },
    {
      title: 'MHUB Equipment Reservation System',
      subtitle: null,
      highlights: [
        'Developed a web-based multimedia equipment reservation system that allows students to reserve school equipment without visiting the office to queue.',
        "Designed the web application's UI/UX and connected the database design to support system functionality.",
      ],
    },
  ],
  education: [
    {
      school: 'De La Salle Lipa (DLSL)',
      period: '2022 – 2026',
      detail: 'Bachelor of Science in Computer Science',
    },
    {
      school: 'First Asia Institute of Technology and Humanities (FAITH)',
      period: '2019 – 2022',
      detail: 'Senior High School – STEM',
    },
    {
      school: 'First Asia Institute of Technology and Humanities (FAITH)',
      period: '2016 – 2019',
      detail: 'Junior High School',
    },
  ],
  certifications: [
    'Cybersecurity Awareness Seminar – DICT / Mapua Malayan Colleges Laguna',
    'Geospatial Analysis Course – Kaggle',
    'DLSL Campus Technology Talk featuring Generative AI – Facilitated by Accenture, De La Salle Lipa',
    'Facial Expression Recognition Seminar – De La Salle Lipa',
    'Makati Medical Center Internship Program – Makati Medical Center',
    'AppBuildersPH Hackathon – Cyberzone, SM Makati',
  ],
  organizations: ['Junior Philippines Computer Society – Lipa Chapter | Member, 2023 – Present'],
  references: [
    { name: 'Adomar R. Ilao', title: 'BSIT Program Chair, Mapua Malayan College Laguna' },
    { name: 'Donna Garcia', title: 'BSCS Program Chair, De La Salle Lipa' },
  ],
};
