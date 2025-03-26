"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "../components/external/variants"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import FranchiseSection from "@/components/udaymain/franchise"
import { ThreeDCardDemo } from "@/components/our_products_card/page"
import CustomizationSection from "@/components/customize/page"

const content = [
  {
    title: "High Wall-Thickness",
    description:
      "High Wall Thickness – Our uPVC and WPC products are built with extra wall thickness to ensure superior strength, durability, and resistance against harsh weather conditions, making them perfect for long-lasting use.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        High Wall-Thickness
      </div>
    ),
  },
  {
    title: "Multi Chambered",
    description:
      "The advanced multi-chambered structure enhances thermal insulation and soundproofing, keeping your home quieter and more energy-efficient while reducing electricity costs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Multi Chambered
      </div>
    ),
  },
  {
    title: "7-Parts of Titanium",
    description:
      "Engineered with 7 parts of titanium, our uPVC profiles offer exceptional stability and durability, preventing warping or bending over time.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        7-Parts of Titanium
      </div>
    ),
  },
  {
    title: "RoHS Certified",
    description:
      "Our materials are free from hazardous substances and meet strict safety and environmental standards, ensuring a healthier living environment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        RoHS Certified
      </div>
    ),
  },
  {
    title: "24/7 Quality Monitoring",
    description:
      "We maintain continuous quality checks at every stage of production to guarantee the highest level of precision, strength, and reliability in our products.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        24/7 Quality Monitoring
      </div>
    ),
  },
  {
    title: "100% Recyclable, Lead-Free",
    description:
      "Our commitment to sustainability ensures that all our uPVC and WPC products are lead-free and fully recyclable, contributing to a greener and healthier future for the planet.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        100% Recyclable, Lead-Free
      </div>
    ),
  },
];
const slides = [
  {
    id: 1,
    title: "UDAY",
    subtitle: "WINDOWS & DOORS",
    description: "Upgrade your home with high-quality windows and doors. Enjoy more natural light, stylish designs, and improved energy efficiency in every room.",
    image: "/1674035125_banner.webp",
  },
  {
    id: 2,
    title: "MODERN",
    subtitle: "INTERIORS",
    description: "Transform your home with stylish, expertly crafted interiors designed for comfort and elegance.",
    image: "/stylish-luxury-modern-kitchen-designs.jpg",
  },
  {
    id: 3,
    title: "MODERN",
    subtitle: "ARCHITECTURE",
    description: "Experience cutting-edge design where innovation meets style, creating timeless architectural beauty.",
    image: "/bulidings.jpg",
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    description: "",
    image: "/Warranty.jpg",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {}, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 3000)
    }
    return () => clearInterval(intervalId)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <div id="banner" className="min-h-screen bg-black text-white">
  <div
    className="relative h-screen overflow-hidden"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${slide.image})` }} 
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    ))}

    <div className="relative h-full flex items-center">
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
        <motion.div 
          variants={fadeIn("up", 0.1)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-xl px-4 md:px-0"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-500 transform">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text block">
              {slides[currentSlide].title}
            </span>
            <span className="text-white text-2xl md:text-4xl">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="text-gray-300 mb-6 text-base md:text-lg transition-all duration-500">
            {slides[currentSlide].description}
          </p>
        </motion.div>
      </div>
    </div>

    {/* Slide Thumbnails - Visible on all screens */}
    <div className="absolute bottom-8 right-4 md:right-8 flex gap-2 lg:gap-4">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => setCurrentSlide(index)}
          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
            currentSlide === index ? "border-orange-500" : "border-transparent"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>

    {/* Slide Indicators */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-500 ${
            currentSlide === index ? "w-6 md:w-8 bg-orange-500" : "bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>
</div>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-black text-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <Image
                  src="/about.jpeg"
                  alt="Our Approach"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative group inline-block">
                  About Us
                  <span className="absolute left-0 bottom-[-6px] h-1 w-10 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  At Udaya Infrastructure, we specialize in high-quality uPVC and WPC solutions that enhance homes and buildings. Our expert team focuses on modern design, durability, and sustainability to create doors and windows that are stylish, energy-efficient, and long-lasting.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="py-2 rounded-xl text-xs md:text-sm font-normal text-white hover:text-orange-400 transition-colors">
                    <Link href="/udayabout">Learn More →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black">
        <div className="p-8 md:p-12 lg:p-20">
          <div className="container mx-auto px-4 mb-8 md:mb-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 relative group inline-block">
                Advantages of
                <span className="absolute left-0 bottom-[-6px] h-1 w-16 md:w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12 mt-2">
              <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
                UDAYA INFRASTRUCTURE
              </span>
            </p>
          </div>
          <StickyScroll content={content} />
        </div>
      </section>

      {/* Customization Section */}
      <section className="bg-gray-900">
        <CustomizationSection />
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <ThreeDCardDemo />
      </section>

      {/* Franchise Section */}
      <section className="bg-black text-white">
        <FranchiseSection />
      </section>
    </div>
  )
}