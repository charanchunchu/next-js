"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { Award, Users, Building, Leaf } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Save Up to 30% on Energy Bills",
    description: "Udaya Infrastructure's uPVC windows and doors provide excellent heat insulation, keeping your home cool in summer and warm in winter, reducing your power costs.",
  },
  {
    icon: Users,
    title: "Reduce Noise by Up to 40 dB",
    description: "Udaya Infrastructure's uPVC windows and doors block outside noise, creating a quieter, more peaceful, and comfortable living space.",
  },
  {
    icon: Building,
    title: "Optimal Heat Insulation",
    description: "Our multi-chambered uPVC profiles with a double-seal mechanism provide excellent insulation, keeping interiors cool in summer and warm in winter, making your home more energy-efficient.",
  },
  {
    icon: Leaf,
    title: "Maximum Water Tightness",
    description: "Udaya uPVC windows and doors are 100% leak-proof, ensuring no water seepage even in heavy rain, providing complete weather protection.",
  },
  {
    icon: Award,
    title: "Enhanced UV Protection & Profile Stability",
    description: "Our double or triple-glazed glass reduces UV radiation, preventing furniture fading. The high-quality profiles resist warping, fading, and weather damage, ensuring long-lasting beauty.",
  },
  {
    icon: Users,
    title: "Superior Wind Resistance",
    description: "Built to withstand high wind speeds and cyclonic conditions, our hurricane bar-reinforced profiles are perfect for high-rise buildings and coastal areas exposed to strong winds and corrosive environments.",
  },
  {
    icon: Building,
    title: "Fire Retardant",
    description: "Made with specially formulated materials, Udaya uPVC windows and doors do not support combustion, offering extra safety and peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Lead-Free",
    description: "Our products are 100% recyclable, lead-free, and energy-efficient, making them a green choice for a sustainable future.",
  },
  {
    icon: Award,
    title: "Long-Lasting Durability",
    description: "Udaya uPVC windows and doors are termite-proof, corrosion-resistant, and weatherproof, ensuring smooth performance and longevity for years to come.",
  },
  {
    icon: Users,
    title: "Minimal Maintenance",
    description: "No need for frequent painting or repairs—just simple cleaning keeps them looking as good as new with very little upkeep.",
  },
  {
    icon: Building,
    title: "Professional Installation & Hassle Delivery",
    description: "Our trained experts ensure a seamless installation with minimal disruption and no mess. We also provide on-time delivery",
  },
  {
    icon: Award,
    title: "WARRANTY",
    description: "We provide a warranty based on our products and business policies. For further warranty details, please check with our team. We ensure great warranty offers on all our products.",
  },
]
export default function About() {
  return (
    <div className="min-h-screen bg-black from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">About <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
            UDAYA INFRASTRUCTURE</span></h1>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden h-0 pb-[75%]">
              <Image
                src="/about-banner-1.jpg"
                alt="Uday Infrastructure Team"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-white">
                Founded in 2015 in Nizamabad, Telangana, Udaya Infrastructure has grown from a small local contractor into a trusted name in the infrastructure industry. Our journey has been built on innovation, quality, and a deep commitment to customer satisfaction.
              </p>
              <p className="text-white">
                With years of experience, we have successfully delivered landmark projects that have transformed urban spaces and improved communities. Now, expanding our expertise, Udaya Architecture specializes in high-quality uPVC & WPC windows and doors, providing durable, stylish, and energy-efficient solutions for homes and businesses.
              </p>
              <p className="text-white">At Udaya, we believe in modern design, sustainability, and long-term reliability. Whether you`&apos;`re looking to upgrade your space or explore franchise opportunities, we are here to help you build a better, stronger, and more beautiful future.
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Advantages of Choosing <span className="font-bold text-4xl bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
            UDAYA INFRASTRUCTURE</span></h2>
        </FadeIn>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div className="bg-white rounded-xl p-6 pb-10 text-center shadow-lg w-104 h-64" whileHover={{ y: -5 }}>
                <div className="inline-block p-3 bg-gray-100 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-black-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-black-600">{value.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
