import { motion } from 'framer-motion'
import { FaArrowRight, FaRocket, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-primary dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10 shadow-lg"
            >
              <motion.span
                className="relative flex h-3 w-3"
              >
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
              </motion.span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Open to new opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-gradient">Tanvir</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300">
                Full-Stack Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building exceptional digital experiences with modern web technologies. I transform ideas into elegant, scalable solutions.
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
                className="group relative bg-gradient-to-r from-secondary to-accent text-primary font-semibold px-8 py-4 rounded-2xl shadow-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(174, 255, 114, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Get In Touch
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative bg-white dark:bg-white/10 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-white/20 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(174, 255, 114, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center gap-2">
                  View Projects
                  <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex items-center gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.a
                href="https://github.com/Tanvir-yzu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tanvir-yzu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="mailto:2020tanvir1971@gmail.com.com"
                className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-xl text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image/Avatar */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/50 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Avatar Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-white dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{ 
                  scale: { duration: 1, delay: 0.4, type: "spring", stiffness: 100 },
                  rotate: { duration: 1, delay: 0.4 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.4
                  }
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                {/* Profile Image */}
                <img
                  alt="Tanvir - Full-Stack Developer"
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/4NH2k4hH/background.png"
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Status Card */}
              <motion.div
                className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-4 border border-gray-100 dark:border-gray-700"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaRocket className="text-xl text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Status</p>
                    <motion.p
                      className="text-sm font-bold text-gray-900 dark:text-white"
                      animate={{ 
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity 
                      }}
                    >
                      Ready to Code!
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-gradient-to-r from-accent to-secondary text-white dark:text-primary shadow-2xl rounded-2xl px-5 py-3 border-2 border-white dark:border-gray-700"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  x: [0, 5, 0],
                }}
                transition={{ 
                  scale: { duration: 0.6, delay: 0.8, type: "spring" },
                  rotate: { duration: 0.6, delay: 0.8 },
                  x: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [-5, 5, -5],
                }}
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold">2.5+</p>
                  <p className="text-xs font-medium opacity-90">Years Exp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full"
          />
        </motion.div>
        <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Scroll Down</span>
      </motion.div>
    </main>
  )
}

export default Hero