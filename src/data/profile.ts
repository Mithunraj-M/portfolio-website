import type { Profile } from '@/types';
import avatar from '@/assets/profile.jpg';

export const profile: Profile = {
  name: 'Mithunraj M',
  role: 'AI/ML Engineer',
  tagline:
    'Building production-grade AI evaluation systems, agentic workflows, and deep-learning applications.',
  about: [
    'I’m a Computer Science engineer specializing in artificial intelligence and machine learning. My work spans LLM-based evaluation pipelines, multi-agent systems, retrieval-augmented generation, and deep-learning models for real-world problems.',
    'Currently a Software Engineer Intern at Apphelix Technologies, where I build production AI evaluation, testing, and analytics platforms — from adversarial chatbot testing and conversation-simulation workflows to scalable backend services and analytics dashboards for AI reliability.',
    'I enjoy taking ideas from research to shipped systems: training and fine-tuning models, designing agentic pipelines, and building the backend infrastructure that makes them reliable.',
  ],
  location: 'Bengaluru, India',
  highlights: [
    'LLM Evaluation',
    'Agentic AI',
    'Deep Learning',
    'RAG',
    'Backend Engineering',
  ],
  avatar,
};
