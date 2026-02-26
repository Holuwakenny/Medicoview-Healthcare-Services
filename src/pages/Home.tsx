import { motion } from 'motion/react';
import { Phone, Calendar, ShieldCheck, Award, Clock, HeartPulse, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: "Teeth Cleaning and Polishing",
      desc: "Remove stains, plaque, and tartar. Keep your smile fresh and healthy.",
      icon: <HeartPulse className="text-emerald-600" />
    },
    {
      title: "Tooth Extraction",
      desc: "Safe and careful removal of damaged or problematic teeth with minimal discomfort.",
      icon: <ShieldCheck className="text-emerald-600" />
    },
    {
      title: "Dental Fillings",
      desc: "Restore cavities and protect your teeth from further decay.",
      icon: <Award className="text-emerald-600" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6">
                Trusted Dental Care in Ejigbo, Lagos
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Healthy smiles <br />
                <span className="text-emerald-600">start here.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                At Medicoview Healthcare Services, we provide professional, gentle, and affordable dental care for individuals and families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact#appointment"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment
                </Link>
                <a
                  href="tel:07043009049"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  07043009049
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipOrjQC7_8ssTzPRtT9s7kMgalbtFl-KHiL-R4Nj=s1200"
                  alt="Medicoview Healthcare Services Clinic Exterior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Hygiene Standard</p>
                  <p className="text-lg font-bold text-slate-900">100% Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Your Comfort. Your Smile. Our Priority.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Medicoview Healthcare Services, we believe great dental care goes beyond treatment. It is about trust, hygiene, and making every patient feel safe and confident.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                Located in Ejigbo, Lagos, our clinic is equipped to handle routine checkups, preventive care, and advanced dental treatments. Whether you are coming in for a simple cleaning or a more complex procedure, you are in good hands.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-bold text-emerald-600 mb-1">Modern</p>
                  <p className="text-sm text-slate-500">Equipment</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-bold text-emerald-600 mb-1">Expert</p>
                  <p className="text-sm text-slate-500">Dental Team</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPMJRm4O28mRkTVy7QbRa6hcku1U6UlvJ_PbhWG=s1200"
                alt="Clinic Interior and Equipment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-slate-600">
                We offer a wide range of dental services to keep your teeth healthy and your smile bright.
              </p>
            </div>
            <Link
              to="/services"
              className="text-emerald-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Services <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/contact#appointment"
              className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid gap-6">
                {[
                  "Clean and hygienic environment",
                  "Experienced and caring dental professionals",
                  "Modern equipment",
                  "Affordable and transparent pricing",
                  "Friendly service focused on patient comfort"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <p className="text-lg text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-emerald-600 rounded-2xl text-white">
                <p className="text-xl font-medium italic">
                  "Your smile deserves attention and care. We are here to provide it."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Why Choose Us</h2>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipObC0syu5PnobI9Unu5AJO1a98ArTmvcRBLSy_K=s1200"
                  alt="Dental Care at Medicoview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
