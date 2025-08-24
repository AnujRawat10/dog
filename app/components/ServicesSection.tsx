export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "boarding",
      description:
        "Safe and comfortable boarding facilities for your pets when you're away. Professional care 24/7.",
      image: "🏠",
      bgColor: "#e0ce8a",
    },
    {
      id: 2,
      title: "grooming",
      description:
        "Professional grooming services to keep your pet looking and feeling their best.",
      image: "✂️",
      bgColor: "#9acbda",
    },
    {
      id: 3,
      title: "retail",
      description:
        "Premium pet supplies, toys, food, and accessories for all your pet's needs.",
      image: "🛍️",
      bgColor: "#e3b3c3",
    },
    {
      id: 4,
      title: "training",
      description:
        "Professional training programs to help your pet learn good behavior and social skills.",
      image: "🎾",
      bgColor: "#98cbbc",
    },
    {
      id: 5,
      title: "transport",
      description:
        "Safe and reliable pet transportation services for vet visits, grooming, or travel.",
      image: "🚗",
      bgColor: "#e0ce8a",
    },
  ];

  return (
    <section
      id='services'
      className='py-20'
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-slide-up'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 lowercase mb-6'>
            comprehensive pet services, delivered with love
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:transform hover:scale-105 border border-white/20'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div
                className='h-48 flex items-center justify-center text-6xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden'
                style={{ backgroundColor: service.bgColor }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent'></div>
                <span className='relative z-10 transform transition-transform duration-500 group-hover:rotate-12'>
                  {service.image}
                </span>
              </div>

              {/* Service Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-800 lowercase mb-3 transition-colors duration-300 group-hover:text-gray-900'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {service.description}
                </p>
                <button
                  className='btn-primary text-sm lowercase transform transition-all duration-300 hover:shadow-lg'
                  style={{
                    backgroundColor: service.bgColor + "99",
                    color: "#374151",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = service.bgColor;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = service.bgColor + "99";
                  }}
                >
                  book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
