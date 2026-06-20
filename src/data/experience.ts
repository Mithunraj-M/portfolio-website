import type { ExperienceItem } from '@/types';

/**
 * Experience timeline — most recent first.
 * To add a role, copy one block and fill it in. See CONTENT_GUIDE.md.
 */
export const experience: ExperienceItem[] = [
  {
    company: 'Apphelix Technologies Pvt Ltd',
    role: 'Software Engineer Intern',
    employmentType: 'Internship',
    start: 'Jan 2026',
    end: 'Present',
    location: 'Bengaluru, Karnataka, India',
    workMode: 'On-site',
    description: [
      'Working on production-grade AI evaluation, testing, and analytics platforms.',
      'Developed adversarial chatbot testing systems, automated conversation-simulation workflows, browser-automation solutions, and LLM-based evaluation pipelines.',
      'Built scalable backend services, data-processing pipelines, and analytics dashboards for AI reliability assessment, monitoring, and reporting.',
    ],
    skills: ['Python', 'FastAPI', 'LLM Evaluation', 'Browser Automation', 'Analytics'],
  },
  {
    company: 'Tridenforge Innovations Pvt Ltd',
    role: 'AI Intern',
    employmentType: 'Internship',
    start: 'Jul 2025',
    end: 'Jan 2026',
    location: 'Remote',
    workMode: 'Remote',
    description: [
      'Built AI-powered applications including multi-agent systems, Retrieval-Augmented Generation (RAG) solutions, and knowledge-graph-based AI assistants.',
      'Developed agentic workflows using LangGraph and implemented hybrid retrieval pipelines.',
      'Contributed to AI evaluation, model fine-tuning, and intelligent-assistant platforms.',
    ],
    skills: ['LangGraph', 'FastAPI', 'RAG', 'Multi-Agent Systems', 'Knowledge Graphs', 'Fine-Tuning'],
  },
];
