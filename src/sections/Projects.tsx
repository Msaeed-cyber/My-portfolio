import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ExternalLink, 
  Github, 
  Brain, 
  TrendingUp, 
  MessageSquare, 
  Plane, 
  BarChart3, 
  Mail, 
  FileText, 
  Calculator, 
  Briefcase,
  Dumbbell,
  Wallet,
  Code,
  UserCheck,
  Users
} from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'AI Image Upscaling',
    description: 'Advanced image processing tool using interpolation, sharpening, and contrast adjustment techniques to enhance image resolution and quality.',
    icon: Brain,
    category: 'AI/ML',
    tech: ['Python', 'OpenCV', 'NumPy'],
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: true,
  },
  {
    title: 'Face Recognition Attendance',
    description: 'AI-based attendance system using FaceNet/ArcFace embeddings with real-time face detection, cosine similarity matching, and anti-spoofing measures.',
    icon: UserCheck,
    category: 'Computer Vision',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'SQLite'],
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: true,
  },
  {
    title: 'Stock Portfolio Tracker',
    description: 'Comprehensive stock portfolio management application with real-time tracking, performance analytics, and financial reporting.',
    icon: TrendingUp,
    category: 'Python',
    tech: ['Python', 'Pandas', 'Matplotlib', 'APIs'],
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: true,
  },
  {
    title: 'SentimentScope AI',
    description: 'AI-powered review analyzer that processes customer feedback and generates sentiment insights using NLP techniques.',
    icon: BarChart3,
    category: 'NLP',
    tech: ['Python', 'NLP', 'Machine Learning'],
    color: 'from-orange-500 to-red-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Travel AI Chatbot',
    description: 'Intelligent travel assistant chatbot providing recommendations, itinerary planning, and travel information.',
    icon: Plane,
    category: 'AI/ML',
    tech: ['Python', 'NLP', 'DialogFlow'],
    color: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'FAQ Chatbot',
    description: 'Automated FAQ response system using natural language processing to understand and answer common queries.',
    icon: MessageSquare,
    category: 'NLP',
    tech: ['Python', 'NLP', 'TensorFlow'],
    color: 'from-pink-500 to-rose-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Email Spam Classifier',
    description: 'Machine learning model to classify emails as spam or legitimate with high accuracy using text classification algorithms.',
    icon: Mail,
    category: 'ML',
    tech: ['Python', 'Scikit-learn', 'NLP'],
    color: 'from-red-500 to-orange-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'AI Text Classifier',
    description: 'General-purpose text classification system for categorizing documents and content using deep learning.',
    icon: FileText,
    category: 'NLP',
    tech: ['Python', 'TensorFlow', 'Keras'],
    color: 'from-indigo-500 to-purple-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Modular ML Pipeline',
    description: 'Reusable machine learning pipeline framework for streamlined model training, evaluation, and deployment.',
    icon: Code,
    category: 'ML',
    tech: ['Python', 'MLflow', 'Docker'],
    color: 'from-violet-500 to-purple-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Fitness App',
    description: 'Cross-platform fitness tracking application with workout logs, goal-setting, and progress monitoring.',
    icon: Dumbbell,
    category: 'Flutter',
    tech: ['Flutter', 'Dart', 'SQLite'],
    color: 'from-green-500 to-teal-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: true,
  },
  {
    title: 'Committee Management',
    description: 'Financial management app for committee records, member payments, and reporting with offline SQLite storage.',
    icon: Users,
    category: 'Flutter',
    tech: ['Flutter', 'SQLite', 'Provider'],
    color: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Internee.pk App',
    description: 'Job portal application connecting students with internship opportunities, featuring navigation and API integrations.',
    icon: Briefcase,
    category: 'Flutter',
    tech: ['Flutter', 'REST API', 'Firebase'],
    color: 'from-orange-500 to-amber-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'WhatsApp Clone',
    description: 'Real-time chat application with user authentication, message synchronization, and modern chat UI.',
    icon: MessageSquare,
    category: 'Flutter',
    tech: ['Flutter', 'Firebase', 'Socket.io'],
    color: 'from-green-500 to-lime-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Calculator App',
    description: 'Clean, responsive calculator with modern UI design and comprehensive arithmetic operations.',
    icon: Calculator,
    category: 'Flutter',
    tech: ['Flutter', 'Dart'],
    color: 'from-gray-500 to-slate-500',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
  {
    title: 'Expense Tracker',
    description: 'C++ based expense management system demonstrating OOP principles with data persistence.',
    icon: Wallet,
    category: 'C++',
    tech: ['C++', 'OOP', 'File I/O'],
    color: 'from-blue-600 to-blue-800',
    github: 'https://github.com/Msaeed-cyber',
    featured: false,
  },
]

const categories = ['All', 'AI/ML', 'Flutter', 'Python', 'Computer Vision', 'NLP']

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative glass rounded-2xl overflow-hidden transition-all duration-500 ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Gradient Background on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />
      
      {/* Glow Effect */}
      <div 
        className={`absolute -inset-px bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <Badge variant="secondary" className="bg-white/5 text-muted-foreground">
            {project.category}
          </Badge>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-white/10 hover:bg-white/5"
            asChild
          >
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            className={`flex-1 bg-gradient-to-r ${project.color} text-white hover:opacity-90`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            A showcase of my work across AI, mobile development, and software engineering
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'glass text-muted-foreground hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
