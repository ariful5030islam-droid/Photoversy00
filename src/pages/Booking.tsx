import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Booking() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xbdqqkyj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <header className="mb-12">
            <h2 className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">Booking</h2>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">এখনই বুক করুন</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              আপনার বিশেষ মুহূর্তগুলো আমাদের সাথে শেয়ার করুন। নিচের ফর্মটি পূরণ করুন, আমরা আপনার সাথে খুব শীঘ্রই যোগাযোগ করবো।
            </p>
          </header>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <MapPin className="text-black" />
              </div>
              <div>
                <h4 className="font-bold mb-1">ঠিকানা</h4>
                <p className="text-gray-500 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <Phone className="text-black" />
              </div>
              <div>
                <h4 className="font-bold mb-1">ফোন</h4>
                <p className="text-gray-500 text-sm">+880 1814-856719</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <Mail className="text-black" />
              </div>
              <div>
                <h4 className="font-bold mb-1">ইমেইল</h4>
                <p className="text-gray-500 text-sm">teamphotoversy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100"
        >
          {formState === 'success' ? (
            <div className="text-center py-20">
              <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Send size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">ধন্যবাদ!</h3>
              <p className="text-gray-500">আপনার বুকিং তথ্য আমাদের কাছে পৌঁছেছে। আমরা শিঘ্রই আপনার সাথে যোগাযোগ করব।</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-black font-bold border-b border-black"
              >
                আবার ফর্ম পূরণ করুন
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">নাম</label>
                  <input
                    name="Name"
                    required
                    placeholder="আপনার পুরো নাম"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">ফোন নম্বর</label>
                  <input
                    name="Phone"
                    required
                    type="tel"
                    placeholder="+880"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">ইমেইল</label>
                <input
                  name="Email"
                  required
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">ইভেন্টের ধরন</label>
                  <select
                    name="Event Type"
                    required
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all appearance-none"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="Wedding">ওয়েডিং</option>
                    <option value="Mehendi">মেহেন্দী</option>
                    <option value="Concert">কনসার্ট</option>
                    <option value="Corporate">কর্পোরেট</option>
                    <option value="Birthday">বার্থডে</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">তারিখ</label>
                  <input
                    name="Event Date"
                    required
                    type="date"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">সময় / ব্যাপ্তি</label>
                  <input
                    name="Duration"
                    placeholder="যেমন: ৪ ঘণ্টা বা ১ দিন"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">প্যাকেজ সিলেকশন</label>
                  <select
                    name="Package"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all appearance-none"
                  >
                    <option value="Basic">বেসিক</option>
                    <option value="Standard">স্ট্যান্ডার্ড</option>
                    <option value="Premium">প্রিমিয়াম</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">লোকেশন</label>
                <input
                  name="Location"
                  required
                  placeholder="ইভেন্ট কোথায় হবে?"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold ml-1">অ্যাড-অনস (Add-ons)</label>
                <div className="flex flex-wrap gap-4">
                  {['সিনেমাটোগ্রাফি', 'ড্রোন শট', 'ইনস্ট্যান্ট প্রিন্ট'].map((addon) => (
                    <label key={addon} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-all">
                      <input type="checkbox" name="Add-ons" value={addon} className="accent-black w-4 h-4" />
                      <span className="text-sm font-medium">{addon}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-black text-white py-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-50"
              >
                {formState === 'submitting' ? 'পাঠানো হচ্ছে...' : (
                  <>বুকিং কনফার্ম করুন <Send size={20} /></>
                )}
              </button>
              {formState === 'error' && (
                <p className="text-red-500 text-sm text-center font-medium">কিছু ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
