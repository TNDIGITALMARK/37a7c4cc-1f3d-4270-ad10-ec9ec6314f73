/**
 * ServicePro - Professional Profile and Booking Page
 * Page 2: Professional Profile with booking functionality
 * Matches design reference pixel-perfect styling
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle, Calendar, Clock, MapPin, Phone, Mail, Shield, Award } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getProfessionalById, simulateBooking } from '@/lib/mock-data';
import { useParams } from 'next/navigation';

export default function ProfessionalProfilePage() {
  const params = useParams();
  const professionalId = params.id as string;
  const professional = getProfessionalById(professionalId);

  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'portfolio'>('services');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [estimatedHours, setEstimatedHours] = useState(2);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!professional) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Professional Not Found</h2>
            <p className="text-gray-600 mb-6">The professional you're looking for doesn't exist.</p>
            <Link href="/" className="text-[hsl(14,100%,60%)] hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    const result = simulateBooking(
      professional.id,
      professional.specialty,
      `${bookingDate}T${bookingTime}`,
      estimatedHours
    );

    if (result.success) {
      setBookingSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container-max">
          {/* Hero Section */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100">
                      <Image
                        src={professional.photo}
                        alt={professional.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    {professional.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1.5">
                        <CheckCircle className="w-5 h-5 text-white" fill="currentColor" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{professional.name}</h1>
                      {professional.verified && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-600 mb-3">{professional.specialty}</p>

                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                        <span className="text-lg font-semibold text-gray-900">{professional.rating}</span>
                        <span className="text-gray-600">({professional.reviews.length} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award className="w-5 h-5" />
                        <span>{professional.jobsCompleted} jobs completed</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{professional.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {professional.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed">{professional.bio}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Hourly Rate</span>
                    <span className="text-2xl font-bold text-[hsl(14,100%,60%)]">
                      ${professional.hourlyRate.min}-${professional.hourlyRate.max}/hr
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Widget */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Book This Professional</h3>

                  {bookingSuccess ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Booking Confirmed!</h4>
                      <p className="text-sm text-gray-600">
                        {professional.name} will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleBooking();
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select Date
                        </label>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(14,100%,60%)] focus:ring-2 focus:ring-[hsl(14,100%,60%)]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select Time
                        </label>
                        <input
                          type="time"
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(14,100%,60%)] focus:ring-2 focus:ring-[hsl(14,100%,60%)]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Hours: {estimatedHours}h
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="8"
                          value={estimatedHours}
                          onChange={(e) => setEstimatedHours(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Estimated Cost</span>
                          <span className="font-semibold text-gray-900">
                            ${Math.floor(((professional.hourlyRate.min + professional.hourlyRate.max) / 2) * estimatedHours)}
                          </span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[hsl(14,100%,60%)] text-white px-6 py-3 rounded-lg font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                      >
                        Confirm Booking
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                    activeTab === 'services'
                      ? 'text-[hsl(14,100%,60%)] border-b-2 border-[hsl(14,100%,60%)]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Services Offered
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                    activeTab === 'reviews'
                      ? 'text-[hsl(14,100%,60%)] border-b-2 border-[hsl(14,100%,60%)]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Customer Reviews
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                    activeTab === 'portfolio'
                      ? 'text-[hsl(14,100%,60%)] border-b-2 border-[hsl(14,100%,60%)]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Portfolio
                </button>
              </div>
            </div>

            <div className="p-8">
              {activeTab === 'services' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Offered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {professional.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {professional.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-sm font-medium text-gray-600">
                                {review.customerName.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{review.customerName}</p>
                              <p className="text-sm text-gray-600">{review.jobType}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-2">{review.comment}</p>
                        <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Portfolio</h3>
                  {professional.portfolio.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {professional.portfolio.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden">
                          <div className="aspect-video bg-gray-200"></div>
                          <div className="p-4">
                            <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <p className="text-xs text-gray-500">
                              Completed: {new Date(item.completedDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No portfolio items yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
