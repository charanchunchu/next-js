"use client"

import { motion } from "motion/react";
import { useState, useEffect, useCallback } from "react"
import { fadeIn } from "../pages/variants"
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "UDAY",
    subtitle: "WINDOWS & DOORS",
    description:
      "Transforming homes with premium windows and doors. We bring light, style, and energy efficiency to every space.",
    image: "/Klissa-Wood.jpg",
  },
  {
    id: 2,
    title: "MODERN",
    subtitle: "INTERIORS",
    description: "Elevate your living spaces with our contemporary interior solutions and expert craftsmanship.",
    image: "/modern_interior",
  },
  {
    id: 3,
    title: "MODERN",
    subtitle: "ARCHITECTURE",
    description: "Exploring the heights of modern architectural marvels. Where innovation meets design excellence.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&q=80",
  },
  {
    id: 4,
    title: "LIFETIME",
    subtitle: "WARRANTY",
    description: "We stand behind our products with comprehensive warranty coverage for your peace of mind.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&q=80",
  },
]
const windowColors = [
  { id: 'brown', src: '/half.png', label: 'Classic Brown' },
  { id: 'white', src: '/customization-pic.jpg', label: 'Pure White' },
  { id: 'black', src: '/lovable-uploads/window-black.png', label: 'Modern Black' },
  { id: 'gray', src: '/lovable-uploads/window-gray.png', label: 'Urban Gray' },
];
export default function Banner() {
//   const [selectedColor, setSelectedColor] = useState(windowColors[0]);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

//   const prevSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }, [])

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
  width={96} // Adjust dimensions
  height={96} 
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
      </div>
  );
}
