"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  MoreVertical,
} from "lucide-react";
import { Instagram } from "@/components/ui/Icons";

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  caption?: string;
  timestamp?: string;
}

interface InstagramReelModalProps {
  posts: InstagramPost[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function InstagramReelModal({
  posts,
  currentIndex,
  onClose,
  onNavigate,
}: InstagramReelModalProps) {
  const currentPost = posts[currentIndex];
  const total = posts.length;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(1);
  const totalDuration = 21; // 21 seconds matching the reference screenshot
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while modal is active
  useEffect(() => {
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = origOverflow;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + total) % total);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % total);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, total, onClose, onNavigate]);

  // Video timer simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => (prev >= totalDuration ? 0 : prev + 1));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalDuration]);

  // Reset time when changing post
  useEffect(() => {
    setCurrentTime(1);
    setIsPlaying(true);
  }, [currentIndex]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setCurrentTime(Math.round(ratio * totalDuration));
  };

  const toggleFullscreen = () => {
    if (!mediaContainerRef.current) return;
    if (!document.fullscreenElement) {
      mediaContainerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  if (!currentPost) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button at top-right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full transition-colors z-50 cursor-pointer"
        aria-label="Close modal"
      >
        <X size={28} />
      </button>

      {/* Navigation Arrows */}
      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + total) % total);
            }}
            className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Previous reel"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % total);
            }}
            className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Next reel"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Main Dialog Card */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Media Display with Realistic Reel Controls */}
        <div
          ref={mediaContainerRef}
          className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] md:min-h-[540px] overflow-hidden select-none"
        >
          <img
            src={currentPost.media_url}
            alt="Baroque Instagram Reel"
            className="w-full h-full object-contain max-h-[50vh] md:max-h-[82vh]"
          />

          {/* Bottom Video Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-4 pb-3 pt-8 flex flex-col gap-2 z-20">
            {/* Scrubber progress bar */}
            <div
              className="w-full h-1 bg-white/30 hover:h-1.5 transition-all rounded-full overflow-hidden cursor-pointer"
              onClick={handleScrub}
            >
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(currentTime / totalDuration) * 100}%` }}
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between text-white/90 text-xs">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <span className="font-bold text-sm tracking-tighter">❚❚</span>
                  ) : (
                    <Play size={15} className="fill-white" />
                  )}
                </button>
                <span className="font-mono text-xs tracking-wider">
                  {formatTime(currentTime)} / {formatTime(totalDuration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={15} />
                </button>
                <button
                  type="button"
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label="More options"
                >
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Instagram Info & Caption Sidebar */}
        <div className="w-full md:w-[360px] bg-white flex flex-col justify-between p-5 md:p-6 border-l border-gray-100">
          <div>
            {/* Account Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C9A84C]/40 flex items-center justify-center overflow-hidden shrink-0">
                  <span className="text-[10px] font-serif font-bold text-[#C9A84C]">BAROQUE</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-semibold text-[#1A1A1A]">@baroqueinvite</span>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://instagram.com/baroqueinvite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0095F6] font-semibold hover:text-[#0070c9] transition-colors"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>

            {/* Caption Body */}
            <div className="py-4 text-xs sm:text-[13px] text-[#1A1A1A] leading-relaxed font-sans overflow-y-auto max-h-[220px] md:max-h-[360px]">
              <p className="font-medium mb-3">
                Your love story, beautifully introduced ✨
              </p>
              <p className="mb-2">📩 DM us for queries</p>
              <p className="mb-2">📱 WhatsApp: +92 317 747 4736</p>
              <p className="mb-3">🌐 baroqueinvites.com</p>
              <p className="text-gray-700 leading-normal mb-3">
                Follow us for fresh trends this wedding season! @baroqueinvite
              </p>
              <p className="text-[11px] text-gray-400 mt-4">
                {currentPost.timestamp || "7 months ago"}
              </p>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
            <a
              href={currentPost.permalink || "https://instagram.com/baroqueinvite"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>View on Instagram</span>
            </a>

            <div className="flex items-center gap-2">
              <span className="text-gray-300">|</span>
              <span className="font-mono text-gray-500 font-medium">
                {currentIndex + 1}/{total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
