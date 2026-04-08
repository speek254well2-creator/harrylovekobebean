import React from 'react';
import { motion } from 'motion/react';
import { Video, Edit3, Zap, Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Edit3 className="w-8 h-8 text-blue-400" />,
      title: "後期製作 (Post-Production)",
      description: "專業剪輯、調色與音效設計，短影音/長影片/AI製作皆可"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">報價服務</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          提供端到端的影像製作服務
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-20 max-w-xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group text-center"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Price List Section */}
      <div className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Short Video Pricing */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2rem] border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full" />
              短影音報價
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-zinc-300">30秒內</span>
                <span className="text-2xl font-bold text-blue-400">$1200</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-zinc-300">30-60秒</span>
                <span className="text-2xl font-bold text-blue-400">$1600</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-zinc-300">60-90秒</span>
                <span className="text-2xl font-bold text-blue-400">$2000</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-zinc-300">90秒以上</span>
                <span className="text-lg font-bold text-zinc-400">另議</span>
              </div>
            </div>
          </motion.div>

          {/* Long Video Pricing */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2rem] border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full" />
              長影片報價
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-zinc-300">8分鐘內</span>
                <span className="text-2xl font-bold text-blue-400">$6000</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-zinc-300">8分鐘以上</span>
                <span className="text-lg font-bold text-zinc-400">另議</span>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                <p className="text-xs text-zinc-500 flex items-start gap-2">
                  <span className="text-blue-500">**</span>
                  皆會根據剪輯難度討論費用
                </p>
                <p className="text-xs text-zinc-500 flex items-start gap-2">
                  <span className="text-blue-500">**</span>
                  一次多支配合有優惠
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group text-center"
        >
          <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">創意指導 (Creative Direction)</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            構思獨特的敘事結構與視覺風格，確保影像內容能與目標受眾產生深度共鳴。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group text-center"
        >
          <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
            <Video className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">攝影 (Cinematography)</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            視覺敘事，結合燈光與鏡頭運用，捕捉品牌的核心精髓與情感。
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group max-w-3xl mx-auto"
      >
        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full -z-10 group-hover:bg-blue-600/30 transition-colors duration-500" />
        <div className="glass p-8 md:p-10 rounded-[2.5rem] text-center border border-white/10 hover:border-blue-500/30 transition-all duration-500">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">發案/合作 請洽</h3>
          <a 
            href="mailto:speek254well@gmail.com" 
            className="text-xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors break-all"
          >
            speek254well@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
