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
  Dumbbell,
  Wallet,
  Code,
  Users,
  Bot,
  Globe,
  Leaf,
  Network,
  Film,
  BookOpen,
  Search,
  Zap
} from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'API Docs Generator',
    description: 'AI-powered API documentation generator that automatically scans codebases and produces comprehensive, beautiful HTML documentation with Groq AI integration.',
    icon: FileText,
    category: 'AI/ML',
    tech: ['Python', 'Flask', 'Groq AI', 'HTML'],
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Msaeed-cyber/API-Docx-generator',
    featured: true,
  },
  {
    title: 'Marketing Email Bot',
    description: 'Python-based email marketing automation bot with Gmail SMTP integration, lead validation, duplicate filtering, and location-based email personalization.',
    icon: Mail,
    category: 'Python',
    tech: ['Python', 'SMTP', 'Pandas', 'Automation'],
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Msaeed-cyber/Marketing_Emailbot',
    featured: true,
  },
  {
    title: 'Crumble Website',
    description: 'Modern, responsive business website built with TypeScript featuring sleek animations, optimized performance, and a professional UI/UX design.',
    icon: Globe,
    category: 'Web',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    color: 'from-orange-500 to-amber-500',
    github: 'https://github.com/Msaeed-cyber/crumble-website',
    featured: true,
  },
  {
    title: 'AI Image Upscaling',
    description: 'Advanced image processing tool using interpolation, sharpening, and contrast adjustment techniques to enhance image resolution and quality up to 4x.',
    icon: Brain,
    category: 'AI/ML',
    tech: ['Python', 'OpenCV', 'NumPy', 'PIL'],
    color: 'from-violet-500 to-purple-500',
    github: 'https://github.com/Msaeed-cyber/AI-image-upscaling',
    featured: true,
  },
  {
    title: 'Plant Disease Classifier',
    description: 'Deep learning model using transfer learning to classify plant diseases from leaf images, helping farmers detect crop diseases early with high accuracy.',
    icon: Leaf,
    category: 'Computer Vision',
    tech: ['Python', 'TensorFlow', 'Keras', 'Jupyter'],
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Msaeed-cyber/plant_diseases_classifier',
    featured: true,
  },
  {
    title: 'Transfer Learning Image Classifier',
    description: 'Image classification system leveraging pre-trained CNN models (VGG, ResNet) with transfer learning for high-accuracy custom dataset classification.',
    icon: Network,
    category: 'Computer Vision',
    tech: ['Python', 'TensorFlow', 'Transfer Learning'],
    color: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/Msaeed-cyber/Transfer-Learning-for-Image-Classification',
    featured: false,
  },
  {
    title: 'Cats vs Dogs Classifier',
    description: 'Binary image classification model using convolutional neural networks to distinguish between cats and dogs with high accuracy.',
    icon: Brain,
    category: 'Computer Vision',
    tech: ['Python', 'CNN', 'TensorFlow', 'Keras'],
    color: 'from-pink-500 to-rose-500',
    github: 'https://github.com/Msaeed-cyber/Cats-vs.-Dogs-Image-Classifier',
    featured: false,
  },
  {
    title: 'Web Scraper',
    description: 'Powerful Python-based web scraping tool for automated data extraction from websites, with support for dynamic pages and structured data output.',
    icon: Search,
    category: 'Python',
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'Requests'],
    color: 'from-teal-500 to-green-500',
    github: 'https://github.com/Msaeed-cyber/web-Scraper',
    featured: false,
  },
  {
    title: 'SentimentScope AI',
    description: 'AI-powered review analyzer that processes customer feedback and generates detailed sentiment insights using advanced NLP techniques.',
    icon: BarChart3,
    category: 'NLP',
    tech: ['Python', 'NLTK', 'Scikit-learn', 'NLP'],
    color: 'from-orange-500 to-red-500',
    github: 'https://github.com/Msaeed-cyber/SentimentScope-AI-Powered-Review-Analyzer',
    featured: false,
  },
  {
    title: 'Movie Review Sentiment Analyzer',
    description: 'NLP-powered sentiment analysis model for movie reviews, classifying reviews as positive or negative using machine learning algorithms.',
    icon: Film,
    category: 'NLP',
    tech: ['Python', 'NLP', 'Scikit-learn'],
    color: 'from-yellow-500 to-orange-500',
    github: 'https://github.com/Msaeed-cyber/Movie-Review-Sentiment-Analyzer',
    featured: false,
  },
  {
    title: 'Movie Recommendation System',
    description: 'Collaborative filtering and content-based recommendation system that suggests movies based on user preferences and viewing history.',
    icon: Film,
    category: 'ML',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
    color: 'from-indigo-500 to-purple-500',
    github: 'https://github.com/Msaeed-cyber/Movie-Recommendation-System',
    featured: false,
  },
  {
    title: 'Travel AI Chatbot',
    description: 'Intelligent travel assistant chatbot providing personalized recommendations, itinerary planning, and real-time travel information.',
    icon: Plane,
    category: 'NLP',
    tech: ['Python', 'NLP', 'NLTK', 'Flask'],
    color: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/Msaeed-cyber/travel-ai_chatbot',
    featured: false,
  },
  {
    title: 'FAQ Chatbot',
    description: 'Automated FAQ response system using natural language processing to understand context and answer common queries intelligently.',
    icon: MessageSquare,
    category: 'NLP',
    tech: ['Python', 'NLP', 'TensorFlow', 'Flask'],
    color: 'from-pink-500 to-rose-500',
    github: 'https://github.com/Msaeed-cyber/FAQ-chatbot',
    featured: false,
  },
  {
    title: 'AI Text Classifier',
    description: 'General-purpose text classification system for categorizing documents and content into predefined categories using deep learning.',
    icon: FileText,
    category: 'NLP',
    tech: ['Python', 'TensorFlow', 'Keras', 'BERT'],
    color: 'from-red-500 to-orange-500',
    github: 'https://github.com/Msaeed-cyber/-AI-Powered-Text-Classifier-',
    featured: false,
  },
  {
    title: 'NLP Text Classifier',
    description: 'Multi-class text classification pipeline using traditional NLP methods and machine learning for document categorization tasks.',
    icon: BookOpen,
    category: 'NLP',
    tech: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF'],
    color: 'from-green-500 to-teal-500',
    github: 'https://github.com/Msaeed-cyber/NLP-text-classifier',
    featured: false,
  },
  {
    title: 'Email Spam Classifier',
    description: 'Machine learning model to classify emails as spam or legitimate with high accuracy using text feature extraction and ensemble methods.',
    icon: Mail,
    category: 'ML',
    tech: ['Python', 'Scikit-learn', 'NLP', 'Naive Bayes'],
    color: 'from-gray-500 to-slate-600',
    github: 'https://github.com/Msaeed-cyber/email-spam-classifier',
    featured: false,
  },
  {
    title: 'Modular ML Pipeline',
    description: 'Reusable and extensible machine learning pipeline framework for streamlined model training, evaluation, and deployment.',
    icon: Code,
    category: 'ML',
    tech: ['Python', 'Scikit-learn', 'MLflow', 'Pandas'],
    color: 'from-violet-500 to-indigo-500',
    github: 'https://github.com/Msaeed-cyber/Modular-Machine-Learning-Pipeline',
    featured: false,
  },
  {
    title: 'Neural Network from Scratch',
    description: 'Implementation of neural network architectures from scratch using NumPy, demonstrating forward propagation, backpropagation, and gradient descent.',
    icon: Network,
    category: 'ML',
    tech: ['Python', 'NumPy', 'Mathematics'],
    color: 'from-cyan-500 to-teal-500',
    github: 'https://github.com/Msaeed-cyber/Neural-Network',
    featured: false,
  },
  {
    title: 'Model Persistence & Versioning',
    description: 'Comprehensive guide and implementation of ML model persistence using Pickle, Joblib, and ONNX formats for production deployments.',
    icon: Zap,
    category: 'ML',
    tech: ['Python', 'Pickle', 'Joblib', 'ONNX'],
    color: 'from-amber-500 to-yellow-500',
    github: 'https://github.com/Msaeed-cyber/-Model-Persistence-Versioning-Pickle-Joblib-ONNX-',
    featured: false,
  },

  {
    title: 'Committee Management App',
    description: 'Flutter-based financial management app for committee records, member tracking, payments, and reporting with offline SQLite storage.',
    icon: Users,
    category: 'Flutter',
    tech: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    color: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/Msaeed-cyber/New_Commitee_management',
    featured: false,
  },
  {
    title: 'Fitness App',
    description: 'Cross-platform Flutter fitness tracking application with workout logs, goal-setting, progress monitoring, and animated UI.',
    icon: Dumbbell,
    category: 'Flutter',
    tech: ['Flutter', 'Dart', 'SQLite', 'Charts'],
    color: 'from-green-500 to-teal-500',
    github: 'https://github.com/Msaeed-cyber/fittness_app',
    featured: false,
  },

  {
    title: 'WhatsApp Clone',
    description: 'Real-time chat application with user authentication, message synchronization, media sharing, and modern WhatsApp-like UI.',
    icon: MessageSquare,
    category: 'Flutter',
    tech: ['Flutter', 'Firebase', 'Dart', 'Firestore'],
    color: 'from-green-500 to-lime-500',
    github: 'https://github.com/Msaeed-cyber/whattsapp',
    featured: false,
  },

  {
    title: 'Expense Tracker App',
    description: 'Modern TypeScript-based expense tracking web application with data visualization, budget management, and financial reporting.',
    icon: Wallet,
    category: 'Web',
    tech: ['TypeScript', 'React', 'Charts', 'Local Storage'],
    color: 'from-blue-600 to-blue-800',
    github: 'https://github.com/Msaeed-cyber/Expense-trackor-app',
    featured: false,
  },
  {
    title: 'School Management System',
    description: 'Comprehensive school management system for handling student records, attendance, grades, and administrative tasks.',
    icon: BookOpen,
    category: 'Python',
    tech: ['Python', 'Database', 'OOP'],
    color: 'from-teal-500 to-cyan-600',
    github: 'https://github.com/Msaeed-cyber/school-management-system',
    featured: false,
  },
  {
    title: 'Stock Portfolio (CodeAlpha)',
    description: 'Python-based stock portfolio management with real-time price fetching, portfolio analytics, and gain/loss tracking.',
    icon: TrendingUp,
    category: 'Python',
    tech: ['Python', 'yFinance', 'Pandas', 'Matplotlib'],
    color: 'from-emerald-500 to-green-600',
    github: 'https://github.com/Msaeed-cyber/Stock_portfolio_codealpha',
    featured: false,
  },
  {
    title: 'Hangman Game',
    description: 'Classic Hangman game in Python with a predefined word list, 6 lives system, and colorful terminal-based UI.',
    icon: Bot,
    category: 'Python',
    tech: ['Python', 'OOP', 'CLI'],
    color: 'from-yellow-500 to-amber-600',
    github: 'https://github.com/Msaeed-cyber/hangman_game_codealpha',
    featured: false,
  },
  {
    title: 'Expense Tracker (C++)',
    description: 'C++ expense management system with features to add, edit, delete, and display expenses across categories like Groceries, Transport, and Medical.',
    icon: Wallet,
    category: 'C++',
    tech: ['C++', 'OOP', 'File I/O', 'Data Structures'],
    color: 'from-slate-500 to-gray-700',
    github: 'https://github.com/Msaeed-cyber/Expense-Trackor',
    featured: false,
  },
  {
    title: 'Infix to Postfix Converter',
    description: 'C++ implementation of infix to postfix expression conversion using stack data structures, with operator precedence handling.',
    icon: Code,
    category: 'C++',
    tech: ['C++', 'Data Structures', 'Stack', 'Algorithms'],
    color: 'from-indigo-600 to-blue-800',
    github: 'https://github.com/Msaeed-cyber/Infix-postfix-',
    featured: false,
  },
]

const categories = ['All', 'AI/ML', 'ML', 'NLP', 'Computer Vision', 'Flutter', 'Web', 'Python', 'C++']

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
