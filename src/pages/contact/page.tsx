import { useState, useEffect, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Check for hash in URL and scroll to section if present
    if (window.location.hash === '#send-message') {
      setTimeout(() => {
        const element = document.getElementById('send-message');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure rendering
    }
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  const getSectionClasses = (_index: number, baseClasses = '') => {
    return baseClasses;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.company || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        "https://qoj85qyf3c.execute-api.ap-south-1.amazonaws.com/prod/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          country: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={setSectionRef(0)}
        data-section="0"
        className={getSectionClasses(0, "relative pt-32 pb-20 overflow-hidden")}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/contact-hero-workspace-v6-394--ff8560dc88e9.png"
            alt="Contact Us"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Connect with our global team. We're here to help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-full mx-auto mb-6">
                <i className="ri-mail-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <div className="space-y-1">
                <a
                  href="mailto:info@forgebyte.ai"
                  className="block text-lg text-[#00C896] hover:text-[#00D9FF] transition-colors cursor-pointer font-medium"
                >
                  Assist@forgebyte.ai
                </a>

              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00D9FF] to-[#00C896] rounded-full mx-auto mb-6">
                <i className="ri-phone-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <div className="space-y-1">
                <a
                  href="tel:+19522001318"
                  className="block text-lg text-[#00C896] hover:text-[#00D9FF] transition-colors cursor-pointer font-medium"
                >
                  +1 952 200 1318 (US)
                </a>
                <a
                  href="tel:+918790057975"
                  className="block text-lg text-[#00C896] hover:text-[#00D9FF] transition-colors cursor-pointer font-medium"
                >
                  +91 8790057975 (India)
                </a>
              </div>
            </div>

            {/* Global Presence Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-full mx-auto mb-6">
                <i className="ri-global-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Presence</h3>
              <p className="text-gray-600">USA • India • UAE</p>
            </div>
          </div>

          {/* Office Locations */}
          <div
            ref={setSectionRef(2)}
            data-section="2"
            className={getSectionClasses(2, "grid md:grid-cols-3 gap-8 mb-8")}
          >
            {/* USA HQ */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-full">
                  <i className="ri-map-pin-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">USA HQ</h3>
                  <p className="text-gray-400 text-sm">Headquarters</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="leading-relaxed">
                  5900 Balcones DR STE<br />
                  Austin, TX 78731-4298<br />
                  United States
                </p>
              </div>
            </div>

            {/* India GCC */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00D9FF] to-[#00C896] rounded-full">
                  <i className="ri-map-pin-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">India GCC</h3>
                  <p className="text-gray-400 text-sm">Development Center</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="leading-relaxed">
                  813, 8th Floor, Sandhya Techno - 1<br />
                  Radhe Nagar, Khajaguda<br />
                  Rai Durg, Telangana - 500081<br />
                  India
                </p>
              </div>
            </div>

            {/* Dubai */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-full">
                  <i className="ri-map-pin-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dubai</h3>
                  <p className="text-gray-400 text-sm">Middle East Operations</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="leading-relaxed">
                  Office No: 213, 2nd Floor<br />
                  AL Fajer Complex, Road No: 2<br />
                  Zabeel Mall, Umm Hurair Road<br />
                  P.O. BOX No: 118467<br />
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={setSectionRef(3)}
            data-section="3"
            className={getSectionClasses(3, "mb-16 bg-gradient-to-r from-[#00C896] to-[#00D9FF] rounded-3xl p-12 text-center text-white")}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Forgebyte can help accelerate your digital journey with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@forgebyte.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer shadow-lg"
              >
                <i className="ri-mail-line text-xl"></i>
                Email Us Now
              </a>
              <a
                href="tel:+19522001318"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line text-xl"></i>
                Call Us Today
              </a>
            </div>
          </div>

          {/* Contact Form - Moved to End */}
          <div
            id="send-message"
            ref={setSectionRef(4)}
            data-section="4"
            className={getSectionClasses(4, "max-w-4xl mx-auto")}
          >
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="John"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="john.doe@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Your Company"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="CEO, CTO, Manager, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="United States"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all text-sm cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Cloud Engineering">Cloud Engineering</option>
                    <option value="Data Services">Data Services</option>
                    <option value="Application Development">Application Development</option>
                    <option value="ERP Services">ERP Services</option>
                    <option value="Software Testing & QA">Software Testing & QA</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message 
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C896] focus:border-transparent outline-none transition-all resize-none text-sm"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-2">{formData.message.length}/500 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00C896] to-[#00D9FF] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-send-plane-line"></i>
                    Send Message
                  </span>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center font-medium flex items-center justify-center gap-2">
                    <i className="ri-checkbox-circle-line text-xl"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center font-medium flex items-center justify-center gap-2">
                    <i className="ri-error-warning-line text-xl"></i>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
