import { FaPython, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiJavascript, SiDjango, SiExpress, SiAlpinelinux } from "react-icons/si"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "Python", icon: <FaPython className="text-4xl text-blue-500" />, level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Django", icon: <SiDjango className="text-4xl text-white" />, level: 95, color: "from-gray-700 to-gray-900" },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" />, level: 95, color: "from-yellow-400 to-yellow-600" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" />, level: 95, color: "from-green-500 to-green-700" },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" />, level: 95, color: "from-green-400 to-green-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" />, level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 95, color: "from-orange-500 to-red-500" },
    { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-400" />, level: 95, color: "from-gray-400 to-gray-600" },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-4xl text-orange-600" />, level: 95, color: "from-orange-500 to-red-600" },
    { name: "Alpine.js", icon: <SiAlpinelinux className="text-4xl text-sky-500" />, level: 90, color: "from-sky-400 to-sky-600" },
  ]

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <motion.div 
        className="text-left mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="w-2 h-2 bg-secondary rounded-full"
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
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">My Skills</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Design, develop, deliver: my <span className="text-secondary">essential gear</span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="group relative bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary overflow-hidden transform-gpu"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -15, 
              scale: 1.03,
              rotateX: -5,
              rotateY: 5,
              z: 50
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Enhanced 3D background effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 transition-all duration-500`} 
                   style={{
                     transform: "translateZ(-50px)",
                   }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500" 
                   style={{
                     transform: "translateZ(20px)",
                   }} />
            </div>
            
            {/* Floating orb effect */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-16 -translate-y-16" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, 10, -10, 0],
                      z: 30
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      rotate: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div style={{ transform: "translateZ(20px)" }}>
                      {skill.icon}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors transform-gpu">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Proficiency</p>
                  </div>
                </div>
                <motion.div 
                  className="text-right"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  <span className="text-4xl font-bold text-secondary">{skill.level}%</span>
                </motion.div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                >
                  {/* Animated shine effect on progress bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{
                         transform: "skewX(-30deg) translateX(-100%)",
                         animation: "shine 2s infinite",
                       }} />
                </motion.div>
              </div>
              
              {/* 3D depth effect for progress bar container */}
              <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
            
            {/* 3D edge highlight */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{
                   transform: "translateZ(30px)",
                 }} />
          </motion.div>
        ))}
      </div>
      
      {/* Adding global styles for animations */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: skewX(-30deg) translateX(-150%); }
          100% { transform: skewX(-30deg) translateX(200%); }
        }
      `}</style>
    </section>
  )
}

export default Skills