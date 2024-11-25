"use client";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface HLSPlayerProps {
  videoFile: string;
  posterFile: StaticImageData;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const VerticalVideo: React.FC<HLSPlayerProps> = ({
  videoFile,
  posterFile,
  autoPlay = false,
  muted = true,
  loop = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [showStartButton, setShowStartButton] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;

    const player = videojs(videoRef.current, {
      controls: false,
      autoplay: autoPlay,
      muted: muted,
      loop: loop,
      // poster: posterFile,
      preload: "auto",
      loadingSpinner: false,
      errorDisplay: false,
    });

    player.src({
      src: videoFile,
      type: "video/mp4",
    });

    playerRef.current = player;

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [autoPlay, loop, muted, posterFile, videoFile]);

  const handleStartClick = () => {
    if (playerRef.current) {
      // Reset video to beginning
      playerRef.current.currentTime(0);

      // Unmute and show controls
      playerRef.current.muted(false);
      playerRef.current.controls(true);
      playerRef.current.autoplay(true);

      setShowStartButton(false);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-9-16"
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

      {showStartButton && (
        <Image
          src={posterFile}
          alt={"Vertical video"}
          placeholder="blur"
          className="absolute top-0 left-0 w-full h-full "
        />
      )}

      {showStartButton && (
        <button
          onClick={handleStartClick}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-black bg-opacity-50 rounded-full p-4 cursor-pointer
                     hover:bg-opacity-70 transition-all duration-200 hover:scale-125"
          type="button"
        >
          <Play className="w-8 h-8 text-white" />
        </button>
      )}
    </div>
  );
};

export default VerticalVideo;
