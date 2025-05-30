"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  MessageCircle,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Code,
  Play,
  ArrowUpRight,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Cursor Glow Effect */}
      <div
        className="fixed w-[600px] h-[600px] pointer-events-none z-0 opacity-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Animated Grid Pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/90 backdrop-blur-xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">REMOTE CODERS</span>
                <span className="text-xs text-gray-400 -mt-1 tracking-widest">ELITE • COMMUNITY</span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "HOME", href: "/" },
                { name: "BLOGS", href: "/blogs" },
                { name: "THM WALKTHROUGHS", href: "/thm" },
                { name: "CONTACT", href: "/contact" },
                { name: "ABOUT", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              ))}
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-semibold">
                JOIN NOW
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-3 border border-gray-700 rounded-lg hover:border-gray-500 transition-all duration-300 hover:bg-gray-900/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-6 border border-gray-800 rounded-lg bg-black/95 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                {[
                  { name: "HOME", href: "/" },
                  { name: "BLOGS", href: "/blogs" },
                  { name: "THM WALKTHROUGHS", href: "/thm" },
                  { name: "CONTACT", href: "/contact" },
                  { name: "ABOUT", href: "/about" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-900 last:border-b-0 hover:bg-gray-900/30 px-2 rounded"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-white text-black hover:bg-gray-200 font-semibold mt-4">JOIN NOW</Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <main ref={heroRef} className="relative pt-40 pb-32 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Status Badge */}
            <div className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-full text-sm font-medium mb-12 bg-gray-900/30 backdrop-blur-sm hover:border-gray-600 transition-colors group">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                SYSTEM ONLINE • 25,000+ ACTIVE USERS • LIVE NOW
              </span>
            </div>

            {/* Enhanced Main Headline */}
            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tight">
              <span className="text-white block">WELCOME TO</span>
              <span className="text-white block">REMOTE</span>
              <span className="text-white border-b-8 border-white inline-block">CODERS</span>
            </h1>

            {/* Enhanced Subtext */}
            <div className="max-w-4xl mb-16">
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-light">
                An exclusive community for cybersecurity professionals and elite programmers. Access cutting-edge
                tutorials, advanced walkthroughs, and connect with industry leaders worldwide.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We are happy to see you here! This website is a community hub for Cybersecurity enthusiasts and
                programmers. Explore our blogs on hacking, programming, and more tech topics.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-24">
              <Link href="/blogs">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 px-12 py-6 font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group w-full sm:w-auto"
                >
                  <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  EXPLORE BLOGS
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 font-bold text-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  CONTACT US
                  <ArrowUpRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute top-20 left-10 text-green-400 font-mono text-sm opacity-30 animate-bounce hidden lg:block">
              {'{ "status": "online" }'}
            </div>
            <div
              className="absolute top-40 right-10 text-purple-400 font-mono text-sm opacity-30 animate-bounce hidden lg:block"
              style={{ animationDelay: "1s" }}
            >
              {'console.log("hack the planet");'}
            </div>
            <div
              className="absolute bottom-20 left-20 text-cyan-400 font-mono text-sm opacity-30 animate-bounce hidden lg:block"
              style={{ animationDelay: "2s" }}
            >
              {"sudo rm -rf /problems"}
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Code className="w-7 h-7 text-black" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">REMOTE CODERS</span>
                  <div className="text-xs text-gray-400">ELITE COMMUNITY</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering the next generation of cybersecurity professionals and elite programmers through cutting-edge
                education and community collaboration.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
              <ul className="space-y-3">
                {["About Us", "Tutorials", "Community", "Support", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">CONTACT</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  hello@remotecoders.dev
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm mb-1">
                  © 2025 REMOTE CODERS - A COMMUNITY FOR HACKERS AND PROGRAMMERS
                </p>
                <p className="text-gray-500 text-xs">
                  DEVELOPED BY <span className="text-white font-semibold">TANMAY TIWARI</span>
                </p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
