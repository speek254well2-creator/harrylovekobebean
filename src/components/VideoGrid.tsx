import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Calendar, User, ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player';
import { PROJECTS, type VideoProject } from '../constants';
import { cn } from '../lib/utils';

const Player = ReactPlayer as any;

export default function VideoGrid() {
  const [subFilter, setSubFilter] = useState('全部');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [modalVideo, setModalVideo] = useState<VideoProject | null>(null);

  useEffect(() => {
    if (selectedVideo) {
      setModalVideo(selectedVideo);
    }
  }, [selectedVideo]);

  const subCategories = ['全部', '電商相關', '各式產業', 'Chairman椅人', '代操頻道', '音樂頻道'];

  const filteredProjects = PROJECTS.filter(p => {
    const isShortVideo = p.mainCategory === '短影音';
    const matchSub = subFilter === '全部' || p.subCategory === subFilter;
    return isShortVideo && matchSub;
  });

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">短影音</h2>
          <p className="text-zinc-400 max-w-md">
            結合創意與節奏設計，讓觀眾不自覺看到最後。
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {/* Sub Category Filter */}
          <div className="flex flex-wrap gap-2">
            {subCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSubFilter(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
                  subFilter === cat 
                    ? "bg-blue-500 text-white" 
                    : "bg-white/5 text-zinc-500 hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(project)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 bg-zinc-900 aspect-[4/5]">
                {project.subCategory === 'Chairman椅人' && project.videoUrl.includes('youtube.com') ? (
                  <div className="w-full h-full pointer-events-none">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoUrl.split('/').pop()?.split('?')[0]}?controls=0&modestbranding=1&rel=0&showinfo=0&mute=1`}
                      width="100%"
                      height="100%"
                      className="w-full h-full scale-[1.02]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                ) : project.subCategory === '代操頻道' && project.videoUrl.includes('tiktok.com') ? (
                  <div className="w-full h-full pointer-events-none">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${project.videoUrl.split('/').pop()?.split('?')[0]}`}
                      width="100%"
                      height="100%"
                      className="w-full h-full scale-[1.02]"
                    />
                  </div>
                ) : project.subCategory === '音樂頻道' && project.videoUrl.includes('instagram.com') ? (
                  <div className="w-full h-full pointer-events-none">
                    <iframe
                      src={`${project.videoUrl.split('?')[0]}embed`}
                      width="100%"
                      height="100%"
                      className="w-full h-full scale-[1.02]"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    />
                  </div>
                ) : project.videoUrl.includes('drive.google.com') && !project.thumbnail ? (
                  <div className="w-full h-full pointer-events-none">
                    <iframe
                      src={project.videoUrl.replace('/view?usp=drive_link', '/preview').replace('/view', '/preview')}
                      width="100%"
                      height="100%"
                      className="w-full h-full scale-[1.02]"
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="text-white fill-white w-6 h-6 ml-1" />
                      </div>
                    </div>
                  </>
                )}
                
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-blue-600/60 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-white border border-white/10">
                    {project.subCategory}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.client || '個人創作專案'}</p>
                </div>
                <span className="text-zinc-600 text-sm font-mono">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence onExitComplete={() => setModalVideo(null)}>
        {selectedVideo && modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full max-w-6xl flex flex-col gap-8">
              <div className={cn(
                "relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-white/10 mx-auto",
                modalVideo.mainCategory === '短影音' ? "aspect-[9/16] h-[80vh]" : "aspect-video w-full"
              )}>
                {modalVideo.videoUrl.includes('drive.google.com') ? (
                  <iframe
                    src={modalVideo.videoUrl.replace('/view?usp=drive_link', '/preview').replace('/view', '/preview')}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="w-full h-full"
                  />
                ) : modalVideo.subCategory === 'Chairman椅人' && modalVideo.videoUrl.includes('youtube.com') ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${modalVideo.videoUrl.split('/').pop()?.split('?')[0]}`}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : modalVideo.subCategory === '代操頻道' && modalVideo.videoUrl.includes('tiktok.com') ? (
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${modalVideo.videoUrl.split('/').pop()?.split('?')[0]}`}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : modalVideo.subCategory === '音樂頻道' && modalVideo.videoUrl.includes('instagram.com') ? (
                  <iframe
                    src={`${modalVideo.videoUrl.split('?')[0]}embed`}
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                  />
                ) : (
                  <Player
                    url={modalVideo.videoUrl}
                    width="100%"
                    height="100%"
                    controls
                    playing={!!selectedVideo}
                  />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div className="md:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{modalVideo.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {modalVideo.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="glass p-6 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm font-medium">年份: {modalVideo.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium">客戶: {modalVideo.client || '無'}</span>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block mb-2">類別</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded">{modalVideo.mainCategory}</span>
                        <span className="text-xs font-semibold bg-blue-500/20 px-2 py-1 rounded text-blue-400">{modalVideo.subCategory}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
