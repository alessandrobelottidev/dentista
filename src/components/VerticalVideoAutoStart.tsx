"use client";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import { Volume2, VolumeX } from "lucide-react";

interface HLSPlayerProps {
  masterM3U8FilePath: string;
  posterFile: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const VerticalVideoAutoStart: React.FC<HLSPlayerProps> = ({
  masterM3U8FilePath,
  posterFile,
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [showMuteButton, setShowMuteButton] = useState(true);
  const [isMuted, setIsMuted] = useState(muted);

  useEffect(() => {
    if (!videoRef.current) return;

    const player = videojs(videoRef.current, {
      controls: false,
      autoplay: autoPlay,
      muted: muted,
      loop: loop,
      poster: posterFile,
      preload: "auto",
      loadingSpinner: false,
      errorDisplay: false,
    });

    player.src({
      src: masterM3U8FilePath,
      type: "application/x-mpegURL",
    });

    playerRef.current = player;

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [autoPlay, loop, muted, posterFile, masterM3U8FilePath]);

  const handleMuteClick = () => {
    if (playerRef.current) {
      // Reset video to beginning
      playerRef.current.currentTime(0);

      // Unmute and show controls
      playerRef.current.muted(false);
      playerRef.current.controls(true);

      setIsMuted(false);
      setShowMuteButton(false);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-9-16 rounded-2xl overflow-hidden"
        playsInline
      >
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a
            href="https://videojs.com/html5-video-support/"
            target="_blank"
            rel="noreferrer"
          >
            supports HTML5 video
          </a>
        </p>
      </video>

      {showMuteButton && (
        <button
          onClick={handleMuteClick}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-black bg-opacity-50 rounded-full p-4 cursor-pointer
                     hover:bg-opacity-70 transition-all duration-200"
          type="button"
        >
          {isMuted ? (
            <VolumeX className="w-8 h-8 text-white" />
          ) : (
            <Volume2 className="w-8 h-8 text-white" />
          )}
        </button>
      )}
    </div>
  );
};

export default VerticalVideoAutoStart;
