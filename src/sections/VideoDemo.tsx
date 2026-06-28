import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { videoData } from "../data/video";

export default function VideoDemo() {
  const [open, setOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setOpen(false);
  };

  return (
    <>
      <section className="py-28">
        <Container>
          <SectionHeader
            eyebrow={videoData.eyebrow}
            title={videoData.title}
            description={videoData.description}
          />

          <button
            onClick={openModal}
            className="group relative mt-16 w-full overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={videoData.thumbnail}
              alt="Demo técnica de Switch A2A"
              className="h-[600px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition duration-300 group-hover:scale-110">
                <Play
                  className="ml-1 h-10 w-10 text-white"
                  fill="white"
                />
              </div>
            </div>
          </button>
        </Container>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
          <button
            onClick={closeModal}
            className="absolute right-8 top-8 text-white transition hover:text-emerald-400"
            aria-label="Cerrar video"
          >
            <X size={34} />
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <video
              ref={videoRef}
              className="h-full w-full"
              controls
              autoPlay
            >
              <source
                src={videoData.video}
                type="video/mp4"
              />

              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}