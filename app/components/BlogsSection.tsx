export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "Professional Tips & Heartwarming Pet Stories",
      summary:
        "Discover expert advice from our veterinarians and grooming specialists, plus read inspiring stories from our pet community that will warm your heart.",
      image: "📖",
      bgColor: "bg-blue-soft",
      readTime: "5 min read",
      category: "Tips & Stories",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Keeping Your Pet Happy & Healthy",
      summary:
        "Everything you need to know about pet nutrition, exercise, mental stimulation, and preventive care to ensure your furry friend lives their best life.",
      image: "🏥",
      bgColor: "bg-green-soft",
      readTime: "8 min read",
      category: "Health & Wellness",
    },
    {
      id: 3,
      title: "How to Prepare Your Pet for Boarding: A Stress-Free Guide",
      summary:
        "Step-by-step instructions to make your pet's boarding experience comfortable and anxiety-free, including what to pack and how to ease separation anxiety.",
      image: "🎒",
      bgColor: "bg-yellow-soft",
      readTime: "6 min read",
      category: "Boarding Guide",
    },
  ];

  return (
    <section id='blogs' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground lowercase mb-6'>
            wag-worthy reads for humans!
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Stay informed with our latest articles, tips, and stories from the
            world of pet care and wellness.
          </p>
        </div>

        {/* Blog Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className='bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group hover:transform hover:scale-105'
            >
              {/* Blog Image */}
              <div
                className={`${blog.bgColor} h-48 flex items-center justify-center text-6xl transition-all duration-300 group-hover:scale-110`}
              >
                {blog.image}
              </div>

              {/* Blog Content */}
              <div className='p-6'>
                {/* Category & Read Time */}
                <div className='flex items-center justify-between mb-3'>
                  <span className='bg-pink-soft text-white px-3 py-1 rounded-full text-xs font-medium uppercase'>
                    {blog.category}
                  </span>
                  <span className='text-sm text-gray-500'>{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-foreground mb-3 leading-tight'>
                  {blog.title}
                </h3>

                {/* Summary */}
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {blog.summary}
                </p>

                {/* Read More Button */}
                <button className='text-pink-soft hover:text-pink-600 font-medium transition-colors duration-300 lowercase flex items-center group-hover:translate-x-1'>
                  read more
                  <svg
                    className='w-4 h-4 ml-1 transition-transform duration-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className='text-center mt-12'>
          <button className='bg-pink-soft hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:transform hover:scale-105 lowercase'>
            view all articles
          </button>
        </div>
      </div>
    </section>
  );
}
