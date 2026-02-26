import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, Calendar } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (location.hash === '#appointment') {
      const element = document.getElementById('appointment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been sent. Our team will contact you shortly.');
    setAppointmentForm({ name: '', phone: '', date: '', message: '' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you as soon as possible.');
    setContactForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Visit Our Clinic</h1>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Medicoview Healthcare Services<br />
                      Shop 23, Plaza, 79/81 Egbe Rd<br />
                      Ejigbo, Egbe, Lagos 102213, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                    <a href="tel:07043009049" className="text-lg text-emerald-600 font-bold hover:underline">
                      07043009049
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Opening Hours</h3>
                    <div className="text-lg text-slate-600 space-y-1">
                      <p>Monday to Friday: 9am to 5pm</p>
                      <p>Saturday: 9am to 2pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.856456041123!2d3.275636875882352!3d6.544625193448135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f0441f00ee9%3A0x6ae48841ff94d95b!2sMedicoview%20Healthcare%20Services%20(Dental)!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-6">Book an Appointment</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Ready to take care of your smile? Fill out the form and our team will contact you to confirm your appointment.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Or call us directly</p>
                    <p className="text-xl font-bold">07043009049</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="John Doe"
                      value={appointmentForm.name}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="070 0000 0000"
                      value={appointmentForm.phone}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                  <input
                    required
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    value={appointmentForm.date}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Tell us about your dental concern..."
                    value={appointmentForm.message}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600">Have a question? Send us a message and we will respond as soon as possible.</p>
          </div>
          <form onSubmit={handleContactSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
