"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: number
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Responsive column classes
  const getGridCols = () => {
    if (columns === 4) return "md:grid-cols-2 lg:grid-cols-4"
    if (columns === 3) return "md:grid-cols-2 lg:grid-cols-3"
    return "md:grid-cols-2"
  }

  return (
    <>
      <div className={`grid grid-cols-1 ${getGridCols()} gap-4`}>
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image 
              src={image.src || "/placeholder.svg"} 
              alt={image.alt} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold">{image.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}