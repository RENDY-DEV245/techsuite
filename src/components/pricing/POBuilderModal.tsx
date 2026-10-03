import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckSquare,
  Square,
  Send,
  Copy,
  Check,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Search,
  User,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Layers,
  RotateCcw
} from 'lucide-react';
import { useClipboard } from '../../hooks/useClipboard';

export interface ModuleItem {
  id: string;
  name: string;
  desc: string;
}

export interface ModuleCategory {
  id: string;
  categoryNumber: string;
  title: string;
  groupType: 'website' | 'ecommerce' | 'cad' | 'erp';
  badge: string;
  items: ModuleItem[];
}

// =========================================================================
// DATABASE LENGKAP 28 KATEGORI (WEBSITE + E-COMMERCE + CAD + 25 MODUL ERP PDF)
// =========================================================================
export const COMPLETE_MODULE_CATALOG: ModuleCategory[] = [
  {
    id: 'web-dev',
    categoryNumber: '01',
    title: 'Website Development & Web Architecture',
    groupType: 'website',
    badge: 'WEBSITE',
    items: [
      { id: 'web-compro', name: 'Company Profile Premium', desc: 'Membangun citra kredibilitas korporat, legalitas, portofolio, dan visi misi perusahaan.' },
      { id: 'web-landing', name: 'High-Converting Landing Page', desc: 'Halaman penawaran khusus teroptimasi untuk konversi iklan dan direct checkout.' },
      { id: 'web-custom-ui', name: 'Custom UI/UX & Responsive Web', desc: 'Desain responsif fluid (Mobile, Tablet, Desktop) dengan micro-interactions neo-brutalist modern.' },
      { id: 'web-speed', name: 'Speed Optimization (< 2s Loading)', desc: 'Optimasi aset CDN, kompresi gambar, dan caching server untuk performa skor 95+.' },
      { id: 'web-seo', name: 'On-Page SEO & Meta Tags Protocol', desc: 'Struktur schema JSON-LD, sitemap XML, dan optimasi kata kunci mesin pencari Google.' },
      { id: 'web-cms', name: 'Panel Admin CMS Mandiri', desc: 'Dashboard berbasis visual untuk mengelola artikel, banner, produk, dan portofolio tanpa coding.' },
      { id: 'web-multilang', name: 'Multi-Language Support (ID / EN / AR)', desc: 'Fitur multi bahasa untuk target pasar lokal maupun internasional.' },
      { id: 'web-wa-direct', name: 'Direct WhatsApp Form & Lead Capture', desc: 'Integrasi pop-up penangkap data prospek langsung terhubung ke WhatsApp admin.' }
    ]
  },
  {
    id: 'ecom-dev',
    categoryNumber: '02',
    title: 'E-Commerce & Smart Store Solutions',
    groupType: 'ecommerce',
    badge: 'E-COMMERCE',
    items: [
      { id: 'ecom-catalog', name: 'Dynamic Product Catalog', desc: 'Manajemen katalog produk tanpa batas dengan varian warna, ukuran, dan harga grosir.' },
      { id: 'ecom-cart', name: 'Smart Shopping Cart & Checkout', desc: 'Keranjang belanja reaktif dengan kalkulasi otomatis dan proteksi abandoned cart.' },
      { id: 'ecom-pg', name: 'Payment Gateway Integration', desc: 'Pembayaran otomatis via QRIS, Virtual Account (BCA, Mandiri, BRI, BNI), & Kartu Kredit.' },
      { id: 'ecom-shipping', name: 'Automatic Shipping Ongkir API', desc: 'Kalkulasi ongkos kirim real-time se-Indonesia (JNE, SiCepat, J&T, POS, Anteraja).' },
      { id: 'ecom-coupons', name: 'Discount Voucher & Referral Engine', desc: 'Sistem kode kupon promo, diskon bertingkat, cashback poin, dan program afiliasi.' },
      { id: 'ecom-user-acc', name: 'Customer Portal & Order History', desc: 'Akun pelanggan untuk melacak resi pengiriman, riwayat belanja, dan alamat tersimpan.' },
      { id: 'ecom-stock-sync', name: 'Real-Time Multi-Channel Stock Sync', desc: 'Sinkronisasi stok barang otomatis mencegah overselling.' }
    ]
  },
  {
    id: 'cad-dev',
    categoryNumber: '03',
    title: 'CAD 2D/3D & Technical Engineering Systems',
    groupType: 'cad',
    badge: 'CAD / 3D',
    items: [
      { id: 'cad-2d-draft', name: 'AutoCAD 2D Technical Drafting', desc: 'Perancangan gambar kerja fabrikasi, denah arsitektur, dan layout mekanikal presisi tinggi.' },
      { id: 'cad-3d-model', name: 'SolidWorks 3D Parametric Modeling', desc: 'Permodelan 3D solid parts, komponen mesin, dan casing produk industrial.' },
      { id: 'cad-assembly', name: 'Assembly & Motion Simulation', desc: 'Perakitan multi-komponen mekanik dan uji tabrakan (interference detection).' },
      { id: 'cad-bom', name: 'Automatic Bill of Materials (BOM)', desc: 'Ekspor tabel daftar komponen, spesifikasi material, dan kuantitas produksi terukur.' },
      { id: 'cad-render', name: 'Photorealistic 3D Asset Rendering', desc: 'Visualisasi rendering 3D untuk katalog produk dan presentasi investor.' },
      { id: 'cad-gdt', name: 'GD&T (Geometric Dimensioning & Tolerancing)', desc: 'Penerapan standar toleransi geometrik internasional untuk mesin presisi/CNC.' },
      { id: 'cad-sheet-metal', name: 'Sheet Metal & Welding Fabrication Blueprints', desc: 'Pola bentangan plat tekuk (flat pattern) dan spesifikasi pengelasan terstandar.' }
    ]
  },
  {
    id: 'erp-01',
    categoryNumber: '04',
    title: '1. Finance & Accounting',
    groupType: 'erp',
    badge: 'ERP MODUL 1',
    items: [
      { id: 'erp-gl', name: 'General Ledger (GL)', desc: 'Mencatat seluruh transaksi keuangan perusahaan secara terpusat.' },
      { id: 'erp-ap', name: 'Accounts Payable (AP)', desc: 'Mengelola utang dan jadwal jatuh tempo tagihan ke vendor/supplier.' },
      { id: 'erp-ar', name: 'Accounts Receivable (AR)', desc: 'Mengelola piutang dari pelanggan dan riwayat penagihan.' },
      { id: 'erp-cash', name: 'Cash Management', desc: 'Memantau arus kas masuk dan keluar di berbagai rekening kas/bank.' },
      { id: 'erp-bank-recon', name: 'Bank Reconciliation', desc: 'Mencocokkan mutasi transaksi ERP dengan rekening koran bank otomatis.' },
      { id: 'erp-budgeting', name: 'Budgeting', desc: 'Membuat dan mengontrol pagu anggaran operasional per divisi.' },
      { id: 'erp-fin-planning', name: 'Financial Planning', desc: 'Merencanakan dan memproyeksikan kondisi keuangan masa depan.' },
      { id: 'erp-cost-acc', name: 'Cost Accounting', desc: 'Menghitung biaya operasional dan Harga Pokok Produksi (HPP/COGS).' },
      { id: 'erp-cost-center', name: 'Cost Center', desc: 'Mengelompokkan biaya pengeluaran berdasarkan departemen/aktivitas.' },
      { id: 'erp-profit-center', name: 'Profit Center', desc: 'Melihat keuntungan dan margin laba bersih berdasarkan unit bisnis.' },
      { id: 'erp-fixed-assets', name: 'Fixed Assets', desc: 'Mengelola inventaris aset tetap perusahaan dari perolehan hingga pelepasan.' },
      { id: 'erp-depreciation', name: 'Depreciation Engine', desc: 'Menghitung penyusutan aset secara otomatis tiap periode buku.' },
      { id: 'erp-tax-mgmt', name: 'Tax Management', desc: 'Mengelola perhitungan, pemotongan, dan pencatatan pajak (PPN, PPh).' },
      { id: 'erp-einvoice', name: 'E-Invoicing', desc: 'Membuat dan menerbitkan faktur elektronik resmi standar perpajakan.' },
      { id: 'erp-expense-mgmt', name: 'Expense Management', desc: 'Mencatat, memverifikasi, dan mengontrol reimbursement karyawan.' },
      { id: 'erp-fin-closing', name: 'Financial Closing', desc: 'Proses penutupan pembukuan bulanan/tahunan secara otomatis.' },
      { id: 'erp-consolidation', name: 'Consolidation', desc: 'Menggabungkan laporan keuangan dari beberapa cabang/anak perusahaan.' },
      { id: 'erp-treasury', name: 'Treasury', desc: 'Mengelola likuiditas modal kerja, penempatan investasi, dan pendanaan.' },
      { id: 'erp-credit-mgmt', name: 'Credit Management', desc: 'Mengatur plafon limit dan mitigasi risiko kredit pelanggan.' },
      { id: 'erp-revenue-mgmt', name: 'Revenue Management', desc: 'Mengelola pengakuan pendapatan (revenue recognition) dan perencanaan kas.' }
    ]
  },
  {
    id: 'erp-02',
    categoryNumber: '05',
    title: '2. Sales',
    groupType: 'erp',
    badge: 'ERP MODUL 2',
    items: [
      { id: 'erp-lead-mgmt', name: 'Lead Management', desc: 'Mencatat dan mengkualifikasi database calon pelanggan potensial.' },
      { id: 'erp-opportunity', name: 'Opportunity', desc: 'Mengelola peluang penjualan dari tahap kontak hingga negosiasi.' },
      { id: 'erp-quotation', name: 'Quotation', desc: 'Membuat surat penawaran harga resmi dengan format terstandar.' },
      { id: 'erp-sales-order', name: 'Sales Order (SO)', desc: 'Mencatat pesanan resmi pelanggan yang siap diproses logistik.' },
      { id: 'erp-pricing', name: 'Pricing Engine', desc: 'Mengatur skema matriks harga produk/jasa per segmen pelanggan.' },
      { id: 'erp-discount', name: 'Discount & Promotion', desc: 'Mengatur aturan diskon kuantitas, musiman, dan promosi khusus.' },
      { id: 'erp-cust-mgmt', name: 'Customer Management', desc: 'Mengelola profil, riwayat pembelian, dan preferensi pelanggan.' },
      { id: 'erp-sales-comm', name: 'Sales Commission', desc: 'Menghitung komisi tim sales otomatis berdasarkan target pencapaian.' },
      { id: 'erp-delivery', name: 'Delivery / Surat Jalan', desc: 'Mengatur surat jalan pengiriman pesanan dan alokasi armada.' },
      { id: 'erp-sales-return', name: 'Sales Return', desc: 'Mengelola retur barang yang dikembalikan dan menerbitkan nota kredit.' },
      { id: 'erp-sales-invoice', name: 'Sales Invoice', desc: 'Membuat tagihan invoice pelanggan dengan jatuh tempo terstruktur.' },
      { id: 'erp-subscription', name: 'Subscription Billing', desc: 'Mengelola tagihan berulang untuk layanan berlangganan (recurring).' },
      { id: 'erp-sales-contract', name: 'Sales Contract', desc: 'Mengelola dokumen perjanjian kontrak penjualan jangka panjang.' },
      { id: 'erp-sales-forecast', name: 'Sales Forecast', desc: 'Memperkirakan tren estimasi penjualan di periode masa depan.' }
    ]
  },
  {
    id: 'erp-03',
    categoryNumber: '06',
    title: '3. CRM (Customer Relationship Management)',
    groupType: 'erp',
    badge: 'ERP MODUL 3',
    items: [
      { id: 'erp-contacts', name: 'Contacts', desc: 'Menyimpan detail kontak individual PIC, nomor telepon, dan email.' },
      { id: 'erp-accounts', name: 'Accounts', desc: 'Mengelola profil organisasi/perusahaan klien B2B.' },
      { id: 'erp-sales-pipeline', name: 'Sales Pipeline (Kanban)', desc: 'Melihat status posisi setiap peluang penjualan secara visual.' },
      { id: 'erp-activities', name: 'Activities Log', desc: 'Mencatat panggilan call, notulen meeting, task follow-up, dan agenda.' },
      { id: 'erp-cust-comm', name: 'Customer Communication', desc: 'Mengelola komunikasi terpusat via email, WhatsApp, dan live chat.' },
      { id: 'erp-crm-campaign', name: 'Campaign', desc: 'Mengelola peluncuran kampanye pemasaran kepada target leads.' },
      { id: 'erp-segmentation', name: 'Segmentation', desc: 'Membagi pelanggan berdasarkan demografi, nilai transaksi, atau wilayah.' },
      { id: 'erp-cust-service', name: 'Customer Service', desc: 'Menangani kebutuhan, konsultasi, dan tiket bantuan pelanggan.' },
      { id: 'erp-complaint-mgmt', name: 'Complaint Management', desc: 'Menangani eskalasi keluhan pelanggan dengan SLA penanganan.' },
      { id: 'erp-cust-feedback', name: 'Customer Feedback (CSAT)', desc: 'Mengumpulkan ulasan, rating kepuasan, dan survei masukan pelanggan.' }
    ]
  },
  {
    id: 'erp-04',
    categoryNumber: '07',
    title: '4. Purchasing / Procurement',
    groupType: 'erp',
    badge: 'ERP MODUL 4',
    items: [
      { id: 'erp-pr', name: 'Purchase Request (PR)', desc: 'Permintaan pengadaan barang/jasa dari divisi internal.' },
      { id: 'erp-rfq', name: 'RFQ (Request for Quotation)', desc: 'Meminta penawaran harga komparasi dari beberapa supplier.' },
      { id: 'erp-vendor-mgmt', name: 'Vendor Management', desc: 'Mengelola master data, legalitas, dan katalog supplier.' },
      { id: 'erp-vendor-selection', name: 'Vendor Selection', desc: 'Memilih supplier terbaik berdasarkan kriteria harga, mutu, dan tempo.' },
      { id: 'erp-po', name: 'Purchase Order (PO)', desc: 'Membuat pesanan pembelian resmi yang mengikat ke supplier.' },
      { id: 'erp-po-contract', name: 'Purchase Contract', desc: 'Mengelola kontrak pengadaan bahan baku/jasa jangka panjang.' },
      { id: 'erp-po-approval', name: 'Purchase Approval', desc: 'Alur persetujuan pembelian bertingkat sesuai batas wewenang nominal.' },
      { id: 'erp-goods-receipt', name: 'Goods Receipt (GRN)', desc: 'Mencatat penerimaan fisik barang masuk di gudang.' },
      { id: 'erp-invoice-matching', name: '3-Way Invoice Matching', desc: 'Mencocokkan data Purchase Order (PO), Surat Jalan GRN, dan Invoice tagihan.' },
      { id: 'erp-supplier-eval', name: 'Supplier Evaluation', desc: 'Memberikan penilaian skor performa ketepatan waktu & mutu supplier.' },
      { id: 'erp-proc-analytics', name: 'Procurement Analytics', desc: 'Menganalisis efisiensi biaya dan tren pengeluaran pembelian.' }
    ]
  },
  {
    id: 'erp-05',
    categoryNumber: '08',
    title: '5. Inventory Management',
    groupType: 'erp',
    badge: 'ERP MODUL 5',
    items: [
      { id: 'erp-stock-mgmt', name: 'Stock Management', desc: 'Memantau jumlah stok on-hand, booked, dan available secara real-time.' },
      { id: 'erp-multi-warehouse', name: 'Multi-Warehouse', desc: 'Mengelola inventaris banyak gudang dan outlet cabang dari satu layar.' },
      { id: 'erp-stock-transfer', name: 'Stock Transfer', desc: 'Memindahkan stok antar lokasi gudang dengan status in-transit.' },
      { id: 'erp-stock-adj', name: 'Stock Adjustment', desc: 'Melakukan penyesuaian koreksi stok karena kerusakan atau selisih.' },
      { id: 'erp-stock-opname', name: 'Stock Opname', desc: 'Pencocokan stok fisik dengan sistem menggunakan barcode scanner.' },
      { id: 'erp-batch-lot', name: 'Batch / Lot Tracking', desc: 'Melacak riwayat barang berdasarkan nomor batch produksi.' },
      { id: 'erp-serial-no', name: 'Serial Number Tracking', desc: 'Melacak identitas unik per unit barang (elektronik, mesin, dll).' },
      { id: 'erp-expiration', name: 'Expiration Date Control', desc: 'Memantau tanggal kedaluwarsa dengan metode FIFO/FEFO.' },
      { id: 'erp-inv-valuation', name: 'Inventory Valuation', desc: 'Menghitung nilai persediaan dengan metode FIFO, LIFO, atau Average.' },
      { id: 'erp-reordering', name: 'Auto-Reordering Point', desc: 'Peringatan otomatis dan pembuatan draf PO saat stok menyentuh batas minimum.' },
      { id: 'erp-barcode', name: 'Barcode & QR Scanner', desc: 'Transaksi cepat penerimaan dan pengeluaran menggunakan barcode.' },
      { id: 'erp-inv-picking', name: 'Picking Management', desc: 'Instruksi pengambilan barang dari rak gudang sesuai pesanan.' },
      { id: 'erp-inv-packing', name: 'Packing Management', desc: 'Pengemasan barang dengan label resi sebelum diserahkan ke ekspedisi.' },
      { id: 'erp-inv-putaway', name: 'Putaway Management', desc: 'Penentuan lokasi rak optimal saat barang baru tiba di gudang.' }
    ]
  },
  {
    id: 'erp-06',
    categoryNumber: '09',
    title: '6. Manufacturing',
    groupType: 'erp',
    badge: 'ERP MODUL 6',
    items: [
      { id: 'erp-mfg-bom', name: 'Bill of Materials (BOM)', desc: 'Daftar resep/komponen bahan baku dan kemasan untuk membuat produk.' },
      { id: 'erp-prod-config', name: 'Product Configuration', desc: 'Mengatur variasi dan konfigurasi kustom produk manufaktur.' },
      { id: 'erp-prod-order', name: 'Production Order', desc: 'Perintah resmi untuk memulai proses produksi barang jadi.' },
      { id: 'erp-work-order', name: 'Work Order (WO)', desc: 'Instruksi detail pekerjaan per tahapan lini produksi.' },
      { id: 'erp-work-center', name: 'Work Center', desc: 'Mengatur mesin, stasiun kerja, dan alokasi operator produksi.' },
      { id: 'erp-routing', name: 'Routing Process', desc: 'Menentukan urutan langkah proses produksi dari awal hingga akhir.' },
      { id: 'erp-mfg-mrp', name: 'MRP (Material Requirement Planning)', desc: 'Kalkulasi otomatis kebutuhan jumlah bahan baku dan jadwal belanja.' },
      { id: 'erp-cap-planning', name: 'Capacity Planning', desc: 'Menghitung kapasitas kemampuan mesin dan tenaga kerja pabrik.' },
      { id: 'erp-prod-sched', name: 'Production Scheduling', desc: 'Menjadwalkan timeline jalannya mesin agar tidak bentrok (Gantt).' },
      { id: 'erp-shop-floor', name: 'Shop Floor Control', desc: 'Memantau aktivitas aktual pekerja dan mesin di lantai pabrik real-time.' },
      { id: 'erp-wip', name: 'WIP (Work in Process)', desc: 'Memantau barang setengah jadi yang sedang dalam proses pengerjaan.' },
      { id: 'erp-scrap', name: 'Scrap & Waste Tracking', desc: 'Mencatat material atau barang cacat yang terbuang saat produksi.' },
      { id: 'erp-byproduct', name: 'By-product Management', desc: 'Mengelola produk sampingan yang memiliki nilai ekonomis.' },
      { id: 'erp-subcontract', name: 'Subcontract Manufacturing', desc: 'Mengelola pengerjaan maklon/outsourcing ke vendor pihak luar.' }
    ]
  },
  {
    id: 'erp-07',
    categoryNumber: '10',
    title: '7. Supply Chain Management (SCM)',
    groupType: 'erp',
    badge: 'ERP MODUL 7',
    items: [
      { id: 'erp-demand-plan', name: 'Demand Planning', desc: 'Memperkirakan kebutuhan permintaan pasar berdasarkan data historis.' },
      { id: 'erp-supply-plan', name: 'Supply Planning', desc: 'Merencanakan ketersediaan pasokan agar sesuai target permintaan.' },
      { id: 'erp-scm-mrp', name: 'Material Requirement Plan', desc: 'Menghitung kebutuhan material rantai pasok secara terintegrasi.' },
      { id: 'erp-inv-plan', name: 'Inventory Planning', desc: 'Menentukan kuantitas stok pengaman (safety stock) optimal.' },
      { id: 'erp-distribution', name: 'Distribution Management', desc: 'Mengatur alur distribusi barang dari gudang pusat ke cabang/agen.' },
      { id: 'erp-logistics', name: 'Logistics Control', desc: 'Mengatur pergerakan fisik barang dalam ekosistem rantai pasok.' },
      { id: 'erp-ship-plan', name: 'Shipment Planning', desc: 'Merencanakan jadwal pengiriman kontainer/truk secara efisien.' },
      { id: 'erp-route-plan', name: 'Route Planning', desc: 'Menentukan rute pengiriman armada tercepat dan hemat bahan bakar.' },
      { id: 'erp-supplier-collab', name: 'Supplier Collaboration', desc: 'Portal kolaborasi berbagi data stok dan pesanan langsung ke vendor.' },
      { id: 'erp-scm-analytics', name: 'Supply Chain Analytics', desc: 'Menganalisis performa lead-time dan ketepatan rantai pasokan.' }
    ]
  },
  {
    id: 'erp-08',
    categoryNumber: '11',
    title: '8. Warehouse Management System (WMS)',
    groupType: 'erp',
    badge: 'ERP MODUL 8',
    items: [
      { id: 'erp-wms-recv', name: 'Receiving', desc: 'Menerima dan memverifikasi kesesuaian fisik barang masuk.' },
      { id: 'erp-wms-putaway', name: 'Putaway Optimization', desc: 'Menempatkan barang ke rak/slot gudang dengan algoritma ruang optimal.' },
      { id: 'erp-wms-picking', name: 'Picking System', desc: 'Pengambilan barang terarah berdasarkan rute rak terpendek.' },
      { id: 'erp-wms-packing', name: 'Packing & Labeling', desc: 'Pengemasan standar dan pencetakan barcode shipping mark.' },
      { id: 'erp-wms-shipping', name: 'Shipping Dispatch', desc: 'Mengeluarkan barang dari dermaga loading dock ke armada ekspedisi.' },
      { id: 'erp-wms-bin-loc', name: 'Bin Location Management', desc: 'Pemetaan denah visual detail lokasi rak, lorong, dan tingkat bin.' },
      { id: 'erp-cross-dock', name: 'Cross-docking', desc: 'Barang masuk langsung diteruskan ke armada kirim tanpa disimpan lama.' },
      { id: 'erp-wave-picking', name: 'Wave Picking', desc: 'Mengelompokkan pesanan masal untuk diambil serentak sekaligus.' },
      { id: 'erp-cycle-count', name: 'Cycle Counting', desc: 'Pemeriksaan audit fisik stok berkala tanpa menghentikan operasional.' },
      { id: 'erp-wh-automation', name: 'Warehouse Automation', desc: 'Integrasi dengan konveyor, sensor RFID, dan robot AGV otomatis.' }
    ]
  },
  {
    id: 'erp-09',
    categoryNumber: '12',
    title: '9. Human Resources (HRIS)',
    groupType: 'erp',
    badge: 'ERP MODUL 9',
    items: [
      { id: 'erp-emp-db', name: 'Employee Database', desc: 'Menyimpan biodata lengkap karyawan, kontak darurat, dan riwayat kerja.' },
      { id: 'erp-recruitment', name: 'Recruitment (ATS)', desc: 'Mengelola lowongan kerja, seleksi CV, dan jadwal interview pelamar.' },
      { id: 'erp-onboarding', name: 'Onboarding & Offboarding', desc: 'Alur checklist administrasi penerimaan karyawan baru dan serah terima resign.' },
      { id: 'erp-attendance', name: 'Attendance & GPS Geolocation', desc: 'Pencatatan presensi mobile berbasis GPS radius, shift, dan biometrik.' },
      { id: 'erp-leave', name: 'Leave & Absence Management', desc: 'Pengajuan dan persetujuan cuti, izin, dan sakit secara paperless.' },
      { id: 'erp-payroll', name: 'Payroll Engine', desc: 'Perhitungan gaji pokok, tunjangan, potongan, dan cetak slip gaji otomatis.' },
      { id: 'erp-overtime', name: 'Overtime Calculator', desc: 'Menghitung uang lembur otomatis sesuai rumus Depnaker.' },
      { id: 'erp-benefits', name: 'Benefits & BPJS / Asuransi', desc: 'Kalkulasi iuran BPJS Ketenagakerjaan, BPJS Kesehatan, dan asuransi.' },
      { id: 'erp-performance', name: 'Performance Appraisal (KPI)', desc: 'Penilaian kinerja karyawan berbasis Key Performance Indicator (KPI).' },
      { id: 'erp-training', name: 'Training Management', desc: 'Mengelola program pelatihan, sertifikasi, dan pengembangan skill tim.' },
      { id: 'erp-career-mgmt', name: 'Career Management', desc: 'Perencanaan suksesi jabatan dan jenjang karier karyawan.' },
      { id: 'erp-org-structure', name: 'Organization Structure', desc: 'Bagan struktur organisasi interaktif dengan hierarki atasan/bawahan.' },
      { id: 'erp-ess', name: 'Employee Self-Service (ESS)', desc: 'Portal mandiri karyawan untuk cek slip gaji dan ajukan cuti/klaim.' },
      { id: 'erp-workforce-plan', name: 'Workforce Planning', desc: 'Merencanakan kebutuhan formasi jumlah tenaga kerja per departemen.' }
    ]
  },
  {
    id: 'erp-10',
    categoryNumber: '13',
    title: '10. Project Management',
    groupType: 'erp',
    badge: 'ERP MODUL 10',
    items: [
      { id: 'erp-project-core', name: 'Project Workspace', desc: 'Mengelola portofolio proyek perusahaan dari inisiasi hingga serah terima.' },
      { id: 'erp-task-mgmt', name: 'Task Breakdown', desc: 'Membagi pekerjaan besar menjadi tugas harian (WBS).' },
      { id: 'erp-milestone', name: 'Milestone Tracking', desc: 'Menentukan dan memantau pencapaian fase-fase penting proyek.' },
      { id: 'erp-timesheet', name: 'Timesheet Logging', desc: 'Mencatat waktu jam kerja yang dihabiskan anggota tim pada tugas.' },
      { id: 'erp-res-alloc', name: 'Resource Allocation', desc: 'Menentukan alokasi SDM, alat, dan mesin ke dalam proyek.' },
      { id: 'erp-proj-budget', name: 'Project Budget', desc: 'Mengatur pagu anggaran biaya rencana proyek (RAB).' },
      { id: 'erp-proj-cost', name: 'Project Cost Tracking', desc: 'Menghitung pengeluaran riil aktual proyek untuk mencegah boncos.' },
      { id: 'erp-proj-billing', name: 'Project Billing / Progress Claim', desc: 'Menagihkan termin pembayaran kepada klien berdasarkan progress fisik.' },
      { id: 'erp-proj-profit', name: 'Project Profitability', desc: 'Menghitung margin keuntungan laba/rugi per proyek secara transparan.' },
      { id: 'erp-gantt', name: 'Interactive Gantt Chart', desc: 'Melihat visualisasi jadwal, dependensi tugas, dan critical path proyek.' }
    ]
  },
  {
    id: 'erp-11',
    categoryNumber: '14',
    title: '11. Asset Management',
    groupType: 'erp',
    badge: 'ERP MODUL 11',
    items: [
      { id: 'erp-asset-reg', name: 'Asset Register', desc: 'Database daftar nomor registrasi seluruh aset bergerak dan tidak bergerak.' },
      { id: 'erp-asset-acq', name: 'Asset Acquisition', desc: 'Mencatat pembelian aset baru dan biaya perolehannya.' },
      { id: 'erp-asset-trans', name: 'Asset Transfer', desc: 'Memindahkan penanggung jawab aset antar lokasi atau departemen.' },
      { id: 'erp-asset-disp', name: 'Asset Disposal', desc: 'Mencatat penjualan, lelang, atau penghapusan aset rusak.' },
      { id: 'erp-asset-deprec', name: 'Depreciation Book', desc: 'Pencatatan akumulasi penyusutan aset otomatis per bulan.' },
      { id: 'erp-asset-maint', name: 'Asset Maintenance Schedule', desc: 'Menjaga kondisi fisik aset dengan jadwal pemeliharaan rutin.' },
      { id: 'erp-asset-loc', name: 'Asset Location Tracking', desc: 'Mengetahui posisi fisik aset melalui barcode/GPS tagging.' },
      { id: 'erp-asset-hist', name: 'Asset History Log', desc: 'Melihat riwayat perbaikan, pemakai sebelumnya, dan nilai buku aset.' }
    ]
  },
  {
    id: 'erp-12',
    categoryNumber: '15',
    title: '12. Maintenance Management (CMMS)',
    groupType: 'erp',
    badge: 'ERP MODUL 12',
    items: [
      { id: 'erp-prev-maint', name: 'Preventive Maintenance', desc: 'Jadwal perawatan berkala terjadwal sebelum mesin mengalami kerusakan.' },
      { id: 'erp-corr-maint', name: 'Corrective Maintenance', desc: 'Pencatatan perbaikan darurat saat terjadi kendala mesin breakdown.' },
      { id: 'erp-maint-req', name: 'Maintenance Request', desc: 'Formulir permohonan perbaikan dari operator lapangan ke tim teknisi.' },
      { id: 'erp-maint-wo', name: 'Maintenance Work Order', desc: 'Surat perintah kerja teknisi lengkap dengan daftar suku cadang.' },
      { id: 'erp-maint-sched', name: 'Maintenance Schedule', desc: 'Kalender jadwal perawatan seluruh peralatan pabrik.' },
      { id: 'erp-spare-parts', name: 'Spare Parts Management', desc: 'Mengelola ketersediaan suku cadang mesin di gudang teknik.' },
      { id: 'erp-equipment-db', name: 'Equipment Database', desc: 'Database spesifikasi mesin, manual book, dan parameter operasional.' },
      { id: 'erp-maint-hist', name: 'Maintenance History', desc: 'Riwayat riil seluruh perbaikan mesin dan penggantian part.' },
      { id: 'erp-maint-cost', name: 'Maintenance Cost Analysis', desc: 'Menghitung total biaya pemeliharaan mesin per periode.' }
    ]
  },
  {
    id: 'erp-13',
    categoryNumber: '16',
    title: '13. Quality Management (QA/QC)',
    groupType: 'erp',
    badge: 'ERP MODUL 13',
    items: [
      { id: 'erp-qc-insp', name: 'Quality Inspection', desc: 'Formulir parameter uji pemeriksaan kualitas fisik dan fungsional.' },
      { id: 'erp-qc-control', name: 'Quality Control (QC)', desc: 'Memastikan seluruh output produk memenuhi standar mutu yang ditetapkan.' },
      { id: 'erp-incoming-insp', name: 'Incoming Inspection', desc: 'Memeriksa kualitas mutu bahan baku saat tiba dari supplier.' },
      { id: 'erp-inprocess-insp', name: 'In-process Inspection', desc: 'Memeriksa produk saat tahapan produksi sedang berlangsung (IPQC).' },
      { id: 'erp-final-insp', name: 'Final Inspection', desc: 'Pemeriksaan akhir menyeluruh sebelum barang dikirim ke pembeli.' },
      { id: 'erp-defect-mgmt', name: 'Defect Management', desc: 'Mencatat, mengkategorikan, dan menganalisis jenis kerusakan/cacat.' },
      { id: 'erp-non-conformance', name: 'Non-Conformance Report (NCR)', desc: 'Menerbitkan laporan ketidaksesuaian standar produk.' },
      { id: 'erp-corrective-act', name: 'CAPA (Corrective Action)', desc: 'Tindakan pencegahan dan perbaikan agar masalah mutu tidak berulang.' },
      { id: 'erp-qa-audit', name: 'Quality Audit', desc: 'Pemeriksaan berkala kesesuaian SOP sistem mutu perusahaan.' },
      { id: 'erp-supplier-quality', name: 'Supplier Quality Evaluation', desc: 'Mengevaluasi persentase reject rate dari masing-masing supplier.' }
    ]
  },
  {
    id: 'erp-14',
    categoryNumber: '17',
    title: '14. Product & Engineering',
    groupType: 'erp',
    badge: 'ERP MODUL 14',
    items: [
      { id: 'erp-product-master', name: 'Product Master Data', desc: 'Database pusat data spesifikasi, SKU, barcode, dan atribut produk.' },
      { id: 'erp-plm', name: 'Product Lifecycle Management (PLM)', desc: 'Mengelola siklus hidup produk dari fase desain riset hingga fase discontinue.' },
      { id: 'erp-eng-bom', name: 'Engineering BOM (EBOM)', desc: 'Struktur bahan dan komponen engineering hasil rancangan desain.' },
      { id: 'erp-ecn', name: 'Engineering Change Notice (ECN)', desc: 'Mengelola persetujuan revisi perubahan gambar atau spesifikasi produk.' },
      { id: 'erp-version-ctrl', name: 'Version Control', desc: 'Mengelola riwayat versi rilis formula atau desain produk.' },
      { id: 'erp-prod-config-eng', name: 'Product Configuration Rules', desc: 'Mengatur opsi variasi fitur produk sesuai pesanan khusus.' },
      { id: 'erp-specification', name: 'Technical Specification Vault', desc: 'Menyimpan dokumen lembar spesifikasi teknis dan uji lab.' },
      { id: 'erp-drawing-mgmt', name: 'Drawing Management', desc: 'Pengarsipan file gambar teknik (CAD, PDF) terintegrasi ke BOM.' }
    ]
  },
  {
    id: 'erp-15',
    categoryNumber: '18',
    title: '15. Logistics & Fleet Management',
    groupType: 'erp',
    badge: 'ERP MODUL 15',
    items: [
      { id: 'erp-shipment', name: 'Shipment Order', desc: 'Mengelola dokumen manifest pengiriman barang ke berbagai destinasi.' },
      { id: 'erp-delivery-mgmt', name: 'Delivery Handover', desc: 'Mengelola serah terima barang kepada pihak kurir/driver.' },
      { id: 'erp-fleet-mgmt', name: 'Fleet Management', desc: 'Mengelola armada kendaraan milik perusahaan (truk, blindvan, motor).' },
      { id: 'erp-vehicle-db', name: 'Vehicle Database', desc: 'Pencatatan nomor polisi, masa berlaku STNK, KIR, dan riwayat servis.' },
      { id: 'erp-driver-db', name: 'Driver Database', desc: 'Database pengemudi, masa berlaku SIM, dan alokasi penugasan.' },
      { id: 'erp-log-route', name: 'Route Optimization', desc: 'Mengatur urutan rute titik pengantaran barang secara efisien.' },
      { id: 'erp-freight-cost', name: 'Freight & Toll Cost', desc: 'Mengelola biaya bahan bakar bensin, uang jalan driver, dan tol.' },
      { id: 'erp-tracking', name: 'Live GPS Tracking', desc: 'Melacak posisi armada kendaraan pengiriman secara real-time.' },
      { id: 'erp-transport-cost', name: 'Transportation Cost Analysis', desc: 'Menghitung biaya logistik per kilogram atau per invoice pesanan.' },
      { id: 'erp-pod', name: 'Proof of Delivery (Digital POD)', desc: 'Bukti foto penerimaan barang dan tanda tangan digital penerima.' }
    ]
  },
  {
    id: 'erp-16',
    categoryNumber: '19',
    title: '16. E-Commerce Backend Integration (ERP Module 16)',
    groupType: 'erp',
    badge: 'ERP MODUL 16',
    items: [
      { id: 'erp-ec-catalog', name: 'Omnichannel Product Catalog', desc: 'Katalog produk terpusat yang otomatis tayang ke berbagai web store.' },
      { id: 'erp-ec-store', name: 'Multi Online Store Connect', desc: 'Menghubungkan beberapa portal toko online ke satu database ERP.' },
      { id: 'erp-ec-cart', name: 'Central Shopping Cart Sync', desc: 'Sinkronisasi keranjang belanja multi-device.' },
      { id: 'erp-ec-checkout', name: 'Integrated Checkout Flow', desc: 'Proses penyelesaian pembelian instan yang langsung membentuk SO di ERP.' },
      { id: 'erp-ec-payment', name: 'Online Payment Reconciliation', desc: 'Pencocokan dana masuk dari payment gateway langsung ke GL jurnal kas.' },
      { id: 'erp-ec-orders', name: 'Omnichannel Order Management', desc: 'Mengelola seluruh pesanan toko online dalam satu antrean seragam.' },
      { id: 'erp-ec-acc', name: 'Customer Member Account', desc: 'Pencatatan akun pembeli online dan loyalty poin.' },
      { id: 'erp-ec-promo', name: 'Central Promotion Engine', desc: 'Pemberlakuan promo diskon terpusat di seluruh channel.' },
      { id: 'erp-ec-coupon', name: 'Coupon & Voucher Code System', desc: 'Penerbitan kode voucher belanja yang tervalidasi real-time.' },
      { id: 'erp-ec-shipping', name: 'Courier & 3PL Integration', desc: 'Request pickup dan cetak label resi ekspedisi otomatis dari dashboard.' },
      { id: 'erp-ec-marketplace', name: 'Marketplace Integration', desc: 'Sinkronisasi pesanan & stok ke marketplace (Shopee, Tokopedia, TikTok, dll).' }
    ]
  },
  {
    id: 'erp-17',
    categoryNumber: '20',
    title: '17. POS / Retail (Point of Sale)',
    groupType: 'erp',
    badge: 'ERP MODUL 17',
    items: [
      { id: 'erp-pos-core', name: 'Point of Sale (POS)', desc: 'Aplikasi kasir layar sentuh cepat untuk toko retail, resto, dan outlet.' },
      { id: 'erp-pos-cashier', name: 'Cashier Transaction Management', desc: 'Pengelolaan transaksi tunai, QRIS, kartu debit, dan split bill.' },
      { id: 'erp-pos-store', name: 'Store & Branch Management', desc: 'Mengelola master data toko cabang, harga lokal, dan printer kasir.' },
      { id: 'erp-pos-shift', name: 'Shift & Cash Drawer Control', desc: 'Pencatatan modal kas awal dan rekonsiliasi uang fisik saat tutup shift kasir.' },
      { id: 'erp-pos-cash-mgmt', name: 'Petty Cash Management', desc: 'Mencatat pengeluaran operasional kecil kasir toko.' },
      { id: 'erp-pos-barcode', name: 'Barcode Fast Scanning', desc: 'Pencarian produk instan menggunakan scanner barcode/QR.' },
      { id: 'erp-pos-returns', name: 'Store Returns & Exchange', desc: 'Menangani penukaran barang atau pengembalian dana di toko.' },
      { id: 'erp-pos-loyalty', name: 'Customer Loyalty & Member Points', desc: 'Input nomor member pelanggan untuk penukaran poin promo.' },
      { id: 'erp-pos-promo', name: 'Cashier Promotion Trigger', desc: 'Otomatis menerapkan promo Buy 1 Get 1 atau tebus murah di kasir.' }
    ]
  },
  {
    id: 'erp-18',
    categoryNumber: '21',
    title: '18. Marketing Management',
    groupType: 'erp',
    badge: 'ERP MODUL 18',
    items: [
      { id: 'erp-mktg-campaign', name: 'Marketing Campaign Tracker', desc: 'Mengelola eksekusi kampanye iklan online dan offline.' },
      { id: 'erp-mktg-email', name: 'Email Marketing Broadcast', desc: 'Pengiriman email newsletter dan penawaran tersegmentasi otomatis.' },
      { id: 'erp-mktg-sms-wa', name: 'SMS & WhatsApp Marketing Blast', desc: 'Pemasaran pesan siaran langsung ke nomor WhatsApp pelanggan.' },
      { id: 'erp-mktg-social', name: 'Social Media Management', desc: 'Mengelola jadwal posting dan respons interaksi media sosial.' },
      { id: 'erp-mktg-auto', name: 'Marketing Automation Flow', desc: 'Mengotomatisasi pesan follow-up berkala sesuai alur journey pelanggan.' },
      { id: 'erp-mktg-segment', name: 'Target Audience Segmentation', desc: 'Membuat list target promosi berdasarkan preferensi belanja.' },
      { id: 'erp-mktg-promo', name: 'Program Promosi Terjadwal', desc: 'Mengatur tanggal mulai dan berakhirnya program promo musiman.' },
      { id: 'erp-mktg-coupon', name: 'Voucher & Discount Generator', desc: 'Membuat ribuan kode unik voucher unik untuk kampanye khusus.' },
      { id: 'erp-mktg-analytics', name: 'Campaign Analytics & ROI', desc: 'Mengukur rasio konversi, Return on Ad Spend (ROAS), dan efektivitas iklan.' }
    ]
  },
  {
    id: 'erp-19',
    categoryNumber: '22',
    title: '19. Customer Service & Helpdesk',
    groupType: 'erp',
    badge: 'ERP MODUL 19',
    items: [
      { id: 'erp-cs-ticketing', name: 'Support Ticketing System', desc: 'Mencatat nomor tiket permohonan bantuan dari pelanggan.' },
      { id: 'erp-cs-complaint', name: 'Complaint Resolution', desc: 'Alur investigasi dan penyelesaian komplain pelanggan bertingkat.' },
      { id: 'erp-cs-support', name: 'Omnichannel Customer Support', desc: 'Memberikan bantuan pelanggan dari email, WhatsApp, dan portal web.' },
      { id: 'erp-cs-sla', name: 'SLA (Service Level Agreement)', desc: 'Menetapkan standar batas waktu respon dan penyelesaian tiket bantuan.' },
      { id: 'erp-cs-kb', name: 'Knowledge Base & FAQ', desc: 'Kumpulan artikel panduan solusi mandiri untuk staf dan pelanggan.' },
      { id: 'erp-cs-feedback', name: 'Customer Feedback Rating', desc: 'Mengumpulkan nilai rating bintang kepuasan setelah tiket selesai.' },
      { id: 'erp-cs-warranty', name: 'Warranty Claim Management', desc: 'Mengelola klaim garansi produk dan verifikasi masa berlaku garansi.' },
      { id: 'erp-cs-contract', name: 'Service Contract Management', desc: 'Pengelolaan kontrak pemeliharaan dan perjanjian servis berkala.' }
    ]
  },
  {
    id: 'erp-20',
    categoryNumber: '23',
    title: '20. Document Management System (DMS)',
    groupType: 'erp',
    badge: 'ERP MODUL 20',
    items: [
      { id: 'erp-doc-storage', name: 'Secure Cloud Document Storage', desc: 'Penyimpanan terpusat dokumen digital, SPK, kontrak, dan invoice.' },
      { id: 'erp-doc-version', name: 'Document Versioning', desc: 'Melacak perubahan riwayat revisi draf dokumen dari masa ke masa.' },
      { id: 'erp-doc-approval', name: 'Document Approval Workflow', desc: 'Alur persetujuan dokumen sebelum resmi diterbitkan/diedarkan.' },
      { id: 'erp-doc-sign', name: 'Digital Signature Integration', desc: 'Penandatanganan dokumen elektronik yang sah secara legal.' },
      { id: 'erp-doc-workflow', name: 'Document Routing Workflow', desc: 'Alur sirkulasi dokumen otomatis antar departemen.' },
      { id: 'erp-doc-archive', name: 'Digital Archiving & Retention', desc: 'Pengarsipan dokumen jangka panjang dengan indeks pencarian cepat.' },
      { id: 'erp-doc-access', name: 'Document Access Control', desc: 'Membatasi hak akses membaca/mengunduh/mengubah dokumen rahasia.' }
    ]
  },
  {
    id: 'erp-21',
    categoryNumber: '24',
    title: '21. Workflow & Approval Engine',
    groupType: 'erp',
    badge: 'ERP MODUL 21',
    items: [
      { id: 'erp-appr-matrix', name: 'Approval Matrix Rules', desc: 'Menentukan matriks wewenang siapa yang berhak menyetujui transaksi.' },
      { id: 'erp-multi-level-appr', name: 'Multi-level Approval Hierarchy', desc: 'Persetujuan berjenjang (Staff → Supervisor → Manager → Direktur).' },
      { id: 'erp-wf-notif', name: 'Instant Notification & Alert', desc: 'Pemberitahuan instan via push notif/email saat ada transaksi butuh approval.' },
      { id: 'erp-wf-escalation', name: 'Escalation Trigger', desc: 'Meneruskan approval ke atasan jika melewati batas waktu tanpa respon.' },
      { id: 'erp-wf-auto', name: 'Workflow Automation', desc: 'Menjalankan serangkaian proses otomatis pasca dokumen disetujui.' },
      { id: 'erp-wf-delegation', name: 'Approval Delegation', desc: 'Mengalihkan wewenang persetujuan sementara saat pejabat terkait cuti.' },
      { id: 'erp-wf-audit', name: 'Audit Trail Timestamp', desc: 'Pencatatan forensik siapa yang membuat, mengedit, dan menyetujui data.' }
    ]
  },
  {
    id: 'erp-22',
    categoryNumber: '25',
    title: '22. Reporting & Business Intelligence (BI)',
    groupType: 'erp',
    badge: 'ERP MODUL 22',
    items: [
      { id: 'erp-bi-dashboard', name: 'Executive BI Dashboard', desc: 'Tampilan visual grafik performa bisnis real-time untuk C-Level.' },
      { id: 'erp-bi-kpi', name: 'Company KPI Scorecard', desc: 'Indikator performa operasional dan pencapaian target perusahaan.' },
      { id: 'erp-bi-fin-rep', name: 'Financial Reports (SAK ETAP)', desc: 'Laporan Laba Rugi, Neraca, Arus Kas, dan Perubahan Modal otomatis.' },
      { id: 'erp-bi-sales-rep', name: 'Sales & Revenue Analytics', desc: 'Laporan omzet penjualan per produk, per salesman, dan per wilayah.' },
      { id: 'erp-bi-inv-rep', name: 'Inventory & Stock Aging Report', desc: 'Laporan perputaran persediaan (turnover) dan analisa barang mati (slow-moving).' },
      { id: 'erp-bi-hr-rep', name: 'HR & Productivity Report', desc: 'Laporan rasio biaya gaji terhadap omzet, absensi, dan turnover karyawan.' },
      { id: 'erp-bi-mfg-rep', name: 'Manufacturing OEE Report', desc: 'Laporan efektivitas mesin (OEE), scrap rate, dan efisiensi HPP produksi.' },
      { id: 'erp-bi-proc-rep', name: 'Procurement Spending Report', desc: 'Laporan perbandingan harga beli dan rekap pengeluaran vendor.' },
      { id: 'erp-bi-custom-rep', name: 'Custom Drag-and-Drop Report Builder', desc: 'Membuat laporan kustom sesuai format yang diinginkan dalam 1 klik.' },
      { id: 'erp-bi-data-analytics', name: 'Advanced Data Analytics', desc: 'Analisis korelasi data untuk menemukan celah efisiensi operasional.' },
      { id: 'erp-bi-forecasting', name: 'AI/Statistical Forecasting', desc: 'Memproyeksikan estimasi arus kas dan penjualan masa depan.' }
    ]
  },
  {
    id: 'erp-23',
    categoryNumber: '26',
    title: '23. Security & System Administration',
    groupType: 'erp',
    badge: 'ERP MODUL 23',
    items: [
      { id: 'erp-sec-user-mgmt', name: 'User Account Management', desc: 'Mengelola ratusan akun login pengguna, password policy, dan status aktif.' },
      { id: 'erp-sec-role-mgmt', name: 'Role Management', desc: 'Membuat grup wewenang seperti Admin, Kasir, Akuntan, Gudang, Manager.' },
      { id: 'erp-sec-permission', name: 'Granular Permission Matrix', desc: 'Menentukan hak akses Create, Read, Update, Delete (CRUD) per tombol.' },
      { id: 'erp-sec-auth', name: 'Authentication & 2FA', desc: 'Verifikasi keamanan login dengan Two-Factor Authentication (2FA).' },
      { id: 'erp-sec-access-ctrl', name: 'IP Whitelist & Access Control', desc: 'Membatasi akses sistem hanya dari IP kantor atau perangkat terdaftar.' },
      { id: 'erp-sec-audit-log', name: 'Comprehensive Audit Log', desc: 'Merekam seluruh jejak aktivitas pengguna untuk mencegah manipulasi data.' },
      { id: 'erp-sec-org', name: 'Multi-Entity Organization Tree', desc: 'Pengaturan struktur holding company, divisi, dan departemen.' },
      { id: 'erp-sec-branch', name: 'Multi-Branch Operation', desc: 'Pengelolaan multi cabang dengan pemisahan database atau terpadu.' },
      { id: 'erp-sec-multi-comp', name: 'Multi-Company Support', desc: 'Satu instalasi sistem ERP untuk mengelola beberapa PT/CV berbeda.' },
      { id: 'erp-sec-multi-curr', name: 'Multi-Currency & Exchange Rate', desc: 'Transaksi multi mata uang (USD, SGD, IDR) dengan kurs otomatis.' },
      { id: 'erp-sec-multi-lang', name: 'Multi-Language UI System', desc: 'Antarmuka aplikasi yang mendukung berbagai pilihan bahasa.' }
    ]
  },
  {
    id: 'erp-24',
    categoryNumber: '27',
    title: '24. API & Third-Party Integration',
    groupType: 'erp',
    badge: 'ERP MODUL 24',
    items: [
      { id: 'erp-api-rest', name: 'RESTful API Architecture', desc: 'Endpoints API lengkap untuk komunikasi data dengan aplikasi pihak ketiga.' },
      { id: 'erp-api-webhook', name: 'Event-Driven Webhook', desc: 'Mengirimkan sinyal data instan saat ada transaksi baru berhasil.' },
      { id: 'erp-api-pg', name: 'Payment Gateway Integration', desc: 'Integrasi dengan Midtrans, Xendit, Doku, Tripay, dan QRIS.' },
      { id: 'erp-api-bank', name: 'Direct Bank API Integration', desc: 'Koneksi API mutasi bank BCA, Mandiri, BNI, BRI corporate.' },
      { id: 'erp-api-ecom', name: 'E-Commerce Platform Sync', desc: 'Koneksi langsung ke WooCommerce, Shopify, Magento, atau custom store.' },
      { id: 'erp-api-market', name: 'Marketplace Open API Connector', desc: 'Koneksi ke Shopee Open Platform, Tokopedia API, dan TikTok Shop.' },
      { id: 'erp-api-shipping', name: 'Shipping Courier API', desc: 'Integrasi kurir logistik (JNE, SiCepat, J&T, Lion Parcel, Paxel, dll).' },
      { id: 'erp-api-tax', name: 'Tax System API Integration', desc: 'Integrasi dengan server e-Faktur DJP perpajakan nasional.' },
      { id: 'erp-api-accounting', name: 'Legacy Accounting Software Sync', desc: 'Integrasi dua arah dengan Accurate, Zahir, Jurnal, atau SAP.' },
      { id: 'erp-api-sso', name: 'SSO (Single Sign-On)', desc: 'Login satu pintu menggunakan Google Workspace, Microsoft 365, atau LDAP.' },
      { id: 'erp-api-ext-db', name: 'External Database Connector', desc: 'Koneksi baca-tulis ke server database eksternal SQL Server/Oracle/MySQL.' }
    ]
  },
  {
    id: 'erp-25',
    categoryNumber: '28',
    title: '25. Modul Industri Khusus (Specialized Industry)',
    groupType: 'erp',
    badge: 'ERP MODUL 25',
    items: [
      { id: 'erp-ind-const', name: 'Construction & Contractor', desc: 'Manajemen BOQ/RAB proyek, progres sub-kontraktor, dan site material.' },
      { id: 'erp-ind-health', name: 'Healthcare & Clinic', desc: 'Rekam medis pasien (EMR), antrean klinik, instalasi farmasi, dan lab billing.' },
      { id: 'erp-ind-edu', name: 'Education & School/Campus', desc: 'Penerimaan siswa baru (PPDB), pembayaran SPP, presensi kelas, dan nilai akademik.' },
      { id: 'erp-ind-agri', name: 'Agriculture & Plantation', desc: 'Manajemen perkebunan, jadwal panen, alokasi pupuk, dan operasional traktor/alat.' },
      { id: 'erp-ind-hosp', name: 'Hospitality & Hotel', desc: 'Reservasi kamar hotel, reservasi meja restoran, banquet, dan housekeeping.' },
      { id: 'erp-ind-oil', name: 'Oil & Gas Field Operations', desc: 'Monitoring sumur drilling, aset berat, kepatuhan HSE, dan izin kerja (PTW).' },
      { id: 'erp-ind-fnb', name: 'Food & Beverage (F&B / Central Kitchen)', desc: 'Manajemen resep baku, HPP bahan porsi, dapur pusat, dan masa basi bahan.' },
      { id: 'erp-ind-retail', name: 'Retail Chain & Multi-Store', desc: 'Toko retail waralaba, alokasi inventaris cabang, dan promo loyalty nasional.' },
      { id: 'erp-ind-mining', name: 'Mining & Heavy Equipment', desc: 'Operasional tambang, hauling ritase, utilisasi alat berat, safety K3, dan geologi.' }
    ]
  }
];

const CARE_PLAN_OPTIONS = [
  {
    id: 'care-promo',
    title: 'Paket Promo Jasa / Free Website (Domain Rp300k - Rp500k)',
    desc: 'Lifetime Free Maintenance untuk bug, human/sistem error (selain ubah/tambah fitur baru). Syarat: Server & Domain terkelola / disediakan oleh kami.',
    badge: 'LIFETIME MAINTENANCE'
  },
  {
    id: 'care-onpremise',
    title: 'Paket Beli Putus / On-Premise (Server & Domain Mandiri)',
    desc: 'Server dan domain dikelola secara mandiri oleh pihak klien. Mendapatkan dukungan setup awal + Garansi Pemeliharaan Penuh selama 3 Bulan.',
    badge: 'GARANSI 3 BULAN'
  },
  {
    id: 'care-advance',
    title: 'Paket Advance / Full Custom Creative (Rp1.5jt - Rp5jt+)',
    desc: 'Tampilan kreatif beranimasi tinggi, fitur terlengkap, Lifetime Free Maintenance, Dashboard monitoring trafik pengunjung, akses panel mandiri perpanjang domain, dan sertifikat uji performa & keamanan.',
    badge: 'FULL SUITE & MONITORING'
  }
];

interface POBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const POBuilderModal: React.FC<POBuilderModalProps> = ({ isOpen, onClose }) => {
  const { copied, copy } = useClipboard();

  // Tab State: 'form' (Centang Fitur & Isi Data) vs 'preview' (Draf PO & Kirim)
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');

  // State Data Klien
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [deadline, setDeadline] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [notes, setNotes] = useState('');

  // State Pilihan Fitur & Care Plan
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'web-compro',
    'web-custom-ui',
    'web-speed',
    'ecom-catalog',
    'ecom-cart',
    'erp-gl',
    'erp-ap',
    'erp-ar',
    'erp-stock-mgmt',
    'erp-bi-fin-rep'
  ]);
  const [selectedCarePlan, setSelectedCarePlan] = useState<string>('care-promo');

  // State Pencarian & Filter Group
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeGroupFilter, setActiveGroupFilter] = useState<'all' | 'website' | 'ecommerce' | 'cad' | 'erp'>('all');

  // State Accordion
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'web-dev': true,
    'ecom-dev': true,
    'cad-dev': false,
    'erp-01': true,
    'erp-02': false,
    'erp-05': true,
    'erp-22': true
  });

  // Cegah body scrolling saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAllInCategory = (group: ModuleCategory) => {
    const groupItemIds = group.items.map((i) => i.id);
    const allSelected = groupItemIds.every((id) => selectedFeatures.includes(id));

    if (allSelected) {
      setSelectedFeatures((prev) => prev.filter((id) => !groupItemIds.includes(id)));
    } else {
      setSelectedFeatures((prev) => Array.from(new Set([...prev, ...groupItemIds])));
    }
  };

  const filteredCategories = useMemo(() => {
    return COMPLETE_MODULE_CATALOG.filter((cat) => {
      const matchGroup = activeGroupFilter === 'all' || cat.groupType === activeGroupFilter;
      if (!matchGroup) return false;

      if (!searchKeyword.trim()) return true;

      const keyword = searchKeyword.toLowerCase();
      const matchCatTitle = cat.title.toLowerCase().includes(keyword);
      const matchItems = cat.items.some(
        (i) => i.name.toLowerCase().includes(keyword) || i.desc.toLowerCase().includes(keyword)
      );

      return matchCatTitle || matchItems;
    });
  }, [activeGroupFilter, searchKeyword]);

  const totalCatalogFeatures = useMemo(() => {
    return COMPLETE_MODULE_CATALOG.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const generatedPOTemplate = useMemo(() => {
    const activeCare = CARE_PLAN_OPTIONS.find((c) => c.id === selectedCarePlan);
    const poNumber = `PO/TECH-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
    const formattedDate = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const featureSections = COMPLETE_MODULE_CATALOG.map((group) => {
      const picked = group.items.filter((item) => selectedFeatures.includes(item.id));
      if (picked.length === 0) return null;
      return `\n📌 *${group.title.toUpperCase()}* (${picked.length} Fitur):\n${picked
        .map((p) => `  [✓] ${p.name} — _${p.desc}_`)
        .join('\n')}`;
    })
      .filter(Boolean)
      .join('\n');

    return `================================================
DRAF PRE-ORDER (PO) LAYANAN DIGITAL & SISTEM ERP
No. PO     : ${poNumber}
Tanggal    : ${formattedDate}
Status     : PRE-ORDER SUBMISSION
================================================

👤 *DATA PEMESAN & INSTANSI:*
• Nama Lengkap    : ${clientName.trim() || '(Belum diisi)'}
• Instansi / Usaha: ${companyName.trim() || '(Belum diisi)'}
• No. WhatsApp    : ${phone.trim() || '(Belum diisi)'}
• Estimasi Budget : ${budgetRange.trim() || 'Konsultasi / Standar'}
• Target Selesai  : ${deadline.trim() || 'Sesuai kesepakatan timeline'}

📋 *RINCIAN FITUR & MODUL YANG DIPILIH (${selectedFeatures.length} dari ${totalCatalogFeatures} Fitur):*${featureSections || '\n  (Belum ada fitur yang dicentang)'}

🛡️ *PAKET LAYANAN & PERJANJIAN MAINTENANCE:*
• Opsi Paket : ${activeCare?.title}
• Ketentuan  : ${activeCare?.desc}

📝 *CATATAN / SPESIFIKASI KHUSUS:*
${notes.trim() || 'Tidak ada catatan tambahan.'}

------------------------------------------------
📄 *KETENTUAN INVOICE & PRE-ORDER RESMI:*
1. Draf PO ini mencakup rincian fitur, estimasi harga total, dan timeline pengerjaan yang disepakati.
2. Termasuk Garansi Pemeliharaan (Maintenance SLA), perbaikan bug/error sistem, dan penyediaan akses dashboard pemantauan.
3. Alamat pembayaran dan penerbitan Invoice Resmi akan dikonfirmasi kembali melalui chat WhatsApp ini.
================================================`;
  }, [clientName, companyName, phone, budgetRange, deadline, notes, selectedFeatures, selectedCarePlan, totalCatalogFeatures]);

  const handleSendToWhatsApp = () => {
    const waUrl = `https://wa.me/6285141220521?text=${encodeURIComponent(generatedPOTemplate)}`;
    window.open(waUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden select-none"
      >
        {/* Backdrop Gelap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071b2f]/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative z-10 w-full max-w-4xl bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] rounded-[24px] sm:rounded-[36px] shadow-[8px_8px_0px_#0f172a] sm:shadow-[16px_16px_0px_#0f172a] overflow-hidden my-auto flex flex-col h-[90vh]"
        >
          {/* Header Pop Up */}
          <div className="flex items-center justify-between p-3.5 sm:p-5 bg-[#071b2f] text-white border-b-3 sm:border-b-4 border-[#0f172a] shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 rounded-xl bg-[#fde047] text-[#0f172a] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-mono font-black text-[#fde047] uppercase tracking-wider">
                    PO BUILDER SYSTEM
                  </span>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-[#38bdf8] text-[#0f172a] border border-[#0f172a]">
                    {selectedFeatures.length} DIPILIH
                  </span>
                </div>
                <h3 className="text-sm sm:text-xl font-black text-white leading-tight mt-0.5">
                  Formulir Kebutuhan Jasa &amp; Pre-Order
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-[#fffdf5] hover:bg-[#fee2e2] text-[#0f172a] hover:text-[#dc2626] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
              title="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation Bar (Sangat Jelas & Mudah Diganti) */}
          <div className="flex items-center border-b-2 border-[#0f172a] bg-[#faeed1] p-1.5 gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-mono font-black text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-[#fde047] text-[#0f172a] border-[#0f172a] shadow-[2px_2px_0px_#0f172a]'
                  : 'bg-transparent text-[#64748b] border-transparent hover:bg-white/40'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-[#0284c7]" />
              <span>1. Centang Fitur &amp; Data ({selectedFeatures.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-mono font-black text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-[#0284c7] text-white border-[#0f172a] shadow-[2px_2px_0px_#0f172a]'
                  : 'bg-transparent text-[#64748b] border-transparent hover:bg-white/40'
              }`}
            >
              <FileText className="w-4 h-4 text-[#fde047]" />
              <span>2. Lihat Draf PO &amp; Kirim WA</span>
            </button>
          </div>

          {/* =========================================================================
              TAB 1: CENTANG FITUR & PENGISIAN DATA KLIEN (FULL WIDTH & LEGA DI-SCROLL)
             ========================================================================= */}
          {activeTab === 'form' && (
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 bg-[#fffdf5] text-[#0f172a]">
              
              {/* Search & Quick Filters */}
              <div className="p-3 bg-[#fff9d4] rounded-2xl border-2 border-[#0f172a] space-y-2 shadow-[2px_2px_0px_#0f172a]">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Cari modul (contoh: General Ledger, WMS, CAD, Payroll, SAK ETAP, API)..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] text-xs font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                  />
                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={() => setSearchKeyword('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-[#64748b]"
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                  {[
                    { id: 'all', label: 'Semua (28 Kategori)' },
                    { id: 'website', label: 'Website (8)' },
                    { id: 'ecommerce', label: 'E-Commerce (7)' },
                    { id: 'cad', label: 'CAD & 3D (7)' },
                    { id: 'erp', label: 'ERP 25 Modul PDF' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveGroupFilter(tab.id as 'all' | 'website' | 'ecommerce' | 'cad' | 'erp')}
                      className={`px-3 py-1 rounded-xl text-[11px] font-mono font-black border-2 transition-all shrink-0 cursor-pointer ${
                        activeGroupFilter === tab.id
                          ? 'bg-[#0284c7] text-white border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a]'
                          : 'bg-[#fffdf5] hover:bg-[#faeed1] text-[#0f172a] border-[#0f172a]/30'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Klien */}
              <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] space-y-3">
                <div className="text-xs font-mono font-black text-[#0f172a] uppercase flex items-center justify-between border-b border-[#0f172a]/15 pb-2">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#0284c7]" />
                    <span>1. DATA IDENTITAS PEMESAN:</span>
                  </span>
                  <span className="text-[10px] text-[#15803d] font-bold">Wajib Diisi</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#475569] block mb-0.5">
                      NAMA LENGKAP:
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3 py-2 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] text-xs font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#475569] block mb-0.5">
                      NAMA INSTANSI / BISNIS:
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Contoh: PT. Maju Bersama / CV / Retail"
                      className="w-full px-3 py-2 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] text-xs font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#475569] block mb-0.5">
                      NO. WHATSAPP AKTIF:
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-3 py-2 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] text-xs font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#475569] block mb-0.5">
                      ESTIMASI BUDGET / ANGGARAN:
                    </label>
                    <input
                      type="text"
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      placeholder="Contoh: Rp300rb - Rp5jt+ / Konsultasi"
                      className="w-full px-3 py-2 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] text-xs font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                    />
                  </div>
                </div>
              </div>

              {/* Checklist Seluruh Kategori & Submodul */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono font-black text-[#0f172a] uppercase pt-1">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#0284c7]" />
                    <span>2. CENTANG KEBUTUHAN MODUL &amp; FITUR:</span>
                  </span>
                  <span className="text-[10px] text-[#8c6239] font-bold">
                    {filteredCategories.length} Kategori
                  </span>
                </div>

                <div className="space-y-2">
                  {filteredCategories.map((group) => {
                    const isExpanded = !expandedCategories[group.id];
                    const selectedCount = group.items.filter((i) =>
                      selectedFeatures.includes(i.id)
                    ).length;

                    return (
                      <div
                        key={group.id}
                        className="rounded-2xl border-2 border-[#0f172a] bg-[#fffdf5] overflow-hidden shadow-[2px_2px_0px_#0f172a]"
                      >
                        <div
                          onClick={() => toggleCategory(group.id)}
                          className="flex items-center justify-between p-3 bg-[#faeed1]/80 hover:bg-[#faeed1] cursor-pointer transition-colors border-b border-[#0f172a]/15"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-[#0f172a] text-white">
                              {group.categoryNumber}
                            </span>
                            <span className="text-xs sm:text-sm font-black text-[#0f172a] truncate">
                              {group.title}
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#fde047] border border-[#0f172a]">
                              {selectedCount}/{group.items.length}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                selectAllInCategory(group);
                              }}
                              className="text-[10px] font-mono font-bold text-[#0284c7] hover:underline px-2 py-0.5 rounded bg-[#fffdf5] border border-[#0f172a]/30"
                            >
                              {selectedCount === group.items.length ? 'Batal' : 'Pilih Semua'}
                            </button>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-[#0f172a]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#0f172a]" />
                            )}
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="p-3 grid grid-cols-1 gap-2 bg-[#fffdf5]">
                            {group.items.map((item) => {
                              const isChecked = selectedFeatures.includes(item.id);
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => toggleFeature(item.id)}
                                  className={`flex items-start gap-2.5 p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                                    isChecked
                                      ? 'bg-[#fde047]/70 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]'
                                      : 'bg-[#fff9d4]/30 hover:bg-[#fff9d4] border-[#0f172a]/20'
                                  }`}
                                >
                                  {isChecked ? (
                                    <CheckSquare className="w-4 h-4 text-[#0f172a] shrink-0 mt-0.5" />
                                  ) : (
                                    <Square className="w-4 h-4 text-[#94a3b8] shrink-0 mt-0.5" />
                                  )}
                                  <div className="text-left">
                                    <div className="text-xs font-black text-[#0f172a] leading-tight">
                                      {item.name}
                                    </div>
                                    <div className="text-[11px] text-[#475569] font-medium leading-relaxed mt-0.5">
                                      {item.desc}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Care Plan Selection */}
              <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] space-y-2">
                <div className="text-xs font-mono font-black text-[#0f172a] uppercase flex items-center gap-1.5 border-b border-[#0f172a]/15 pb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#15803d]" />
                  <span>3. PILIHAN KETENTUAN CARE PLAN &amp; MAINTENANCE:</span>
                </div>

                <div className="space-y-2">
                  {CARE_PLAN_OPTIONS.map((plan) => {
                    const isSelected = selectedCarePlan === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedCarePlan(plan.id)}
                        className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#fde047] border-[#0f172a] shadow-[2px_2px_0px_#0f172a]'
                            : 'bg-[#fffdf5] hover:bg-[#fff9d4] border-[#0f172a]/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#0f172a]">{plan.title}</span>
                          <span className="text-[9px] font-mono font-black px-1.5 py-0.5 rounded bg-[#0f172a] text-white">
                            {plan.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#475569] font-medium leading-relaxed mt-0.5">
                          {plan.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Catatan Khusus */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-black text-[#0f172a] uppercase block">
                  4. CATATAN / PERSYARATAN TAMBAHAN:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tuliskan kebutuhan khusus lainnya jika ada..."
                  className="w-full px-3 py-2 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] text-xs font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                />
              </div>

            </div>
          )}

          {/* =========================================================================
              TAB 2: DRAF TEMPLATE PRE-ORDER (PO) RESMI (RAPI & LEGA DI HP & DESKTOP)
             ========================================================================= */}
          {activeTab === 'preview' && (
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 bg-[#fffdf5] flex flex-col justify-between">
              <div className="space-y-2 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-[#0f172a] uppercase flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#0284c7]" />
                    <span>DRAF TEMPLATE PRE-ORDER (PO):</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#15803d] font-black bg-[#dcfce7] px-2.5 py-0.5 rounded-lg border border-[#16a34a]">
                    SIAP DIKIRIM
                  </span>
                </div>

                {/* Box Teks PO dengan word-wrap agar di HP tidak terpotong */}
                <div className="flex-1 rounded-2xl bg-[#071b2f] border-2 border-[#0f172a] p-4 text-[#f8fafc] font-mono text-xs sm:text-sm leading-relaxed overflow-y-auto select-text shadow-inner">
                  <pre className="whitespace-pre-wrap break-words font-mono">{generatedPOTemplate}</pre>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              STICKY BOTTOM ACTION BAR (SELALU TERLIHAT DI HP MAUPUN DESKTOP)
             ========================================================================= */}
          <div className="p-3 sm:p-4 bg-[#fff9d4] border-t-2 sm:border-t-3 border-[#0f172a] flex items-center justify-between gap-2.5 shrink-0">
            {activeTab === 'form' ? (
              <>
                <button
                  type="button"
                  onClick={() => setSelectedFeatures([])}
                  className="px-3 py-2.5 rounded-xl bg-[#fffdf5] hover:bg-[#fee2e2] text-[#0f172a] border-2 border-[#0f172a] text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
                  title="Reset Semua Centang"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-2xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] transition-all cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat Draf PO ({selectedFeatures.length} Fitur)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="px-3.5 py-3 rounded-xl bg-[#fffdf5] hover:bg-[#faeed1] text-[#0f172a] border-2 border-[#0f172a] text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Edit Fitur</span>
                </button>

                <button
                  type="button"
                  onClick={() => copy(generatedPOTemplate)}
                  className="px-3.5 py-3 rounded-xl bg-[#fffdf5] hover:bg-[#faeed1] text-[#0f172a] border-2 border-[#0f172a] text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_#0f172a]"
                >
                  {copied ? <Check className="w-4 h-4 text-[#15803d]" /> : <Copy className="w-4 h-4 text-[#0284c7]" />}
                  <span className="hidden sm:inline">{copied ? 'Tersalin!' : 'Salin Teks'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] transition-all cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim ke WhatsApp</span>
                </button>
              </>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
