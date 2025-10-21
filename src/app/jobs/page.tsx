/**
 * ServicePro - Job Management Hub
 * Page 3: Job Management with communication and progress tracking
 * Matches design reference pixel-perfect styling
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter, Calendar, Clock, DollarSign, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JobCard } from '@/components/job-card';
import { jobRequests, getJobsByStatus } from '@/lib/mock-data';

type FilterType = 'all' | 'pending' | 'in_progress' | 'completed';

export default function JobsPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredJobs = filter === 'all'
    ? jobRequests
    : getJobsByStatus(filter);

  const stats = {
    pending: getJobsByStatus('pending').length,
    inProgress: getJobsByStatus('in_progress').length,
    completed: getJobsByStatus('completed').length,
    total: jobRequests.length
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container-max">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Management Hub</h1>
            <p className="text-gray-600">
              Track all your service requests, communicate with professionals, and manage ongoing projects.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Your Service Requests</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>Filter by status</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === 'all'
                    ? 'bg-[hsl(14,100%,60%)] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Jobs ({stats.total})
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === 'pending'
                    ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending ({stats.pending})
              </button>
              <button
                onClick={() => setFilter('in_progress')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === 'in_progress'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                In Progress ({stats.inProgress})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === 'completed'
                    ? 'bg-green-100 text-green-800 border-2 border-green-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed ({stats.completed})
              </button>
            </div>
          </div>

          {/* Jobs List */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Found</h3>
              <p className="text-gray-600 mb-6">
                {filter === 'all'
                  ? "You don't have any service requests yet."
                  : `You don't have any ${filter.replace('_', ' ')} jobs.`}
              </p>
              <Link
                href="/marketplace"
                className="inline-block bg-[hsl(14,100%,60%)] text-white px-6 py-3 rounded-lg font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
              >
                Find a Professional
              </Link>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-12 bg-gradient-to-r from-[hsl(14,100%,60%)] to-[hsl(14,100%,55%)] rounded-xl p-8 text-white text-center shadow-[0_8px_24px_rgba(255,107,53,0.3)]">
            <h2 className="text-2xl font-bold mb-3">Need Another Service?</h2>
            <p className="text-white/90 mb-6">
              Browse our marketplace to find professionals for your next home project.
            </p>
            <Link
              href="/marketplace"
              className="inline-block bg-white text-[hsl(14,100%,60%)] px-8 py-3 rounded-lg font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
