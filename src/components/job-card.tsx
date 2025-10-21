/**
 * Job Card Component for Job Management Hub
 * Matches design reference pixel-perfect styling
 */

import Link from 'next/link';
import { Calendar, Clock, DollarSign, MessageSquare } from 'lucide-react';
import type { JobRequest } from '@/lib/mock-data';
import { getProfessionalById } from '@/lib/mock-data';

interface JobCardProps {
  job: JobRequest;
  expandable?: boolean;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  in_progress: 'bg-blue-100 text-blue-800 border-blue-200',
  completed: 'bg-green-100 text-green-800 border-green-200'
};

const statusLabels = {
  pending: 'Pending',
  in_progress: 'In Progress',
  completed: 'Completed'
};

export function JobCard({ job, expandable = false }: JobCardProps) {
  const professional = getProfessionalById(job.professionalId);
  const scheduledDate = new Date(job.scheduledDate);

  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">{job.title}</h3>
          <p className="text-sm text-gray-600">
            with {professional?.name || 'Professional'}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${
            statusColors[job.status]
          }`}
        >
          {statusLabels[job.status]}
        </span>
      </div>

      <p className="text-sm text-gray-700 mb-4">{job.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{scheduledDate.toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{job.estimatedHours}h estimated</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span>${job.totalCost} total</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MessageSquare className="w-4 h-4" />
          <span>{job.messages.length} messages</span>
        </div>
      </div>

      {job.status === 'in_progress' && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{job.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${job.progress}%` }}
            />
          </div>
        </div>
      )}

      <Link
        href={`/jobs/${job.id}`}
        className="block w-full text-center bg-gray-100 text-gray-900 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-gray-200"
      >
        View Details
      </Link>
    </div>
  );
}
