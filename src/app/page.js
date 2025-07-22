"use client"
import ImageSlider from "./components/ImageSlider"
import VideoGallery from "./components/VideoGallery"
import PropertyInfo from "./components/PropertyInfo"
import LocationMap from "./components/LocationMap"
import Features from "./components/Features"
import ContactAgent from "./components/ContactAgent"

// Sample property data
const propertyData = {
  id: 1,
  title: "Luxury Modern Villa with Ocean View",
  price: 2850000,
  location: {
    address: "1234 Ocean Drive, Malibu, CA 90265",
    city: "Malibu",
    state: "California",
    zipCode: "90265",
    coordinates: { lat: 34.0259, lng: -118.7798 },
  },
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  videos: [
    { id: 1, title: "Property Tour", thumbnail: "/placeholder.svg?height=300&width=400", url: "#" },
    { id: 2, title: "Neighborhood Overview", thumbnail: "/placeholder.svg?height=300&width=400", url: "#" },
    { id: 3, title: "Drone Footage", thumbnail: "/placeholder.svg?height=300&width=400", url: "#" },
  ],
  details: {
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    lotSize: "0.75 acres",
    yearBuilt: 2019,
    propertyType: "Single Family Home",
    parking: "3-car garage",
    hoa: "$450/month",
  },
  features: [
    "Ocean View",
    "Swimming Pool",
    "Home Theater",
    "Wine Cellar",
    "Gourmet Kitchen",
    "Master Suite",
    "Guest House",
    "Landscaped Garden",
    "Smart Home Technology",
    "Solar Panels",
    "Security System",
    "Fireplace",
  ],
  description:
    "Experience luxury living in this stunning modern villa featuring breathtaking ocean views, premium finishes, and state-of-the-art amenities. This architectural masterpiece offers the perfect blend of comfort and sophistication.",
  agent: {
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    email: "sarah@luxuryrealty.com",
    image: "/placeholder.svg?height=100&width=100",
  },
}

export default function PropertyDetail() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Title and Price */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{propertyData.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{propertyData.location.address}</p>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-blue-600">${propertyData.price.toLocaleString()}</span>
          </div>
        </div>

        {/* Image Slider */}
        <div className="mb-12">
          <ImageSlider images={propertyData.images} />
        </div>

        {/* Video Gallery */}
        <div className="mb-12">
          <VideoGallery videos={propertyData.videos} />
        </div>

        {/* Property Information Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <PropertyInfo property={propertyData} />
          </div>
          <div>
            <ContactAgent agent={propertyData.agent} />
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <Features features={propertyData.features} />
        </div>

        {/* Location */}
        <div className="mb-12">
          <LocationMap location={propertyData.location} />
        </div>
      </main>
    </div>
  )
}
