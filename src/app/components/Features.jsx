

export default function Features({features}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
            <span className="text-gray-800 font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
