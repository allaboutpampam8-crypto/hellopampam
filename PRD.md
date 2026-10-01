# Product Requirement Document (PRD): Personal Developer Portfolio Website

## 1. Overview & Ringkasan Produk

### 1.1 Latar Belakang
Website portofolio pribadi yang ringkas, elegan, dan *to the point*. Website ini dirancang khusus untuk menampilkan profil profesional serta karya-karya aplikasi web nyata yang telah dibangun sebelumnya, mulai dari aplikasi enterprise, automasi operasional, simulator regulasi finansial & pajak, hingga landing page interaktif multimedia.

### 1.2 Tujuan Produk (Objectives)
1. **Personal Branding**: Memperkenalkan kapabilitas teknis (*Full-Stack Web Development, System Automation, & Financial Tools*).
2. **Koleksi Portofolio Terkurasi**: Memamerkan proyek-proyek unggulan yang fungsional, menyelesaikan masalah riil (*problem-solving*), dan berarsitektur modern.
3. **Konversi & Outreach**: Memudahkan calon klien, rekan kolaborator, atau rekruter untuk menghubungi pemilik portofolio secara langsung.

---

## 2. Target Audiens
1. **Recruiter & Hiring Manager**: Menilai kapabilitas teknis, standar arsitektur kode, dan kompleksitas proyek yang pernah dibuat.
2. **Klien / Stakeholder Bisnis**: Mencari bukti portofolio solusi otomatisasi, sistem web internal (dashboard, HR/Finance tools), atau website interaktif.
3. **Komunitas Developer**: Rekan sejawat yang tertarik dengan teknologi dan pendekatan engineering yang digunakan.

---

## 3. Struktur & Arsitektur Halaman (Single-Page Experience)

Struktur website dirancang ringkas (clean, minimalis, dan tidak berbelit-belit):

```
+-----------------------------------------------------------+
| [Header / Navbar] Logo/Nama | Projects | Skills | Contact |
+-----------------------------------------------------------+
|                                                           |
| 1. HERO & PERKENALAN                                      |
|    - Headline nama & peran (Full-Stack Developer)         |
|    - Bio ringkas 2-3 kalimat                              |
|    - Status ketersediaan (Available for Projects/Hire)    |
|    - CTA: "Lihat Karya" & "Hubungi Saya"                  |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
| 2. FEATURED PORTFOLIO (Pameran Karya Unggulan)            |
|    Filter Kategori: [Semua] [Enterprise] [Finance/Tax] [Creative]
|    - Card Project 1: MeetThink (Meeting Management System)|
|    - Card Project 2: CatatUang (Personal Finance Tracker) |
|    - Card Project 3: PPh 21 Simulator & Tax Engine        |
|    - Card Project 4: RSP Music & Wedding Entertainment    |
|    - Card Project 5: Automated Employee Account Update    |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
| 3. CORE TECH STACK & EXPERTISE                            |
|    - Framework: Next.js, React, TypeScript                |
|    - Backend & DB: Prisma ORM, PostgreSQL, Supabase, GAS  |
|    - UI & Styling: Tailwind CSS, Motion/Lenis, Lucide     |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
| 4. CONTACT & FOOTER                                       |
|    - Email, LinkedIn, GitHub link                         |
|    - Simple quick message/mail-to button                  |
+-----------------------------------------------------------+
```

---

## 4. Daftar Proyek yang Ditampilkan (Data Rinci Portofolio)

Berdasarkan proyek yang sudah Anda bangun di workspace:

| Proyek | Kategori | Ringkasan Nilai / Solusi | Tech Stack Utama |
|---|---|---|---|
| **MeetThink** | Enterprise App | Sistem manajemen rapat terpadu dengan alur persetujuan berjenjang (*multi-level approval*), booking ruangan anti-bentrok, dan presensi QR-code real-time. | Next.js, TypeScript, Prisma, NextAuth, PostgreSQL, Tailwind |
| **CatatUang** | Financial App | Aplikasi keuangan pribadi bulanan dengan pelacakan *cashflow*, grafik interaktif distribusi pengeluaran, dan manajemen multi-rekening/dompet. | Next.js, React 19, Prisma ORM, Recharts, Lucide React |
| **PPh 21 Simulator** | Tax Engine / GovTech | Simulator kalkulasi pajak PPh 21 berbasis regulasi TER & UU HPP terbaru dengan perbandingan skema Gross, Gross-Up, dan Nett impact. | Next.js, React, TypeScript, Tailwind CSS, Tax Engine Library |
| **RSP Music Entertainment** | Creative / Landing Page | Website agensi musik & wedding entertainment dengan *smooth scrolling* (Lenis), audio player interaktif melayang, dan galeri video preview. | Next.js, Tailwind CSS, Lenis Scroll, Supabase, Lucide |
| **Sistem Update Rekening Pegawai** | Automation & Ops | Web app pengajuan pembaruan rekening pegawai terintegrasi langsung dengan Google Sheets & Google Drive (anti-typo NRP & auto-fill). | Google Apps Script, HTML5/CSS3, Google Drive API |

---

## 5. Fitur & Komponen Detail

### 5.1 Hero Section (Perkenalan)
* **Elemen & Visual**:
  * **Foto Profil**: Foto portrait profesional berlatar transparan (`/public/profile.png`), ditampilkan dengan styling modern (misalnya bingkai aksen glow/gradient, circular/rounded card, atau cutout silhouette yang elegan di samping perkenalan).
  * Badge status: *"Open for new opportunities"* (dengan animasi dot hijau berdenyut).
  * Headline nama profesional & spesialisasi (*Full-Stack Developer & Solutions Engineer*).
  * Deskripsi ringkas mengenai fokus pembuatan web apps yang fungsional, rapi, dan berorientasi efisiensi bisnis.
  * Quick links: Resume/CV download, GitHub, LinkedIn, Email.

### 5.2 Portfolio Showcase (Koleksi Proyek)
* **Interaktivitas Card**:
  * Thumbnail mockup / preview visual beresolusi tajam.
  * Tag teknologi (*pill badge* berwarna sesuai tech stack).
  * Tombol aksi: **"Live Demo"** (jika ada tautan) dan **"Detail / Case Study"** modal pop-up.
  * Modal Case Study: Menampilkan tantangan, solusi yang dibangun, fitur kunci, dan tangkapan layar.

### 5.3 Filter & Kategori Cepat
* Pengunjung dapat menyaring proyek berdasarkan tipe:
  * **All Projects**
  * **Enterprise & Web Apps**
  * **Fintech & Automation**
  * **Creative & Showcase**

### 5.4 Dark Mode & Modern Minimalist Aesthetic
* Tema default: Dark theme elegan (mirip nuansa modern developer portfolio seperti Vercel / Linear / Raycast).
* Sentuhan aksen warna cyan/emerald untuk nuansa teknologi tinggi dan profesional.

---

## 6. Spesifikasi Teknis yang Direkomendasikan

* **Framework**: Next.js 15+ (App Router) dengan TypeScript.
* **Styling**: Tailwind CSS untuk styling yang gesit, konsisten, dan mobile-friendly.
* **Animasi & Interaksi**: Framer Motion atau Tailwind CSS transitions untuk animasi masuk (*fade in*, *hover lift* card proyek).
* **Komponen Ikon**: Lucide React.
* **Performa**: Static Site Generation (SSG) agar loading mendekati instan (<1 detik) dan skor Lighthouse 95+.

---

## 7. Roadmap Pelaksanaan

| Fase | Kegiatan | Luaran |
|---|---|---|
| **Fase 1** | Finalisasi data profil & kurasi teks proyek | Dokumen data profil lengkap |
| **Fase 2** | Setup project Next.js & desain struktur layout | Template & arsitektur proyek |
| **Fase 3** | Implementasi Hero, Project Cards, dan Modal Case Study | Halaman utama fungsional |
| **Fase 4** | Integrasi kontak, optimasi responsif (HP/Tablet/Desktop) | Web siap pakai |
| **Fase 5** | Build & Deployment (Vercel / GitHub Pages) | Website online |
