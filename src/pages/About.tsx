import { motion } from 'motion/react';
import { Target, Heart, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Medicoview Healthcare Services is a trusted dental clinic serving Ejigbo and surrounding areas in Lagos.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOrjQC7_8ssTzPRtT9s7kMgalbtFl-KHiL-R4Nj=s1200"
            alt="Medicoview Clinic Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are committed to delivering quality dental care in a safe and welcoming environment. We understand that many people feel anxious about visiting the dentist. That is why we focus on gentle procedures, clear explanations, and patient comfort at every step.
              </p>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Community Focused</p>
                  <p className="text-sm text-slate-500">Serving Ejigbo and surrounding areas</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMGR-R4C6oIbcVp2GF9tC1DPes1LEpzo73hq6L8=s1200"
                alt="Our Professional Dental Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Commitment */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide reliable, affordable, and professional dental care that improves oral health and boosts confidence in our community.
              </p>
            </motion.div>

            {/* Commitment */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <Heart size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Commitment</h2>
              <ul className="space-y-4">
                {[
                  "Strict hygiene standards",
                  "Honest treatment recommendations",
                  "Patient centered care",
                  "Long term oral health solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <ShieldCheck className="text-emerald-500" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Your health matters. Your smile matters.</h2>
          <p className="text-lg text-slate-600 mb-10">
            Experience the difference of compassionate, professional dental care.
          </p>
          <Link
            to="/contact"
            className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg"
          >
            Visit Our Clinic
          </Link>
        </div>
      </section>
    </div>
  );
}
