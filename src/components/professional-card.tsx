/**
 * Professional Profile Card Component
 * Matches design reference pixel-perfect styling
 */

import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle } from 'lucide-react';
import type { Professional } from '@/lib/mock-data';

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
          <Image
            src={professional.photo}
            alt={professional.name}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        {professional.verified && (
          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
            <CheckCircle className="w-4 h-4 text-white" fill="currentColor" />
          </div>
        )}
      </div>

      <h3 className="text-lg font-medium text-gray-900 mb-1">{professional.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{professional.specialty}</p>

      <div className="flex items-center gap-1 mb-2">
        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
        <span className="text-sm font-medium text-gray-900">{professional.rating}</span>
        <span className="text-sm text-gray-500">({professional.jobsCompleted} jobs)</span>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        ${professional.hourlyRate.min}-${professional.hourlyRate.max}/hr
      </p>

      <Link
        href={`/professional/${professional.id}`}
        className="bg-[hsl(14,100%,60%)] text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] w-full"
      >
        View Profile
      </Link>
    </div>
  );
}
