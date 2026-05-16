import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
            PHOTOVERSY
          </Link>
          <p className="text-gray-500 max-w-sm mb-8">
            Capturing moments that last forever-storytelling through stunning photos and cinematic videos.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1DW2NnXTM4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full border border-gray-200 hover:border-black transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/photoversy.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full border border-gray-200 hover:border-black transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/8801814856719"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full border border-gray-200 hover:border-black transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:teamphotoversy@gmail.com"
              className="p-2 bg-white rounded-full border border-gray-200 hover:border-black transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-black">হোম</Link></li>
            <li><Link to="/services" className="hover:text-black">সার্ভিস</Link></li>
            <li><Link to="/pricing" className="hover:text-black">প্যাকেজ</Link></li>
            <li><Link to="/booking" className="hover:text-black">বুকিং</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>teamphotoversy@gmail.com</li>
            <li>+880 1814-856719</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Photoversy. All rights reserved.
      </div>
    </footer>
  );
}
