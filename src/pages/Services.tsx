import { motion } from 'motion/react';
import { HeartPulse, ShieldCheck, Award, Sparkles, Smile, CalendarCheck, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Teeth Cleaning and Polishing",
      desc: "Professional cleaning removes plaque buildup and surface stains, helping prevent gum disease and tooth decay.",
      icon: <HeartPulse size={28} />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Tooth Extraction",
      desc: "When a tooth cannot be saved, we perform safe and careful extractions with minimal pain and proper aftercare guidance.",
      icon: <ShieldCheck size={28} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Dental Fillings",
      desc: "We treat cavities early and restore the strength and function of your tooth.",
      icon: <Award size={28} />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Teeth Whitening",
      desc: "Improve the brightness of your smile with safe whitening procedures.",
      icon: <Sparkles size={28} />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Braces and Orthodontics",
      desc: "We help align teeth properly to improve your smile and oral health.",
      icon: <Smile size={28} />,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Routine Dental Checkups",
      desc: "Regular dental visits help detect problems early and reduce future treatment costs.",
      icon: <CalendarCheck size={28} />,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Complete Dental Care Under One Roof
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              At Medicoview Healthcare Services, we provide a full range of dental treatments designed to protect, restore, and enhance your smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:border-emerald-100 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need advice about your dental issue?</h2>
          <p className="text-xl text-emerald-50 mb-10">Call us today for professional consultation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:07043009049"
              className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <Phone size={24} />
              07043009049
            </a>
            <Link
              to="/contact#appointment"
              className="bg-emerald-700 text-white border-2 border-emerald-500 px-10 py-4 rounded-xl font-bold text-xl hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <CalendarCheck size={24} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
