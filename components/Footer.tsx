export default function Footer() {
  return (
    <>
      {/* SECTION KONTAK */}
      <section id="kontak" className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Container Card dengan Shadow Lembut */}
          <div className="bg-white rounded-[50px] md:rounded-[70px] shadow-[0_30px_100px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row">
            {/* Sisi Ungu - Informasi (Dibuat lebih lebar & kontras) */}
            <div className="bg-purple-700 p-12 md:p-20 text-white md:w-[55%] flex flex-col justify-center relative overflow-hidden">
              {/* Ornamen Lingkaran Halus di Background */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-10 -translate-y-10"></div>

              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-10 leading-none tracking-tighter relative z-10">
                Informasi
                <br />
                <span className="text-purple-200">Penting</span>
              </h2>

              <div className="space-y-8 relative z-10">
                <div className="flex gap-5 items-start">
                  <span className="shrink-0 w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm font-black shadow-lg">
                    !
                  </span>
                  <p className="text-sm md:text-base font-medium leading-relaxed opacity-90">
                    WhatsApp hanya untuk menanyakan ketersediaan stok sebelum
                    meluncur ke lokasi.
                  </p>
                </div>

                <div className="flex gap-5 items-start">
                  <span className="shrink-0 w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm font-black shadow-lg">
                    !
                  </span>
                  <p className="text-sm md:text-base font-bold leading-relaxed text-purple-100 italic">
                    Disarankan datang langsung lebih awal agar tidak kehabisan.
                  </p>
                </div>
              </div>
            </div>

            {/* Sisi Putih - Tombol WA */}
            <div className="p-12 md:p-20 md:w-[45%] flex flex-col justify-center items-center text-center bg-white">
              <div className="mb-10">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 mx-auto shadow-inner">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.888 11.887-2.012 0-3.987-.51-5.741-1.478l-6.243 1.699zm6.086-4.509c1.657.981 3.268 1.474 4.795 1.474 5.4 0 9.796-4.396 9.796-9.796 0-2.617-1.019-5.077-2.87-6.928s-4.311-2.87-6.926-2.87c-5.4 0-9.796 4.396-9.796 9.796 0 1.916.555 3.511 1.649 5.011l-1.077 3.931 4.029-1.097z" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl font-black text-gray-800 italic leading-tight">
                  Ada Pertanyaan?
                  <br />
                  <span className="text-gray-500 text-lg">
                    Chat Via WhatsApp
                  </span>
                </p>
              </div>

              <a
                href="https://wa.me/6282124578135?text=Halo%20Buryam%20Janda,%20saya%20mau%20ke%20lokasi,%20apakah%20stok%20masih%20ada?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-5 rounded-[25px] font-black text-sm uppercase shadow-[0_15px_30px_rgba(34,197,94,0.3)] hover:bg-green-600 transition-all hover:-translate-y-1 active:scale-95"
              >
                KIRIM CHAT
              </a>

              <p className="mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Standby jam 05.30 - 09.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAWAH */}
      <footer className="bg-white py-12 text-center border-t border-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-black text-gray-100 uppercase tracking-[0.2em] mb-4">
            Buryam Janda
          </h3>
          <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.3em]">
            © 2026 Buryam Janda Citeureup
          </p>
        </div>
      </footer>
    </>
  );
}
