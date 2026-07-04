import Container from "../common/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-300 to-emerald-500">

              {/* Más adelante aquí irá el SVG */}
              <span className="text-sm font-black text-black">
                S
              </span>

            </div>

            <span className="text-xl font-bold tracking-tight text-white">
              Switch A2A
            </span>

          </div>

          {/* Badge */}

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-400">

            Demo v1.0 • Piloto disponible

          </div>

        </div>
      </Container>
    </header>
  );
}