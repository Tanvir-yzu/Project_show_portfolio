import { useState, useEffect } from 'react'
import { MdMenu, MdClose, MdDownload } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-primary/95 backdrop-blur-xl shadow-lg py-3'
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <nav className="flex justify-between items-center h-14 md:h-auto">
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-md">
              <span className="text-primary font-bold text-lg sm:text-xl">T</span>
            </div>
            <span className={`text-xl sm:text-2xl font-display font-bold ${
              isScrolled 
                ? 'text-primary dark:text-white' 
                : 'text-primary dark:text-white'
            }`}>
              Tanvir.
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-0.5 sm:space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary dark:text-white'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 text-sm sm:text-base">{item}</span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-secondary to-accent text-primary font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              href="https://drive.google.com/file/d/1rwUxRcPc-CSez_yOVXzG8ShE-YeRyXp-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdDownload className="text-base sm:text-lg" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </motion.a>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/10 min-h-[44px] min-w-[44px]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <MdClose className={`text-2xl sm:text-2xl ${isScrolled ? 'text-primary' : 'text-primary dark:text-white'}`} />
                ) : (
                  <MdMenu className={`text-2xl sm:text-2xl ${isScrolled ? 'text-primary' : 'text-primary dark:text-white'}`} />
                )}
              </motion.button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85vw] sm:w-[80vw] max-w-sm bg-white dark:bg-primary shadow-2xl z-[60] lg:hidden overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/10 ml-auto flex mb-8 min-h-[44px] min-w-[44px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <MdClose className="text-2xl sm:text-2xl text-primary dark:text-white" />
                </motion.button>

                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-lg sm:text-lg font-medium px-4 sm:px-4 py-3.5 sm:py-3 rounded-xl transition-all text-left w-full text-left min-h-[52px] flex items-center ${
                        activeSection === item.toLowerCase()
                          ? 'bg-gradient-to-r from-secondary/20 to-accent/20 text-primary dark:text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 mt-6 sm:mt-8 bg-gradient-to-r from-secondary to-accent text-primary font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg text-sm sm:text-base"
                  href="https://drive.google.com/file/d/1rwUxRcPc-CSez_yOVXzG8ShE-YeRyXp-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MdDownload className="text-lg sm:text-xl" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
