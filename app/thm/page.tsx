"use client"

import { useState, useEffect } from "react"
import {
  Github,
  MessageCircle,
  Twitter,
  Menu,
  X,
  Linkedin,
  Mail,
  Phone,
  Shield,
  Terminal,
  Zap,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function THMPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [selectedYear, setSelectedYear] = useState("All")

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

  const thmWalkthroughs = [
    {
      id: 1,
      title: "Advent of Cyber 2024",
      description:
        "Complete walkthrough of TryHackMe's Advent of Cyber 2024 event with detailed explanations for all 25 days.",
      icon: "🎅",
      category: "AOC 2024",
      difficulty: "Beginner",
      year: "2024",
      duration: "25 days",
      completed: true,
      featured: true,
      tags: ["Christmas", "Beginner", "Web", "Forensics"],
      bgPattern: "binary",
    },
    {
      id: 2,
      title: "Mr Robot CTF",
      description:
        "Step-by-step walkthrough of the Mr Robot themed CTF room, covering web exploitation and privilege escalation.",
      icon: "📺",
      category: "CTF",
      difficulty: "Medium",
      year: "2024",
      duration: "4 hours",
      completed: true,
      featured: false,
      tags: ["Web Exploitation", "Linux", "Privilege Escalation"],
      bgPattern: "glitch",
    },
    {
      id: 3,
      title: "Retro Challenge",
      description:
        "Nostalgic retro-themed challenge focusing on old-school exploitation techniques and vintage vulnerabilities.",
      icon: "🪙",
      category: "Retro",
      difficulty: "Hard",
      year: "2024",
      duration: "6 hours",
      completed: true,
      featured: false,
      tags: ["Retro", "Buffer Overflow", "Assembly"],
      bgPattern: "matrix",
    },
    {
      id: 4,
      title: "Side Quest Adventures",
      description: "Collection of side quest challenges covering various cybersecurity domains and skill levels.",
      icon: "🏃",
      category: "Side Quest",
      difficulty: "Mixed",
      year: "2024",
      duration: "Variable",
      completed: false,
      featured: false,
      tags: ["Mixed", "Adventure", "Skills"],
      bgPattern: "hex",
    },
    {
      id: 5,
      title: "Blue Team Fundamentals",
      description: "Comprehensive guide to blue team operations, incident response, and defensive security measures.",
      icon: "🛡️",
      category: "Blue Team",
      difficulty: "Beginner",
      year: "2024",
      duration: "8 hours",
      completed: true,
      featured: true,
      tags: ["Blue Team", "SOC", "Incident Response"],
      bgPattern: "circuit",
    },
    {
      id: 6,
      title: "Advanced Persistent Threat",
      description:
        "Deep dive into APT tactics, techniques, and procedures with real-world attack simulation scenarios.",
      icon: "🎯",
      category: "APT",
      difficulty: "Expert",
      year: "2023",
      duration: "12 hours",
      completed: true,
      featured: false,
      tags: ["APT", "Advanced", "Red Team"],
      bgPattern: "neural",
    },
  ]

  const years = ["All", "2024", "2023", "2022"]
  const difficulties = ["All", "Beginner", "Medium", "Hard", "Expert", "Mixed"]

  const filteredWalkthroughs =
    selectedYear === "All"
      ? thmWalkthroughs
      : thmWalkthroughs.filter((walkthrough) => walkthrough.year === selectedYear)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "border-green-500 text-green-400"
      case "Medium":
        return "border-yellow-500 text-yellow-400"
      case "Hard":
        return "border-orange-500 text-orange-400"
      case "Expert":
        return "border-red-500 text-red-400"
      case "Mixed":
        return "border-purple-500 text-purple-400"
      default:
        return "border-gray-500 text-gray-400"
    }
  }

  const getBackgroundPattern = (pattern: string) => {
    switch (pattern) {
      case "binary":
        return "bg-gradient-to-br from-green-900/20 to-transparent"
      case "glitch":
        return "bg-gradient-to-br from-red-900/20 to-transparent"
      case "matrix":
        return "bg-gradient-to-br from-cyan-900/20 to-transparent"
      case "hex":
        return "bg-gradient-to-br from-purple-900/20 to-transparent"
      case "circuit":
        return "bg-gradient-to-br from-blue-900/20 to-transparent"
      case "neural":
        return "bg-gradient-to-br from-pink-900/20 to-transparent"
      default:
        return "bg-gradient-to-br from-gray-900/20 to-transparent"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Cursor Glow Effect */}
      <div
        className="fixed w-[600px] h-[600px] pointer-events-none z-0 opacity-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: "radial-gradient(circle, rgba(0,255,0,0.15) 0%, rgba(0,255,255,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Animated Grid Pattern with Code Stream */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Matrix-style Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "01" : "10"}
          </div>
        ))}
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/90 backdrop-blur-xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight font-mono">
                  RC / <span className="text-green-400">THM</span>
                </span>
                <span className="text-xs text-gray-400 -mt-1 tracking-widest font-mono">WALKTHROUGHS</span>
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
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group py-2 font-mono"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-green-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-3 border border-gray-700 rounded-lg hover:border-green-500 transition-all duration-300 hover:bg-green-900/20"
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
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-900 last:border-b-0 hover:bg-gray-900/30 px-2 rounded font-mono"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* THM Header Section */}
      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight font-mono">
                <span className="text-white">THM</span>
                <span className="text-green-400 border-b-8 border-green-400 ml-4">WALKTHROUGHS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Complete step-by-step guides for TryHackMe challenges, CTFs, and cybersecurity learning paths with
                detailed explanations and methodologies.
              </p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 font-mono">FILTER BY YEAR:</span>
              </div>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 border-2 rounded-lg font-mono font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedYear === year
                      ? "border-green-400 bg-green-400 text-black"
                      : "border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400"
                  }`}
                >
                  [ {year} ]
                </button>
              ))}
            </div>

            {/* THM Walkthroughs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWalkthroughs.map((walkthrough, index) => (
                <Card
                  key={walkthrough.id}
                  className={`bg-gray-900/30 border-2 border-gray-700 hover:border-green-500 transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl overflow-hidden relative ${
                    walkthrough.featured ? "border-green-400/50" : ""
                  }`}
                >
                  {walkthrough.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold font-mono flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Background Pattern */}
                  <div
                    className={`absolute inset-0 ${getBackgroundPattern(walkthrough.bgPattern)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 relative z-10">
                    {/* Icon and Status */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{walkthrough.icon}</div>
                      <div className="flex items-center space-x-2">
                        {walkthrough.completed ? (
                          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                        ) : (
                          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                        )}
                        <span className="text-xs font-mono text-gray-400">
                          {walkthrough.completed ? "COMPLETED" : "IN PROGRESS"}
                        </span>
                      </div>
                    </div>

                    {/* Category and Difficulty */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-800 text-green-400 rounded-full text-xs font-bold font-mono">
                        {walkthrough.category}
                      </span>
                      <span
                        className={`inline-block px-3 py-1 border rounded-full text-xs font-bold font-mono ${getDifficultyColor(walkthrough.difficulty)}`}
                      >
                        {walkthrough.difficulty}
                      </span>
                    </div>

                    {/* Title with Glitch Effect */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors font-mono leading-tight">
                      {walkthrough.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">{walkthrough.description}</p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between mb-6 text-xs text-gray-500 font-mono">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {walkthrough.year}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {walkthrough.duration}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {walkthrough.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <Button
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono font-bold transition-all duration-300 group/btn w-full"
                    >
                      <Terminal className="mr-2 w-4 h-4" />[ &gt;_ VIEW WALKTHROUGH ]
                      <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Binary Animation Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse" />
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Section */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-green-400 text-black hover:bg-green-300 px-12 py-6 font-bold text-xl font-mono transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-3 w-6 h-6" />[ LOAD MORE WALKTHROUGHS ]
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              <div className="border-2 border-gray-800 p-6 text-center hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-400 mb-2 font-mono">25+</div>
                <div className="text-sm text-gray-400 font-mono">WALKTHROUGHS</div>
              </div>
              <div className="border-2 border-gray-800 p-6 text-center hover:border-cyan-500 transition-colors">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">100+</div>
                <div className="text-sm text-gray-400 font-mono">HOURS CONTENT</div>
              </div>
              <div className="border-2 border-gray-800 p-6 text-center hover:border-purple-500 transition-colors">
                <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">15+</div>
                <div className="text-sm text-gray-400 font-mono">CATEGORIES</div>
              </div>
              <div className="border-2 border-gray-800 p-6 text-center hover:border-yellow-500 transition-colors">
                <div className="text-3xl font-bold text-yellow-400 mb-2 font-mono">98%</div>
                <div className="text-sm text-gray-400 font-mono">SUCCESS RATE</div>
              </div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-black" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white font-mono">REMOTE CODERS</span>
                  <div className="text-xs text-gray-400 font-mono">THM COMMUNITY</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering cybersecurity professionals through comprehensive TryHackMe walkthroughs and hands-on
                learning experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 font-mono">QUICK LINKS</h4>
              <ul className="space-y-3">
                {["THM Profile", "Walkthroughs", "CTF Writeups", "Learning Paths", "Community"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors font-mono">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 font-mono">CONTACT</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 font-mono">
                  <Mail className="w-4 h-4 mr-3" />
                  thm@remotecoders.dev
                </li>
                <li className="flex items-center text-gray-400 font-mono">
                  <Phone className="w-4 h-4 mr-3" />
                  +1 (555) THM-HELP
                </li>
              </ul>
            </div>
          </div>

          {/* Glowing Separator Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-1 font-mono">
                © 2025 REMOTE CODERS — A COMMUNITY FOR HACKERS AND PROGRAMMERS
              </p>
              <p className="text-gray-500 text-xs font-mono">
                DEVELOPED BY <span className="text-green-400 font-semibold">TANMAY TIWARI</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 font-mono">
              <a href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                THM Guidelines
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
