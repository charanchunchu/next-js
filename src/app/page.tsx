"use client"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "../components/external/variants"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import FranchiseSection from "@/components/udaymain/franchise"
import { ThreeDCardDemo } from "@/components/our_products_card/page"

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
    description:"Upgrade your home with high-quality windows and doors. Enjoy more natural light, stylish designs, and improved energy efficiency in every room.",
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
    image: "bulidings.jpg",
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    description: "",
    image: "/Warranty.jpg",
  },
]

const customizationOptions = [
  {
    id: "colors",
    icon: "/colours.png",
    label: "Colours",
    position: { top: "20%", left: "20%" },
    href: "/udayservices#colors",
  },
  {
    id: "glass",
    icon: "/glass.png",
    label: "Glass",
    position: { top: "40%", left: "30%" },
    href: "/udayservices#glass",
  },
  {
    id: "hardware",
    icon: "/hardware.png",
    label: "Hardware",
    position: { top: "60%", left: "46%" },
    href: "/udayservices#hardware",
  },
  {
    id: "mesh",
    icon: "/mesh.png",
    label: "Mesh & Grill",
    position: { top: "40%", right: "30%" },
    href: "/udayservices#mesh",
  },
  {
    id: "laminate",
    icon: "/laminate.png",
    label: "Laminate",
    position: { top: "20%", right: "20%" },
    href: "/udayservices#laminate",
  },
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="min-h-screen">
      <div id="banner" className="min-h-screen bg-black text-white">
        <div
          className="relative h-screen overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}

          <div className="relative h-full">
            <div className="container mx-auto px-4 h-full flex items-center">
              <motion.div variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                className="max-w-xl">
                <h1 className="text-7xl font-bold mb-4 transition-all duration-500 transform">
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text block">{slides[currentSlide].title}</span>
                  <span className="text-white">{slides[currentSlide].subtitle}</span>
                </h1>
                <p className="text-gray-300 mb-8 text-lg transition-all duration-500">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </div>
          </div>



          <div className="absolute bottom-8 right-8 flex gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${currentSlide === index ? "border-orange-500" : "border-transparent"
                  }`}
              >
                <Image
  src={slide.image || "/placeholder.svg"}
  alt={`Slide ${index + 1}`}
  width={500} // Set appropriate width
  height={300} // Set appropriate height
  className="w-full h-full object-cover"
/>
              </button>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-orange-500" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-black text-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/about.jpeg"
                  alt="Our Approach"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4 relative group inline-block">
                  About Us
                  <span className="absolute left-0 bottom-[-6px] h-1 w-10 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-white-600 mb-6">
                At Udaya Infrastructure, we specialize in high-quality uPVC and WPC solutions that enhance homes and buildings. Our expert team focuses on modern design, durability, and sustainability to create doors and windows that are stylish, energy-efficient, and long-lasting. With advanced technology and eco-friendly materials, we ensure our products meet today’s needs while being ready for the future.
                </p>
                <Button size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black">
        <div className="p-20">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center">
              <h2 className="text-4xl text-white text-center font-bold mb-4 relative group inline-block">
              Advantages of
              <span className="absolute left-0 bottom-[-6px] h-1 w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
            <p className="text-4xl text-center mb-12 mt-2">
            <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
            UDAYA INFRASTRUCTURE</span>
            </p>
          </div>
          <StickyScroll content={content} />
        </div>
      </section>
      {/* Customization Section */}
      <section className="bg-gray-900">
        {/* <FadeIn> */}
        <div className="relative py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl text-white text-center font-bold mb-4 relative group inline-block">
                Customization
                <span className="absolute left-0 bottom-[-6px] h-1 w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
            <div className="relative flex justify-center min-h-[600px] mt-12">
              {/* Central Window Image */}
              <div className="relative w-[300px] h-[300px] transition-all duration-500 hover:scale-105">
              <Image
  src="/ezgif.com-webp-to-gif-converter.gif"
  alt="Window Preview"
  width={500} 
  height={300} 
  className="w-full h-full object-contain"
/>
              </div>
              {/* Customization Options */}
              {customizationOptions.map((option) => (
                <Link key={option.id} href={option.href}>
                  <div
                    className="absolute cursor-pointer transform hover:scale-110 transition-transform"
                    style={{
                      ...option.position,
                      zIndex: 5, // Adjusted z-index
                    }}
                  >
                    <div>
                    <Image
  src={option.icon}
  alt={option.label}
  width={80} // Set appropriate width
  height={80} // Set appropriate height
  className="w-20 h-20 object-cover rounded-full z-10"
/>
                    </div>
                    <p className="text-white text-sm mt-2 text-center">
                      {option.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* </FadeIn> */}
      </section>

      <section className="py-20 bg-gray-100">
        <ThreeDCardDemo />
      </section>

      <section className="bg-black text-white">
        <FranchiseSection />
        </section>
    </div>
  )
}

