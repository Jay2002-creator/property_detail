"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Thumbs]}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-2xl overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-80 md:h-[500px] lg:h-[600px] bg-gray-200">
              <Image
                src={img || "/placeholder.svg"}
                alt={`Image ${i}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={6} // tighter spacing
        watchSlidesProgress
        breakpoints={{
          320: { slidesPerView: 4 },
          480: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 9 },
        }}
        className="mt-4 max-w-full overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-gray-300">
              <Image
                src={img || "/placeholder.svg"}
                alt={`Thumb ${i}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
