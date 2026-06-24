import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Heart, ExternalLink } from "lucide-react";
import { createPlayer } from "@videojs/react";
import { VideoSkin, Video, videoFeatures } from "@videojs/react/video";
import "@videojs/react/video/skin.css";
import { podjogarCover } from "@/assets/projetos";

const VIDEO_SRC = "/media/podjogar.mp4";
const VIDEO_POSTER = "/media/podjogar-poster.jpg";

// Player instance for the video (created once at module scope as recommended).
const Player = createPlayer({ features: videoFeatures });

/* ----------------------------- AUDIO PLAYER (Spotify) ----------------------------- */
const AudioMiniPlayer = () => {
  const [favorited, setFavorited] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mini-player-wrapper"
    >
      <div className="mini-player">
        <div className="mini-player__top">
          <div className="mini-cover">
            <AnimatePresence mode="wait">
              <motion.div
                key="cover-audio"
                className="mini-cover__item"
                style={{ backgroundImage: `url(${podjogarCover})` }}
                initial={{ scale: 0.55, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          <div className="mini-controls">
            <button
              type="button"
              aria-label="Favoritar"
              onClick={() => setFavorited((v) => !v)}
              className={`mini-controls__item ${favorited ? "is-active" : ""}`}
            >
              <Heart className="w-5 h-5" fill={favorited ? "currentColor" : "none"} />
            </button>
            <a
              href="https://open.spotify.com/show/52qk0CuMVrdoHfO6zSlcmS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir no Spotify"
              className="mini-controls__item"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button type="button" aria-label="Anterior" className="mini-controls__item">
              <SkipBack className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Próximo" className="mini-controls__item">
              <SkipForward className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label={showSpotify ? "Recolher player" : "Abrir player"}
              onClick={() => setShowSpotify((v) => !v)}
              className="mini-controls__item mini-controls__item--xl"
            >
              {showSpotify ? (
                <Pause className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" />
              ) : (
                <Play className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" />
              )}
            </button>
          </div>
        </div>

        <div className="mini-progress">
          <div className="mini-progress__top">
            <div className="mini-album">
              <div className="mini-album__name">PODJOGAR</div>
              <div className="mini-album__track">As Vozes do Esporte Brasileiro — disponível no Spotify</div>
            </div>
            <div className="mini-progress__duration">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1DB954] mr-2 align-middle" />
              <span className="align-middle">Spotify</span>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {showSpotify && (
              <motion.div
                key="spotify-embed"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <iframe
                  style={{ borderRadius: 12, marginTop: 14 }}
                  src="https://open.spotify.com/embed/show/52qk0CuMVrdoHfO6zSlcmS?utm_source=generator&theme=0"
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="PODJOGAR no Spotify"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {!showSpotify && (
            <>
              <div className="mini-progress__bar">
                <div className="mini-progress__current" style={{ width: "0%" }} />
              </div>
              <div className="mini-progress__time">Toque ▶ para ouvir no Spotify</div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ----------------------------- VIDEO PLAYER (videojs/react) ----------------------------- */
const VideoMiniPlayer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mini-player-wrapper"
    >
      <div className="podjogar-video">
        <div className="podjogar-video__title">
          <div className="podjogar-video__name">PODJOGAR</div>
          <div className="podjogar-video__track">Episódio em vídeo — assista direto aqui</div>
        </div>
        <div className="podjogar-video__frame">
          <Player.Provider>
            <VideoSkin poster={VIDEO_POSTER}>
              <Video src={VIDEO_SRC} playsInline preload="auto" />
            </VideoSkin>
          </Player.Provider>
        </div>
      </div>
    </motion.div>
  );
};

export const PodcastPlayer = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <AudioMiniPlayer />
      <VideoMiniPlayer />
    </div>
  );
};
