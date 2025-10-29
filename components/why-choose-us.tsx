"use client"

const features = [
  {
    icon: "⭐",
    title: "Premium Games",
    description: "Access exclusive, high-quality condo games with regular updates",
  },
  {
    icon: "👥",
    title: "Active Community",
    description: "Join thousands of players in our vibrant gaming community",
  },
  {
    icon: "⚡",
    title: "Fast Access",
    description: "Quick loading times and instant access to all games",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-gray-400">
            Experience the best Roblox condo games with premium features and active community
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-900/30 border border-red-700/50 rounded-lg p-8 text-center hover:border-red-600 transition"
            >
              <div className="text-5xl mb-4 flex justify-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
