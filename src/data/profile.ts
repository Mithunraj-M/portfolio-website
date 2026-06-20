import type { Profile } from '@/types';
import avatar from '@/assets/profile.jpg';

export const profile: Profile = {
  name: 'Mithunraj M',
  role: 'AI & Software Engineering Intern',
  tagline:
    'Building production-grade AI evaluation systems, agentic workflows, and deep-learning applications.',
  about: [
    'Final-year Computer Science student specializing in Artificial Intelligence and Machine Learning at VIT Chennai. My interests lie at the intersection of AI Engineering, Software Engineering, and Intelligent Systems. Through internships at Apphelix Technologies and Tridenforge Innovations, I have worked on building production-oriented AI platforms, multi-agent systems, Retrieval-Augmented Generation (RAG) applications, knowledge graph solutions, chatbot evaluation frameworks, and large-scale data processing systems.',
    'I enjoy designing systems that combine machine learning, modern software engineering, and automation to solve real-world problems. My technical experience includes Python, FastAPI, React, Docker, LangGraph, LangChain, Neo4j, MongoDB, and Generative AI technologies.',
    'Currently exploring Agentic AI, LLM Evaluation, Knowledge Graphs, Distributed Systems, and scalable backend architectures.',
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
