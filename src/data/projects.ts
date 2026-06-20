import type { ProjectItem } from '@/types';

/**
 * Projects — featured ones can be marked `featured: true`.
 * To add a project, copy a block and fill it in. See CONTENT_GUIDE.md.
 */
export const projects: ProjectItem[] = [
  {
    title: 'Brain Tumor Detection from MRI',
    description:
      'Deep-learning model using VGG16 transfer learning to classify MRI scans into “Normal” and “Tumor” categories with a full preprocessing and evaluation pipeline.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'scikit-learn', 'NumPy'],
    link: 'https://github.com/Mithunraj-M/Brain-Tumor-Detection',
    linkLabel: 'View on GitHub',
    category: 'Deep Learning',
    featured: true,
  },
  {
    title: 'Online Complaint Registration Platform',
    description:
      'Full-stack web application for citizens to report and track local infrastructure issues, with file uploads, status tracking, and a REST API backend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Multer'],
    link: 'https://github.com/Mithunraj-M/Complaint-Registration-Application',
    linkLabel: 'View on GitHub',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Restaurant Food Recommendation System',
    description:
      'Personalized food-recommendation engine built on K-Means clustering over collected dining data, with a desktop interface for live recommendations.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Tkinter'],
    link: 'https://github.com/Mithunraj-M/Food-Recommendation-System',
    linkLabel: 'View on GitHub',
    category: 'Machine Learning',
  },
  {
    title: 'Wireless Nurse Calling System (IoT)',
    description:
      'IoT nurse-calling system using ESP8266 over the MQTT protocol with Node-RED dashboards and push notifications for real-time alerts.',
    tech: ['ESP8266', 'Arduino', 'MQTT', 'Node-RED'],
    link: 'https://github.com/Mithunraj-M/Wireless-Nurse-Calling-System',
    linkLabel: 'View on GitHub',
    category: 'IoT',
  },
];
