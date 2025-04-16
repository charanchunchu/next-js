"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    description: "UDAYA INFRASTRUCTURE, Mubharak Nagar, Nizamabad - 503003 (Beside RBVRR School)",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91-9618028077, +91-9700919166",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "infraudaya@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon-Sat: 9AM-6PM",
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <FadeIn>
          <div className="text-center mb-8 md:mb-12 lg:mb-16 pt-8 sm:pt-12 md:pt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We&apos;re here to help! Whether you&apos;re looking for uPVC &amp; WPC windows and doors, professional installation, franchise opportunities, or expert guidance, reach out to us today.
            </p>
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Information Card */}
          <FadeIn>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Contact Information
              </h2>
              <div className="grid gap-4 sm:gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Map Section */}
          <div className="space-y-6 sm:space-y-8">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                  Map Location
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3779.085970135858!2d78.11991247335695!3d18.704968863519255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUDAYA%20INFRASTRUCTURE%2C%20Mubharak%20Nagar%2C%20Mubaraknagar%2C%20Nizamabad%20-%20503003%20(Beside%20RBVRR%20School)!5e0!3m2!1sen!2sin!4v1739725770861!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[300px]"
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}