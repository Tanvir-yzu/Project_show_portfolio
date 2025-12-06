import Marquee from "react-fast-marquee"
import { FaPython, FaNodeJs, FaHtml5, FaGitAlt, FaWordpress } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiJavascript, SiNextdotjs, SiDaisyui, SiExpress } from "react-icons/si"

const SkillsMarquee = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-3xl" /> },
    { name: "NEXT.JS", icon: <SiNextdotjs className="text-3xl" /> },
    { name: "NODE.JS", icon: <FaNodeJs className="text-3xl" /> },
    { name: "MONGODB", icon: <SiMongodb className="text-3xl" /> },
    { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-3xl" /> },
    { name: "DAISY UI", icon: <SiDaisyui className="text-3xl" /> },
    { name: "JAVASCRIPT", icon: <SiJavascript className="text-3xl" /> },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-3xl" /> },
    { name: "EXPRESS.JS", icon: <SiExpress className="text-3xl" /> },
    { name: "WORDPRESS", icon: <FaWordpress className="text-3xl" /> },
    { name: "GIT & GITHUB", icon: <FaGitAlt className="text-3xl" /> },
  ]

  return (
    <div className="w-full py-8 bg-secondary overflow-hidden relative transform-gpu">
      {/* 3D Depth Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-30" 
           style={{ transform: "translateZ(-30px)" }} />
      
      {/* Floating Orbs for Depth */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl opacity-50" 
           style={{ transform: "translateZ(-20px)" }} />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-accent/10 blur-3xl opacity-40" 
           style={{ transform: "translateZ(20px)" }} />
      
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-8 mx-4 transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div 
              className="flex items-center gap-4 bg-primary/20 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl transform-gpu"
              style={{ 
                transform: "translateZ(0px)",
                transformStyle: "preserve-3d"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(20px) scale(1.05)";
                e.currentTarget.style.background = "rgba(var(--primary), 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateZ(0px) scale(1)";
                e.currentTarget.style.background = "rgba(var(--primary), 0.2)";
              }}
            >
              {/* 3D Icon Container */}
              <div 
                className="relative transition-transform duration-300"
                style={{ 
                  transform: "translateZ(15px)",
                  transformStyle: "preserve-3d"
                }}
              >
                <span className="text-primary dark:text-primary relative z-10">{skill.icon}</span>
                {/* Icon Glow Effect */}
                <div className="absolute inset-0 bg-current blur-lg opacity-30" 
                     style={{ transform: "translateZ(-10px)" }} />
              </div>
              
              <span className="text-primary dark:text-primary font-bold text-xl whitespace-nowrap uppercase tracking-wide relative"
                    style={{ transform: "translateZ(10px)" }}>
                {skill.name}
              </span>
            </div>
            
            {/* 3D Decorative Element */}
            <span 
              className="text-primary dark:text-primary text-2xl relative transition-transform duration-300"
              style={{ 
                transform: "translateZ(25px)",
                transformStyle: "preserve-3d"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(40px) scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateZ(25px) scale(1)";
              }}
            >
              ✦
              {/* Glow effect for decorative element */}
              <span className="absolute inset-0 text-current blur-md opacity-50" 
                    style={{ transform: "translateZ(-15px)" }}>✦</span>
            </span>
          </div>
        ))}
      </Marquee>
      
      {/* Subtle Edge Highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/20" 
             style={{ transform: "translateZ(30px)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10" 
             style={{ transform: "translateZ(-30px)" }} />
      </div>
    </div>
  )
}

export default SkillsMarquee