import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight leading-none">MEDICOVIEW</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">Healthcare Services</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Professional Dental Care in Ejigbo, Lagos. Clean care. Honest service. Confident smiles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact & Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-400 shrink-0 mt-1" size={18} />
                <span>Shop 23, Plaza, 79/81 Egbe Rd, Ejigbo, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-400 shrink-0" size={18} />
                <a href="tel:07043009049" className="hover:text-emerald-400 transition-colors">07043009049</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="text-emerald-400 shrink-0" size={18} />
                <div>
                  <p className="font-medium">Mon - Fri: 9am - 5pm</p>
                  <p className="text-sm text-slate-400">Saturday: 9am - 2pm</p>
                  <p className="text-sm text-slate-400">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Medicoview Healthcare Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
