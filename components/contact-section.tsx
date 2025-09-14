"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  })

  const [pixelRatio, setPixelRatio] = useState(1)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPixelRatio(window.devicePixelRatio || 1)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_s1k1epv",    // from EmailJS dashboard
    "template_hv68j6j",   // from EmailJS dashboard
    formData,
    "Agp1YqmGfr_zvwkfx"     // from EmailJS dashboard
  )

  .then(() => {
    alert("Message sent!");
    setFormData({ from_name: "", reply_to: "", subject: "", message: "" });
  })
  .catch((err) => {
    console.error("EmailJS Error:", err);
    alert("Failed to send message.");
  });
};

  return (
    <section
      id="contact"
      className="relative py-20 bg-muted/30 overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      {/* ShapeBlur Background */}
     
      {/* Content above ShapeBlur */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">yassinechaanoune039@email.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="https://wa.me/212720167843" className="text-muted-foreground">
                    +(212) 720-167843
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
              </motion.div>
            </motion.div>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via
                  LinkedIn or email directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <Card className="relative overflow-hidden">
    {/* ShapeBlur effect only on card sides */}
    

    <CardHeader className="relative z-10">
      <CardTitle className="font-heading text-xl">Send a Message</CardTitle>
    </CardHeader>

    <CardContent className="relative z-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="from_name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </motion.div>
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="reply_to"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </motion.div>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
          />
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project..."
            rows={6}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button type="submit" className="w-full font-medium">
            <Send className="h-4 w-4 mr-2" /> Send Message
          </Button>
        </motion.div>
      </form>
    </CardContent>
  </Card>
</motion.div>

        </div>
      </div>
    </section>
  )
}
