import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-white mb-2">Tanvir.</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Passionate full-stack developer creating beautiful and functional web experiences. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/Tanvir-yzu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 min-h-[44px] min-w-[44px]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg sm:text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tanvir-yzu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 min-h-[44px] min-w-[44px]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </motion.a>
              <motion.a
                href="mailto:2020tanvir1971@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 min-h-[44px] min-w-[44px]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-lg sm:text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <motion.button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 text-left w-full flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors" />
                  Home
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 text-left w-full flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors" />
                  About
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 text-left w-full flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors" />
                  Skills
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 text-left w-full flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors" />
                  Projects
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 text-left w-full flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors" />
                  Contact
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1 h-full bg-gray-700 rounded-full mt-2" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-300 mt-1">Yangzhou City, China</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-full bg-gray-700 rounded-full mt-2" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:2020tanvir1971@gmail.com"
                    className="text-gray-300 mt-1 hover:text-secondary transition-colors"
                  >
                    2020tanvir1971@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-full bg-gray-700 rounded-full mt-2" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-300 mt-1">+86 18252737084</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="mailto:2020tanvir1971@gmail.com"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-secondary to-accent text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 min-h-[48px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
              <FaArrowUp className="rotate-45" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Tanvir. All rights reserved.
          </p>
          
          <motion.p 
            className="text-gray-500 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafted with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="text-secondary" />
            </motion.span>
            {' '}by Tanvir
          </motion.p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-secondary to-accent text-gray-900 rounded-full shadow-lg shadow-secondary/25 flex items-center justify-center z-50 min-h-[48px] min-w-[48px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <FaArrowUp className="text-lg sm:text-xl" />
      </motion.button>
    </footer>
  )
}

export default Footer
