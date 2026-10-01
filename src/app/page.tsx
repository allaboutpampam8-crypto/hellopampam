"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Briefcase,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Mail,
  Sparkles,
  ChevronRight,
  X,
  Laptop,
  Terminal,
  Cpu,
  ShieldCheck,
  Award,
  FileCheck2,
  Menu
} from "lucide-react";
import { PROJECTS, SKILLS, CERTIFICATIONS, Project } from "@/data/projects";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Close modal on Escape key and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setIsMobileMenuOpen(false);
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "Semua Proyek" },
    { id: "enterprise", label: "Enterprise & SaaS" },
    { id: "fintech", label: "Fintech & Tax" },
    { id: "creative", label: "Creative Media" },
    { id: "automation", label: "Internal Ops" },
  ];

  return (
    <div className="relative min-h-screen text-neutral-100 selection:bg-emerald-500 selection:text-black">
      {/* Background Glow Orbs & Ambient Grids */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-[35%] right-[-5%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Floating Navbar */}
      <header className="sticky top-4 z-40 max-w-5xl mx-auto px-4">
        <nav className="flex items-center justify-between px-5 sm:px-6 py-3 rounded-full border border-neutral-800/90 bg-neutral-900/80 backdrop-blur-xl shadow-xl shadow-black/50">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center font-bold text-neutral-950 text-xs shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              SP
            </div>
            <span className="font-semibold text-sm tracking-tight text-neutral-200 group-hover:text-white transition-colors">
              Setyo Pambudi
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-7 text-xs font-medium text-neutral-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              Tentang
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Portofolio
            </a>
            <a href="#certifications" className="hover:text-emerald-400 transition-colors">
              Sertifikasi
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Tech Stack
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hellopampamss@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-950 hover:bg-emerald-400 hover:text-neutral-950 shadow-sm transition-all active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Kontak</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-2 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-xl shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-emerald-400 hover:bg-neutral-800/60 transition-colors"
            >
              Tentang
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-emerald-400 hover:bg-neutral-800/60 transition-colors"
            >
              Portofolio
            </a>
            <a
              href="#certifications"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-emerald-400 hover:bg-neutral-800/60 transition-colors"
            >
              Sertifikasi
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-emerald-400 hover:bg-neutral-800/60 transition-colors"
            >
              Tech Stack
            </a>

            <div className="pt-2 border-t border-neutral-800/80 flex items-center gap-3 px-3">
              <a
                href="https://www.linkedin.com/in/setyopambudi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <span className="text-neutral-700">•</span>

              <a
                href="https://github.com/allaboutpampam8-crypto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-10 sm:pt-14 pb-24 space-y-28 sm:space-y-32">
        {/* HERO SECTION */}
        <section id="about" className="relative pt-4 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Teks Perkenalan */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Corporate Innovator & Practical Problem Solver
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
                  Halo, Saya{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    Setyo Pambudi
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl font-semibold text-neutral-200">
                  Turning Workplace Bottlenecks into Useful Digital Tools
                </p>
              </div>

              <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
                Sehari-hari berkutat di dinamika operasional korporat. Saya melihat celah proses
                kerja yang memakan waktu, lalu berinisiatif membangun solusi dan alat bantu digital
                mandiri yang praktis, berguna, dan langsung mempermudah pekerjaan tim.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>Lihat Inovasi & Karya</span>
                </a>

                <a
                  href="mailto:hellopampamss@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-200 font-medium text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hubungi Saya</span>
                </a>

                {/* Social Quick Links (LinkedIn & GitHub) */}
                <div className="flex items-center justify-center gap-2.5 pt-1 sm:pt-0">
                  <a
                    href="https://www.linkedin.com/in/setyopambudi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 text-neutral-300 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
                    aria-label="LinkedIn Setyo Pambudi"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>

                  <a
                    href="https://github.com/allaboutpampam8-crypto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
                    aria-label="GitHub Setyo Pambudi"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-neutral-400 border-t border-neutral-800/80">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-[11px] sm:text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>BNSP HR & ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-[11px] sm:text-xs">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Workflow Automation</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-[11px] sm:text-xs">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Pragmatic Builder</span>
                </div>
              </div>
            </div>

            {/* Foto Profil dengan Efek Modern Card & Glow */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-700" />

                {/* Container Gambar */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800/80 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 shadow-2xl flex items-end justify-center">
                  <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                  
                  <Image
                    src="/profile.png"
                    alt="Setyo Pambudi"
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500 ease-out"
                    priority
                  />

                  {/* Glassmorphism Badge Bawah Foto */}
                  <div className="absolute bottom-3 inset-x-3 p-2.5 sm:p-3 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 flex items-center justify-between z-10">
                    <div>
                      <p className="text-xs font-semibold text-white">Setyo Pambudi</p>
                      <p className="text-[11px] text-emerald-400">Corporate Problem Solver</p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Solusi & Inovasi Nyata</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Alat Digital & Karya Terapan
              </h2>
              <p className="text-neutral-400 text-sm max-w-xl">
                Bukan sekadar latihan kode, melainkan aplikasi yang lahir dari kebutuhan nyata di tempat kerja — menyelesaikan birokrasi berbelit, memotong waktu administrasi, dan mengotomasi alur data.
              </p>
            </div>

            {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto -mx-1 px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                    selectedCategory === cat.id
                      ? "bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-neutral-800/90 bg-gradient-to-b from-neutral-900/50 to-neutral-950/60 hover:from-neutral-900/80 hover:to-neutral-900/90 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      {project.categoryLabel}
                    </span>
                    {project.status === "Coming Soon" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-900/90 px-2.5 py-0.5 rounded-full border border-neutral-800">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Mockup Preview Box */}
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col group-hover:border-neutral-700 transition-colors shadow-inner">
                    {/* Simulated Browser Top Bar */}
                    <div className="h-7 px-3 bg-neutral-900/90 border-b border-neutral-800/80 flex items-center justify-between z-10 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950/70 px-2 py-0.5 rounded border border-neutral-800">
                        {project.id}.internal.app
                      </span>
                    </div>

                    {/* Preview Image / Placeholder */}
                    <div className="relative flex-1 w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
                      {project.imageUrl ? (
                        <Image
                          src={`${project.imageUrl}?v=2`}
                          alt={project.title}
                          fill
                          unoptimized
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-neutral-400 p-4 text-center">
                          <Laptop className="w-8 h-8 text-emerald-400/80" />
                          <span className="text-xs font-medium">Enterprise System Preview</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Judul & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Ringkasan */}
                  <p className="text-sm text-neutral-300/90 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights Point */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-400"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Card: Tech Stack & CTA */}
                <div className="pt-5 mt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-neutral-950 text-neutral-300 border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] text-neutral-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && project.status !== "Coming Soon" && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.demoUrl && project.demoUrl !== "#") {
                            window.open(project.demoUrl, "_blank");
                          } else {
                            setActiveProject(project);
                          }
                        }}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700/80 inline-flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Demo</span>
                      </button>
                    )}
                    <span className="text-xs font-semibold text-emerald-400 inline-flex items-center gap-1 group-hover:underline">
                      Detail <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL CASE STUDY DETAIL */}
        {activeProject && (
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-neutral-900 border border-neutral-700/80 shadow-2xl space-y-5 sm:space-y-6 pb-6 sm:pb-8"
            >
              {/* Sticky Top Bar for Mobile & Desktop - Always Visible Close Button */}
              <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-3.5 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Detail Case Study
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="p-2 -mr-1 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 active:scale-95 transition-all shadow-md"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="px-5 sm:px-8 space-y-5 sm:space-y-6">
                {/* Modal Header */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {activeProject.categoryLabel}
                    </span>
                    {activeProject.status === "Coming Soon" ? (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Status: Coming Soon
                      </span>
                    ) : (
                      <span className="text-xs text-neutral-400">
                        • Status: {activeProject.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium">
                    {activeProject.tagline}
                  </p>
                </div>

              {/* Modal Image Mockup Banner */}
              {activeProject.imageUrl && (
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-neutral-700/80 bg-neutral-950 shadow-inner">
                  <Image
                    src={`${activeProject.imageUrl}?v=2`}
                    alt={activeProject.title}
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>
              )}

              {/* Deskripsi Lengkap */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Tentang Solusi & Manfaat
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Fitur & Inovasi Kunci */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Fitur Unggulan & Kapabilitas Teknis
                </h4>
                <ul className="space-y-2">
                  {activeProject.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Teknologi yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-950 text-neutral-200 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="w-full sm:w-auto">
                  {activeProject.demoUrl && activeProject.status !== "Coming Soon" ? (
                    <a
                      href={activeProject.demoUrl !== "#" ? activeProject.demoUrl : undefined}
                      target={activeProject.demoUrl !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (activeProject.demoUrl === "#") {
                          e.preventDefault();
                          alert("Aplikasi ini merupakan Internal Tool / Private Environment. Hubungi melalui email jika memerlukan sesi demonstrasi langsung.");
                        }
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer text-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      <span>{activeProject.demoUrl !== "#" ? "Buka Live Demo" : "Request Demo / Private Preview"}</span>
                    </a>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors text-center"
                >
                  Tutup
                </button>
              </div>
            </div>
            </div>
          </div>
        )}

        {/* CERTIFICATIONS & CREDENTIALS SECTION */}
        <section id="certifications" className="space-y-8 scroll-mt-24">
          <div className="space-y-2 border-b border-neutral-800 pb-6">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Kredensial & Standar Industri</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Sertifikasi Profesional & Kepatuhan
            </h2>
            <p className="text-neutral-400 text-sm max-w-2xl">
              Fondasi yang memastikan setiap sistem digital dan alur otomatisasi dibangun berdasarkan pemahaman mendalam tentang tata kelola SDM, regulasi ketenagakerjaan, serta standar keamanan informasi internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-emerald-500/40 transition-all duration-300 shadow-lg space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      {cert.id === "iso-27001" ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {cert.badgeText}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5" /> Nilai Tambah pada Sistem
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {cert.domainImpact}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/70 space-y-2">
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Kompetensi Kunci:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {cert.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & EXPERTISE SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="space-y-2 border-b border-neutral-800 pb-6">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Kompetensi Teknis</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Tech Stack & Keahlian Utama
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl">
              Alat, framework, dan teknologi yang digunakan dalam mengembangkan solusi
              perangkat lunak yang andal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 space-y-4"
              >
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-950 text-neutral-300 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT & OUTREACH SECTION */}
        <section
          id="contact"
          className="relative overflow-hidden p-6 sm:p-12 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950 text-center space-y-6"
        >
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tertarik Berkolaborasi?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan peluang proyek baru, perancangan web app
              kustom, atau automasi proses bisnis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="mailto:hellopampamss@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 text-center"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="break-all sm:break-normal">hellopampamss@gmail.com</span>
            </a>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
              <a
                href="https://www.linkedin.com/in/setyopambudi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/60 text-neutral-200 text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current shrink-0 text-[#0077B5]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/allaboutpampam8-crypto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-200 text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-8 px-4 text-center text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        <p>© 2026 Setyo Pambudi. Built with Next.js & Tailwind CSS.</p>
        <div className="flex items-center gap-5 text-neutral-400">
          <a
            href="https://www.linkedin.com/in/setyopambudi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/allaboutpampam8-crypto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hellopampamss@gmail.com"
            className="hover:text-emerald-400 transition-colors"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
