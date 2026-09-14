import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'RENDY',
  tagline: 'Full-Stack & Mobile Developer',
  status: 'Semarang, Jawa Tengah • Available for New Projects',
  bio: 'Merancang dan membangun website, aplikasi, CAD, hingga sistem ERP dari nol untuk startup, dan enterprise.',
  experienceStart: 'Active Developer',
  avatarUrl: 'https://i.ibb.co.com/tMN6mPt9/IMG-20260914-140952.png', // <-- GANTI DENGAN LINK INI
  interests: [
    'Web Architecture',
    'Mobile Systems',
  ],
  contact: {
    email: 'rendyajahh245@gmail.com',
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
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Component-driven UI, state management, custom hooks, and interactive flows',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, static generation, and edge routing',
    projectLinks: ['cimart']
  },
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Native Mobile',
    usageContext: 'Cross-platform native mobile apps for iOS and Android with 60fps reactive UI',
    projectLinks: ['villanakey']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Modern utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and asynchronous event loops',
    projectLinks: ['cimart']
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
    projectLinks: ['cimart']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'High-throughput microservices, real-time WebSockets, and build automation tooling',
    projectLinks: ['kalorin-ai']
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
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, and auth',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'E-commerce relational database schemas, ACID transactions, and optimized indexing',
    projectLinks: ['cimart']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'NoSQL & Real-Time Sync',
    usageContext: 'Cloud Firestore real-time calendar syncing, FCM push notifications, and Auth',
    projectLinks: ['villanakey', 'cimart']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Type-safe database migrations, declarative schema modeling, and optimized queries',
    projectLinks: ['kalorin-ai']
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
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized deployment, multi-stage builds, and consistent staging environments',
    projectLinks: ['cimart']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching workflows, code reviews, and CI/CD pipelines',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Edge deployment, continuous integration, and global CDN delivery for web apps',
    projectLinks: ['kalorin-ai']
  }
];

export const projectsData: Project[] = [
  {
    id: 'maqdis-group',
    title: 'Maqdis Group',
    subtitle: 'Travel Haji & Umroh — Website Custom',
    category: 'fullstack',
    summary: 'Website representatif resmi untuk agensi travel Haji & Umroh terpercaya dengan informasi paket ibadah, jadwal keberangkatan, dan panduan perjalanan lengkap.',
    description: 'Platform resmi Maqdis Group untuk memudahkan jamaah melihat rincian paket Haji dan Umroh, fasilitas hotel, serta konsultasi langsung dengan customer support.',
    architecture: ['Responsive Web Design', 'Fast CDN Asset Delivery', 'Direct WhatsApp & Lead Form Integration'],
    stack: ['Website Custom', 'Lead Generation', 'Fast Loading'],
    highlights: ['Travel Haji & Umroh Resmi', 'Katalog Paket Ibadah Lengkap', 'Integrasi Konsultasi Cepat'],
    challenges: 'Menyajikan informasi paket ibadah dan legalitas secara transparan dan mudah diakses oleh jamaah dari semua kalangan usia.',
    role: 'Lead Web Engineer',
    demoUrl: 'https://maqdisgroup.com/',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Kategori', value: 'Travel & Haji' },
      { label: 'Tipe Solusi', value: 'Website Custom' },
      { label: 'Status', value: 'Live' }
    ]
  },
  {
    id: 'afc-life-science',
    title: 'AFC Life Science Indonesia',
    subtitle: 'Distributor Suplemen Kesehatan Jepang',
    category: 'fullstack',
    summary: 'Website distributor produk kesehatan dengan katalog produk & harga, sistem keranjang belanja, dan checkout langsung via WhatsApp (tahap ekspansi payment gateway & ERP).',
    description: 'Platform penjualan e-commerce suplemen kesehatan Jepang dengan fitur katalog produk, keranjang, order WhatsApp, serta arsitektur yang siap diintegrasikan ke sistem ERP dan payment gateway otomatis.',
    architecture: ['Modern E-Commerce Frontend', 'WhatsApp Order Engine', 'ERP Architecture Ready'],
    stack: ['Kesehatan', 'Suplemen', 'E-Commerce'],
    highlights: ['Distributor Resmi Produk Jepang', 'Sistem Keranjang & Checkout WA', 'Arsitektur Siap ERP'],
    challenges: 'Merancang arsitektur toko online yang ringan namun siap menampung integrasi sistem ERP, payment gateway, dan manajemen stok multi-gudang di masa depan.',
    role: 'Full Stack Engineer',
    demoUrl: 'https://raliecare.my.id',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Kategori', value: 'Health & Wellness' },
      { label: 'Integrasi', value: 'E-Commerce WA' },
      { label: 'Pengembangan', value: 'ERP Ready' }
    ]
  },
  {
    id: 'nafita-makeup',
    title: 'Nafita Makeup',
    subtitle: 'Kosmetik & Kecantikan — Toko Online',
    category: 'fullstack',
    summary: 'Toko online kecantikan & kosmetik modern dengan visual elegan, display produk terstruktur, dan kemudahan pemesanan produk makeup favorit.',
    description: 'Toko online kosmetik dan produk kecantikan yang dirancang khusus untuk meningkatkan konversi dan kenyamanan belanja pelanggan.',
    architecture: ['Mobile-First UI', 'Product Catalog', 'Fast Checkout Flow'],
    stack: ['Kosmetik', 'Kecantikan', 'Toko Online'],
    highlights: ['Katalog Produk Cantik', 'Checkout Cepat', 'Navigasi Kategori Mudah'],
    challenges: 'Menampilkan katalog foto kosmetik resolusi tinggi dengan performa loading yang tetap instan di jaringan mobile.',
    role: 'Web Developer',
    demoUrl: 'https://nafita-store.clarate.id/',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Kategori', value: 'Beauty & Care' },
      { label: 'Tipe Solusi', value: 'Toko Online' },
      { label: 'Tampilan', value: 'Mobile First' }
    ]
  },
  {
    id: 'baby-store',
    title: 'Baby Store',
    subtitle: 'Perlengkapan Bayi — Toko Online',
    category: 'fullstack',
    summary: 'Toko online khusus perlengkapan ibu dan bayi dengan katalog produk lengkap, pengelompokan usia, dan alur belanja yang ringkas bagi orang tua.',
    description: 'Platform e-commerce kebutuhan bayi dan balita yang mengutamakan kemudahan navigasi serta filter kategori produk.',
    architecture: ['E-Commerce Engine', 'Product Filtering', 'Direct Order Integration'],
    stack: ['Perlengkapan Bayi', 'Toko Online', 'Keluarga'],
    highlights: ['Navigasi Berdasarkan Usia Bayi', 'Checkout Mudah', 'Visual Ramah Keluarga'],
    challenges: 'Menata varian produk bayi yang beragam agar mudah ditemukan oleh orang tua yang berbelanja cepat via smartphone.',
    role: 'Web Developer',
    demoUrl: 'https://baby-store.clarate.id/',
    imageUrl: '',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Kategori', value: 'Baby & Kids' },
      { label: 'Tipe Solusi', value: 'Toko Online' },
      { label: 'Akses', value: 'Responsive' }
    ]
  },
  {
    id: 'urbanwear',
    title: 'UrbanWear',
    subtitle: 'Fashion Store — Toko · Fashion · Katalog Produk',
    category: 'fullstack',
    summary: 'Website toko fashion dengan foto besar, katalog produk, dan halaman brand. Khusus untuk toko pakaian yang menjual lewat daya tarik visual.',

  },
  {
    id: 'kayu-ruang',
    title: 'Kayu Ruang',
    subtitle: 'Furniture & Interior — Toko · Interior',
    category: 'fullstack',
    summary: 'Website furniture dengan katalog produk, koleksi, dan portofolio ruang. Dirancang khusus untuk bisnis yang menjual barang bernilai tinggi.',
    description: 'Showcase web perabotan dan desain interior kayu yang menonjolkan detail craftsmanship, material, dan inspirasi tata ruang rumah.',
    architecture: ['Showcase Gallery', 'Material Specs Breakdown', 'Lead Inquiry Flow'],
    stack: ['Toko', 'Furniture', 'Interior'],
    highlights: ['Portofolio Ruangan', 'Spesifikasi Kayu & Ukuran', 'Konsultasi Kustomisasi'],
    challenges: 'Menampilkan detail tekstur material kayu dan proporsi furniture secara proporsional di layar perangkat mobile.',
    role: 'Web Developer',
    demoUrl: 'https://clarate.id/templates/kayu-ruang',
    imageUrl: '',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Kategori', value: 'Furniture' },
      { label: 'Fitur', value: 'Ruang & Portofolio' },
      { label: 'Target', value: 'High-Value' }
    ]
  },
  {
    id: 'garasi-prima',
    title: 'Garasi Prima',
    subtitle: 'Bengkel Mobil & Servis Berkala — Otomotif · Servis',
    category: 'fullstack',
    summary: 'Website bengkel dengan daftar servis berharga, estimasi waktu pengerjaan, dan alur servis transparan untuk usaha yang dipilih karena terpercaya.',
    description: 'Website bengkel otomotif modern dengan rincian paket servis berkala, tune-up, ganti oli, dan booking antrean online tanpa repot.',
    architecture: ['Service Catalog with Pricing', 'Booking Slot UI', 'Workflow Transparency'],
    stack: ['Otomotif', 'Bengkel', 'Servis'],
    highlights: ['Estimasi Harga & Waktu', 'Alur Pengerjaan Transparan', 'Booking Jadwal Servis'],
    challenges: 'Membangun rasa percaya pelanggan otomotif lewat transparansi rincian paket servis dan estimasi biaya di awal.',
    role: 'Web Developer',
    demoUrl: 'https://clarate.id/templates/garasi-prima',
    imageUrl: '',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Kategori', value: 'Otomotif' },
      { label: 'Fitur', value: 'Daftar Servis' },
      { label: 'Fokus', value: 'Trust & Transparansi' }
    ]
  },
  {
    id: 'forte-gym',
    title: 'Forte Gym',
    subtitle: 'Gym & Pusat Kebugaran — Kesehatan · Tanpa Kontrak',
    category: 'fullstack',
    summary: 'Website gym dengan area latihan, membership transparan tanpa kontrak, dan profil pelatih. Untuk tempat kebugaran yang dipilih karena kelengkapan alat.',
    description: 'Platform web pusat kebugaran modern dengan daftar alat latihan, paket keanggotaan fleksibel, dan profil personal trainer berpengalaman.',
    architecture: ['Membership Comparison', 'Trainer Showcase', 'Class Schedule'],
    stack: ['Kesehatan', 'Gym', 'Tanpa Kontrak'],
    highlights: ['Paket Membership Fleksibel', 'Profil Pelatih Profesional', 'Jadwal Kelas Gym'],
    challenges: 'Menyajikan perbandingan paket membership tanpa kontrak secara jelas agar pengunjung langsung tertarik mendaftar.',
    role: 'Web Developer',
    demoUrl: 'https://clarate.id/templates/forte-gym',
    imageUrl: '',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Kategori', value: 'Fitness & Gym' },
      { label: 'Model', value: 'Tanpa Kontrak' },
      { label: 'Fitur', value: 'Profil Trainer' }
    ]
  },
  {
    id: 'panen-langsung',
    title: 'Panen Langsung',
export const projectsData: Project[] = [
  {
    id: 'web-solutions',
    title: 'Website Kustom & Platform Bisnis',
    subtitle: '12+ Proyek Website Klien & Bisnis Nyata',
    category: 'fullstack',
    summary: 'Kumpulan website berkecepatan tinggi, SEO-friendly, dan berorientasi konversi untuk travel umroh, F&B, hospitality, agribisnis, klinik, dan jasa profesional.',
    description: 'Solusi website responsif yang dirancang khusus untuk membangun kredibilitas brand dan meningkatkan konversi penjualan.',
    architecture: ['Responsive Design', 'Fast CDN Asset Delivery', 'Direct WhatsApp & Lead Form Integration'],
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
    architecture: ['Direct Checkout WhatsApp Engine', 'Dynamic Product Catalog', 'Integrated Payment Gateway Architecture'],
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
    architecture: ['Role-Based Access Control (RBAC)', 'Automated Payroll Engine', 'Geolocation Shift Attendance', 'Document Vault'],
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
    summary: 'Perancangan gambar teknik 2D dan permodelan 3D mekanikal/arsitektur dengan standar presisi industri, spesifikasi fabrikasi terukur, dan visualisasi aset aset siap produksi.',
    description: 'Layanan drafting dan pemodelan CAD presisi tinggi untuk kebutuhan manufaktur mesin, desain produk, tata letak pabrik, dan visualisasi rendering 3D.',
    architecture: ['Parametric 3D Modeling', 'Geometric Dimensioning & Tolerancing (GD&T)', 'Fabrication Blueprints', 'Rendering'],
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
    title: 'Custom ERP Enterprise Ecosystem',
    subtitle: 'Finance (GL/COA), Multi-Warehouse, Purchasing & Sales',
    category: 'fullstack',
    summary: 'Sistem ERP kustom terpusat yang menyatukan seluruh mata rantai operasional: akuntansi double-entry (157+ COA), stok antar gudang, order pembelian, POS kasir, dan laporan eksekutif.',
    description: 'Satu sumber kebenaran data perusahaan yang dirancang khusus menyesuaikan proses bisnis unik, menggantikan spreadsheet manual dan aplikasi terpisah yang sering menimbulkan selisih data.',
    architecture: ['General Ledger Double-Entry', 'Real-Time Multi-Warehouse Inventory', 'Executive BI Dashboard', 'Purchasing & AP/AR'],
    stack: ['General Ledger', 'Inventory Engine', 'Sales & POS', 'Purchasing Flow', 'PostgreSQL', 'RBAC Security'],
    highlights: [
      'Pengelolaan 157+ Chart of Accounts (COA) standar PSAK',
      'Pelacakan batch & transfer stok multi-gudang real-time',
      'Laporan Laba/Rugi, Neraca & Arus Kas instan'
    ],
    challenges: 'Menjaga integritas data transaksi ACID saat menangani ribuan pencatatan jurnal keuangan dan mutasi stok harian.',
    role: 'Lead ERP Architect',
    demoUrl: 'https://wa.me/6285141220521?text=Halo%20Rendy%2C%20saya%20tertarik%20konsultasi%20Sistem%20ERP',
    imageUrl: '',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Akuntansi', value: '157+ COA GL' },
      { label: 'Gudang', value: 'Multi-Warehouse' },
      { label: 'Arsitektur', value: 'Custom ERP' }
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
