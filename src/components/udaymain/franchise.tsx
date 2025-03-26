import { useEffect, useRef, useState } from "react";
import { Building2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"

export default function FranchiseSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 200);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6">
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="text-center">
          {/* Tags - now responsive with proper spacing */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
              <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-100 bg-gradient-to-r from-blue-50 to-purple-50">
                <Building2 className="mr-2 h-4 w-4" />
                Franchise Opportunities
              </span>
            </div>
            <Link href="/udaycontact">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow"></div>
                <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-purple-600 ring-1 ring-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </span>
              </div>
            </Link>
          </div>
          
          {/* Title with responsive sizing */}
          <motion.h1
            key={isVisible ? "visible" : "hidden"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Franchise with UDAYA INFRA
          </motion.h1>
          
          {/* Paragraph with responsive sizing */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            Looking to start your own business? Collaborate with us and become a franchise partner!
          </p>
        </div>
      </div>
    </section>
  );
}