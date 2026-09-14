import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'RENDY',
  tagline: 'Full-Stack & Mobile Developer',
  status: 'Semarang, Jawa Tengah • Available for New Projects',
  bio: 'Merancang dan membangun website, aplikasi, CAD, hingga sistem ERP dari nol untuk startup, dan enterprise.',
  experienceStart: 'Active Developer',
  avatarUrl: 'https://i.ibb.co.com/tMN6mPt9/IMG-20260914-140952.png',
  interests: [
    'Web Architecture',
    'Mobile Systems'
  ],
  contact: {
    email: 'rendyajahh245@gmail.com'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Type Contracts',
    usageContext: 'Type-safe contracts across full-stack applications and component props',
    projectLinks: ['web-solutions', 'ecommerce-solutions']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Component-driven UI, state management, custom hooks, and interactive flows',
    projectLinks: ['web-solutions', 'ecommerce-solutions']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, static generation, and edge routing',
    projectLinks: ['web-solutions']
  },
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Native Mobile',
    usageContext: 'Cross-platform native mobile apps for iOS and Android with 60fps reactive UI',
    projectLinks: ['ecommerce-solutions']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Modern utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['web-solutions', 'ecommerce-solutions']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and asynchronous event loops',
    projectLinks: ['web-solutions']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Robust REST APIs, Inertia backend routing, authentication, and transaction handling',
    projectLinks: ['web-solutions', 'erp-system']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'High-throughput microservices, real-time WebSockets, and build automation tooling',
    projectLinks: ['hris-system', 'erp-system']
  },

  // database and cloud persistence layer
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Relational Core',
    usageContext: 'Relational data modeling, complex queries, indexing, and transactional integrity',
    projectLinks: ['erp-system', 'hris-system']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, and auth',
    projectLinks: ['ecommerce-solutions']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'E-commerce relational database schemas, ACID transactions, and optimized indexing',
    projectLinks: ['web-solutions', 'ecommerce-solutions']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'NoSQL & Real-Time Sync',
    usageContext: 'Cloud Firestore real-time calendar syncing, FCM push notifications, and Auth',
    projectLinks: ['ecommerce-solutions']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Type-safe database migrations, declarative schema modeling, and optimized queries',
    projectLinks: ['hris-system']
  },

  // infrastructure and devops layer
  {
    name: 'Linux',
    category: 'tools',
    layer: 'devops',
    iconKey: 'linux',
    color: '#eab308',
    roleTag: 'System OS',
    usageContext: 'Primary Unix environment, Bash scripting, system service management, and workflow',
    projectLinks: ['web-solutions', 'erp-system', 'hris-system']
  },
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized deployment, multi-stage builds, and consistent staging environments',
    projectLinks: ['erp-system', 'hris-system']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching workflows, code reviews, and CI/CD pipelines',
    projectLinks: ['web-solutions', 'erp-system', 'hris-system']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Edge deployment, continuous integration, and global CDN delivery for web apps',
    projectLinks: ['web-solutions', 'ecommerce-solutions']
  }, 

    // CAD & 3D Engineering layer
  {
    name: 'AutoCAD',
    category: 'tools',
    layer: 'client',
    iconKey: 'autocad',
    color: '#E51027',
    roleTag: '2D/3D Drafting',
    usageContext: 'Perancangan gambar teknik 2D, layout arsitektur/mekanikal, dan gambar kerja presisi fabrikasi',
    projectLinks: ['cad-engineering']
  },
  {
    name: 'SolidWorks',
    category: 'tools',
    layer: 'client',
    iconKey: 'solidworks',
    color: '#D42027',
    roleTag: '3D CAD & Assembly',
    usageContext: 'Pemodelan parametrik 3D, assembly parts, simulasi gerak mekanik, dan generate Bill of Materials (BOM)',
    projectLinks: ['cad-engineering']
  },

  // ERP & Enterprise Architecture layer
  {
    name: 'ERP Architecture',
    category: 'backend',
    layer: 'backend',
    iconKey: 'erp',
    color: '#059669',
    roleTag: 'General Ledger & POS',
    usageContext: 'Arsitektur sistem ERP modular yang menghubungkan Kasir POS, Multi-Gudang, Hutang/Piutang, dan SAK ETAP',
    projectLinks: ['erp-system', 'hris-system']
  }
];
export const projectsData: Project[] = [
  {
    id: 'web-solutions',
    title: 'Website Kustom & Platform Bisnis',
    subtitle: '12+ Proyek Website Klien & Bisnis Nyata',
    category: 'fullstack',
    summary: 'Kumpulan website berkecepatan tinggi, SEO-friendly, dan berorientasi konversi untuk travel umroh, F&B, hospitality, agribisnis, klinik, dan jasa profesional.',
    description: 'Solusi website responsif yang dirancang khusus untuk membangun kredibilitas brand dan meningkatkan konversi penjualan.',
    architecture: [
      'Responsive Design Mobile First',
      'Fast CDN Asset Delivery',
      'Direct WhatsApp & Lead Form Integration'
    ],
    stack: ['Travel Haji', 'F&B Cafe', 'Otomotif', 'Klinik Hewan', 'Agribisnis B2B', 'Laundry'],
    highlights: [
      'Maqdis Group (Travel Haji & Umroh)',
      'UrbanWear (Fashion Store & Lookbook)',
      'Kopi Senja (Coffee Shop & Roastery)',
      'Kayu Ruang (Furniture & Interior)',
      'Garasi Prima (Bengkel & Servis Mobil)',
      'Forte Gym (Pusat Kebugaran & Trainer)',
      'Panen Langsung (Supplier Pangan B2B)',
      'Kucek Laundry (Laundry Jemput-Antar)',
      'Sahabat Satwa (Klinik Hewan 24 Jam)'
    ],
    challenges: 'Menghadirkan performa loading instan untuk berbagai industri bisnis dengan kebutuhan visual dan interaksi yang berbeda-beda.',
    role: 'Full Stack & Web Architect',
    demoUrl: 'https://maqdisgroup.com/',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Klien Web', value: '12+ Proyek' },
      { label: 'Performa', value: 'Fast Loading' },
      { label: 'Fokus', value: 'Konversi & Brand' }
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce & Smart Store',
    subtitle: 'Toko Online, Keranjang Belanja & Order Automation',
    category: 'fullstack',
    summary: 'Ekosistem toko online modern dengan katalog produk dinamis, kalkulator harga, manajemen keranjang, serta checkout otomatis via WhatsApp & Payment Gateway.',
    description: 'Solusi e-commerce mandiri untuk berbagai sektor: suplemen internasional (AFC Life Science / Ralie Care), kosmetik kecantikan (Nafita Store), dan perlengkapan bayi (Baby Store).',
    architecture: [
      'Direct Checkout WhatsApp Engine',
      'Dynamic Product Catalog',
      'Integrated Payment Gateway Architecture'
    ],
    stack: ['AFC Life Science', 'Nafita Makeup', 'Baby Store', 'Payment Gateway', 'Cloud Database'],
    highlights: [
      'AFC Life Science (Distributor Suplemen Jepang - raliecare.my.id)',
      'Nafita Makeup (Toko Kosmetik - nafita-store.clarate.id)',
      'Baby Store (Perlengkapan Bayi - baby-store.clarate.id)'
    ],
    challenges: 'Memastikan integrasi alur order instan tanpa hambatan dan sinkronisasi stok real-time antar channel penjualan.',
    role: 'Lead E-Commerce Developer',
    demoUrl: 'https://raliecare.my.id',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Integrasi', value: 'Direct WA & Gateway' },
      { label: 'Platform', value: 'Multi-Store' },
      { label: 'Status', value: 'Production' }
    ]
  },
  {
    id: 'hris-system',
    title: 'HRIS & Workforce Management',
    subtitle: 'Human Resource Information System',
    category: 'fullstack',
    summary: 'Sistem manajemen sumber daya manusia terpadu: absensi berbasis geolocation/shift, otomasi payroll & slip gaji, alur persetujuan cuti berjenjang, dan KPI evaluasi staf.',
    description: 'Platform HRIS modern yang mengeliminasi kalkulasi absensi dan penggajian manual, memberikan visibilitas produktivitas tim secara transparan dan akurat.',
    architecture: [
      'Role-Based Access Control (RBAC)',
      'Automated Payroll Engine',
      'Geolocation Shift Attendance',
      'Document Vault'
    ],
    stack: ['Payroll Engine', 'Shift Scheduling', 'Cuti & Lembur', 'RBAC Security', 'Audit Trail'],
    highlights: [
      'Perhitungan PPh 21, BPJS & Payroll otomatis',
      'Pencatatan presensi GPS & proteksi fake GPS',
      'Manajemen lembur dan persetujuan bertingkat'
    ],
    challenges: 'Menghubungkan data presensi real-time dengan formula lembur dan potongan gaji yang kompleks sesuai regulasi ketenagakerjaan.',
    role: 'HRIS System Architect',
    demoUrl: 'https://wa.me/6285141220521?text=Halo%20Rendy%2C%20saya%20tertarik%20demo%20Sistem%20HRIS',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Otomasi', value: 'Payroll & Cuti' },
      { label: 'Keamanan', value: 'RBAC Multi-Level' },
      { label: 'Presensi', value: 'GPS & Shift' }
    ]
  },
  {
    id: 'cad-engineering',
    title: 'CAD Modeling & Engineering Systems',
    subtitle: '2D/3D Technical Drafting & Mechanical Design',
    category: 'fullstack',
    summary: 'Perancangan gambar teknik 2D dan permodelan 3D mekanikal/arsitektur dengan standar presisi industri, spesifikasi fabrikasi terukur, dan visualisasi aset siap produksi.',
    description: 'Layanan drafting dan pemodelan CAD presisi tinggi untuk kebutuhan manufaktur mesin, desain produk, tata letak pabrik, dan visualisasi rendering 3D.',
    architecture: [
      'Parametric 3D Modeling',
      'Geometric Dimensioning & Tolerancing (GD&T)',
      'Fabrication Blueprints',
      'Rendering'
    ],
    stack: ['AutoCAD', 'SolidWorks', '3D Modeling', 'Technical Drawing', 'BOM Generator'],
    highlights: [
      'Drafting gambar kerja 2D & spesifikasi toleransi',
      'Pemodelan assembly 3D & visualisasi motion',
      'Penyusunan Bill of Materials (BOM) otomatis'
    ],
    challenges: 'Memastikan toleransi geometrik dan dimensi presisi 100% akurat sebelum masuk ke tahap pemotongan dan fabrikasi nyata.',
    role: 'CAD Design Engineer',
    demoUrl: 'https://wa.me/6285141220521?text=Halo%20Rendy%2C%20saya%20tertarik%20layanan%20CAD%20Engineering',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Standar', value: 'Presisi Industri' },
      { label: 'Output', value: '2D/3D CAD' },
      { label: 'Integrasi', value: 'BOM & Fabrikasi' }
    ]
  },
{
    id: 'erp-system',
    title: 'Sistem Operasional Bisnis ,Bukan Sekadar Akuntansi',
    subtitle: 'Setiap Transaksi Langsung Jadi Laporan. Tanpa Rekap. Tanpa Akuntan. Tanpa Excel.',
    category: 'fullstack',
    summary: 'Clarate ERP menghubungkan kasir, stok, pembelian, penjualan, dan akuntansi dalam satu sistem. Setiap kali ada transaksi, laporan keuangan langsung terupdate ,tanpa kamu harus input apapun dua kali.',
    description: `Coba Gratis 14 Hari | Lihat Harga
Trial gratis 14 hari • Tanpa kartu kredit • Data 100% milikmu • Support tersedia

Kenapa Clarate ERP?
Terlalu banyak pengusaha kerja keras, tapi tidak tahu bisnisnya untung atau rugi. Karena data bisnis mereka tersebar di buku kas, Excel, dan aplikasi yang tidak terhubung satu sama lain.

[Retail]
“Stok laptop terakhir terjual Sabtu malam. Senin pagi, 3 customer datang ,dan baru ketahuan habis. Padahal kalau ada notifikasi, sudah bisa restock Jumat.”
Dampak: 3 customer kecewa. 1 pindah ke kompetitor.
💡 Data ada , tapi tersebar di kasir dan Excel yang tidak terhubung.

[F&B]
“Restoran ramai sepanjang bulan. Tapi pas laporan akhir bulan keluar, food cost ternyata 52% ,jauh di atas target 35%. Margin sudah terkikis, dan baru ketahuan sekarang.”
Dampak: Terlambat mengambil tindakan. Margin bulan ini hilang.
💡 Tanpa cost tracking real-time, kamu tahu masalah setelah sudah terlambat.

[B2B / Distributor]
“Ada 12 invoice ke customer yang sudah lewat tempo. Tidak ada yang mengingatkan. Baru ketahuan saat butuh bayar supplier , cashflow mendadak kritis.”
Dampak: Harus tarik pinjaman darurat untuk bayar supplier.
💡 Piutang tidak terpantau = cashflow yang tidak bisa diprediksi.

Keputusan Lebih Cepat:
Saat Kompetitor Masih Rekap, Kamu Sudah Tahu Hasilnya.
Dashboard real-time bukan sekadar grafik cantik ,ini adalah keunggulan kompetitif. Tahu jam berapa produk paling laku, cabang mana yang underperform, dan kapan harus restock, sebelum masalah muncul.
- Profit per produk, per cabang, per karyawan, real-time
- Deteksi otomatis transaksi tidak wajar berdasarkan aturan yang kamu set
- Akses dari HP kapan saja, dari mana saja
Dashboard 30 hari terakhir: Pendapatan Rp48.500.000 (+12%), Pengeluaran Rp21.200.000 (−4%), Laba Bersih Rp27.300.000 (+18%)
Grafik Pendapatan: Setiap transaksi kasir, penjualan, dan pembelian langsung membentuk angka ini , tanpa rekap.

Tidak Lagi Kehabisan Stok:
Kehabisan Stok di Momen Ramai Adalah Kerugian yang Bisa Dicegah.
Clarate memantau pergerakan stokmu dan memberi peringatan otomatis saat stok menyentuh titik minimum yang kamu tetapkan , bahkan bisa langsung siapkan draf purchase order ke supplier. Tidak ada lagi customer kecewa karena kehabisan.
- Peringatan dini otomatis saat stok mendekati titik minimum
- Kelola stok di banyak gudang dari satu tampilan
- Draf PO ke supplier siap kirim , tidak perlu buat dari awal
Inventory (234 produk):
• Laptop Asus VivoBook (LPT-001) - 24pcs (Aman)
• Mouse Wireless Logitech (MSE-024) - 5pcs (Menipis)
• Keyboard Mechanical (KBD-012) - 0pcs (Habis)
• Monitor 24 inch IPS (MNT-008) - 12pcs (Aman)
Alert Stok: MSE-024 di bawah titik minimum. Draf PO siap dikirim ke supplier.
Stok berkurang saat surat jalan diposting, bukan saat pesanan dibuat.

Laporan Otomatis:
Laporan yang Biasanya 3 Hari , Sekarang Terbuat Sendiri.
Setiap transaksi otomatis membuat jurnal, mengupdate stok, dan masuk ke laporan keuangan. Tidak perlu akuntan untuk bikin laporan bulanan. Tidak perlu Excel yang bisa salah formula. Data akurat, audit trail lengkap ,siap untuk bank, investor, atau pajak.
- Standar SAK ETAP , sesuai regulasi UMKM Indonesia
- Export ke Excel, PDF, atau langsung ke konsultan pajak
- Audit trail lengkap, siap untuk due diligence investor
Laporan Keuangan Maret 2025 (Laporan Laba Rugi):
• Pendapatan Penjualan: 48.500.000
• HPP: (21.200.000)
• Laba Kotor: 27.300.000
• Biaya Operasional: (8.500.000)
• Laba Bersih: Rp 18.800.000
Export Excel & Export PDF. Dihitung dari jurnal yang sama dengan Neraca,angkanya tidak mungkin berbeda.`,
    architecture: [
      'SAK ETAP: Laporan Keuangan Otomatis (Jurnal terbuat sendiri setiap ada transaksi. Laporan Laba Rugi, Neraca, dan Arus Kas tersedia kapan saja tanpa rekap manual, tanpa formula Excel yang bisa salah)',
      'Real-time: Kasir yang Terhubung ke Segalanya (Setiap penjualan di kasir langsung tercatat ke stok dan akuntansi bersamaan. Tidak ada rekap malam hari. Tidak ada data yang tidak nyambung)',
      'Multi-gudang: Stok Tidak Pernah Keliru (Pantau stok di semua lokasi dari satu layar. Notifikasi otomatis sebelum stok habis bukan setelah customer sudah kecewa dan minta refund)',
      'Terintegrasi: Pembelian Tidak Ada yang Terlewat (Dari PO ke penerimaan barang semua terdokumentasi. Hutang supplier selalu akurat. Tidak ada pembelian yang terlewat atau tidak tercatat)',
      'Otomatis: Piutang Terpantau, Tidak Ada yang Lupa Ditagih (Dari penawaran ke invoice ke pelunasan dalam satu alur. Piutang customer terpantau otomatis. Tidak ada invoice yang lupa ditagih atau terlewat)',
      '20+ Laporan: Laporan yang Dulu 3 Hari Sekarang Tersedia Setiap Saat (20+ laporan siap pakai: neraca, laba rugi, arus kas, omzet per produk. Export ke Excel atau PDF kapanpun dengan satu klik)'
    ],
    stack: [
      'Laporan Biaya Otomatis',
      'Deteksi Selisih',
      'Alert Stok Menipis',
      'Jurnal Otomatis',
      'SAK ETAP',
      'Multi-Gudang',
      '20+ Laporan'
    ],
    highlights: [
      'Clarate ERP: Satu Sistem, Semua Terhubung (Kasir → stok → akuntansi ,semuanya terintegrasi)',
      'Serba Otomatis: Laporan Biaya Otomatis, Deteksi Selisih, Alert Stok Menipis, Jurnal Otomatis',
      'Keputusan Lebih Cepat: Dashboard Real-Time (Pendapatan Rp48.5M, Pengeluaran Rp21.2M, Laba Bersih Rp27.3M)',
      'Laporan Otomatis: Standar SAK ETAP sesuai regulasi UMKM Indonesia (Export Excel & PDF)',
      'Trial gratis 14 hari • Tanpa kartu kredit • Data 100% milikmu • Support tersedia'
    ],
    challenges: 'Terlalu banyak pengusaha kerja keras, tapi tidak tahu bisnisnya untung atau rugi karena data bisnis mereka tersebar di buku kas, Excel, dan aplikasi yang tidak terhubung satu sama lain (stok habis tak terpantau, food cost membengkak, dan invoice lewat tempo).',
    role: 'Clarate ERP Ecosystem',
    demoUrl: 'https://clarate.id/id/register?service_id=1',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Trial', value: '14 Hari Gratis' },
      { label: 'Laporan', value: '20+ Siap Pakai' },
      { label: 'Standar', value: 'SAK ETAP' }
    ]
}
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-indoteknik',
    period: 'Jan 2022 – Apr 2024 · 2 thn 4 bln',
    role: 'Full Stack Engineer',
    organization: 'Indoteknik.com',
    badge: 'Platform Architecture & Migration',
    category: 'project',
    description:
      'Memimpin arsitektur dan migrasi platform indoteknik.com dari legacy stack ke arsitektur web modern yang terukur dan berkecepatan tinggi.',
    highlights: [
      'Memimpin migrasi platform dari legacy stack',
      'Perancangan arsitektur web modern',
      'Peningkatan skalabilitas dan performa platform'
    ],
    tech: ['Legacy Migration', 'Web Architecture', 'Full Stack', 'Scalability']
  },
  {
    id: 'exp-spasi',
    period: 'Mei 2024 · 2 thn 3 bln',
    role: 'Full Stack Engineer',
    organization: 'Spasi Indonesia',
    badge: 'Backend & Data Pipelines',
    category: 'project',
    description:
      'Membangun backend service yang tangguh dan data-processing pipelines otomatis untuk mendukung efisiensi operasional bisnis internal.',
    highlights: [
      'Membangun backend service yang resilient',
      'Otomasi pipeline pemrosesan data',
      'Optimasi alur kerja operasional internal'
    ],
    tech: ['Backend Services', 'Data Pipelines', 'Automation', 'System Integration']
  },
  {
    id: 'exp-ats',
    period: 'Jun 2026 · 2 bln',
    role: 'Full Stack Engineer',
    organization: 'Asian Technology Solutions',
    badge: 'Enterprise Systems',
    category: 'project',
    description:
      'Mengembangkan sistem berskala enterprise dengan fokus pada performa tinggi, skalabilitas arsitektur, dan integrasi API yang aman.',
    highlights: [
      'Pengembangan sistem enterprise performa tinggi',
      'Integrasi API & gateway berkeamanan ketat',
      'Arsitektur backend tangguh dan terukur'
    ],
    tech: ['Full Stack', 'API Security', 'Enterprise Architecture', 'High Performance']
  },
  {
    id: 'exp-rework-cybersecurity',
    period: 'Agu 2026 - Des 2026',
    role: 'Cyber Security Trainee (Red Team Focus)',
    organization: 'Cyber Security Bootcamp by Rework Academy',
    badge: 'Cyber Security Bootcamp',
    category: 'security',
    description:
      'Pelatihan intensif keamanan siber komprehensif mulai dari fundamental cybersecurity, vulnerability assessment, web application penetration testing (OWASP Top 10), network penetration testing, bug bounty hunting, hingga penyusunan security reporting profesional. Fokus mendalam pada Red Team (Offensive Security) dengan pemahaman komplementer Blue Team (Defensive) dan Purple Team.',
    highlights: [
      'Web Application & Network Penetration Testing',
      'Metodologi Bug Bounty & Eksploitasi OWASP Top 10',
      'Vulnerability Assessment & Security Reporting',
      'Fokus Offensive Red Team dengan Pemahaman Blue/Purple Team'
    ],
    tech: ['Web App Pentesting', 'Network Security', 'OWASP Top 10', 'Bug Bounty', 'Red Teaming', 'Linux Security', 'Security Reporting']
  }
];
