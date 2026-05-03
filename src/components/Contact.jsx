import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhoneCall, FiSend } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const formRef = useRef();
  
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Note: User needs to configure real EmailJS keys here
    setTimeout(() => {
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-40 relative z-10">
      <div className="container-fluid">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Establish Connection</h2>
          <div className="red-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2">
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">Secure Comm Channel</h3>
            <p className="text-slate-400 leading-relaxed mb-12 text-base">
              Whether you have a project in mind, need a security audit, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-[#E11D48]/10 border border-red-500/30 rounded-2xl flex items-center justify-center shrink-0">
                  <FiPhoneCall className="w-6 h-6 text-[#E11D48]" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp / Direct</div>
                  <a href="https://wa.me/923415009986" className="text-slate-100 font-semibold hover:text-[#E11D48] transition-colors text-lg">
                    +92 341 5009986
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-[#E11D48]/10 border border-red-500/30 rounded-2xl flex items-center justify-center shrink-0">
                  <FiMail className="w-6 h-6 text-[#E11D48]" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:faisalkhan.codes@gmail.com" className="text-slate-100 font-semibold hover:text-[#E11D48] transition-colors text-base md:text-lg break-all">
                    faisalkhan.codes@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-[#E11D48]/10 border border-red-500/30 rounded-2xl flex items-center justify-center shrink-0">
                  <FiMapPin className="w-6 h-6 text-[#E11D48]" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</div>
                  <div className="text-slate-100 font-semibold text-lg">
                    Islamabad, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 glass-card p-8 md:p-12">
            
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-2">Name</label>
                  <input type="text" name="user_name" required className="form-input" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-2">Email</label>
                  <input type="email" name="user_email" required className="form-input" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Subject</label>
                <input type="text" name="subject" required className="form-input" placeholder="Project Inquiry / Security Audit" />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Message</label>
                <textarea name="message" required className="form-input" placeholder="Hello Faisal, I would like to discuss..." />
              </div>

              <button 
                type="submit" 
                className={`btn-red w-full flex items-center justify-center gap-3 mt-4 ${status === 'sending' ? 'opacity-70 pointer-events-none' : ''}`}>
                {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Message Sent' : 'Transmit Message'}
                {status !== 'success' && <FiSend className="w-5 h-5" />}
              </button>
              
              {status === 'success' && (
                <p className="text-green-500 text-sm font-semibold text-center mt-2">Message received successfully. I will review it shortly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
