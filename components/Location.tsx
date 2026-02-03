// src/components/Location.tsx
export default function Location() {
  // Link Google Maps berdasarkan koordinat yang kamu berikan
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-6.472214,106.887768";

  // Link Embed untuk Iframe (menggunakan koordinat agar akurat)
  const embedMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15860.155!2d106.887768!3d-6.472214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c10000000001%3A0x0!2zNsKwMjgnMjAuMCJTIDEwNiw1MycxNi4wIkU!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section id="tentang" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-black text-purple-900 italic tracking-tighter leading-tight uppercase">
            Satu Mangkok,
            <br />
            Dua Budaya.
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
            <strong>Buryam Janda (Jawa-Sunda)</strong> menyajikan kehangatan
            sarapan pagi di Citeureup dengan memadukan kuah kuning gurih khas
            Jawa dan kesegaran sambal khas tanah Pasundan.
          </p>
          <div className="p-6 md:p-8 bg-purple-50 rounded-[35px] border-l-8 border-purple-700 italic shadow-inner">
            <p className="text-purple-900 font-extrabold text-lg md:text-xl leading-tight">
              "Bubur ayam asli racikan sendiri, nikmati selagi hangat langsung
              di tempat!"
            </p>
          </div>
        </div>

        <div id="lokasi" className="order-1 md:order-2 space-y-4">
          <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl border-[6px] md:border-[10px] border-white ring-1 ring-purple-100 aspect-video">
            <iframe
              src={`https://maps.google.com/maps?q=${-6.472214},${106.887768}&hl=id&z=16&output=embed`}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border-2 border-purple-700 text-purple-700 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-700 hover:text-white transition-all shadow-lg"
          >
            📍 Buka Petunjuk Jalan (GPS)
          </a>
        </div>
      </div>
    </section>
  );
}
