"use client"

import { useState, useEffect } from "react"
import {
  Github,
  MessageCircle,
  Twitter,
  Menu,
  X,
  Code,
  Calendar,
  Linkedin,
  Mail,
  Phone,
  Shield,
  Terminal,
  Zap,
  Lock,
  Database,
  Globe,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function BlogsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

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

  const blogPosts = [
    {
      id: 1,
      title: "Advanced SQL Injection Techniques in 2025",
      summary:
        "Explore the latest SQL injection methods, bypass techniques, and advanced exploitation strategies used by modern penetration testers.",
      date: "28 December 2024",
      category: "Security",
      icon: <Database className="w-6 h-6" />,
      readTime: "12 min read",
      tags: ["SQL", "Penetration Testing", "Web Security"],
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      summary:
        "Learn best practices for creating React applications that can handle millions of users with optimal performance and maintainability.",
      date: "25 December 2024",
      category: "Programming",
      icon: <Code className="w-6 h-6" />,
      readTime: "15 min read",
      tags: ["React", "JavaScript", "Performance"],
      featured: false,
    },
    {
      id: 3,
      title: "TryHackMe: Blue Team Fundamentals",
      summary:
        "Complete walkthrough of the Blue Team Fundamentals room with detailed explanations of defensive security concepts and tools.",
      date: "22 December 2024",
      category: "THM",
      icon: <Shield className="w-6 h-6" />,
      readTime: "20 min read",
      tags: ["TryHackMe", "Blue Team", "SOC"],
      featured: false,
    },
    {
      id: 4,
      title: "Python Automation for Cybersecurity",
      summary:
        "Discover how to automate security tasks using Python scripts, from vulnerability scanning to log analysis and incident response.",
      date: "20 December 2024",
      category: "Programming",
      icon: <Terminal className="w-6 h-6" />,
      readTime: "18 min read",
      tags: ["Python", "Automation", "Security"],
      featured: false,
    },
    {
      id: 5,
      title: "Advanced Privilege Escalation Techniques",
      summary:
        "Deep dive into Windows and Linux privilege escalation methods, including kernel exploits and misconfigurations.",
      date: "18 December 2024",
      category: "Security",
      icon: <Lock className="w-6 h-6" />,
      readTime: "25 min read",
      tags: ["Privilege Escalation", "Windows", "Linux"],
      featured: true,
    },
    {
      id: 6,
      title: "Modern Web Application Security",
      summary:
        "Comprehensive guide to securing modern web applications against OWASP Top 10 vulnerabilities and emerging threats.",
      date: "15 December 2024",
      category: "Security",
      icon: <Globe className="w-6 h-6" />,
      readTime: "22 min read",
      tags: ["Web Security", "OWASP", "Application Security"],
      featured: false,
    },
  ]

  const categories = ["All", "Security", "Programming", "THM"]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Security":
        return "border-red-500 text-red-400"
      case "Programming":
        return "border-blue-500 text-blue-400"
      case "THM":
        return "border-green-500 text-green-400"
      default:
        return "border-gray-500 text-gray-400"
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
                <span className="text-2xl font-bold text-white tracking-tight font-mono">RC / BLOGS</span>
                <span className="text-xs text-gray-400 -mt-1 tracking-widest">REMOTE CODERS</span>
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              ))}
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

      {/* Blog Header Section */}
      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight font-mono">
                <span className="text-white">BLOG</span>
                <span className="text-white border-b-8 border-white ml-4">POSTS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore cutting-edge tutorials, security insights, and programming guides from industry experts and
                community contributors.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 border-2 rounded-lg font-mono font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "border-white bg-white text-black"
                      : "border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  [ {category.toUpperCase()} ]
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`bg-gray-900/30 border-2 border-gray-700 hover:border-gray-500 transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl overflow-hidden relative ${
                    post.featured ? "border-white/30" : ""
                  }`}
                >
                  {post.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold font-mono">
                        FEATURED
                      </span>
                    </div>
                  )}

                  <CardContent className="p-8 relative z-10">
                    {/* Category Icon and Date */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center ${getCategoryColor(post.category)} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {post.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 text-sm font-mono mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="text-gray-500 text-xs font-mono">{post.readTime}</div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 border rounded-full text-xs font-bold font-mono ${getCategoryColor(post.category)}`}
                      >
                        {post.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Title with Glitch Effect */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors font-mono leading-tight">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">{post.summary}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black font-mono font-bold transition-all duration-300 group/btn w-full"
                    >
                      <Terminal className="mr-2 w-4 h-4" />[ &gt;_ READ MORE ]
                      <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              ))}
            </div>

            {/* Load More Section */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-12 py-6 font-bold text-xl font-mono transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-3 w-6 h-6" />[ LOAD MORE POSTS ]
              </Button>
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
                  <span className="text-2xl font-bold text-white font-mono">REMOTE CODERS</span>
                  <div className="text-xs text-gray-400 font-mono">ELITE COMMUNITY</div>
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
              <h4 className="text-white font-bold mb-6 font-mono">QUICK LINKS</h4>
              <ul className="space-y-3">
                {["About Us", "Tutorials", "Community", "Support", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono">
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
                  hello@remotecoders.dev
                </li>
                <li className="flex items-center text-gray-400 font-mono">
                  <Phone className="w-4 h-4 mr-3" />
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>

          {/* Glowing Separator Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-1 font-mono">
                © 2025 REMOTE CODERS - A COMMUNITY FOR HACKERS AND PROGRAMMERS
              </p>
              <p className="text-gray-500 text-xs font-mono">
                DEVELOPED BY <span className="text-white font-semibold">TANMAY TIWARI</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 font-mono">
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
      </footer>
    </div>
  )
}
