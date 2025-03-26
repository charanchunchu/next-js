"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

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

export default function CustomizationSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="bg-gray-900">
      <div className="relative py-12 md:py-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 relative group inline-block">
              Customization
              <span className="absolute left-0 bottom-[-6px] h-1 w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </div>

          {/* Mobile/Tablet Layout (below 1000px) */}
          {!isLargeScreen && (
            <div className="flex flex-col items-center min-h-[500px] md:min-h-[600px] mt-8 md:mt-12">
              {/* Central Window Image */}
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] transition-all duration-500 hover:scale-105">
                <Image
                  src="/ezgif.com-webp-to-gif-converter.gif"
                  alt="Window Preview"
                  width={500}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Options Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-md">
                {customizationOptions.map((option) => (
                  <Link key={option.id} href={option.href}>
                    <div className="cursor-pointer transform hover:scale-110 transition-transform text-center">
                      <div className="mx-auto">
                        <Image
                          src={option.icon}
                          alt={option.label}
                          width={70}
                          height={70}
                          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-lg mx-auto"
                        />
                      </div>
                      <p className="text-white text-sm mt-2">{option.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Desktop Layout (1000px and above) */}
          {isLargeScreen && (
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
              
              {/* Positioned Options */}
              {customizationOptions.map((option) => (
                <Link key={option.id} href={option.href}>
                  <div
                    className="absolute cursor-pointer transform hover:scale-110 transition-transform"
                    style={{
                      ...option.position,
                      zIndex: 5,
                    }}
                  >
                    <div>
                      <Image
                        src={option.icon}
                        alt={option.label}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-full shadow-lg"
                      />
                    </div>
                    <p className="text-white text-sm mt-2 text-center">
                      {option.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}