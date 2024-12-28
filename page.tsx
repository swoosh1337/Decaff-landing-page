"use client"

import Image from "next/image"
import Link from "next/link"
import { Coffee, Calendar, BarChart3, BellRing, Zap, Moon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const handleAppStoreClick = () => {
    window.open('https://www.apple.com/app-store/', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#fdf4ea]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="mb-8">
          <Image
            src="/placeholder.svg"
            alt="Decaff Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Daily Caffeine Companion
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Track your coffee, tea, and energy drinks. Stay in control of your caffeine consumption,
          improve sleep quality, and boost overall wellness.
        </p>
        <Button 
          size="lg" 
          className="rounded-full bg-[#8B4513] hover:bg-[#A0522D]"
          onClick={handleAppStoreClick}
        >
          Download on the App Store
        </Button>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Coffee className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Log Your Drinks Easily</h3>
                <p className="text-muted-foreground">
                  Quickly record coffee, tea, soda, and energy drinks with our extensive database.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <BarChart3 className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Visual Insights</h3>
                <p className="text-muted-foreground">
                  View daily, weekly, and monthly trends with intuitive charts and graphs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Calendar className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Track Your History</h3>
                <p className="text-muted-foreground">
                  Keep a detailed log of your caffeine intake and monitor your consumption patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Zap className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">AI-Driven Analysis</h3>
                <p className="text-muted-foreground">
                  Get personalized insights on how caffeine affects your mood and productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Moon className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Sleep Optimization</h3>
                <p className="text-muted-foreground">
                  Understand how your caffeine intake affects your sleep patterns and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <BellRing className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Smart Reminders</h3>
                <p className="text-muted-foreground">
                  Stay on track with notifications to log drinks throughout the day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Beautiful & Intuitive Design</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20-%202024-12-28%20at%2012.12.57-I7Wo4j7UC0MqdtFE79XvzoCB5yJKaS.png"
              alt="App Screenshot - Today View"
              width={320}
              height={690}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20-%202024-12-28%20at%2012.13.05-mO0lJgeMYqjVk6hWsvz4t9TjQvk6Lo.png"
              alt="App Screenshot - Caffeine Metabolism"
              width={320}
              height={690}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20-%202024-12-28%20at%2012.13.24-pNdRrkVn8YrSMyyddfz4S7lPbksxKS.png"
              alt="App Screenshot - Add Beverage"
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
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
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
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Decaff Logo" width={32} height={32} />
              <span className="text-xl font-semibold">Decaff</span>
            </div>
            <nav className="flex gap-8">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

