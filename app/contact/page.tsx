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
  Code,
  Send,
  Terminal,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [currentCommand, setCurrentCommand] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const commands = ["Get in Touch", "Connect with RC", "Join the Community"]

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

  // Typing animation effect
  useEffect(() => {
    const currentText = commands[currentCommand]
    let index = 0

    const typeInterval = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentCommand])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const contactMethods = [
    {
      command: "connect --via whatsapp",
      value: "+91 6306256015",
      status: "available",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-green-400",
      link: "https://wa.me/916306256015",
    },
    {
      command: "connect --via telegram",
      value: "Not Available",
      status: "error",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "text-red-400",
      link: null,
    },
    {
      command: "connect --via email",
      value: "hello@remotecoders.dev",
      status: "available",
      icon: <Mail className="w-5 h-5" />,
      color: "text-cyan-400",
      link: "mailto:hello@remotecoders.dev",
    },
    {
      command: "connect --via discord",
      value: "RemoteCoders#1337",
      status: "available",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "text-purple-400",
      link: null,
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

      {/* Matrix Code Rain */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? "01" : "10"}
          </div>
        ))}
      </div>

      {/* Circuit Board Pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/90 backdrop-blur-xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight font-mono">RC / CONTACT</span>
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
                  className={`relative text-sm font-medium transition-all duration-300 group py-2 font-mono ${
                    item.name === "CONTACT" ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      item.name === "CONTACT" ? "w-full bg-white" : "w-0 bg-white group-hover:w-full"
                    }`}
                  />
                  <span className="absolute inset-0 bg-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
                      item.name === "CONTACT" ? "text-cyan-400" : "text-gray-300 hover:text-white"
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

      {/* Hero Section with 3D Logo */}
      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* 3D Logo Section */}
            <div className="text-center mb-20">
              {/* Holographic RC Logo */}
              <div className="relative inline-block mb-12">
                <div className="relative">
                  {/* Hologram Rings */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="w-40 h-40 border border-white/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-32 h-32 border border-white/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>

                  {/* Main RC Logo */}
                  <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <span className="text-4xl font-black text-black font-mono">RC</span>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-300 rounded-2xl blur-xl opacity-50 -z-10"></div>
                  </div>

                  {/* Floating Binary Code */}
                  <div className="absolute -top-8 -left-8 text-white font-mono text-xs opacity-60 animate-bounce">
                    01001000
                  </div>
                  <div className="absolute -top-8 -right-8 text-white font-mono text-xs opacity-60 animate-bounce delay-1000">
                    01100101
                  </div>
                  <div className="absolute -bottom-8 -left-8 text-white font-mono text-xs opacity-60 animate-bounce delay-500">
                    01101100
                  </div>
                  <div className="absolute -bottom-8 -right-8 text-white font-mono text-xs opacity-60 animate-bounce delay-1500">
                    01101111
                  </div>
                </div>
              </div>

              {/* Typing Animation Title */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight font-mono">
                <span className="text-white">&gt; </span>
                <span className="text-white">{typedText}</span>
                <span className={`text-white ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Ready to connect with the Remote Coders community? Choose your preferred communication channel and let's
                start the conversation.
              </p>
            </div>

            {/* Terminal-Style Contact Information */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card className="bg-gray-900/50 border-2 border-gray-700 hover:border-cyan-500 transition-all duration-500">
                <CardContent className="p-8">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Terminal className="w-5 h-5 text-green-400" />
                      <span className="font-mono text-green-400">remote-coders@terminal:~$</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Contact Commands */}
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
                          <div className={`${method.color} mt-1`}>{method.icon}</div>
                          <div className="flex-1">
                            <div className="font-mono text-sm text-gray-400 mb-1">
                              <span className="text-green-400">$</span> {method.command}
                            </div>
                            <div className="flex items-center space-x-3">
                              {method.status === "available" ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-red-400" />
                              )}
                              <span className={`font-mono ${method.color}`}>{method.value}</span>
                              {method.link && (
                                <a
                                  href={method.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded font-mono transition-colors"
                                >
                                  [ CONNECT ]
                                </a>
                              )}
                            </div>
                            {method.status === "error" && (
                              <div className="text-red-400 font-mono text-xs mt-1">Error 404: Service not found</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Terminal-Style Contact Form */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-2 border-gray-700 hover:border-green-500 transition-all duration-500">
                <CardContent className="p-8">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Send className="w-5 h-5 text-green-400" />
                      <span className="font-mono text-green-400">message-form@terminal:~$</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div>
                      <label className="block font-mono text-sm text-gray-400 mb-2">
                        <span className="text-green-400">$</span> enter --name
                      </label>
                      <Input
                        placeholder="Your name here..."
                        className="bg-black border-gray-600 text-white font-mono focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-400 mb-2">
                        <span className="text-green-400">$</span> enter --email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@domain.com"
                        className="bg-black border-gray-600 text-white font-mono focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-400 mb-2">
                        <span className="text-green-400">$</span> enter --subject
                      </label>
                      <Input
                        placeholder="Message subject..."
                        className="bg-black border-gray-600 text-white font-mono focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-400 mb-2">
                        <span className="text-green-400">$</span> enter --message
                      </label>
                      <Textarea
                        placeholder="Type your message here..."
                        rows={6}
                        className="bg-black border-gray-600 text-white font-mono focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                      />
                    </div>

                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-200 px-8 py-4 font-bold text-lg font-mono transition-all duration-300 transform hover:scale-105 w-full"
                    >
                      <Send className="mr-3 w-5 h-5" />[ &gt;_ SEND MESSAGE ]
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                  <div className="text-xs text-gray-400 font-mono">CONTACT CENTER</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Connect with our community of cybersecurity professionals and elite programmers. We're here to help you
                on your journey.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 font-mono">QUICK LINKS</h4>
              <ul className="space-y-3">
                {["Support Center", "Community", "Documentation", "FAQ", "Help Desk"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 font-mono">DIRECT CONTACT</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 font-mono">
                  <Mail className="w-4 h-4 mr-3" />
                  hello@remotecoders.dev
                </li>
                <li className="flex items-center text-gray-400 font-mono">
                  <Phone className="w-4 h-4 mr-3" />
                  +91 6306256015
                </li>
                <li className="flex items-center text-gray-400 font-mono">
                  <MessageSquare className="w-4 h-4 mr-3" />
                  WhatsApp Available
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
                Contact Guidelines
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
