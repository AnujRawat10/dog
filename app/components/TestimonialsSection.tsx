export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "I was impressed with the pet boarding facility. My dog was so happy and well-cared for during our vacation. The staff sent daily updates and photos!",
      name: "Jasmine Lee",
      avatar: "👩‍🦱",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The grooming service was excellent. My cat looked amazing and the staff was so gentle and patient. Will definitely be coming back!",
      name: "Patricia Rodriguez",
      avatar: "👩‍🦳",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Professional training program transformed my puppy's behavior. The trainers are knowledgeable and caring. Highly recommend!",
      name: "Chris Martinez",
      avatar: "👨‍🦲",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Amazing retail selection and helpful staff. Found everything I needed for my new kitten. Great quality products at fair prices.",
      name: "David Wilson",
      avatar: "👨‍🦰",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "The transport service was a lifesaver when my dog needed emergency vet care. Quick, safe, and professional service.",
      name: "Jane Smith",
      avatar: "👩‍🦰",
      rating: 5,
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground lowercase mb-6'>
            trusted by humans, loved by pets
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Don&apos;t just take our word for it - here&apos;s what our pet
            parents have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105'
            >
              {/* Stars */}
              <div className='flex mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className='text-yellow-400 text-xl'>
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className='text-gray-700 mb-6 leading-relaxed italic'>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-pink-soft rounded-full flex items-center justify-center text-2xl mr-4'>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className='font-semibold text-foreground'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm text-gray-500'>Pet Parent</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <button className='bg-pink-soft hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:transform hover:scale-105 lowercase'>
            join our happy customers
          </button>
        </div>
      </div>
    </section>
  );
}
