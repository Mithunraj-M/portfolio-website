import type { SkillGroup } from '@/types';

/**
 * Skills, grouped by category. Edit freely — add/remove categories or items.
 * See CONTENT_GUIDE.md. Keep this honest: list what you can actually speak to.
 */
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'AI / ML & GenAI',
    skills: [
      'LLM Evaluation',
      'Multi-Agent Systems',
      'RAG',
      'LangGraph',
      'LangChain',
      'Knowledge Graphs',
      'Fine-Tuning',
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'OpenCV',
    ],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Data & Infrastructure',
    skills: ['MongoDB', 'Neo4j', 'Docker'],
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'Browser Automation', 'IoT (MQTT, ESP8266)', 'Node-RED'],
  },
];
