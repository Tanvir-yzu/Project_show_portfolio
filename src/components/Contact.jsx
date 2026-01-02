import { FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formsubmit.co/2020tanvir1971@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
        setTimeout(() => setShowSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
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
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact Us</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to discuss your <span className="text-secondary">next project</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Are you ready to take your project to the next level? Whether you're looking for a new website, a web application, or simply need advice.
            </motion.p>
          </div>

          <motion.div
            className="space-y-6 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex items-start gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 min-h-[48px] min-w-[48px]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaMapMarkerAlt className="text-secondary text-xl sm:text-xl" />
              </motion.div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Yangzhou City,<br />China
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 min-h-[48px] min-w-[48px]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaPhone className="text-secondary text-xl sm:text-xl" />
              </motion.div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">Phone Number</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">+86 18252737084</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Resume Badge */}
          <motion.a 
            href="https://drive.google.com/file/d/1rwUxRcPc-CSez_yOVXzG8ShE-YeRyXp-/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative w-32 h-32 mt-8 block cursor-pointer group"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center animate-spin-slow group-hover:bg-primary transition-colors">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8px] fill-primary group-hover:fill-white font-semibold uppercase tracking-wider transition-all">
                  <textPath href="#circlePath">
                    • MY RESUME • MY RESUME • MY RESUME • MY RESUME
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-2xl">📄</span>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          className="bg-[#1a3a3a] dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-8 leading-relaxed">
            Fill out the form below to connect with me. I'll get back to you soon to discuss your project or answer any questions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm sm:text-sm text-gray-400 mb-2">First Name</label>
                <input
                  type="text"
                  name="First Name"
                  required
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all min-h-[52px] text-base sm:text-base"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-sm text-gray-400 mb-2">Last Name</label>
                <input
                  type="text"
                  name="Last Name"
                  required
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all min-h-[52px] text-base sm:text-base"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm sm:text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all min-h-[52px] text-base sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-sm text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="Phone Number"
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all min-h-[52px] text-base sm:text-base"
                  placeholder="+880 1234-567890"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm sm:text-sm text-gray-400 mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                className="w-full px-4 py-3 sm:py-3.5 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary resize-none transition-all min-h-[140px] text-base sm:text-base"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {showSuccess && (
              <div className="bg-secondary/20 border-2 border-secondary text-secondary px-6 py-4 rounded-lg text-center font-semibold">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-secondary text-primary font-bold px-8 py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px]"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(174, 255, 114, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-4 mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a
          href="https://github.com/Tanvir-yzu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg min-h-[48px] min-w-[48px]"
          whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="text-xl sm:text-2xl" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/tanvir-yzu/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg min-h-[48px] min-w-[48px]"
          whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-xl sm:text-2xl" />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Contact
