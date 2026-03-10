import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Code2,
  Database,
  Brain,
  Smartphone,
  Layers,
  Cpu,
  Eye,
  MessageSquare,
  TrendingUp,
  Bot
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 75 },
      { name: 'Dart', level: 85 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'TensorFlow/Keras', level: 80 },
      { name: 'OpenCV', level: 85 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'NLP', level: 70 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Supabase', level: 90 },
      { name: 'SQLite', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Web Development',
    icon: Layers,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Supabase', level: 90 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'TypeScript', level: 70 },
    ],
  },
]

const specializedSkills = [
  { name: 'Computer Vision', icon: Eye, description: 'Object detection, face recognition, OCR' },
  { name: 'Image Processing', icon: Cpu, description: 'Upscaling, enhancement, filtering' },
  { name: 'Chatbot Development', icon: Bot, description: 'FAQ bots, travel assistants' },
  { name: 'Data Analysis', icon: TrendingUp, description: 'Portfolio tracking, sentiment analysis' },
  { name: 'Database Design', icon: Database, description: 'Supabase, SQLite, PostgreSQL, data modeling' },
  { name: 'API Integration', icon: MessageSquare, description: 'RESTful services, third-party APIs' },
]

function SkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          className={`h-full rounded-full bg-gradient-to-r ${isHovered ? 'from-blue-400 to-purple-500' : 'from-blue-500 to-purple-600'
            } transition-all duration-300`}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

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
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Skills &{' '}
            <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            A comprehensive toolkit built through hands-on project experience and continuous learning
          </motion.p>
        </motion.div>

        {/* Skills Categories Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === index
                  ? 'bg-white/10 text-white'
                  : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Skills */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].color} flex items-center justify-center`}>
                {(() => {
                  const Icon = skillCategories[activeCategory].icon
                  return <Icon className="w-6 h-6 text-white" />
                })()}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {skillCategories[activeCategory].title}
              </h3>
            </div>
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Specialized Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Specialized <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl p-6 group hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
