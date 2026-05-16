import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Camera, Users, Image as ImageIcon, Video } from 'lucide-react';
import { cn } from '../utils/cn';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1920'
];

const SERVICES = [
  {
    title: 'ওয়েডিং ফটোগ্রাফি',
    icon: <Camera className="text-black" />,
    desc: 'বিয়ের প্রতিটি মুহূর্ত, আবেগ এবং আনন্দকে ফ্রেমবন্দি করা।'
  },
  {
    title: 'ইভেন্ট ফটোগ্রাফি',
    icon: <Users className="text-black" />,
    desc: 'জন্মদিন বা কর্পোরেট প্রোগ্রামের প্রফেশনাল কভারেজ।'
  },
  {
    title: 'পোর্ট্রেট ও মডেলিং',
    icon: <ImageIcon className="text-black" />,
    desc: 'ব্যক্তিগত ব্র্যান্ডিং বা মডেলিং পোর্টফোলিও আর্ট।'
  }
];

const TESTIMONIALS = [
  {
    name: 'তানভীর আহমেদ',
    role: 'বর',
    text: 'তাদের ফটোগ্রাফি সত্যি অসাধারণ। আমাদের জীবনের সেরা মুহূর্তগুলো খুব সুন্দরভাবে ধরে রেখেছে।',
    rating: 5
  },
  {
    name: 'সাদিয়া ইসলাম',
    role: 'মডেল',
    text: 'প্রফেশনাল এবং ক্রিয়েটিভ টিম। কালার গ্রেডিং এবং কম্পোজিশন টপ-নোচ!',
    rating: 5
  }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={HERO_IMAGES[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          />
        </AnimatePresence>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-semibold mb-4 text-gray-300">
              Capturing moments that last forever
            </h2>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
              PHOTOVERSY <br />
              <span className="text-2xl md:text-4xl font-light tracking-widest text-gray-300">ফটোভার্সি</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 text-gray-200 font-serif italic">
              "স্মৃতিগুলো হোক জীবন্ত"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-2">Capabilities</p>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">আমাদের সেবাসমূহ</h3>
            </div>
            <Link to="/services" className="text-black font-semibold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
              সবগুলো দেখুন
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-gray-200 transition-all group"
              >
                <div className="mb-6 bg-gray-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-500 mb-6">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  বিস্তারিত <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Teaser */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-4xl font-bold tracking-tight mb-4 text-center">ইনভেস্মেন্ট প্ল্যান</h3>
          <p className="text-gray-500">আপনার বাজেটের মধ্যে সেরা প্যাকেজটি বেছে নিন</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-8 rounded-3xl border border-gray-200">
             <h5 className="font-bold text-gray-400 mb-2 uppercase text-xs">বেসিক</h5>
             <p className="text-2xl font-bold mb-4">৪ ঘণ্টা শুট</p>
             <Link to="/pricing" className="text-black font-bold text-sm">বিস্তারিত দেখুন →</Link>
           </div>
           <div className="bg-black text-white p-8 rounded-3xl shadow-xl scale-105">
             <h5 className="font-bold text-gray-400 mb-2 uppercase text-xs">স্ট্যান্ডার্ড</h5>
             <p className="text-2xl font-bold mb-4">ফুল ডে শুট</p>
             <Link to="/pricing" className="text-white font-bold text-sm">বিস্তারিত দেখুন →</Link>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-gray-200">
             <h5 className="font-bold text-gray-400 mb-2 uppercase text-xs">প্রিমিয়াম</h5>
             <p className="text-2xl font-bold mb-4">অল-ইন-ওয়ান</p>
             <Link to="/pricing" className="text-black font-bold text-sm">বিস্তারিত দেখুন →</Link>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold tracking-tight mb-16 text-center">ক্লায়েন্ট রিভিউ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-[40px]">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="black" />
                  ))}
                </div>
                <p className="text-xl font-medium mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
