/**
 * ServicePro - Marketplace Page
 * Browse all services and professionals
 */

'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { ProfessionalCard } from '@/components/professional-card';
import { services, professionals } from '@/lib/mock-data';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'services' | 'professionals'>('services');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container-max">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Service Marketplace</h1>
            <p className="text-lg text-gray-600">
              Discover trusted professionals for all your home service needs
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services or professionals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(14,100%,60%)] focus:ring-2 focus:ring-[hsl(14,100%,60%)]/20 transition-all"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* View Toggle */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setView('services')}
                className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  view === 'services'
                    ? 'bg-[hsl(14,100%,60%)] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Browse by Service
              </button>
              <button
                onClick={() => setView('professionals')}
                className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  view === 'professionals'
                    ? 'bg-[hsl(14,100%,60%)] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Browse by Professional
              </button>
            </div>
          </div>

          {/* Services View */}
          {view === 'services' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.category} {...service} />
                ))}
              </div>
            </div>
          )}

          {/* Professionals View */}
          {view === 'professionals' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Available Professionals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionals.map((professional) => (
                  <ProfessionalCard key={professional.id} professional={professional} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
