/**
 * ServicePro - Home Service Marketplace Dashboard
 * Page 1: Service Marketplace Dashboard
 * Matches design reference pixel-perfect styling
 */

import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Shield, Clock, DollarSign, Smartphone } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { ProfessionalCard } from '@/components/professional-card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { services, professionals } from '@/lib/mock-data';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Your Home, Our Expertise. Instant Handyman Services
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Connect with verified, trusted professionals for all your home repair and maintenance needs. Book instantly with transparent pricing.
              </p>
              <Link
                href="/marketplace"
                className="inline-block bg-[hsl(14,100%,60%)] text-white px-8 py-3.5 rounded-lg font-medium text-base shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
              >
                Get Started
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Image
                src="/generated/hero-image.png"
                alt="Professional home service team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.category} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Handyman Profiles Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Featured Handyman Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Professionals Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
            Nearby Professionals Ready To Help
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Search by location to find trusted professionals in your area
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your location..."
                className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(14,100%,60%)] focus:ring-2 focus:ring-[hsl(14,100%,60%)]/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[hsl(14,100%,60%)] text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-[hsl(14,100%,55%)] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500">Showing professionals near you</p>
              </div>
            </div>
            {/* Sample map pins */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[hsl(210,71%,59%)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <MapPin className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-[hsl(210,71%,59%)] rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '0.2s' }}>
              <MapPin className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-[hsl(210,71%,59%)] rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '0.4s' }}>
              <MapPin className="w-5 h-5 text-white" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HandyPro Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Why Choose HandyPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Trusted</h3>
              <p className="text-sm text-gray-600">
                All professionals are background checked and verified
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Transparent</h3>
              <p className="text-sm text-gray-600">
                No hidden fees, upfront pricing for every service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-sm text-gray-600">
                Fair and competitive rates with no surprises
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-sm text-gray-600">
                Book instantly with our simple and intuitive platform
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}