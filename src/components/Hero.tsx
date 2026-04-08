import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowDown, Film, Camera, Monitor } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder / Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
        <img
          src="/Generate_an_image_202604041818.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/30 overflow-hidden glass p-1">
              <img
                src="/LINE_ALBUM_2022313 阿里山_260407_1.jpg"
                alt="Harry Profile"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.2em] uppercase mb-8">
            導演 & 攝影剪輯 (Director & Cinematographer)
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-zinc-500">
              打造你的故事
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-white mb-12 max-w-2xl mx-auto font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            把影片變成你個人魅力的擴大器。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">短影片作品</span>
              <Play className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-4 h-4 fill-black" />
            </button>
            <button 
              onClick={() => document.getElementById('long-videos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold overflow-hidden transition-all hover:bg-white/10"
            >
              <span className="relative z-10">長影片作品</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">向下滑動</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 text-zinc-500" />
        </motion.div>
      </motion.div>

      {/* Stats/Features Floating */}
      <div className="hidden lg:flex absolute bottom-24 right-12 flex-col gap-8">
        <div className="flex items-center gap-4 text-right">
          <div>
            <div className="text-2xl font-bold">150+</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500">專案完成</div>
          </div>
          <div className="p-3 rounded-xl glass">
            <Film className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
