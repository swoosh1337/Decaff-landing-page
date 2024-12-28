'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        })
        
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error: unknown) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fdf4ea] py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#8B4513]">Contact Us</h1>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#8B4513] mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-white border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-[#8B4513]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full bg-white border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-[#8B4513]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#8B4513] mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              className="w-full min-h-[150px] bg-white border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-[#8B4513]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#8B4513] text-white hover:bg-[#A0522D]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}

