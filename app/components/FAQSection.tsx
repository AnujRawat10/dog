"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      category: "boarding",
      question: "What should I bring when boarding my pet?",
      answer:
        "Please bring your pet's regular food, any medications they need, their favorite toy or blanket for comfort, and their vaccination records. We provide bedding, bowls, and toys, but familiar items help reduce stress. Don't forget to include detailed feeding instructions and emergency contact information.",
    },
    {
      id: 2,
      category: "boarding",
      question: "What if my pet has special needs or medical conditions?",
      answer:
        "We are experienced in caring for pets with special needs and medical conditions. Our staff can administer medications, follow special diets, and provide extra attention as needed. Please inform us of any medical conditions during booking so we can prepare accordingly and ensure your pet receives the best possible care.",
    },
    {
      id: 3,
      category: "grooming",
      question: "How often should I groom my pet?",
      answer:
        "The frequency depends on your pet's breed, coat type, and lifestyle. Generally, dogs should be groomed every 4-6 weeks, while cats typically need grooming every 6-8 weeks. Pets with longer coats or skin conditions may need more frequent grooming. Our professionals can create a personalized grooming schedule for your pet.",
    },
    {
      id: 4,
      category: "grooming",
      question: "What grooming services do you offer?",
      answer:
        "We offer comprehensive grooming services including bathing, brushing, nail trimming, ear cleaning, teeth brushing, haircuts, and styling. We also provide specialty services like flea treatments, de-shedding treatments, and aromatherapy baths. All services are tailored to your pet's specific needs and comfort level.",
    },
    {
      id: 5,
      category: "retail",
      question: "Do you carry premium pet food brands?",
      answer:
        "Yes, we stock a wide variety of premium and specialty pet food brands including grain-free, organic, and prescription diets. Our knowledgeable staff can help you choose the best nutrition for your pet's age, size, and health requirements. We also offer special ordering for hard-to-find brands.",
    },
    {
      id: 6,
      category: "training",
      question: "What age should I start training my puppy?",
      answer:
        "Puppies can start basic training as early as 8-10 weeks old. Early socialization and basic obedience training are crucial for proper development. We offer puppy classes that focus on socialization, basic commands, and house training. Adult dogs can also benefit from training at any age - it's never too late to start!",
    },
    {
      id: 7,
      category: "transport",
      question: "How do you ensure pet safety during transport?",
      answer:
        "Safety is our top priority. All our vehicles are equipped with secure pet carriers and safety restraints. Our drivers are trained in pet handling and emergency procedures. We maintain comfortable temperatures, provide water breaks for longer trips, and carry first aid supplies. GPS tracking allows you to monitor your pet's journey.",
    },
    {
      id: 8,
      category: "general",
      question: "What are your operating hours?",
      answer:
        "We're open Monday through Saturday from 7:00 AM to 7:00 PM, and Sundays from 9:00 AM to 5:00 PM. Emergency services and extended hours are available by appointment. Holiday hours may vary, so please check our website or call ahead during holiday periods.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground lowercase mb-6'>
            frequently asked questions about
          </h2>
          <p className='text-lg text-gray-600'>
            boarding, grooming, retail, training, transport & more
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className='bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md'
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200'
              >
                <div className='flex items-center space-x-3'>
                  <span className='bg-pink-soft text-white px-3 py-1 rounded-full text-xs font-medium uppercase'>
                    {faq.category}
                  </span>
                  <span className='font-semibold text-foreground'>
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openAccordion === faq.id ? "transform rotate-180" : ""
                  }`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {openAccordion === faq.id && (
                <div className='px-6 pb-4 border-t border-gray-100'>
                  <p className='text-gray-600 leading-relaxed pt-4'>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <p className='text-gray-600 mb-4'>Still have questions?</p>
          <button className='bg-pink-soft hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:transform hover:scale-105 lowercase'>
            contact us
          </button>
        </div>
      </div>
    </section>
  );
}
