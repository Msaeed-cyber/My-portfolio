import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Code2, 
  Brain,
  Eye,
  Database,
  Gamepad2,
  Image,
  MessageSquare,
  Dumbbell,
  Calculator
} from 'lucide-react'

const experiences = [
  {
    company: 'Cortexis Solutions Pvt. Ltd',
    role: 'Python Developer',
    type: 'Remote',
    period: 'Present',
    location: 'Remote',
    description: 'Developing AI-powered applications and computer vision solutions.',
    achievements: [
      {
        icon: Database,
        text: 'Built stock portfolio tracker with data handling and UI design',
      },
      {
        icon: Gamepad2,
        text: 'Developed Hangman game showcasing logic implementation',
      },
      {
        icon: Image,
        text: 'Created image upscaling project using OpenCV (90% complete)',
      },
      {
        icon: Brain,
        text: 'Implemented interpolation, sharpening, and contrast adjustment',
      },
      {
        icon: Eye,
        text: 'Built computer vision projects: object detection, face recognition, OCR',
      },
      {
        icon: Code2,
        text: 'Developed real-time image and video processing systems',
      },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Cortexis Solutions Pvt. Ltd',
    role: 'Flutter Developer',
    type: 'Remote',
    period: 'Present',
    location: 'Remote',
    description: 'Building cross-platform mobile applications with modern UI/UX.',
    achievements: [
      {
        icon: Calculator,
        text: 'Designed clean calculator app with responsive UI',
      },
      {
        icon: Database,
        text: 'Built Committee Management System with SQLite offline storage',
      },
      {
        icon: MessageSquare,
        text: 'Developed WhatsApp Clone with real-time chat and auth',
      },
      {
        icon: Briefcase,
        text: 'Contributed to Internee.pk job portal app with API integrations',
      },
      {
        icon: Dumbbell,
        text: 'Created fitness tracking app with workout logs and goals',
      },
    ],
    color: 'from-purple-500 to-pink-500',
  },
]

const education = {
  degree: 'Bachelor of Computer Science',
  institution: 'COMSATS University',
  campus: 'Wah Campus',
  location: 'Wah Cantt, Pakistan',
  period: 'Present',
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

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
            Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Experience &{' '}
            <span className="text-gradient">Education</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold text-white flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-blue-400" />
              Work Experience
            </motion.h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 md:p-8 group hover:bg-white/10 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                          <Code2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                      >
                        <achievement.icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{achievement.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Connector Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              Education
            </h3>

            <div className="glass rounded-2xl p-6 md:p-8 group hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">CS</span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                {education.degree}
              </h4>
              <p className="text-lg text-muted-foreground mb-4">
                {education.institution}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {education.campus}, {education.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-muted-foreground">
                  Pursuing a comprehensive degree in Computer Science with focus on 
                  AI, software engineering, and mobile development.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
              <div className="space-y-3">
                {[
                  'Strong foundation in algorithms & data structures',
                  'Hands-on project experience',
                  'Active in coding communities',
                  'Continuous learning mindset',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
