import type { ProjectItem } from '@/types';

/**
 * Projects — featured ones (marked `featured: true`) render full-width and lead
 * the section. To add a project, copy a block and fill it in. See CONTENT_GUIDE.md.
 */
export const projects: ProjectItem[] = [
  {
    title: 'Adversarial Chatbot Evaluation Platform',
    description:
      'Automated AI evaluation platform that stress-tests enterprise chatbots through adversarial multi-turn conversations. Built distributed job processing, browser automation with Playwright, LLM-as-a-Judge evaluation pipelines, and real-time dashboards for chatbot reliability analysis.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'Playwright', 'React', 'TypeScript', 'Docker', 'Gemini'],
    category: 'AI Evaluation',
    featured: true,
    year: '2026',
    metrics: ['15+ Chatbots Tested', 'LLM Evaluation', 'Distributed Processing'],
  },
  {
    title: 'AI Failure Analytics & Weather Report Platform',
    description:
      'Large-scale analytics platform that discovers, extracts, classifies, and analyzes real-world AI agent failures from public sources. Features OCR pipelines, taxonomy-based classification, automated reporting, interactive dashboards, and LLM-generated reliability insights.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'React', 'OCR', 'Gemini', 'Docker', 'Playwright'],
    category: 'AI Analytics',
    featured: true,
    year: '2026',
    metrics: ['5-Stage Pipeline', 'OCR + Classification', 'Automated Reports'],
  },
  {
    title: 'Legal AI Assistant with GraphRAG',
    description:
      'Enterprise-grade legal AI assistant combining semantic search, hybrid retrieval (BM25 + vector search), and Neo4j-powered GraphRAG. Supports grounded legal question answering, conversational memory, automated evaluation, and dynamic Cypher generation across large legal document collections.',
    tech: ['Python', 'LangGraph', 'FastAPI', 'Neo4j', 'GraphRAG', 'LangChain', 'Gemini', 'RAGAS'],
    category: 'Agentic AI',
    featured: true,
    year: '2025',
    metrics: ['3 Retrieval Modes', 'Knowledge Graph RAG', '60+ Legal Documents'],
  },
  {
    title: 'Muyal — Multi-Agent AI Assistant',
    description:
      'Production-oriented multi-agent AI platform built with LangGraph and FastAPI. Features intelligent routing, task planning, tool execution, memory management, browser automation, retrieval workflows, and autonomous ReAct agents for complex multi-step problem solving.',
    tech: ['Python', 'LangGraph', 'FastAPI', 'React', 'LangChain', 'Docker', 'Gemini', 'SQLite'],
    category: 'Agentic AI',
    featured: true,
    year: '2025',
    metrics: ['Multi-Agent Architecture', 'Tool Calling', 'Memory & Planning'],
  },
];
