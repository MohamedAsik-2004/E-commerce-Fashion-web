import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  Crown,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const ContactSection: React.FC = () => {
  const { addToast } = useStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Fitting Appointment',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Inquiry Received', 'Our Master Concierge will call you within 2 hours.', 'success');
  };

  return (
    <section id="contact-us" className="py-20 bg-[#020612] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
            <Crown className="w-4 h-4" />
            <span>Atelier Concierge</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
            Visit Our <span className="gold-gradient-text italic font-serif">Flagship Atelier</span>
          </h2>
          <p className="font-poppins text-slate-400 text-sm mt-2 font-light">
            Experience private trial rooms, master tailor fittings, and luxury fabric selections in person.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Cards & Direct Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#081B4B] border border-[#D4AF37]/30 text-[#D4AF37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-slate-100 text-base">Store Address</h4>
                  <p className="text-xs text-slate-300 font-poppins mt-1 leading-relaxed">
                    Main Fashion Boulevard, Suite 101,<br />
                    Luxury District, Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-[#081B4B] border border-[#D4AF37]/30 text-[#D4AF37]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-slate-100 text-base">Contact Phone</h4>
                  <p className="text-xs text-[#D4AF37] font-montserrat font-bold mt-1">
                    +91 84893 32211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-[#081B4B] border border-[#D4AF37]/30 text-[#D4AF37]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-slate-100 text-base">Email Concierge</h4>
                  <p className="text-xs text-slate-300 font-poppins mt-1">
                    concierge@askaragrand.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-[#081B4B] border border-[#D4AF37]/30 text-[#D4AF37]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-slate-100 text-base">Business Hours</h4>
                  <p className="text-xs text-slate-300 font-poppins mt-1">
                    Monday – Saturday: 10:00 AM – 9:30 PM<br />
                    Sunday: 11:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/918489332211?text=Hello%20Askara%20Grand%20Concierge,%20I%20would%20like%20to%20inquire%20about%20your%20bespoke%20collection."
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-4 rounded-xl bg-[#25D366] text-slate-950 font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href="tel:+918489332211"
                className="py-3.5 px-4 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>

            {/* Interactive Google Map Mockup */}
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#081B4B] p-4 text-center space-y-3">
              <div className="aspect-video rounded-xl bg-[#030A1C] border border-[#D4AF37]/20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <Navigation className="w-8 h-8 text-[#D4AF37] animate-bounce mb-2" />
                <p className="font-playfair font-bold text-slate-100 text-sm">Flagship Atelier Coordinates</p>
                <p className="text-[11px] text-slate-400">13.0604° N, 80.2496° E • Chennai Central</p>
                <a
                  href="https://maps.google.com/?q=Nungambakkam+High+Road+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 px-3 py-1 rounded-full bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-1 hover:bg-[#FFF1C5]"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[#D4AF37]/40 shadow-2xl space-y-6">
              
              <div>
                <h3 className="font-playfair font-bold text-2xl text-slate-100">
                  Book Private Fitting or Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-poppins">
                  Fill out the form below to reserve an exclusive appointment with our Master Tailor.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#081B4B]/80 border border-[#D4AF37] text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h4 className="font-playfair font-bold text-xl text-slate-100">Appointment Requested</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, valued patron. Our Atelier Concierge will reach out via WhatsApp / phone to confirm your schedule.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#081B4B] font-bold text-xs uppercase"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lord Sterling"
                        className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="patron@askaragrand.com"
                      className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Bespoke Fitting Appointment">Bespoke Wedding / Gala Fitting</option>
                      <option value="Custom Sherwani Consultation">Custom Sherwani Zardozi Order</option>
                      <option value="Boys Luxury Wardrobe">Young Prince Boys Collection</option>
                      <option value="Corporate Bulk Wardrobe">Corporate & Boardroom Wardrobe</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify event date, preferred time slot, or custom fabric requests..."
                      className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl hover:scale-101 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
