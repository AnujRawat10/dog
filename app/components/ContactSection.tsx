"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          petName: "",
          service: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormStatus("idle");
  };

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side - Image and Title */}
          <div className='text-center lg:text-left'>
            <h2 className='text-4xl md:text-6xl font-bold text-foreground lowercase mb-6'>
              get in touch
            </h2>
            <h3 className='text-2xl md:text-3xl font-semibold text-pink-soft lowercase mb-8'>
              join the pack
            </h3>

            {/* Adorable Pet Image */}
            <div className='bg-pink-soft rounded-3xl p-12 mb-8 flex items-center justify-center'>
              <div className='text-[8rem] md:text-[12rem]'>🐱</div>
            </div>

            <p className='text-lg text-gray-600 leading-relaxed'>
              Ready to give your pet the best care possible? Get in touch with
              us today and let's discuss how we can help your furry friend live
              their happiest, healthiest life.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className='bg-white rounded-3xl p-8 shadow-lg'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Your Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-soft focus:border-transparent transition-colors'
                  placeholder='Enter your full name'
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-soft focus:border-transparent transition-colors'
                  placeholder='Enter your email address'
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-soft focus:border-transparent transition-colors'
                  placeholder='Enter your phone number'
                />
              </div>

              {/* Pet Name */}
              <div>
                <label
                  htmlFor='petName'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Pet Name
                </label>
                <input
                  type='text'
                  id='petName'
                  name='petName'
                  value={formData.petName}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-soft focus:border-transparent transition-colors'
                  placeholder="What's your pet's name?"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor='service'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Service Interested In
                </label>
                <select
                  id='service'
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-soft focus:border-transparent transition-colors'
                >
                  <option value=''>Select a service</option>
                  <option value='boarding'>Boarding</option>
                  <option value='grooming'>Grooming</option>
                  <option value='retail'>Retail</option>
                  <option value='training'>Training</option>
                  <option value='transport'>Transport</option>
                  <option value='multiple'>Multiple Services</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-soft focus:border-transparent transition-colors resize-none'
                  placeholder="Tell us more about your pet and what you're looking for..."
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-pink-soft hover:bg-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 lowercase'
              >
                send message
              </button>

              {/* Form Status Messages */}
              {formStatus === "success" && (
                <div className='bg-green-50 border border-green-200 rounded-xl p-4 text-green-700'>
                  <strong>Success!</strong> Thank you! Your submission has been
                  received. We'll get back to you soon!
                </div>
              )}

              {formStatus === "error" && (
                <div className='bg-red-50 border border-red-200 rounded-xl p-4 text-red-700'>
                  <strong>Error!</strong> Please fill in all required fields and
                  try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
