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
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
                UDAYA INFRASTRUCTURE
              </span>
            </h1>
          </div>
        </FadeIn>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
          <FadeIn>
            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/about-banner-1.jpg"
                alt="Uday Infrastructure Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Story</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Founded in 2015 in Nizamabad, Telangana, Udaya Infrastructure has grown from a small local contractor into a trusted name in the infrastructure industry. Our journey has been built on innovation, quality, and a deep commitment to customer satisfaction.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                With years of experience, we have successfully delivered landmark projects that have transformed urban spaces and improved communities. Now, expanding our expertise, Udaya Architecture specializes in high-quality uPVC & WPC windows and doors, providing durable, stylish, and energy-efficient solutions for homes and businesses.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                At Udaya, we believe in modern design, sustainability, and long-term reliability. Whether you're looking to upgrade your space or explore franchise opportunities, we are here to help you build a better, stronger, and more beautiful future.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Values Section */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Advantages of Choosing <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
                UDAYA INFRASTRUCTURE
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-lg h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-lg mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">{value.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
