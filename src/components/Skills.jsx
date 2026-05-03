import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiShield } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FiCode className="w-6 h-6 text-[#E11D48]" />,
    skills: ['C++', 'Python', 'PHP', 'JavaScript']
  },
  {
    title: 'Web Development',
    icon: <FiCode className="w-6 h-6 text-[#E11D48]" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React']
  },
  {
    title: 'Backend & Databases',
    icon: <FiCode className="w-6 h-6 text-[#E11D48]" />,
    skills: ['Node.js', 'PHP', 'MySQL', 'Oracle', 'MongoDB']
  },
  {
    title: 'Security & Tools',
    icon: <FiShield className="w-6 h-6 text-[#E11D48]" />,
    skills: ['Security Automation', 'Network Security', 'Vulnerability Analysis', 'Secure Coding', 'Git', 'Jira', 'WordPress']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-32 lg:py-40 relative z-10 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E11D48]/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container-fluid relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title text-center mx-auto">Technical Arsenal</h2>
          <p className="text-slate-500 text-center mt-4 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my core competencies in engineering and digital defense.
          </p>
          <div className="red-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="group relative bg-[#0a0a0a]/50 backdrop-blur-sm border border-white/5 hover:border-[#E11D48]/30 p-8 rounded-2xl transition-all duration-500 shadow-xl overflow-hidden"
            >
              {/* Card Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:border-[#E11D48]/30 rounded-xl flex items-center justify-center transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-bold text-slate-100 text-xl md:text-2xl tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#050505] border border-white/5 rounded-lg text-sm text-slate-400 font-mono hover:border-[#E11D48]/50 hover:text-slate-100 hover:bg-[#E11D48]/10 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Corner Accent */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#E11D48]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
