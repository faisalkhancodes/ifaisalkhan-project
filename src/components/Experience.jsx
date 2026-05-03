import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'Founder & CEO',
    company: 'iqrasofts / iSoft',
    date: 'Feb 2026 - Present',
    desc: 'Founded and lead my own software house, managing projects, clients, and team operations while delivering software solutions.',
    skills: ['Leadership', 'Technical Management'],
    status: 'active'
  },
  {
    role: 'Frontend Web Developer',
    company: 'DevelopersHub Corporation©',
    date: 'Mar 2026 - Apr 2026',
    desc: 'Contributed to front-end development, engineering responsive interfaces and optimizing user experience during an intensive internship.',
    skills: ['Front-End Development'],
    status: 'completed'
  },
  {
    role: 'Graphic Designer',
    company: 'Canva',
    date: 'Jan 2022 - Aug 2024',
    desc: 'Worked as a Graphic Designer creating high-quality designs including social media posts, marketing materials, presentations, logos, and CVs.',
    skills: ['Canva', 'Graphic Design'],
    status: 'completed'
  },
  {
    role: 'Intern | ICST TTB Peshawar',
    company: 'ICST',
    date: 'Sep 2022 - Feb 2023',
    desc: 'Gained hands-on experience in IT support, software tools, and basic development tasks. Taught students fundamental computer skills, strengthening both technical and communication abilities.',
    skills: ['Technical', 'Teaching'],
    status: 'completed'
  },
  {
    role: 'IT Teacher & School Administrator',
    company: 'Sarhad Rural Support Programme (SRSP)',
    date: 'Jan 2022 - Jun 2022',
    desc: 'Taught essential computer skills while supporting school management tasks, including organizing classes, maintaining records, and coordinating daily activities.',
    skills: ['Teaching', 'Communication'],
    status: 'completed'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="py-32 lg:py-40 relative z-10">
      <div className="container-fluid relative">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Professional Trajectory</h2>
          <div className="red-line" />
        </motion.div>

        <div className="relative mt-16 md:mt-24">
          
          {/* Vertical line - hidden on mobile, centered on md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 top-0 bottom-0 bg-gradient-to-b from-transparent via-[#E11D48] to-transparent z-0" />

          {/* Vertical line - visible on mobile, left-aligned */}
          <div className="block md:hidden absolute left-6 w-0.5 top-0 bottom-0 bg-gradient-to-b from-transparent via-[#E11D48] to-transparent z-0" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-12 md:mb-20 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }} 
                  animate={inView ? { opacity: 1, x: 0 } : {}} 
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="w-full pl-12 md:pl-0 md:w-[45%] z-10">
                  
                  <div className="glass-card p-6 md:p-8 relative hover:border-[#E11D48]/50 transition-all duration-300">
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                        <div className="text-[#E11D48] font-semibold text-sm md:text-base">{exp.company}</div>
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        exp.status === 'active' 
                          ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}>
                        {exp.date}
                      </div>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6">{exp.desc}</p>
                    
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs text-slate-300 font-mono">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-[45%]" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
