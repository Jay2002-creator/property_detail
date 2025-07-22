"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function VideoGallery({ videos }) {
  const [playingVideoId, setPlayingVideoId] = useState(null)

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Videos</h2>

      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            481: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination"
          }}
          className="pb-10" // Add padding to make space for the dots
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="relative group cursor-pointer">
                <div className="relative h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden bg-gray-200">
                  {playingVideoId === video.id ? (
                    <iframe
                      src={video.url.replace("watch?v=", "embed/")}
                      title={video.title}
                      className="w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        onClick={() => setPlayingVideoId(video.id)}
                      />
                      <div
                        className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors"
                        onClick={() => setPlayingVideoId(video.id)}
                      >
                        <div className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                          <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination mt-6 flex justify-center" />
      </div>
    </div>
  )
}
