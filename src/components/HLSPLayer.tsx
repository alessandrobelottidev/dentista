"use client";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styles from "./BackgroundVideo.module.css";

const HLSPlayer = ({
  masterM3U8FilePath,
  posterFile,
  autoPlay = true,
  controls = false,
  muted = true,
  loop = true,
}: {
  masterM3U8FilePath: string;
  posterFile: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

  useEffect(() => {
    if (!videoRef.current) return; // Safeguard to ensure ref is not null

    const player = videojs(videoRef.current, {
      controls: controls,
      autoplay: autoPlay,
      muted: muted,
      loop: loop,
      poster: posterFile,
      preload: "auto",
      loadingSpinner: false,
      errorDisplay: false,
    });

    // videojs.log.level("debug");

    player.src({
      src: masterM3U8FilePath,
      type: "application/x-mpegURL",
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [autoPlay, controls, loop, masterM3U8FilePath, muted, posterFile]);

  return (
    <video
      ref={videoRef}
      className={`video-js vjs-default-skin ${styles.videoContainer}`}
      playsInline
    >
      <p className="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  );
};

export default HLSPlayer;
