import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn } from '../../components/animations/FadeIn';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../../components/primitives/Button';
import { useState } from 'react';
import { cn } from '../../lib/cn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate successful submission in development mode
    if (import.meta.env.DEV) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Development mode: Simulating form submission', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err instanceof Error ? err.message : String(err));
      setStatus('error');
    }
  };

  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=codebytesol@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/company/com_contact.png" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>
        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase">
               Let's <br />
               <span className="text-primary-500">Connect.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-2xl leading-relaxed font-medium drop-shadow-md">
              Ready to transform your enterprise with AI? Our team of experts is ready to discuss your next big breakthrough.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container-2xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Info */}
              <div className="lg:col-span-5">
                 <FadeIn direction="right">
                    <h2 className="text-3xl font-bold text-text-primary mb-12 tracking-tight">Direct Channels</h2>
                    <div className="flex flex-col gap-10">
                       <div 
                         onClick={openGmail}
                         className="flex items-start gap-6 group cursor-pointer"
                       >
                          <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center border border-primary-100 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                             <Mail className="w-6 h-6 text-primary-500 group-hover:text-white" />
                          </div>
                          <div>
                             <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-2">Email Advisory (Open in Gmail)</p>
                             <p className="text-xl font-bold text-text-primary">codebytesol.info@gmail.com</p>
                          </div>
                       </div>

                       <div className="flex items-start gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center border border-primary-100 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                             <Phone className="w-6 h-6 text-primary-500 group-hover:text-white" />
                          </div>
                          <div>
                             <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-2">Global Support</p>
                             <div className="flex flex-col gap-1">
                                <p className="text-xl font-bold text-text-primary">+91 90003 28387</p>
                             </div>
                          </div>
                       </div>

                       <div className="flex items-start gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center border border-primary-100 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                             <MapPin className="w-6 h-6 text-primary-500 group-hover:text-white" />
                          </div>
                          <div>
                             <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-2">HQ Operations</p>
                             <p className="text-xl font-bold text-text-primary">Texas, USA | Hyderabad, India | UAE</p>
                          </div>
                       </div>
                    </div>
                 </FadeIn>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                 <FadeIn direction="left">
                    <div className="bg-gray-50 p-12 border border-border rounded-3xl relative overflow-hidden">
                       <h2 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">Send a Priority Message</h2>
                       <form 
                         onSubmit={handleSubmit} 
                         name="contact"
                         data-netlify="true"
                         data-netlify-honeypot="bot-field"
                         className="grid grid-cols-1 md:grid-cols-2 gap-6"
                       >
                          <input type="hidden" name="form-name" value="contact" />
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                             <input 
                               type="text" 
                               required
                               value={formData.name}
                               onChange={(e) => setFormData({...formData, name: e.target.value})}
                               className="bg-white border border-border rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" 
                               placeholder="John Doe" 
                             />
                          </div>
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Email Address</label>
                             <input 
                               type="email" 
                               required
                               value={formData.email}
                               onChange={(e) => setFormData({...formData, email: e.target.value})}
                               className="bg-white border border-border rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" 
                               placeholder="john@enterprise.com" 
                             />
                          </div>
                          <div className="md:col-span-2 flex flex-col gap-2">
                             <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Subject</label>
                             <input 
                               type="text" 
                               required
                               value={formData.subject}
                               onChange={(e) => setFormData({...formData, subject: e.target.value})}
                               className="bg-white border border-border rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" 
                               placeholder="AI Transformation Inquiry" 
                             />
                          </div>
                          <div className="md:col-span-2 flex flex-col gap-2">
                             <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Message</label>
                             <textarea 
                               rows={5} 
                               required
                               value={formData.message}
                               onChange={(e) => setFormData({...formData, message: e.target.value})}
                               className="bg-white border border-border rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none" 
                               placeholder="Describe your challenge..." 
                             />
                          </div>
                          <div className="md:col-span-2 pt-4">
                             <Button 
                               type="submit" 
                               disabled={status === 'sending'}
                               className={cn(
                                 "w-full h-16 text-lg rounded-xl transition-all duration-300",
                                 status === 'success' && "bg-green-500 hover:bg-green-600",
                                 status === 'error' && "bg-red-500 hover:bg-red-600"
                               )}
                             >
                                {status === 'idle' && (
                                  <>
                                    Dispatch Message
                                    <Send className="w-5 h-5 ml-4" />
                                  </>
                                )}
                                {status === 'sending' && "Sending Message..."}
                                {status === 'success' && "Message Sent Successfully!"}
                                {status === 'error' && "Failed to Send. Try Again."}
                             </Button>
                             
                             {status === 'success' && (
                               <p className="text-center text-green-600 font-bold mt-4 text-sm animate-fade-in">
                                 We've received your message and will get back to you shortly.
                               </p>
                             )}
                             {status === 'error' && (
                               <p className="text-center text-red-600 font-bold mt-4 text-sm animate-fade-in">
                                 Something went wrong. Please try again or email us directly.
                               </p>
                             )}
                          </div>
                       </form>
                    </div>
                 </FadeIn>
              </div>

           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
