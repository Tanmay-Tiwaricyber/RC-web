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
  Code,
  Terminal,
  Shield,
  Users,
  Zap,
  Lock,
  Globe,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const terminalText = 'echo "we are a community of hackers & coders"'

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

  // Terminal typing animation
  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= terminalText.length) {
        setTypedText(terminalText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const stats = [
    { label: "ACTIVE MEMBERS", value: "150+", icon: <Users className="w-6 h-6" />, color: "text-green-400" },
    { label: "CTF CHALLENGES", value: "50+", icon: <Shield className="w-6 h-6" />, color: "text-cyan-400" },
    { label: "TUTORIALS", value: "100+", icon: <Terminal className="w-6 h-6" />, color: "text-purple-400" },
    { label: "COUNTRIES", value: "25+", icon: <Globe className="w-6 h-6" />, color: "text-pink-400" },
  ]

  const values = [
    {
      title: "SHARE KNOWLEDGE",
      description: "We believe in open-source learning and collaborative growth",
      icon: <Code className="w-8 h-8" />,
      color: "border-green-400 text-green-400",
    },
    {
      title: "EMPOWER LEARNERS",
      description: "Every member gets the support they need to excel in cybersecurity",
      icon: <Zap className="w-8 h-8" />,
      color: "border-cyan-400 text-cyan-400",
    },
    {
      title: "PROTECT THE INTERNET",
      description: "Building the next generation of ethical hackers and security professionals",
      icon: <Lock className="w-8 h-8" />,
      color: "border-purple-400 text-purple-400",
    },
  ]

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

      {/* Animated Code Grid */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
`,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Floating Code Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: "#ffffff",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {["{ }", "[ ]", "< >", "( )", "//", "/*", "*/", "=>", "&&", "||"][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/90 backdrop-blur-xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight font-mono">RC / ABOUT</span>
                <span className="text-xs text-gray-400 -mt-1 tracking-widest font-mono">REMOTE CODERS</span>
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
                  className={`relative text-sm font-medium transition-all duration-300 group py-2 font-mono ${
                    item.name === "ABOUT" ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      item.name === "ABOUT" ? "w-full bg-white" : "w-0 bg-white group-hover:w-full"
                    }`}
                  />
                  <span className="absolute inset-0 bg-purple-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
                    className={`text-sm font-medium transition-colors py-3 border-b border-gray-900 last:border-b-0 hover:bg-gray-900/30 px-2 rounded font-mono ${
                      item.name === "ABOUT" ? "text-purple-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Glitchy Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight font-mono relative">
                <span className="text-white">ABOUT</span>
                <span className="text-white border-b-8 border-white ml-4">US</span>
              </h1>

              {/* Terminal Subtitle */}
              <div className="bg-gray-900/50 border-2 border-gray-700 rounded-lg p-6 max-w-3xl mx-auto">
                <div className="flex items-center space-x-3 mb-4">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-white">user@remote-coders:~$</span>
                </div>
                <div className="font-mono text-lg text-white">
                  <span className="text-white">$</span> {typedText}
                  <span className={`text-white ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
                </div>
              </div>
            </div>

            {/* Main Content Terminal */}
            <div className="max-w-5xl mx-auto mb-20">
              <Card className="bg-gray-900/30 border-2 border-gray-700 hover:border-gray-500 transition-all duration-500 relative overflow-hidden">
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-10 relative z-10">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Code className="w-6 h-6 text-white" />
                      <span className="font-mono text-white text-lg">about-us.md</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-8 font-mono">
                    <div className="text-gray-400 text-sm">
                      <span className="text-green-400">/*</span>
                      <br />
                      <span className="text-green-400"> * Remote Coders Community</span>
                      <br />
                      <span className="text-green-400"> * Founded by Tanmay Tiwari</span>
                      <br />
                      <span className="text-green-400"> */</span>
                    </div>

                    <div className="text-lg leading-relaxed space-y-6">
                      <p className="text-white">
                        <span className="text-cyan-400">Remote Coders</span> is a thriving community for{" "}
                        <span className="text-green-400">hackers</span> and{" "}
                        <span className="text-purple-400">programmers</span>.
                      </p>

                      <p className="text-gray-300">
                        My name is <span className="text-pink-400 font-bold">Tanmay Tiwari</span> — proud founder and
                        curator of this initiative.
                      </p>

                      <p className="text-gray-300">
                        I created this space to bring together <span className="text-cyan-400">developers</span> and{" "}
                        <span className="text-green-400">cybersecurity enthusiasts</span> where they can collaborate,
                        solve real-world <span className="text-purple-400">CTFs</span>, and help secure the digital
                        world.
                      </p>

                      <p className="text-gray-300">
                        With over <span className="text-yellow-400 font-bold">150+ active members</span>, our mission is
                        simple:
                      </p>

                      <div className="pl-8 space-y-2 text-gray-300">
                        <p>
                          <span className="text-green-400">→</span> Share knowledge.
                        </p>
                        <p>
                          <span className="text-cyan-400">→</span> Empower learners.
                        </p>
                        <p>
                          <span className="text-purple-400">→</span> Protect the internet.
                        </p>
                      </div>
                    </div>

                    {/* ASCII Art */}
                    <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
                      <pre className="text-white text-xs leading-tight overflow-x-auto">
                        {`
    ██████╗ ███████╗███╗   ███╗ ██████╗ ████████╗███████╗
    ██╔══██╗██╔════╝████╗ ████║██╔═══██╗╚══██╔══╝██╔════╝
    ██████╔╝█████╗  ██╔████╔██║██║   ██║   ██║   █████╗  
    ██╔══██╗██╔══╝  ██║╚██╔╝██║██║   ██║   ██║   ██╔══╝  
    ██║  ██║███████╗██║ ╚═╝ ██║╚██████╔╝   ██║   ███████╗
    ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚══════╝
                                                          
     ██████╗ ██████╗ ██████╗ ███████╗██████╗ ███████╗    
    ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝    
    ██║     ██║   ██║██║  ██║█████╗  ██████╔╝███████╗    
    ██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗╚════██║    
    ╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║███████║    
     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝    
                        `}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card className="bg-gray-900/30 border-2 border-gray-700 hover:border-gray-500 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl text-white mb-4 font-mono">"</div>
                  <blockquote className="text-2xl text-white font-light mb-6 italic">
                    Hackers build things. Crackers break them.
                  </blockquote>
                  <cite className="text-white font-mono">— Eric S. Raymond</cite>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/30 border-2 border-gray-700 hover:border-gray-500 transition-all duration-500 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}
                    >
                      {stat.icon}
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2 font-mono`}>{stat.value}</div>
                    <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/30 border-2 ${value.color.split(" ")[0]} hover:${value.color.split(" ")[0].replace("border-", "border-")} transition-all duration-500 group`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`${value.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}
                    >
                      {value.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${value.color} mb-4 font-mono`}>{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6 font-mono">
                READY TO <span className="text-purple-400">JOIN</span> THE{" "}
                <span className="text-cyan-400">COMMUNITY</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with like-minded hackers and programmers. Start your journey with Remote Coders today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 px-12 py-6 font-bold text-xl font-mono transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-3 w-6 h-6" />[ GET IN TOUCH ]
                  </Button>
                </Link>
                <Link href="/blogs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 font-bold text-xl font-mono transition-all duration-300 transform hover:scale-105"
                  >
                    <Code className="mr-3 w-6 h-6" />[ EXPLORE CONTENT ]
                  </Button>
                </Link>
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
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Heart className="w-7 h-7 text-black" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white font-mono">REMOTE CODERS</span>
                  <div className="text-xs text-gray-400 font-mono">ABOUT OUR COMMUNITY</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Founded by Tanmay Tiwari, Remote Coders is a thriving community of hackers and programmers dedicated to
                sharing knowledge and securing the digital world.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 font-mono">COMMUNITY</h4>
              <ul className="space-y-3">
                {["Our Mission", "Join Us", "Contributors", "Events", "Resources"].map((link) => (
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
              <h4 className="text-white font-bold mb-6 font-mono">FOUNDER</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 font-mono">
                  <Mail className="w-4 h-4 mr-3" />
                  tanmay@remotecoders.dev
                </li>
                <li className="flex items-center text-gray-400 font-mono">
                  <Github className="w-4 h-4 mr-3" />
                  @tanmaytiwari
                </li>
                <li className="flex items-center text-gray-400 font-mono">
                  <Twitter className="w-4 h-4 mr-3" />
                  @tanmay_codes
                </li>
              </ul>
            </div>
          </div>

          {/* Glowing Separator Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-1 font-mono">
                © 2025 REMOTE CODERS — A COMMUNITY FOR HACKERS AND PROGRAMMERS
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
                Community Guidelines
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
