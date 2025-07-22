"use client"

import { useState } from "react"
import Image from "next/image"

export default function VideoGallery({videos}) {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Videos</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative group cursor-pointer" onClick={() => setSelectedVideo(video)}>
            <div className="relative h-48 rounded-xl overflow-hidden bg-gray-200">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                  <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {video.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
              <button onClick={() => setSelectedVideo(null)} className="text-gray-500 hover:text-gray-700 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Video player would be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
