import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer } from 'react-icons/fi';

const projects = [
  {
    title: 'IqraSofts Enterprise',
    desc: 'The official platform for IqraSofts, showcasing our services, portfolio, and security solutions. Built with cutting-edge React patterns and secured against modern web vulnerabilities.',
    tech: ['React', 'Node.js', 'Tailwind', 'Security Audited'],
    github: 'https://github.com',
    live: 'https://iqrasofts.com',
  },
  {
    title: 'LearnOnline.pk',
    desc: 'A robust e-learning platform providing online educational resources and courses. Features a streamlined user experience for students and educators.',
    tech: ['WordPress', 'PHP', 'SEO', 'LMS'],
    github: 'https://github.com',
    live: 'https://learnonline.pk/',
  },
  {
    title: 'ICST Swat Portal',
    desc: 'A dedicated educational portal for ICST Swat, streamlining campus information and academic resources for students and faculty.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com',
    live: 'https://icst-swat.netlify.app/',
  },
  {
    title: 'iNexus Platform',
    desc: 'A next-generation digital hub designed for seamless integration and optimized workflows. Features a modern dashboard with real-time data visualization.',
    tech: ['React', 'Dashboard UI', 'Data Flow', 'API'],
    github: 'https://github.com',
    live: 'https://inexuss.netlify.app/',
  },
  {
    title: 'IqraLuxe Premium',
    desc: 'A high-end luxury lifestyle application featuring modern design aesthetics and seamless interaction patterns for premium service showcase.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'UI/UX'],
    github: 'https://github.com',
    live: 'https://iqraluxe.netlify.app/',
  },
  {
    title: 'iFitness Tracker',
    desc: 'A comprehensive fitness tracking application designed to help users monitor workouts, set health goals, and visualize progress over time.',
    tech: ['React', 'Health API', 'Charts', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://ifitnesstracker.netlify.app/',
  },
  {
    title: 'iQuiz Platform',
    desc: 'An engaging quiz application designed to challenge users across various topics, featuring real-time scoring and dynamic question sets.',
    tech: ['JavaScript', 'Game Logic', 'API Integration', 'CSS'],
    github: 'https://github.com',
    live: 'https://iquizsite.netlify.app/',
  },
  {
    title: 'Smart Quote Generator',
    desc: 'An interactive web utility that generates and manages inspirational quotes with custom styling and sharing capabilities.',
    tech: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
    github: 'https://github.com',
    live: 'https://iquotegenerater.netlify.app/',
  },
  {
    title: 'Tactical Tic-Tac-Toe',
    desc: 'A classic game reimagined with a modern, responsive interface and smooth animations. Built to demonstrate state management and logic.',
    tech: ['React', 'State Hooks', 'CSS Animations'],
    github: 'https://github.com',
    live: 'https://tiic-taac-toee-gamee.netlify.app/',
  },
  {
    title: 'Precision Calculator',
    desc: 'A feature-rich digital calculator optimized for precision and speed, featuring a sleek dark-themed interface.',
    tech: ['JavaScript', 'Math Logic', 'Grid Layout'],
    github: 'https://github.com',
    live: 'https://calculatorr20.netlify.app/',
  }
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-32 lg:py-40 relative z-10">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E11D48]/20 to-transparent" />

      <div className="container-fluid relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Professional Deployments</h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg">
            Engineering robust digital solutions with a focus on security, performance, and user experience.
          </p>
          <div className="red-line !ml-0 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="group relative flex flex-col h-full bg-[#0a0a0a]/50 backdrop-blur-sm border border-white/5 hover:border-[#E11D48]/30 transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-[#E11D48]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#E11D48]/30 transition-colors">
                    <FiServer className="w-6 h-6 text-[#E11D48]" />
                  </div>
                  
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="p-2 text-slate-500 hover:text-slate-100 transition-colors bg-white/5 rounded-lg border border-white/5 hover:border-white/20">
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-8 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-[0.65rem] md:text-xs font-mono font-medium text-slate-500 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {project.live !== '#' ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-red w-full flex items-center justify-center gap-2 active:scale-[0.98] !py-2 !text-xs"
                    >
                      <span className="flex items-center gap-2">
                        View Live Project
                        <FiExternalLink className="w-4 h-4" />
                      </span>
                    </a>
                  ) : (
                    <div className="w-full py-4 bg-white/5 border border-white/5 text-slate-600 font-bold text-sm tracking-widest uppercase rounded-xl flex items-center justify-center gap-3">
                      Coming Soon
                      <FiServer className="w-4 h-4 opacity-30" />
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E11D48]/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-[#E11D48]/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
