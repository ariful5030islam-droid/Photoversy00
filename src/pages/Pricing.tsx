import { motion } from 'motion/react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PACKAGES = [
  {
    name: 'বেসিক',
    icon: <Zap className="text-blue-500" />,
    features: [
      '৪ ঘণ্টা শুট',
      '৫০টি এডিট করা ছবি',
      'প্রফেশনাল কালার গ্রেডিং',
      'ডিজিটাল ডেলিভারি'
    ],
    highlight: false
  },
  {
    name: 'স্ট্যান্ডার্ড',
    icon: <Rocket className="text-purple-500" />,
    features: [
      'ফুল ডে শুট',
      '১০০+ এডিট করা ছবি',
      '১টি এক্সক্লুসিভ ফটুবুক',
      'প্রফেশনাল রিটার্চিং',
      'ফাস্ট ডেলিভারি'
    ],
    highlight: true,
    tag: 'সবচেয়ে জনপ্রিয়'
  },
  {
    name: 'প্রিমিয়াম',
    icon: <Crown className="text-amber-500" />,
    features: [
      'ড্রোন কভারেজ',
      'সিনেমাটিক ভিডিও',
      'অল-ইন-ওয়ান প্যাকেজ',
      'আনলিমিটেড শুট',
      'প্রিমিয়াম ফটুবুক',
      'ইনস্ট্যান্ট ফটো প্রিন্ট (২০টি)'
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Investment
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            প্যাকেজ ও প্রাইসিং
          </motion.h1>
          <p className="text-gray-500 text-lg">
            সাশ্রয়ী মূল্যে প্রফেশনাল মেমোরি। আপনার প্রয়োজন অনুযায়ী সেরা প্ল্যানটি বেছে নিন।
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-[40px] p-10 shadow-sm border transition-all hover:shadow-xl ${
                pkg.highlight ? 'border-black scale-105 z-10' : 'border-gray-100'
              }`}
            >
              {pkg.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {pkg.tag}
                </div>
              )}
              <div className="mb-8">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm font-medium">প্যাকেজ ডিটেইলস</p>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-gray-600">
                    <div className="bg-black text-white p-0.5 rounded-full">
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className={`w-full py-4 rounded-full font-bold flex items-center justify-center transition-all ${
                  pkg.highlight ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                বুক করুন
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-black rounded-[40px] p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">কাস্টম প্যাকেজ প্রয়োজন?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            আপনার যদি বিশেষ কোনো রিকোয়ারমেন্ট থাকে, তবে আমাদের সাথে যোগাযোগ করুন। আমরা আপনার বাজেট অনুযায়ী কাস্টম ডিল তৈরি করতে পারি।
          </p>
          <a
            href="https://wa.me/8801814856719"
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all inline-block"
          >
            হোয়াটসঅ্যাপে কথা বলুন
          </a>
        </div>
      </div>
    </div>
  );
}
