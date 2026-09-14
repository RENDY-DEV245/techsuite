import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  BookOpen,
  X,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';

interface StoryChapter {
  num: string;
  title: string;
  content: string;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    num: '01',
    title: 'Pengakuan 8 Jam yang Lalu',
    content: `Saya punya sebuah pengakuan. 8 jam yang lalu...

Sistem bisnis saya baru saja memproses 47 transaksi penjualan, mencocokkan stok gudang, menerbitkan faktur pajak, dan mengirim instruksi logistik secara otomatis. tanpa ada satu pun staf yang menyentuh keyboard!

Sistem ini bekerja 24/7 tanpa henti. Cepat, presisi, dan sepenuhnya terintegrasi.

Desain Company Profile-nya memancarkan kredibilitas korporat kelas atas...

Toko online (e-commerce)-nya memiliki tingkat konversi penjualan (checkout rate) tertinggi yang pernah Anda lihat...

Dan mesin ERP di belakangnya mengelola arus kas serta inventaris secara real-time!

Sistem ini benar-benar menjadi tulang punggung pertumbuhan bisnis kami.

Apa artinya itu? Artinya... sistem ini memberi Anda kebebasan penuh dalam menjalankan bisnis kapan pun dan di mana pun. Ketika ada pesanan masuk stok di tiga gudang berbeda otomatis terpotong.

Ketika pembayaran terkonfirmasi via payment gateway laporan laba rugi langsung terbarui detik itu juga.

Dan ketika pelanggan membutuhkan informasi legalitas perusahaan halaman company profile menyajikannya dengan otoritas profesional tanpa cela.

Bisnis Anda tidak lagi bergantung pada lembur karyawan, rekap manual yang rawan kesalahan (human error), atau komplain pelanggan yang lambat dilayani.`
  },
  {
    num: '02',
    title: 'Titik Frustrasi Operasional',
    content: `Namun beberapa waktu yang lalu, kami berada di titik frustrasi operasional yang parah.

Setiap hari diisi dengan kepanikan. Rekap stok selisih puluhan juta, pesanan di WhatsApp menumpuk tanpa tindak lanjut, dan website lama kami terlihat seperti proyek amatir yang membuat klien ragu untuk transfer dana besar.

Kami pikir membangun infrastruktur digital sekelas korporat multinasional itu mustahil bagi bisnis berkembang...

Jadi dalam presentasi ini, saya akan menunjukkan kepada Anda bagaimana cara keluar dari jebakan operasional manual... dan beralih ke level otomatisasi penuh.

Saya merasa bisnis saya tampak seperti penjual amatir jalanan yang sedang mengemis perhatian pasar.

Jadi dalam laporan rahasia ini, saya akan membongkar apa yang sebenarnya kami lakukan untuk meloloskan diri dari neraca keuangan yang macet... dan melipatgandakan valuasi bisnis hingga berkali-kali lipat.

Saya akan mengungkap: Bagaimana Cara Menguasai

Pasar dan Membuat Klien Mana Pun Memohon Untuk Mentransfer Uangnya Kepada Anda Hari Ini Juga!

Di halaman ini Anda akan mempelajari: Rahasia Arsitektur

Digital Trinitas yang membuat kompetitor Anda iri

setengah mati dan membuat pembeli setia mengantri di depan pintu digital Anda.

Kisah bagaimana kami menciptakan formula ini berawal dari rasa sakit hati yang teramat dalam...

Kami akan mengungkap... Bagaimana Membangun

Ekosistem Digital Terpadu yang Mengubah Pengunjung Menjadi Pembeli Loyal Sekaligus Mengotomatisasi Seluruh Rantai Pasok Anda!

Di sini Anda akan mempelajari... Rahasia Arsitektur Digital

3-in-1 yang membuat bisnis Anda tampak seperti perusahaan bernilai miliaran rupiah dan beroperasi dengan efisiensi tingkat tinggi.

Kisah bagaimana kami merancang sistem ini berawal dari masalah nyata yang dihadapi hampir semua pengusaha...`
  },
  {
    num: '03',
    title: 'Malam Naik Kasta',
    content: `Malam itu adalah malam di mana bisnis kami resmi naik

kasta dari sekadar UMKM pinggiran menjadi raksasa

digital yang ditakuti lawan.

Saya telah menemukan senjata pamungkas dalam

merebut kekayaan pasar yang akan mengubah nasib

finansial Anda selamanya.

Ada pola psikologis tertentu yang diam-diam sangat

didambakan oleh setiap pembeli berduit tebal saat mereka

membuka sebuah website...`
  },
  {
    num: '04',
    title: 'FOTO 3',
    content: `FOTO 3

Kami pernah mencoba menggunakan cara konvensional.

Kami menyewa web designer freelance untuk membuat Company Profile, menggunakan plugin toko online gratisan untuk jualan, dan mencatat keuangan di Excel terpisah.

Hasilnya? Berantakan.

Website lambat, data transaksi tidak sinkron dengan stok fisik, dan ketika lonjakan pesanan datang di tanggal kembar, sistem crash total dan pelanggan lari ke kompetitor.

Kami menghabiskan puluhan juta untuk iklan, namun konversinya minim karena pembeli tidak percaya pada tampilan website yang kaku dan lambat.

Segalanya mulai berubah ketika kami memutuskan untuk tidak lagi menambal sistem secara terpisah-pisah, melainkan menyatukannya ke dalam satu ekosistem: Trinitas Digital (Compro + E-Commerce + ERP).

Ketika ketiga pilar ini disatukan dalam satu database terpusat... lonjakan efisiensi dan penjualan terjadi seketika.`
  },
  {
    num: '05',
    title: 'FOTO 4',
    content: `FOTO 4

Penjualan online melonjak 300% dalam 30 hari pertama

pasca-peluncuran!

Trafik yang masuk ke Company Profile langsung terkonversi menjadi prospek B2B bernilai tinggi karena reputasi visual yang meyakinkan.

Pengunjung ritel langsung berbelanja di E-Commerce dengan alur checkout instan tanpa hambatan.

Dan bagian terbaiknya? Modul ERP secara otomatis menghitung HPP (COGS), membuat surat jalan logistik, serta menyusun neraca keuangan tanpa campur tangan staf admin.

Akhir pekan itu, untuk pertama kalinya para founder bisa berlibur dengan tenang tanpa terganggu telepon darurat operasional dari tim lapangan.

Kami menyadari bahwa rahasia pertumbuhan

eksponensial bukan sekadar "punya website", melainkan

memiliki Infrastruktur Terintegrasi Tanpa Celah.`
  },
  {
    num: '06',
    title: 'FOTO 5',
    content: `FOTO 5

Selama 18 bulan terakhir, arsitektur ini telah diimplementasikan di puluhan lini bisnis:

■ Mulai dari distributor retail, brand fashion skala nasional, manufaktur, hingga penyedia jasa korporat.

■ Menghemat ribuan jam kerja tim admin dari pekerjaan input manual yang membosankan.

■ Menekan angka selisih stok (stock discrepancy) hingga 0%.

Hari ini, pemilik bisnis dapat memantau performa 5 cabang sekaligus hanya dari dasbor smartphone saat sedang menikmati kopi di pagi hari.

Tidak perlu lagi pusing memikirkan integrasi antar-aplikasi yang sering putus.

Tidak perlu lagi membayar biaya langganan bulanan software asing (SaaS) yang mahal dan terpisah-pisah.

Semua data tersimpan aman dalam server terdedikasi milik perusahaan Anda sendiri.`
  },
  {
    num: '07',
    title: 'FOTO 6',
    content: `FOTO 6

Mengapa sebagian besar website bisnis gagal

menghasilkan dampak nyata?

Karena mereka hanya membangun "brosur digital statis" tanpa mesin konversi dan tanpa sistem backend yang kuat.

Memasang tampilan cantik saja tidak cukup jika tidak ada sales funnel dan integrasi inventaris di belakangnya.

Faktanya, 80% calon pembeli membatalkan pesanan jika proses checkout lambat atau metode pembayaran tidak lengkap.

Dan di era persaingan ketat saat ini, ketidaksiapan sistem operasional saat menerima lonjakan pesanan justru akan merusak reputasi brand Anda secara permanen.`
  },
  {
    num: '08',
    title: 'FOTO 7',
    content: `FOTO 7

Pelanggan masa kini menginginkan dua hal: Kepercayaan

Instan dan Kemudahan Transaksi.

Company Profile premium memberikan rasa aman dan validasi otoritas brand.

E-Commerce modern memberikan pengalaman belanja secepat kilat dengan berbagai opsi pembayaran otomatis (QRIS, VA, Kartu Kredit) dan kalkulasi ongkos kirim instan ke seluruh Indonesia.

ERP System memastikan setiap janji pengiriman ditepati tepat waktu dengan akurasi stok 100%.

Ketika ketiga elemen ini bekerja serempak, bisnis Anda memiliki daya saing yang jauh melampaui rata-rata kompetitor di industri Anda.`
  },
  {
    num: '09',
    title: 'FOTO 8',
    content: `FOTO 8

Sistem ini dirancang khusus agar mudah digunakan (user-friendly), bahkan jika Anda atau tim Anda tidak memiliki latar belakang IT sekalipun.

Dilengkapi dengan dokumentasi lengkap, panduan video langkah demi langkah, dan panel admin berbasis visual intuitif.

Anda tidak perlu mempekerjakan tim programmer bergaji mahal untuk mengelola operasional harian website ini.`
  },
  {
    num: '10',
    title: 'FOTO 9',
    content: `FOTO 9

Memperkenalkan: Enterprise Omni-Scale Engine™

Solusi terpadu 3-in-1: Web Company Profile Premium + Portal E-Commerce High-Converting + Core ERP System.

Sistem terintegrasi pertama yang dirancang untuk mempercepat skala bisnis Anda dari UMKM/Menengah menuju level Korporasi dalam waktu singkat.`
  },
  {
    num: '11',
    title: 'FOTO 10',
    content: `FOTO 10

Apa yang Anda dapatkan di dalam paket Enterprise Omni-Scale Engine™:

• Company Profile Korporat: Desain UI/UX eksklusif, optimasi SEO standar industri, halaman profil tim, legalitas, portofolio interaktif, dan integrasi formulir prospek B2B.

• E-Commerce Powerhouse: Katalog produk tanpa batas, integrasi Payment Gateway otomatis (BCA, Mandiri, BRI, QRIS, dll.), integrasi kurir logistik otomatis (JNE, SiCepat, J&T, dll.), fitur kupon/diskon bertingkat, dan sistem keranjang belanja anti-abandoned cart.

• Core ERP System: Modul Manajemen Stok Multi-Gudang, Modul Pembukuan & Laporan Keuangan Otomatis (Laba Rugi, Neraca, Arus Kas), Manajemen Pesanan & Invoice Faktur Otomatis, serta Manajemen Data Pelanggan (CRM).`
  },
  {
    num: '12',
    title: 'FOTO 11',
    content: `FOTO 11

Fitur Tambahan & Keamanan:

• Keamanan data tingkat lanjut dengan Enkripsi SSL & Perlindungan Firewall.

• Optimasi Speed Loading di bawah 2 detik untuk pengalaman belanja optimal.

• Dasbor Analitik Penjualan & Performa Bisnis berbasis grafik visual real-time.

• Akses kontrol berbasis peran (Role-Based Access) untuk staf, manajer, dan pemilik.

Penawaran & Skema Harga

Berapa nilai yang pantas Anda bayar untuk memiliki sebuah sistem yang mampu mendongkrak omzet hingga ratusan juta per bulan dan membebaskan 90% waktu hidup Anda dari kepusingan operasional?

Berapa nilainya jika Anda bisa tidur dengan tenang setiap malam sambil mengetahui bahwa bisnis Anda sedang mencetak uang dan melayani ribuan pelanggan secara otomatis tanpa ada yang meleset satu rupiah pun?

Jika Anda membangun sistem terintegrasi skala korporasi ini ke software house konvensional di luar sana...

• Biaya desain dan pengembangan Web Company Profile Korporat bernilai minimal Rp25.000.000.

• Biaya pembuatan arsitektur E-Commerce dengan payment gateway dan server tangguh bernilai minimal Rp35.000.000.

• Biaya kustomisasi Core ERP Multi-Gudang terintegrasi bernilai minimal Rp40.000.000.

Total nilai investasi riil yang harus Anda keluarkan di pasar korporasi adalah Rp100.000.000.

Dan sejujurnya... angka Rp100.000.000 adalah harga yang sangat murah untuk sebuah aset yang akan terus membawa profit ke rekening Anda selama bertahun-tahun yang akan datang.

Namun, Anda tidak perlu mengeluarkan uang Rp100.000.000 hari ini.

Anda bahkan tidak perlu membayar Rp50.000.000... atau Rp30.000.000...

Khusus bagi segelintir pemilik bisnis visioner yang siap mendominasi pasar dalam periode akselerasi terbatas ini...

Anda bisa memiliki seluruh ekosistem mahakarya Company Profile Premium + E-Commerce High-Converting + Core ERP System Terintegrasi secara utuh dan siap pakai hanya dengan satu kali investasi:

Rp15.000.000 Sahaja!`
  },
  {
    num: '13',
    title: 'Penghematan & Garansi Purna-Jual',
    content: `Anda menghemat Rp85.000.000 dari total nilai investasi asli tanpa ada biaya royalti bulanan yang menjerat leher Anda!

Kesempatan emas ini hanya dibuka untuk pemilik bisnis yang tidak mau lagi melihat uang mereka dirampas oleh kompetitor.

Ambil alih dominasi pasar Anda sekarang juga sebelum penawaran terbatas ini ditutup selamanya dan kembali ke harga normal Rp100.000.000!

Termasuk:

• Full Setup & Deployment ke server Anda.

• Garansi pemeliharaan & dukungan teknis purna-jual.

• Lisensi penuh tanpa biaya royalti bulanan per pengguna (no recurring user fee).`
  }
];

export const StorySection: React.FC = () => {
  const [activeModalChapter, setActiveModalChapter] = useState<number | null>(null);

  return (
    <section
      id="story"
      className="relative z-20 -mt-1 w-full bg-[#02587a] select-none py-16 sm:py-24 lg:py-28 text-[#0f172a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, type: 'spring', stiffness: 220, damping: 24 }}
          className="p-6 sm:p-10 lg:p-14 rounded-[28px] sm:rounded-[40px] bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] space-y-6 lg:space-y-8"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b-2 border-[#0f172a]/10">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs sm:text-sm font-mono font-black border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a]">
              <Sparkles className="w-4 h-4 text-[#0284c7]" />
              <span>STUDI KASUS BISNIS // RAHASIA DIGITAL TRINITAS</span>
            </div>
            <div className="px-3 py-1 rounded-xl bg-[#dcfce7] text-[#15803d] border-2 border-[#0f172a] text-xs font-mono font-black shadow-[2px_2px_0px_#0f172a]">
              13 BAB LENGKAP TERSEDIA
            </div>
          </div>

          {/* Judul & Deskripsi Luas untuk Desktop */}
          <div className="space-y-3 max-w-5xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.14]">
              “Saya Telah Menemukan Senjata Pamungkas dalam Merebut Pasar yang Mengubah Nasib Finansial Anda Selamanya...”
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-[#475569] font-medium leading-relaxed">
              Kisah lengkap bagaimana arsitektur 3-in-1 (Compro + E-Commerce + ERP) mendongkrak penjualan 300% dan menekan selisih stok hingga 0%. Buka menu di bawah untuk membaca isi 13 bab cerita.
            </p>
          </div>

          {/* Action Row: Tombol Buka Menu & Baca Bab */}
          <div className="pt-4 border-t-2 border-[#0f172a]/15 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => setActiveModalChapter(0)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0d2844] hover:bg-[#123559] text-white border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] sm:shadow-[4px_4px_0px_#0f172a] text-xs sm:text-base font-mono font-black transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#38bdf8]" />
              <span>Buka Menu &amp; Daftar 13 Bab</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#fde047]" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          MODAL READER DUAL-PANE (SPLIT DI DESKTOP, BERSIH DI MOBILE)
         ======================================================== */}
      <AnimatePresence>
        {activeModalChapter !== null && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalChapter(null)}
              className="fixed inset-0 bg-[#071b2f]/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative z-10 w-full max-w-6xl bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] rounded-[24px] sm:rounded-[36px] shadow-[8px_8px_0px_#0f172a] sm:shadow-[16px_16px_0px_#0f172a] overflow-hidden my-auto flex flex-col h-[88vh]"
            >
              {/* Header Modal Utama */}
              <div className="flex items-center justify-between p-4 sm:p-5 bg-[#071b2f] text-white border-b-3 sm:border-b-4 border-[#0f172a] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#fde047] text-[#0f172a] border-2 border-[#0f172a] hidden sm:block">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider block">
                      STUDI KASUS LENGKAP
                    </span>
                    <h3 className="text-sm sm:text-lg font-black text-white leading-none mt-0.5">
                      Rahasia Arsitektur Digital Trinitas
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalChapter(null)}
                  className="p-2 rounded-xl bg-[#fffdf5] hover:bg-[#fee2e2] text-[#0f172a] hover:text-[#dc2626] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body: Split View di Desktop (Daftar Bab di Kiri, Teks Cerita di Kanan) */}
              <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">
                
                {/* Panel Kiri (Daftar 13 Bab) - Muncul di Desktop & Tablet */}
                <div className="hidden lg:flex w-80 flex-col border-r-3 border-[#0f172a]/20 bg-[#fff9d4] shrink-0">
                  <div className="p-3.5 border-b-2 border-[#0f172a]/15 text-xs font-mono font-black uppercase text-[#0f172a] flex items-center justify-between">
                    <span>PILIH BAB CERITA:</span>
                    <span className="px-2 py-0.5 rounded bg-[#fde047] border border-[#0f172a]">
                      13 BAB
                    </span>
                  </div>

                  <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5">
                    {STORY_CHAPTERS.map((item, idx) => {
                      const isActive = activeModalChapter === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveModalChapter(idx)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer border-2 ${
                            isActive
                              ? 'bg-[#0284c7] text-white border-[#0f172a] shadow-[2px_2px_0px_#0f172a]'
                              : 'bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] border-[#0f172a]/40 shadow-xs'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                              isActive ? 'bg-white/20 text-white' : 'bg-[#0f172a]/10 text-[#0f172a]'
                            }`}>
                              {item.num}
                            </span>
                            <span className="truncate">{item.title}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#64748b]'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Panel Kanan (Isi Teks Cerita 100% Persis) */}
                <div className="flex-1 flex flex-col min-h-0 bg-[#fffdf5]">
                  {/* Sub-Header Judul Bab Saat Ini */}
                  <div className="p-4 sm:p-5 border-b-2 border-[#0f172a]/10 bg-[#fffdf5] flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="px-2.5 py-1 rounded-lg bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border border-[#0f172a] shrink-0">
                        BAB {STORY_CHAPTERS[activeModalChapter].num} / 13
                      </span>
                      <h4 className="text-sm sm:text-base lg:text-lg font-black text-[#0f172a] truncate">
                        {STORY_CHAPTERS[activeModalChapter].title}
                      </h4>
                    </div>
                  </div>

                  {/* Konten Teks Utuh & Nyaman Dibaca */}
                  <div className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10 text-xs sm:text-base text-[#1e293b] leading-relaxed font-sans whitespace-pre-line select-text">
                    {STORY_CHAPTERS[activeModalChapter].content}
                  </div>

                  {/* Navigasi Sebelumnya / Selanjutnya */}
                  <div className="p-3.5 sm:p-4 bg-[#fff9d4] border-t-2 border-[#0f172a]/20 flex items-center justify-between gap-3 shrink-0">
                    <button
                      type="button"
                      disabled={activeModalChapter === 0}
                      onClick={() =>
                        setActiveModalChapter((prev) =>
                          prev !== null && prev > 0 ? prev - 1 : prev
                        )
                      }
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl border-2 border-[#0f172a] text-xs sm:text-sm font-mono font-bold transition-all ${
                        activeModalChapter === 0
                          ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed shadow-none'
                          : 'bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] shadow-[2px_2px_0px_#0f172a] cursor-pointer'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Sebelumnya</span>
                    </button>

                    <span className="text-xs font-mono font-black text-[#0f172a]">
                      Bab {activeModalChapter + 1} dari 13
                    </span>

                    <button
                      type="button"
                      disabled={activeModalChapter === STORY_CHAPTERS.length - 1}
                      onClick={() =>
                        setActiveModalChapter((prev) =>
                          prev !== null && prev < STORY_CHAPTERS.length - 1 ? prev + 1 : prev
                        )
                      }
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl border-2 border-[#0f172a] text-xs sm:text-sm font-mono font-bold transition-all ${
                        activeModalChapter === STORY_CHAPTERS.length - 1
                          ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed shadow-none'
                          : 'bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] shadow-[2px_2px_0px_#0f172a] cursor-pointer'
                      }`}
                    >
                      <span>Selanjutnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
