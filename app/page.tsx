'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react'
import { WelcomeScene } from '@/components/welcome-scene'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  const [isExploring, setIsExploring] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b1d] text-white">
      <WelcomeScene />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(39,122,235,0.17),transparent_28%),linear-gradient(90deg,rgba(5,11,29,0.96)_0%,rgba(5,11,29,0.75)_37%,rgba(5,11,29,0.05)_78%)]" />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="Milan Joshi home">
          <span className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-semibold tracking-tight backdrop-blur-sm">MJ</span>
          <span className="hidden text-sm font-medium tracking-[0.22em] text-white/75 sm:inline">MILAN JOSHI</span>
        </a>
        <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-white/55 sm:gap-9">
          {links.map((link) => <a key={link.label} href={link.href} className="transition-colors hover:text-white">{link.label}</a>)}
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] w-full max-w-7xl items-center px-6 pb-20 pt-8 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-sky-200/75"><span className="size-1.5 rounded-full bg-sky-300 shadow-[0_0_18px_5px_rgba(125,211,252,0.55)]" /> Independent designer &amp; developer</p>
          <h1 className="max-w-[680px] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.7rem]">Hello,<br /><span className="text-sky-200">I&apos;m Milan.</span></h1>
          <p className="mt-8 max-w-md text-base leading-7 text-white/60 sm:text-lg">I build thoughtful digital experiences where clear ideas meet curious technology. Welcome to my little corner of the internet.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" onClick={() => setIsExploring(true)} className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#071126] transition-transform hover:-translate-y-0.5">Explore my work <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href="mailto:hello@milanjoshi.com.np" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white"><Mail className="size-4" /> Say hello</a>
          </div>
          <div className="mt-16 flex items-center gap-5 text-sm text-white/40">
            <span className="h-px w-10 bg-white/25" />
            <span>{isExploring ? 'Let&apos;s make something memorable.' : 'Scroll to begin the journey'}</span>
          </div>
        </div>
        <div className="absolute bottom-9 right-6 hidden items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-white/35 lg:flex"><span>Explore the planet</span><ArrowUpRight className="size-4" /></div>
      </section>

      <section id="about" className="sr-only"><h2>About Milan Joshi</h2><p>Milan Joshi is an independent designer and developer creating thoughtful digital experiences.</p></section>
      <section id="work" className="sr-only"><h2>Selected work</h2></section>
      <section id="contact" className="sr-only"><h2>Contact Milan Joshi</h2><a href="mailto:hello@milanjoshi.com.np">Email Milan Joshi</a></section>
      <div className="absolute bottom-7 left-6 z-10 flex gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:left-10 lg:left-16"><a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-white">GH</a><a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-white">IN</a></div>
    </main>
  )
}
