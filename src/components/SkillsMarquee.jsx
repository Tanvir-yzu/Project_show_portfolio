import Marquee from "react-fast-marquee"
import { FaPython, FaNodeJs, FaHtml5, FaGitAlt, FaReact, FaDatabase } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiJavascript, SiNextdotjs, SiTypescript, SiPostgresql, SiRedis, SiExpress, SiDocker } from "react-icons/si"

const SkillsMarquee = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-2xl" />, color: "text-cyan-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-2xl" />, color: "text-gray-900 dark:text-white" },
    { name: "Python", icon: <FaPython className="text-2xl" />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript className="text-2xl" />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript className="text-2xl" />, color: "text-blue-600" },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl" />, color: "text-green-600" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-2xl" />, color: "text-cyan-500" },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl" />, color: "text-green-500" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" />, color: "text-blue-700" },
    { name: "Redis", icon: <SiRedis className="text-2xl" />, color: "text-red-600" },
    { name: "Docker", icon: <SiDocker className="text-2xl" />, color: "text-blue-500" },
    { name: "Express", icon: <SiExpress className="text-2xl" />, color: "text-gray-600" },
    { name: "HTML", icon: <FaHtml5 className="text-2xl" />, color: "text-orange-500" },
    { name: "Git", icon: <FaGitAlt className="text-2xl" />, color: "text-orange-600" },
    { name: "Database", icon: <FaDatabase className="text-2xl" />, color: "text-purple-500" },
  ]

  return (
    <div className="w-full py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156 163 175 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section Label */}
      <div className="relative z-10 mb-8 text-center">
        <span className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">
          Technologies I work with
        </span>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10">
        <Marquee 
          speed={40} 
          gradient={true} 
          gradientColor={[249, 250, 251]}
          gradientWidth={200}
          pauseOnHover={true}
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 md:gap-3 mx-6 md:mx-8 group"
            >
              <div className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <div className={`${skill.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
              
              {/* Minimalist Divider */}
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400 dark:group-hover:bg-gray-500 transition-colors duration-300" />
            </div>
          ))}
        </Marquee>

        {/* Second Marquee for seamless loop */}
        <Marquee 
          speed={40} 
          gradient={true} 
          gradientColor={[249, 250, 251]}
          gradientWidth={200}
          pauseOnHover={true}
          direction="right"
          className="mt-6"
        >
          {skills.map((skill, index) => (
            <div 
              key={`reverse-${index}`}
              className="flex items-center gap-2 md:gap-3 mx-6 md:mx-8 group"
            >
              <div className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <div className={`${skill.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
              
              {/* Minimalist Divider */}
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400 dark:group-hover:bg-gray-500 transition-colors duration-300" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
    </div>
  )
}

export default SkillsMarquee