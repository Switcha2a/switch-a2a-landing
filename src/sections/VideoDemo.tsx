import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

import Container from "../components/common/Container";
import { videoData } from "../data/video";

export default function VideoDemo() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setOpen(false);
  }

  return (
    <>
      <section id="demo-video" className="relative overflow-hidden border-y border-white/5 py-28">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[170px]" />

        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.45em] text-emerald-400">
              {videoData.eyebrow}
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              {videoData.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              {videoData.description}
            </p>

            <button
              onClick={openModal}
              className="group relative mt-14 w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#05060a] text-left shadow-[0_40px_140px_rgba(0,0,0,0.7)]"
              aria-label="Reproducir demo de Switch A2A"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />

                <span className="ml-4 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                  switch-a2a / demo-v1 / video
                </span>
              </div>

              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={videoData.thumbnail}
                  alt="Video demo de Switch A2A"
                  className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-85"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),rgba(0,0,0,0.60)_48%,rgba(0,0,0,0.88))]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_20px_80px_rgba(16,185,129,0.25)] backdrop-blur-md transition duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-10 w-10 text-white" fill="white" />
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300">
                    Reproducir demo funcional
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-zinc-400">
                <span>Producto real funcionando · Demo técnica Switch A2A</span>
                <span className="font-mono text-emerald-300">03:30 aprox.</span>
              </div>
            </button>
          </div>
        </Container>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm">
          <button
            onClick={closeModal}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-emerald-400 hover:text-black"
            aria-label="Cerrar video"
          >
            <X size={26} />
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl">
            <video
              ref={videoRef}
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
            >
              <source src={videoData.video} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
