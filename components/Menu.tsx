"use client";
export default function Menu() {
  const menus = [
    {
      name: "PORSI MANTAP",
      price: "10.000",
      desc: "Satu mangkuk penuh suwiran ayam & kuah kuning spesial.",
      tag: "BEST SELLER",
      img: "/img/buryam1.jpg",
    },
    {
      name: "JANDA MUDA",
      price: "8.000",
      desc: "Porsi setengah, rasa tetap juara. Pas buat sarapan ringan!",
      tag: "EKONOMIS",
      img: "/img/buryam2.jpg",
    },
  ];

  return (
    <section id="menu" className="py-20 container mx-auto px-5 bg-white">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        {/* Judul Satu Baris & Di Tengah */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-purple-900">
            PILIHAN <span className="text-purple-600">FAVORIT</span>
          </h2>
          {/* Garis Bawah Estetik */}
          <div className="w-24 h-2 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* List Menu Card */}
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {menus.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden transition-all hover:scale-[1.02]"
            >
              {/* Image Container - Menggunakan standard img tag sesuai kodemu */}
              <div className="h-56 w-full overflow-hidden p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[30px] bg-purple-50"
                  onError={(e) => {
                    // Fallback jika gambar tetap tidak muncul
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1594998813208-65744555833f?q=80&w=500&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Content - Italic dihapus di Nama Menu */}
              <div className="p-8 pt-0 text-center">
                <h3 className="font-black text-2xl uppercase mb-2 text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed px-4">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-purple-800 font-black text-3xl">
                    Rp {item.price}
                  </span>
                  <span className="text-[10px] font-black px-4 py-1.5 rounded-full uppercase bg-purple-50 text-purple-400">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aneka Sate Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="bg-purple-700 p-8 md:p-10 rounded-[50px] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full"></div>

          <h3 className="font-black text-2xl uppercase mb-8 flex items-center gap-3">
            <span className="text-3xl">🍢</span> ANEKA SATE PELENGKAP
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-bold uppercase tracking-wider relative z-10">
            {[
              { name: "Sate Ati Ampela", price: "2.500" },
              { name: "Sate Telur Puyuh", price: "2.500" },
              { name: "Sate Usus", price: "2.500" },
            ].map((sate) => (
              <div
                key={sate.name}
                className="flex justify-between items-center border-b border-white/20 pb-3"
              >
                <span>{sate.name}</span>
                <span className="text-xl font-black">{sate.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
