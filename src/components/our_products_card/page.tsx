"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 sm:py-12 md:py-16">
      {/* Centered Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-6 md:mb-8 relative group inline-block text-center">
        Our Products
        <span className="absolute left-0 bottom-[-6px] h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
      </h2>

      {/* Cards Layout - Responsive Grid with adjusted mobile spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl">
        {/* Card 1 */}
        <CardContainer className="w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white">
              Luxury Doors
            </CardItem>
            <CardItem 
              as="p" 
              translateZ="60" 
              className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-1 sm:mt-2 dark:text-neutral-300"
            >
              Elevate your space with premium door designs.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3 sm:mt-4">
              <Image
                src="/about.jpeg"
                height="1000"
                width="1000"
                className="h-48 sm:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Doors"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-3 sm:mt-6">
              <CardItem 
                translateZ={20} 
                as={Link} 
                href="/udayservices" 
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs font-normal dark:text-white hover:text-orange-500 transition-colors"
              >
                See More →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer className="w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white">
              Premium Windows
            </CardItem>
            <CardItem 
              as="p" 
              translateZ="60" 
              className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-1 sm:mt-2 dark:text-neutral-300"
            >
              Enhance your living space with superior window solutions.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3 sm:mt-4">
              <Image
                src="/Premium_Windows.jpg"
                height="1000"
                width="1000"
                className="h-48 sm:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Windows"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-3 sm:mt-6">
              <CardItem 
                translateZ={20} 
                as={Link} 
                href="/udayservices" 
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs font-normal dark:text-white hover:text-orange-500 transition-colors"
              >
                See More →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 3 */}
        <CardContainer className="w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white">
              Interior Design
            </CardItem>
            <CardItem 
              as="p" 
              translateZ="60" 
              className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-1 sm:mt-2 dark:text-neutral-300"
            >
              Transform your home with stunning interior design ideas.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3 sm:mt-4">
              <Image
                src="/interior.jpg"
                height="1000"
                width="1000"
                className="h-48 sm:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Design"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-3 sm:mt-6">
              <CardItem 
                translateZ={20} 
                as={Link} 
                href="/udayservices" 
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs font-normal dark:text-white hover:text-orange-500 transition-colors"
              >
                See More →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}