

export default function LocationMap({location}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Neighborhood</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-600">Interactive map would be displayed here</p>
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Address</h3>
            <p className="text-gray-700">{location.address}</p>
            <p className="text-gray-700">
              {location.city}, {location.state} {location.zipCode}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Nearby Amenities</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Malibu Elementary School - 0.5 miles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Malibu Beach - 0.3 miles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Shopping Center - 1.2 miles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Hospital - 2.1 miles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
