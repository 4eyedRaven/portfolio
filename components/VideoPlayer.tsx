"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl: string;
  alt: string;
  locale: any;
}

export default function VideoPlayer({ videoId, thumbnailUrl, alt, locale }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video">
      {playing ? (
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={locale.videoPlayer.iframeTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative w-full h-full cursor-pointer" onClick={() => setPlaying(true)}>
          <Image src={thumbnailUrl} alt={alt} fill className="object-cover rounded" />
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white/80 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}