/**
 * Service Card Component
 * Matches design reference pixel-perfect styling
 */

import Link from 'next/link';
import { Wrench, Zap, Wind, Hammer, Paintbrush, Sparkles, Leaf, Wrench as Tools } from 'lucide-react';
import type { ServiceCategory } from '@/lib/mock-data';

interface ServiceCardProps {
  category: ServiceCategory;
  description: string;
  startingPrice: number;
}

const iconMap = {
  'Plumbing': Wrench,
  'Electrical': Zap,
  'HVAC': Wind,
  'Carpentry': Hammer,
  'Painting': Paintbrush,
  'Cleaning': Sparkles,
  'Landscaping': Leaf,
  'General Handyman': Tools
};

export function ServiceCard({ category, description, startingPrice }: ServiceCardProps) {
  const Icon = iconMap[category];

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-full">
        <Icon className="w-8 h-8 text-blue-500" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{category}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
      <p className="text-sm text-gray-500 mb-4">Starting at ${startingPrice}/hr</p>
      <Link
        href={`/marketplace?category=${encodeURIComponent(category)}`}
        className="bg-[hsl(14,100%,60%)] text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
      >
        Get a Quote
      </Link>
    </div>
  );
}
