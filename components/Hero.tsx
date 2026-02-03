// src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 overflow-hidden text-center text-white"
    >
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      <div className="container relative z-10 mx-auto">
        {/* Badge Jam Operasional */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2 rounded-full mb-8 animate-pulse">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-purple-100">
            🕒 Jam Operasional: 05.30 - 09.00
          </span>
        </div>

        {/* Headline Utama */}
        <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase italic tracking-tighter drop-shadow-2xl leading-[0.9]">
          Bukan Janda <br className="md:hidden" />{" "}
          <span className="text-purple-200">Biasa</span>
        </h1>

        {/* Deskripsi */}
        <p className="text-sm md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-light italic text-purple-50">
          Rahasia kelezatan perpaduan bumbu Khas{" "}
          <strong className="font-bold text-white uppercase">Jawa</strong> &
          kesegaran sambal Khas{" "}
          <strong className="font-bold text-white uppercase">Sunda</strong>.
        </p>

        {/* Group Tombol Navigasi */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#menu" // Mengarah ke ID "menu" di file Menu.tsx
            className="w-full md:w-auto bg-white text-purple-900 px-12 py-5 rounded-2xl font-black text-sm uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center"
          >
            Lihat Menu
          </a>
          <a
            href="#lokasi" // Mengarah ke ID "lokasi" di file Location.tsx
            className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase hover:bg-white/20 transition-all flex items-center justify-center"
          >
            Cek Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
