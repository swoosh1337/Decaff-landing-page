"use client"

import Image from "next/image"
import Link from "next/link"
import { Coffee, Calendar, BarChart3, BellRing, Zap, Moon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/decaff/id6739958581', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#fdf4ea]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_1024x1024%20(1)-AH2KATiIwhXLUMg3FqVu3TfdnBAMZD.jpeg"
            alt="Decaff Logo"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#8B4513]">
          Your Daily Caffeine Companion
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#A0522D]">
          Track your coffee, tea, and energy drinks. Stay in control of your caffeine consumption,
          improve sleep quality, and boost overall wellness.
        </p>
        <Button 
          size="lg" 
          className="rounded-full bg-[#8B4513] text-white hover:bg-[#A0522D]"
          onClick={handleAppStoreClick}
        >
          Download on the App Store
        </Button>
      </section>

      {/* Features Section */}
      <section className="bg-[#fdf4ea] py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#8B4513]">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <Coffee className="mb-4 h-8 w-8 text-[#8B4513]" />
                <h3 className="mb-2 text-xl font-semibold text-[#8B4513]">Log Your Drinks Easily</h3>
                <p className="text-[#A0522D]">
                  Quickly record coffee, tea, soda, and energy drinks with our extensive database.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <BarChart3 className="mb-4 h-8 w-8 text-[#8B4513]" />
                <h3 className="mb-2 text-xl font-semibold text-[#8B4513]">Visual Insights</h3>
                <p className="text-[#A0522D]">
                  View daily, weekly, and monthly trends with intuitive charts and graphs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <Calendar className="mb-4 h-8 w-8 text-[#8B4513]" />
                <h3 className="mb-2 text-xl font-semibold text-[#8B4513]">Track Your History</h3>
                <p className="text-[#A0522D]">
                  Keep a detailed log of your caffeine intake and monitor your consumption patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <Zap className="mb-4 h-8 w-8 text-[#8B4513]" />
                <h3 className="mb-2 text-xl font-semibold text-[#8B4513]">AI-Driven Analysis</h3>
                <p className="text-[#A0522D]">
                  Get personalized insights on how caffeine affects your mood and productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <Moon className="mb-4 h-8 w-8 text-[#8B4513]" />
                <h3 className="mb-2 text-xl font-semibold text-[#8B4513]">Sleep Optimization</h3>
                <p className="text-[#A0522D]">
                  Understand how your caffeine intake affects your sleep patterns and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <BellRing className="mb-4 h-8 w-8 text-[#8B4513]" />
                <h3 className="mb-2 text-xl font-semibold text-[#8B4513]">Smart Reminders</h3>
                <p className="text-[#A0522D]">
                  Stay on track with notifications to log drinks throughout the day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#8B4513]">Beautiful & Intuitive Design</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic2-mB5T2lKXMCfz66folKGhlc64dZ1tfr.png"
              alt="App Screenshot - Today View"
              width={320}
              height={690}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1-CqSk6wbKVAUrSVZpalH5TIjeT0Ikmq.jpeg"
              alt="App Screenshot - Analysis View"
              width={320}
              height={690}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3-e3DnBCOiSBZjffiRtQLpO08wntAd7x.png"
              alt="App Screenshot - Calendar View"
              width={320}
              height={690}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fdf4ea] py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#8B4513]">Start Tracking Today</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[#A0522D]">
            Whether you&apos;re cutting back or optimizing energy levels, Decaff helps you make informed
            decisions about your caffeine habits.
          </p>
          <Button 
            size="lg" 
            className="rounded-full bg-[#8B4513] text-white hover:bg-[#A0522D]"
            onClick={handleAppStoreClick}
          >
            Download on the App Store
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#8B4513]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_1024x1024%20(1)-AH2KATiIwhXLUMg3FqVu3TfdnBAMZD.jpeg"
                alt="Decaff Logo" 
                width={32} 
                height={32} 
                className="rounded-full"
              />
              <span className="text-xl font-semibold text-[#8B4513]">Decaff</span>
            </div>
            <nav className="flex gap-8">
              <Link href="/privacy" className="text-[#A0522D] hover:text-[#8B4513]">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-[#A0522D] hover:text-[#8B4513]">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

