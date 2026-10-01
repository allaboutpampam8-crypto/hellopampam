export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "enterprise" | "fintech" | "creative" | "automation";
  categoryLabel: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: string;
  status: "Completed" | "In Production" | "Internal Tool" | "Coming Soon";
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "hris-mobile",
    title: "Integrated HRIS & Employee Self-Service",
    tagline: "Sistem HRIS Terpadu dengan Aplikasi Mobile Karyawan",
    category: "enterprise",
    categoryLabel: "Enterprise & HR Tech",
    description:
      "Platform HR Information System (HRIS) komprehensif yang dirancang untuk memodernisasi manajemen SDM perusahaan. Terintegrasi langsung dengan aplikasi mobile karyawan untuk memudahkan absensi kehadiran digital (GPS/Selfie), akses mandiri slip gaji bulanan secara privat, pengajuan izin/cuti, serta portal pengumuman dan berita resmi perusahaan.",
    highlights: [
      "Aplikasi Mobile Karyawan (ESS) untuk absensi kehadiran real-time berbasis geolokasi & selfie",
      "Pengecekan dan unduh slip gaji digital terenkripsi (Digital Payslip)",
      "Portal informasi, kebijakan internal, & pengumuman resmi perusahaan",
      "Manajemen data induk kepegawaian & integrasi alur persetujuan izin/cuti terpusat"
    ],
    techStack: ["React Native / Flutter", "Next.js Admin Portal", "TypeScript", "PostgreSQL", "Cloud Storage"],
    metrics: "Paperless HR operations & seamless mobile employee experience",
    status: "Coming Soon",
    imageUrl: "/projects/hris.png"
  },
  {
    id: "meetthink",
    title: "MeetThink",
    tagline: "Enterprise Meeting Management & Room Booking System",
    category: "enterprise",
    categoryLabel: "Enterprise App",
    description:
      "Sistem manajemen rapat terpadu berskala korporat yang dirancang untuk mengelola pemesanan ruangan rapat dengan deteksi bentrok jadwal otomatis, alur persetujuan berjenjang (multi-level approval), presensi QR-code real-time, pencatatan notulensi resmi, serta pelacakan action items terdelegasi.",
    highlights: [
      "Deteksi bentrok jadwal & pemesanan ruangan berbasis kalender dinamis",
      "Multi-level approval workflow dengan audit trail lengkap",
      "Sistem absensi mandiri via QR Code dengan window check-in otomatis",
      "Pencatatan notulensi dan pelacakan delegasi tugas (Action Items)",
      "Role-Based Access Control (Super Admin, Approver, Organizer, User)"
    ],
    techStack: ["Next.js", "TypeScript", "Prisma ORM", "NextAuth", "PostgreSQL", "Tailwind CSS"],
    metrics: "Anti-conflict scheduling & multi-role workflows",
    status: "Completed",
    imageUrl: "/projects/meetthink.png",
    demoUrl: "#"
  },
  {
    id: "catatuang",
    title: "CatatUang (Finance Tracker)",
    tagline: "Personal Cashflow & Monthly Budgeting Web App",
    category: "fintech",
    categoryLabel: "Fintech & Finance",
    description:
      "Aplikasi web pencatatan keuangan pribadi bulanan yang responsif dan cepat. Membantu pengguna memonitor pemasukan, pengeluaran, batas anggaran (budget limits), serta visualisasi interaktif pergerakan saldo dari berbagai dompet/rekening bank.",
    highlights: [
      "Dashboard rekapitulasi cashflow, net savings, dan tren bulanan",
      "Visualisasi interaktif distribusi pengeluaran dengan Donut Chart",
      "Peringatan batas anggaran per kategori (Budget Threshold Alerts)",
      "Multi-wallet & multi-bank balance management terpadu"
    ],
    techStack: ["Next.js", "React 19", "Prisma ORM", "Recharts", "Tailwind CSS", "Lucide React"],
    metrics: "Interactive charts & instant cashflow computation",
    status: "Completed",
    imageUrl: "/projects/catatuang.png",
    demoUrl: "https://catatuang-ten.vercel.app/demo"
  },
  {
    id: "pph21-simulator",
    title: "PPh 21 Simulator & Tax Engine",
    tagline: "Interactive Indonesian Income Tax Calculation Engine",
    category: "fintech",
    categoryLabel: "GovTech / Tax Engine",
    description:
      "Simulator perhitungan Pajak Penghasilan Pasal 21 (PPh 21) komprehensif berdasarkan skema regulasi terbaru (TER PP 58/2023 & Tarif Progresif UU HPP). Mampu membandingkan dampak finansial skema Gross, Gross-Up, dan Netto secara presisi.",
    highlights: [
      "Implementasi regulasi pajak TER (Tarif Efektif Rata-Rata) & UU HPP",
      "Simulasi komparatif skema pembebanan pajak: Gross, Gross-Up, & Nett",
      "Rincian hitungan matematis transparan dan audit trail formula pajak",
      "Dukungan berbagai status PTKP (TK/0 hingga K/3) dan komponen tunjangan"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Custom Tax Engine"],
    metrics: "100% compliant dengan regulasi TER & UU HPP",
    status: "Completed",
    imageUrl: "/projects/pph21.png",
    demoUrl: "https://pph21-simulator.vercel.app/"
  },
  {
    id: "rsp-music",
    title: "RSP Music Entertainment",
    tagline: "Interactive Wedding Music & Live Band Agency Portal",
    category: "creative",
    categoryLabel: "Creative & Media",
    description:
      "Portal pameran layanan musik live, wedding band, dan entertainment agensi berkelas. Dirancang dengan nuansa sinematik gelap, smooth scrolling berkinerja tinggi, pemutar audio melayang, dan katalog video pertunjukan.",
    highlights: [
      "Pengalaman navigasi modern dengan ultra-smooth scrolling (Lenis)",
      "Floating audio music player interaktif dengan live playback",
      "Katalog paket pertunjukan, kurasi testimoni, & galeri video performa",
      "Desain responsif dengan tipografi elegan bernuansa premium"
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Lenis Scroll", "Supabase", "Lucide React"],
    metrics: "60 FPS smooth animation & responsive media player",
    status: "Completed",
    imageUrl: "/projects/rsp-music.png",
    demoUrl: "https://rsp-music.vercel.app/"
  },
  {
    id: "update-rekening",
    title: "Employee Bank Account Updater",
    tagline: "Automated Operational Web App & Document Processing",
    category: "automation",
    categoryLabel: "Internal Tool & Ops",
    description:
      "Sistem form pengajuan pembaruan nomor rekening pegawai oleh PIC Regional ke Tim Payroll Pusat. Terintegrasi langsung secara real-time dengan Google Sheets dan Google Drive untuk validasi data otomatis dan arsip bukti fisik.",
    highlights: [
      "Autofill data otomatis & anti-typo saat PIC menginput NRP pegawai",
      "Validasi nomor rekening ganda dan penamaan bank",
      "Upload bukti fisik (buku tabungan) langsung terintegrasi ke Google Drive",
      "Integrasi tanpa server pihak ketiga (Serverless Apps Script & Sheet DB)"
    ],
    techStack: ["Google Apps Script", "HTML5", "CSS3 / Modern UI", "Google Drive API", "Google Sheets"],
    metrics: "Zero-error payroll data sync & cloud storage pipeline",
    status: "Internal Tool",
    imageUrl: "/projects/update-rekening.png",
    demoUrl: "#"
  }
];

export const SKILLS = [
  {
    category: "Problem Solving & Inovasi",
    items: [
      "Workplace Automation",
      "Process Bottleneck Optimization",
      "Internal Tools Design",
      "Perhitungan Pajak & Payroll Engine",
      "Paperless Workflow & Approvals"
    ]
  },
  {
    category: "Teknologi & Framework",
    items: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Google Apps Script (Sheets/Drive API)"
    ]
  },
  {
    category: "Data & Integrasi",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "Supabase",
      "Recharts Data Visualization",
      "RESTful API Integration"
    ]
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeText: string;
  description: string;
  domainImpact: string;
  highlights: string[];
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "bnsp-hrm",
    title: "Human Resources Management",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    badgeText: "Certified Professional",
    description:
      "Sertifikasi kompetensi nasional yang memvalidasi keahlian menyeluruh dalam pengelolaan tata kelola SDM, kompensasi & benefit (payroll), hubungan industrial, serta kepatuhan regulasi ketenagakerjaan.",
    domainImpact:
      "Memastikan setiap sistem HRIS, simulator pajak PPh 21, dan alur administrasi dibangun berdasarkan regulasi ketenagakerjaan dan standar operasional HR yang valid.",
    highlights: [
      "Struktur & Skala Upah serta Penggajian (Payroll)",
      "Kepatuhan Regulasi Ketenagakerjaan Indonesia",
      "Perencanaan & Manajemen Operasional SDM",
      "Standardisasi Proses Administrasi Karyawan"
    ]
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001:2022 Internal Auditor Training Course",
    issuer: "Information Security Management System (ISMS)",
    badgeText: "Internal Auditor Certified",
    description:
      "Sertifikasi pemahaman dan audit Sistem Manajemen Keamanan Informasi (SMKI) berbasis standar internasional terbaru ISO/IEC 27001:2022, mencakup kontrol keamanan data, manajemen risiko TI, dan audit kepatuhan.",
    domainImpact:
      "Menjamin aplikasi internal dan otomatisasi alur kerja dirancang dengan memprioritaskan kerahasiaan data sensitif (Confidentiality, Integrity, & Availability) serta kepatuhan audit korporat.",
    highlights: [
      "Prinsip Keamanan Data Sensitif (Data Karyawan & Payroll)",
      "Audit Trail, Kontrol Hak Akses (RBAC) & Proteksi Rekening",
      "Identifikasi & Mitigasi Risiko Keamanan Informasi",
      "Penerapan Kontrol Keamanan ISO/IEC 27001:2022"
    ]
  }
];
