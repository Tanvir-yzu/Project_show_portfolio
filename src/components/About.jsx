import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div 
          className="relative flex justify-center transform-gpu"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 3D Depth Background Effects */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: "translateZ(-50px)",
            }}
          />
          
          {/* Secondary Depth Layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-full blur-2xl opacity-40"
            style={{
              transform: "translateZ(30px)",
            }}
          />
          
          {/* Decorative circles with 3D effects */}
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 border-2 border-secondary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              transform: "translateZ(20px)",
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-24 h-24 border-2 border-secondary rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              transform: "translateZ(-20px)",
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 w-3 h-3 bg-secondary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: "translateZ(40px)",
            }}
          />
          
          {/* Main Image Circle with Enhanced 3D Effects */}
          <motion.div 
            className="relative z-10 transform-gpu"
            whileHover={{ 
              scale: 1.05, 
              rotate: 5,
              z: 50,
              rotateX: 5,
              rotateY: -5
            }}
            transition={{ duration: 0.3 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* 3D Depth Layers for Image Container */}
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
              style={{
                transform: "translateZ(30px)",
              }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent opacity-30"
              style={{
                transform: "translateZ(-20px)",
              }}
            />
            
            <motion.div 
              className="w-80 h-80 rounded-full border-8 border-primary overflow-hidden shadow-2xl relative"
              animate={{
                borderColor: ["#0D2426", "#AEFF72", "#0D2426"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Image Depth Effects */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                style={{
                  transform: "translateZ(20px)",
                }}
              />
              
              <img 
                src="https://i.postimg.cc/4NH2k4hH/background.png" 
                alt="Tanvir" 
                className="w-full h-full object-cover relative"
                style={{
                  transform: "translateZ(15px)",
                }}
              />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-full" />
            </motion.div>
            
            {/* 3D Edge Highlight */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: "translateZ(40px)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="space-y-6 transform-gpu"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About Me</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Who is <span className="text-secondary">Tanvir</span>?
          </motion.h2>

          <motion.p 
            className="text-xl font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            "Helping businesses grow with creative web design and development solutions."
          </motion.p>

          <motion.p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hi, I'm Tanvir, a passionate Full-Stack Developer who thrives on turning ideas into visually stunning realities. With a love for creativity and a meticulous eye for detail.
          </motion.p>

          <motion.div 
            className="space-y-4 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div 
              className="flex items-center gap-4 transform-gpu"
              whileHover={{ x: 10, z: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shadow-lg transform-gpu"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  z: 30,
                  rotateX: -5
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div style={{ transform: "translateZ(15px)" }}>
                  <FaEnvelope className="text-secondary text-xl" />
                </div>
              </motion.div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Us At</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">2020tanvir1971@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 transform-gpu"
              whileHover={{ x: 10, z: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shadow-lg transform-gpu"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  z: 30,
                  rotateX: -5
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div style={{ transform: "translateZ(15px)" }}>
                  <FaPhone className="text-secondary text-xl" />
                </div>
              </motion.div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone Number</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">+86 18252737084</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-8 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="text-center transform-gpu"
              whileHover={{ scale: 1.1, z: 30 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.p 
                className="text-5xl font-bold text-secondary relative"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                style={{ transform: "translateZ(20px)" }}
              >
                1+
              </motion.p>
              <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">Years Experience</p>
            </motion.div>

            <motion.a 
              className="flex cursor-pointer items-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow-lg transform-gpu" 
              href="https://drive.google.com/file/d/1rwUxRcPc-CSez_yOVXzG8ShE-YeRyXp-/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(174, 255, 114, 0.4)",
                z: 30,
                rotateX: -5
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <span className="relative" style={{ transform: "translateZ(20px)" }}>My Resume</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative"
                style={{ transform: "translateZ(15px)" }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About