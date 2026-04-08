import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import LongVideoGrid from './components/LongVideoGrid';
import Services from './components/Services';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-blue-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        <VideoGrid />
        <LongVideoGrid />
        
        <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-3xl overflow-hidden glass"
              >
                <img 
                  src="/IMG_6587_VSCO 2.jpg" 
                  alt="黃哈利 Harry" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl -z-10" />
            </div>
            
            <div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">關於我 (About Me)</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">黃哈利 Harry</h2>
              <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  擁有7年的影音製作經驗，曾創立並經營 YouTube 頻道，訂閱超過 17 萬人；也代操過短影音平台，總觀看數破千萬次，目前為電商公司固定配合影音製作人，
                </p>
                <p>
                  各種剪輯風格、長/短影片都駕輕就熟，對於AI技術亦有所涉略，熟悉各平台內容節奏與觀眾偏好，打造最符合你需求的精彩故事。
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">7+</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">從業年資</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">10M+</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">總觀看次數</div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <a 
                  href="https://www.instagram.com/harrimoly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 border border-white/5 hover:border-blue-500/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-0.5">Instagram</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">@harrimoly</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Services />
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter">
            HARRY<span className="text-blue-500">.</span>STUDIO
          </div>
          <div className="text-zinc-500 text-sm">
            © 2026 Harry黃哈利 STUDIO. 版權所有。
          </div>
          <div className="flex gap-6 text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">隱私政策</a>
            <a href="#" className="hover:text-white transition-colors">使用條款</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
