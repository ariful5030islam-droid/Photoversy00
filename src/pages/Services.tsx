import { motion } from 'motion/react';
import { Camera, Users, Image as ImageIcon, ShoppingBag, Heart, Baby } from 'lucide-react';

const SERVICES = [
  {
    title: 'ওয়েডিং ফটোগ্রাফি',
    icon: <Heart size={32} />,
    desc: 'বিয়ের প্রতিটি মুহূর্ত, আবেগ এবং আনন্দকে ফ্রেমবন্দি করা। ক্যান্ডিড এবং ট্র্যাডিশনাল দুই ধরণের কভারেজ।',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'ইভেন্ট ফটোগ্রাফি',
    icon: <Users size={32} />,
    desc: 'জন্মদিন, কর্পোরেট প্রোগ্রাম বা যেকোনো সোশ্যাল ইভেন্টের প্রফেশনাল কভারেজ।',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'পোর্ট্রেট ও মডেলিং',
    icon: <ImageIcon size={32} />,
    desc: 'ব্যক্তিগত ব্র্যান্ডিং বা মডেলিং পোর্টফোলিওোর জন্য হাই-কোয়ালিটি স্টুডিও বা আউটডোর শুট।',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'প্রোডাক্ট ফটোগ্রাফি',
    icon: <ShoppingBag size={32} />,
    desc: 'ই-কমার্স বা সোশ্যাল মিডিয়া মার্কেটিংয়ের জন্য পণ্যের আকর্ষণীয় এবং ডিটেইলড ছবি।',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'ফ্যামিলি ও বেবি শুট',
    icon: <Baby size={32} />,
    desc: 'পরিবারের সুন্দর মুহূর্ত এবং শিশুদের নিষ্পাপ হাসি ধরে রাখার জন্য বিশেষ সেশন।',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            What we do
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            সার্ভিস ওভারভিউ
          </motion.h1>
          <p className="text-gray-500 text-lg">
            আমরা স্রেফ ছবি তুলি না, আমরা আপনার জীবনের গল্পগুলো শৈল্পিকভাবে ফ্রেমবন্দি করি।
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative h-80 overflow-hidden rounded-[40px] mb-8">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white p-4 rounded-3xl text-black">
                     {s.icon}
                   </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
