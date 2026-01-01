import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio with smooth animations and responsive design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://i.postimg.cc/1RfMBxHK/Screenshot-2026-01-01-194306.png",
      github: "https://github.com/Tanvir-yzu/Project_show_portfolio",
      live: "https://Tanvir-portfolio.vercel.app",
      category: "Personal"
    },
    {
      title: "E-Commerce Platform",
      description: " E-commerce platform with CRUD operations and Django backend.",
      tech: ["Django", "JavaScript", "Python"],
      image: "https://i.postimg.cc/8PCGtzYB/Screenshot-2026-01-01-194823.png",
      github: "https://github.com/Tanvir-yzu/E-Commerce_tech",
      live: "https://exceltech.com.bd/",
      category: "Full-Stack"
    },
    {
      title: "Medicine Shop",
      description: "Online medicine store with product catalog and shopping cart.",
      tech: ["Python", "API", "Tailwind","Django"],
      image: "https://i.postimg.cc/t4NWNDVg/02.png",
      github: "https://github.com/Tanvir-yzu/medicine_shop",
      live: "https://Tanvir-portfolio.vercel.app/",
      category: "Web App"
    },
    {
      title: "English Learning",
      description: "Learn English with vocabulary practice and daily lessons.",
      tech: ["Python", "Django", "Tailwind","JavaScripts"],
      image: "https://i.postimg.cc/kGCtSbXX/Screenshot-2026-01-01-201557.png",
      github: "https://vocavolt.com/",
      live: "https://vocavolt.com/",
      category: "EdTech"
    },
    {
      title: "E-commerce Store",
      description: "Full-stack e-commerce with shopping cart and payment integration.",
      tech: ["Python", "Django", "JavaScripts"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "https://github.com/Tanvir-yzu/-Single-Vendor-E-Commerce-Project",
      live: "https://Tanvir-portfolio.vercel.app",
      category: "Full-Stack"
    },
    {
      title: "News Portal",
      description: "Modern news portal with real-time headlines and category-based news.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://i.ibb.co.com/xSgL5DWL/istockphoto-182779981-612x612.jpg",
      github: "https://github.com/Tanvir-yzu/The-Dragon-News",
      live: "https://Tanvir-portfolio.vercel.app",
      category: "Web App"
    },
    {
      title: "Skills Course Platform",
      description: "Learning platform with video lessons, quizzes, and certificates.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "https://github.com/Tanvir-yzu/Skill-Hive",
      live: "https://Tanvir-portfolio.vercel.app/",
      category: "EdTech"
    },
    {
      title: "Restaurant App",
      description: "Modern restaurant app with menu browsing and order tracking.",
      tech: ["React", "API", "JavaScript"],
      image: "https://i.ibb.co.com/8VmT9wK/istockphoto-172446562-612x612.jpg",
      github: "https://github.com/Tanvir-yzu/DishDive-restaurant-App",
      live: "https://Tanvir-portfolio.vercel.app",
      category: "Web App"
    },
    {
      title: "Emergency Hotline",
      description: "Quick-access emergency support with one-tap calling features.",
      tech: ["React", "Chart.js", "LocalStorage"],
      image: "https://i.ibb.co.com/VcD3VCF0/istockphoto-1363270862-612x612.jpg",
      github: "https://github.com/Tanvir-yzu/Emergency-Hotline-Assignment-5",
      live: "https://Tanvir-portfolio.vercel.app",
      category: "Utility"
    },
    {
      title: "Mobile Pay",
      description: "Secure mobile payment system for money transfer and bill payments.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://i.ibb.co.com/rRPp0qfy/photo-1651055705032-d4187855b004.jpg",
      github: "https://github.com/Tanvir-yzu/mobile-payoo",
      live: "https://mobile-payoo.vercel.app/",
      category: "Fintech"
    },
   
  ]

  return (
    <section ref={ref} id="projects" className="relative w-full py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156 163 175 / 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10 shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="relative flex h-2 w-2"
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
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </motion.span>
            <span className="text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-400 uppercase">Featured Work</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A collection of projects showcasing my skills in modern web development
          </motion.p>
        </motion.div>

        {/* Projects Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="projects-swiper !pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.08 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-lg">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Title Overlay */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <motion.a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-secondary to-accent text-gray-900 text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .projects-swiper :global(.swiper-button-next),
        .projects-swiper :global(.swiper-button-prev) {
          background: rgba(255, 255, 255, 0.9);
          color: #374151;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          top: calc(50% - 22px);
        }
        
        .projects-swiper :global(.swiper-button-next:hover),
        .projects-swiper :global(.swiper-button-prev:hover) {
          background: #AEFF72;
          color: #0D2426;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(174, 255, 114, 0.3);
        }
        
        .projects-swiper :global(.swiper-pagination-bullet) {
          background: rgba(107, 114, 128, 0.3);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        
        .projects-swiper :global(.swiper-pagination-bullet-active) {
          background: #AEFF72;
          width: 24px;
          border-radius: 4px;
        }

        .projects-swiper :global(.swiper-pagination) {
          bottom: 0;
        }
      `}</style>
    </section>
  )
}

export default Projects