
export default function PropertyInfo({property}) {
  const { details, description } = property

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">{details.bedrooms}</p>
            <p className="text-gray-600">Bedrooms</p>
          </div>

          <div className="text-center">
            <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">{details.bathrooms}</p>
            <p className="text-gray-600">Bathrooms</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">{details.sqft.toLocaleString()}</p>
            <p className="text-gray-600">Sq Ft</p>
          </div>

          <div className="text-center">
            <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">{details.yearBuilt}</p>
            <p className="text-gray-600">Year Built</p>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Property Type</span>
            <span className="font-semibold text-gray-900">{details.propertyType}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Lot Size</span>
            <span className="font-semibold text-gray-900">{details.lotSize}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Parking</span>
            <span className="font-semibold text-gray-900">{details.parking}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">HOA Fees</span>
            <span className="font-semibold text-gray-900">{details.hoa}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-4">About This Property</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
