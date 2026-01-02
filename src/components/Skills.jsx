import { FaPython, FaNodeJs, FaHtml5, FaGitAlt, FaReact, FaDatabase, FaServer, FaCode } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiJavascript, SiDjango, SiExpress, SiPostgresql, SiRedis, SiNextdotjs, SiTypescript } from "react-icons/si"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: <FaReact className="text-4xl" />, level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "JavaScript", icon: <SiJavascript className="text-4xl" />, level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", icon: <SiTypescript className="text-4xl" />, level: 85, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" />, level: 95, color: "from-cyan-400 to-teal-500" },
        { name: "HTML & CSS", icon: <FaHtml5 className="text-4xl" />, level: 95, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", icon: <FaPython className="text-4xl" />, level: 95, color: "from-blue-500 to-yellow-500" },
        { name: "Django", icon: <SiDjango className="text-4xl" />, level: 95, color: "from-green-600 to-green-800" },
        { name: "Node.js", icon: <FaNodeJs className="text-4xl" />, level: 90, color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: <SiExpress className="text-4xl" />, level: 88, color: "from-gray-400 to-gray-600" },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl" />, level: 82, color: "from-gray-900 to-gray-700" },
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaDatabase className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-4xl" />, level: 90, color: "from-green-400 to-green-600" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl" />, level: 85, color: "from-blue-500 to-blue-700" },
        { name: "Redis", icon: <SiRedis className="text-4xl" />, level: 80, color: "from-red-500 to-red-700" },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-4xl" />, level: 95, color: "from-orange-500 to-red-600" },
      ]
    }
  ]

  return (
    <section ref={ref} id="skills" className="relative min-h-screen py-20 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-800/30 to-transparent">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10 shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="relative flex h-3 w-3"
            >
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </motion.span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-secondary overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Hover Background */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} 
                    />

                    <div className="relative z-10">
                      {/* Icon & Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        >
                          {skill.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Proficiency</span>
                          <motion.span 
                            className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.4, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={hoveredSkill === skill.name ? {
                        x: ['-100%', '200%'],
                      } : {}}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      style={{
                        transform: 'skewX(-20deg)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "15+", label: "Technologies" },
            { number: "50+", label: "Projects" },
            { number: "2.5+", label: "Years Exp" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 40px rgba(174, 255, 114, 0.2)',
              }}
            >
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills