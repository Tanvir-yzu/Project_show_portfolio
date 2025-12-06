import { motion } from 'framer-motion'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="w-full max-w-7xl mx-auto md:h-[600px] flex items-center pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-center lg:text-left space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-secondary/20 px-4 py-2 rounded-full"
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
                ease: 'easeInOut',
              }}
            />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm <span className="text-gradient">Tanvir</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Aspiring Full-Stack Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            Fresh graduate passionate about creating beautiful web experiences. Skilled in React, Node.js, and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-secondary text-primary font-semibold px-8 py-3 rounded-full shadow-lg transform-gpu"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 35px rgba(174, 255, 114, 0.4)',
                z: 20,
                rotateX: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <span className="relative" style={{ transform: "translateZ(20px)" }}>Get In Touch</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent text-secondary font-semibold px-8 py-3 rounded-full shadow-lg border-2 border-secondary transform-gpu"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(174, 255, 114, 0.1)',
                boxShadow: '0 15px 35px rgba(174, 255, 114, 0.3)',
                z: 20,
                rotateX: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <span className="relative" style={{ transform: "translateZ(20px)" }}>View Work</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="relative flex justify-center items-center transform-gpu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 3D Depth Background Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
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
          
          {/* Secondary glow effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl opacity-50"
            style={{
              transform: "translateZ(30px)",
            }}
          />
          
          <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            {/* Main Profile Image with 3D Effect */}
            <motion.div
              className="w-80 h-80 rounded-full shadow-2xl border-8 border-white dark:border-gray-800 overflow-hidden relative"
              initial={{ scale: 0, rotate: -180, y: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: [-10, 10, -10],
              }}
              transition={{ 
                scale: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 },
                rotate: { duration: 1.2, delay: 0.5 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.7
                }
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                z: 50,
                rotateX: 5,
                rotateY: -5
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Depth Layers */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                style={{
                  transform: "translateZ(30px)",
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full opacity-50"
                style={{
                  transform: "translateZ(-20px)",
                }}
              />
              
              <img
                alt="Tanvir - Aspiring Full-Stack Developer"
                className="w-full h-full object-cover relative"
                src="https://i.postimg.cc/4NH2k4hH/background.png"
                style={{
                  transform: "translateZ(20px)",
                }}
              />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-full" />
            </motion.div>
            
            {/* Status Card with 3D Effect */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 cursor-pointer transform-gpu"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                z: 30,
                rotateX: 5,
                rotateY: -5
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Edge Highlight */}
              <div 
                className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  transform: "translateZ(15px)",
                }}
              />
              
              <div className="relative flex items-center gap-3" style={{ transform: "translateZ(15px)" }}>
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span className="text-2xl relative" style={{ transform: "translateZ(10px)" }}>🚀</span>
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                  <motion.p
                    className="text-sm font-bold text-gray-900 dark:text-white"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Ready to Work
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero