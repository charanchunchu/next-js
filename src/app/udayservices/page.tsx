"use client"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import { ImageGallery } from "./image-gallery"

const products = {
  windows: [
    {
      id: 1,
      src: "/windows1.jpg",
      alt: "Modern Window Design",
      title: "Casement Windows",
      description: "Classic outward or inward opening windows",
    },
    {
      id: 2,
      src: "/windows2.jpg",
      alt: "Sliding Window",
      title: "Sliding Window",
      description: "Smooth-gliding horizontal windows",
    },
    {
      id: 3,
      src: "/window_3.jpeg",
      alt: "Bay Window",
      title: "Bay Window",
      description: "Extended outward projection for a stylish look.",
    },
    {
      id: 4,
      src: "/windows4.jpg",
      alt: "Awning Window",
      title: "Awning Window",
      description: "Top-hinged for better airflow.",
    },
    {
      id: 5,
      src: "/windows5.jpg",
      alt: "Fixed Window",
      title: "Fixed Window",
      description: "Non-operable windows for enhanced aesthetics.",
    },
    {
      id: 6,
      src: "/windows6.jpg",
      alt: "Arch Windows",
      title: "Arch Windows",
      description: "Stylish curved windows for unique designs.",
    },
    {
      id: 7,
      src: "/windows7.webp",
      alt: "French Window",
      title: "French Window",
      description: "Elegant double-door style windows.",
    },
    {
      id: 8,
      src: "/windows8.jpg",
      alt: "Tilt and Turn Window",
      title: "Tilt and Turn Window",
      description: "Versatile windows with dual opening options",
    },
  ],
  interior: [
    {
      id: 1,
      src: "/interior_1",
      alt: "Luxury Door Design",
      title: "Executive Entry Door",
      description: "Solid hardwood entry door with reinforced security features and elegant finish.",
    },
    {
      id: 2,
      src: "/interio_2.jpg",
      alt: "French Door",
      title: "French Door",
      description: "Stylish French door with double-pane glass and intricate detailing.",
    },
    {
      id: 3,
      src: "/interior_3.jpg",
      alt: "Patio Door",
      title: "Patio Door",
      description: "Sliding patio door with energy-efficient glass and smooth operation.",
    },
    {
      id: 4,
      src: "/interior_4",
      alt: "Barn Door",
      title: "Barn Door",
      description: "Rustic barn door with sliding mechanism and vintage hardware.",
    },
    {
      id: 5,
      src: "/interior_9.png",
      alt: "Panel Door",
      title: "Panel Door",
      description: "Classic panel door with raised panels and durable construction.",
    },
    {
      id: 6,
      src: "/interio_11.webp",
      alt: "Bi-Fold Door",
      title: "Bi-Fold Door",
      description: "Space-saving bi-fold door with smooth folding action and modern design.",
    },
    {
      id: 7,
      src: "/interior_7",
      alt: "Dutch Door",
      title: "Dutch Door",
      description: "Charming Dutch door with top and bottom halves that open independently.",
    },
    {
      id: 8,
      src: "/inter-8.jpg",
      alt: "Storm Door",
      title: "Storm Door",
      description: "Durable storm door with full-view glass and protective screen.",
    },
  ],
  doors: [
    {
      id: 1,
      src: "/doors1.webp",
      alt: "sliding doors",
      title: "sliding doors",
      description: "Space-saving doors with smooth movement.",
    },
    {
      id: 2,
      src: "/doors2.webp",
      alt: "Slide and Fold Door",
      title: "Slide and Fold Door",
      description: "A modern space-saving door that smoothly folds and slides, offering a seamless transition between spaces.",
    },
    {
      id: 3,
      src: "/doors3.webp",
      alt: "French doors",
      title: "French doors",
      description: "Double-leaf doors for a sophisticated look.",
    },
    {
      id: 4,
      src: "/doors4.avif",
      alt: "Bi-Fold Doors",
      title: "Bi-Fold Doors",
      description: " Foldable panels for a wide opening.",
    },
    {
      id: 5,
      src: "/doors5.jpg",
      alt: "Lift & Slide Doors",
      title: "Lift & Slide Doors",
      description: "Advanced sliding mechanism for large spaces.",
    },
    {
      id: 6,
      src: "/doors6.jpg",
      alt: "Patio Doors",
      title: "Patio Doors",
      description: "Large glass doors for outdoor connections.",
    },
    {
      id: 7,
      src: "/doors7.jpg",
      alt: "Main Entrance Doors",
      title: "Main Entrance Doors",
      description: "Stylish and secure entryway solutions.",
    },
    {
      id: 8,
      src: "/doors8.jpg",
      alt: "Soundproof Doors",
      title: "Soundproof Doors",
      description: "Specially designed doors with noise-reducing insulation, ensuring privacy and a quieter indoor environment.",
    },
  ],
}
const glassTypes = [
  {
    name: "Tinted Glass",
    description: "Reduce glare and filter sunlight while maintaining a stylish look.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Laminated Glass",
    description: "Ensure enhanced security with impact-resistant, durable glass.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Clear Glass",
    description: "Enjoy uninterrupted, crystal-clear views for a bright and open feel.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Frosted Glass",
    description: "Achieve superior privacy without compromising on aesthetics.",
    image: "/placeholder.svg?height=100&width=100",
  },
]
const woodFinishes = [
  { name: "Walnut", color: "rgb(89, 47, 29)" },
  { name: "Dark Oak", color: "rgb(52, 28, 17)" },
  { name: "Rustic", color: "rgb(101, 67, 33)" },
  { name: "Mahagoni", color: "rgb(103, 28, 28)" },
  { name: "Golden Oak", color: "rgb(184, 115, 51)" },
]
const glazingTypes = [
  {
    title: "Single Glazing",
    description: "Single glazing includes just one single layer of glass. with an air space left in between the two for better thermal performance.",
    image: "/singleglazing.png",
  },
  {
    title: "Double Glazing",
    description:
      "In double glazing, two layers of glass are sealed together with an air space left in between the two for better thermal performance.",
    image: "/doubleglazing.png",
  },
  {
    title: "Triple Glazing",
    description:
      "Triple glazing refers to three layers of glass sealed together with an air space left in between the three layers for better thermal performance.",
    image: "/tripleglazing.png",
  },
];
const meshTypes = [
  {
    title: "SS Mesh",
    description:
      "A strong and durable mesh option that offers clear visibility to the outside. It gives improved ventilation and is corrosion and rust free.",
  },
  {
    title: "Fiber Mesh",
    description:
      "Fiber mess coated with Vinyl is commonly preferred as a mesh material in windows & doors. It does not corrode, dent, rust or unravel and is affordable and easy to install.",
  },
]
export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <AnimatePresence>
        <div className="container-fluid mx-auto px-4 py-16">
          <FadeIn >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Products & Services</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Discover our premium collection of windows and doors, backed by industry-leading warranty coverage.
            </p>
          </FadeIn>
          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="windows">Windows</TabsTrigger>
              <TabsTrigger value="doors">Doors</TabsTrigger>
              <TabsTrigger value="interior">Interior</TabsTrigger>
              {/* <TabsTrigger value="warranty">Warranty</TabsTrigger> */}
            </TabsList>
            <TabsContent value="windows">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Premium Windows</h2>
                <ImageGallery images={products.windows} columns={4} />
              </div>
            </TabsContent>
            <TabsContent value="doors">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Luxury Doors</h2>
                <ImageGallery images={products.doors} columns={4} />
              </div>
            </TabsContent>
            <TabsContent value="interior">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Interior Design</h2>
                <ImageGallery images={products.interior} columns={4} />
              </div>
            </TabsContent>
          </Tabs>
          {/* Glass Section */}
          <section id="glass" className="relative py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn key="section-1" direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="relative h-[400px]">
                    <Image
                      src="/glass_1"
                      alt="Glass Options"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </FadeIn>
                <FadeIn key="section-2" direction="down" delay={0.2} duration={0.8} amount={0.5}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Glass Options – Style, Security & Comfort</h2>
                    <p className="text-black-600 mb-8">
                      At Udaya Doors, we offer a wide range of premium glass options to suit your needs. Whether you&apos;re looking for sunlight control, enhanced security, breathtaking views, or added privacy, we have the perfect solution for you.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {glassTypes.map((type) => (
                        <motion.div key={type.name} className="p-4 bg-white rounded-lg shadow-md" whileHover={{ y: -5 }}>
                          <h3 className="font-semibold text-black mb-2">{type.name}</h3>
                          <p className="text-sm text-black">{type.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          {/* Lamination Section */}
          <section id="laminate" className="relative py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Lamination</h2>
                    <p className="text-gray-600 mb-8">
                      At Udaya Doors, we offer a wide range of customization options to enhance the aesthetics, security, and functionality of your spaces.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {woodFinishes.map((finish) => (
                        <motion.div key={finish.name} className="text-center" whileHover={{ scale: 1.05 }}>
                          <div className="w-full h-24 rounded-lg mb-2" style={{ backgroundColor: finish.color }} />
                          <p className="text-sm font-medium">{finish.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="relative h-[400px]">
                    <Image
                      src="/lamination_1.jpg"
                      alt="Lamination Options"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          {/* Colored Profile Section */}
          <section id="colors" className="relative py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="relative h-[400px]">
                    <Image
                      src="/lamination1.jpeg"
                      alt="Colored Profiles"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Coloured Profile</h2>
                    <p className="text-gray-300 mb-6 md:mb-8">
                      Personalize your uPVC windows and doors with bold and stylish colors to match your interior and exterior themes.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 bg-white text-black rounded-lg text-sm sm:text-base">Elegant-White</div>
                      <div className="p-3 sm:p-4 bg-[#654321] text-white rounded-lg text-sm sm:text-base">Dark Oak</div>
                      <div className="p-3 sm:p-4 bg-[#D4A017] text-white rounded-lg text-sm sm:text-base">Golden Oak</div>
                      <div className="p-3 sm:p-4 bg-[#4B2C20] text-white rounded-lg text-sm sm:text-base">Mahogany</div>
                      <div className="p-3 sm:p-4 bg-[#8B4513] text-white rounded-lg text-sm sm:text-base">Walnut</div>
                      <div className="p-3 sm:p-4 bg-gray-400 text-black rounded-lg text-sm sm:text-base">Grey/Platinum</div>
                      <div className="p-3 sm:p-4 bg-black text-white rounded-lg text-sm sm:text-base col-span-2 sm:col-span-1">Bold-Black</div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          {/* Glazing Types Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-6 text-center">Glazing Types</h2>
                <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                  Choose between single, double, or triple-glazed glass units for Udaya Doors uPVC windows and doors. Enhance thermal efficiency and for added security, opt for toughened glass.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                {glazingTypes.map((type, index) => (
                  <FadeIn key={type.title} delay={index * 0.1}>
                    <motion.div className="flex flex-col items-center space-y-4" whileHover={{ y: -5 }}>
                      <Image src={type.image} alt={type.title} width={128} height={128} className="h-auto" />
                      <div className="text-center">
                        <h3 className="text-lg font-bold">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
          {/* Mesh Options Section */}
          <section id="hardware" className="relative py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="relative h-[400px]">
                    <Image
                      src="/wire_1.jpg"
                      alt="Mesh Options"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Mesh Options</h2>
                    <p className="text-gray-600 mb-8">
                      Choose from fiberglass, stainless steel, or pet-resistant mesh for Udaya Doors uPVC windows and doors. Keep mosquitoes and insects out while maintaining clear views and proper ventilation.
                    </p>
                    <div className="space-y-6">
                      {meshTypes.map((type) => (
                        <motion.div key={type.title} className="p-6 bg-gray-50 rounded-lg" whileHover={{ scale: 1.02 }}>
                          <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                          <p className="text-gray-600">{type.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          {/* Grill Section */}
          <section id="mesh" className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Grill Options</h2>
                    <p className="text-gray-600 mb-8">
                      Enhance both security and aesthetics with customized grills from Udaya Doors. Choose between grills fixed directly onto the uPVC window frame or the traditional installation system to complement your space.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="relative h-[400px]">
                    <Image
                      src="/grill_1.jpg"
                      alt="Grill Options"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          {/* Hardware Options Section */}
          <section className="relative py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div className="relative h-[400px]">
                    <Image
                      src="/hardware_12.png"
                      alt="Hardware Options"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.5}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Hardware Options</h2>
                    <p className="text-gray-300 mb-8">
                      Customize every detail of your windows and doors with Udaya Doors premium hardware options. Select from a range of handles, locks, hinges, and multi-point locking systems to match your style and security needs.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          {/* Application Section */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8">
              <div className="text-center lg:text-left lg:w-1/3">
                <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text font-bold mb-4 relative group inline-block">
                  Applications
                  <span className="absolute left-0 bottom-[-4px] h-1 w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-gray-600 mb-4 md:mb-0">
                  Our products are perfect for various applications including villas, apartments, and commercial spaces. Each solution is tailored to meet specific architectural and functional requirements.
                </p>
              </div>
              <div className="w-full">
            <Image 
              src="/villa-window-app-pic.jpg" 
              alt="Villa Window" 
              width={1200}
              height={800}
              className="w-full object-cover"
            />
              </div>
            </div>
          </section>
        </div>
      </AnimatePresence>
    </div>
  )
}