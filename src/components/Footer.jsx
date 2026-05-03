import { FiCpu } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-red-500/15 bg-[#050505] py-8 md:py-12 relative z-10">
      <div className="container-fluid flex flex-col items-center justify-center gap-6">
        
        <div className="flex items-center gap-2">
          <FiCpu className="w-5 h-5 md:w-6 md:h-6 text-[#E11D48]" />
          <span className="mono text-[#E11D48] font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
            Engr. <span className="text-slate-100">Faisal Khan</span>
          </span>
        </div>

        <p className="text-slate-500 text-xs md:text-sm text-center font-mono tracking-widest">
          © 2024-{year} | Engr. Faisal Khan | iqrasofts | All Rights Reserved
        </p>
        
        <p className="text-[#E11D48]/60 text-[0.65rem] md:text-xs uppercase tracking-[0.3em] font-bold">
          Security-First Engineering
        </p>

      </div>
    </footer>
  );
}
