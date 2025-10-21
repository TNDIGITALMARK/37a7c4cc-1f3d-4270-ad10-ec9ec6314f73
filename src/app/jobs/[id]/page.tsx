/**
 * ServicePro - Job Detail Page
 * View detailed job information with communication thread
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, DollarSign, MessageSquare, Star, Send } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { jobRequests, getProfessionalById } from '@/lib/mock-data';

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const job = jobRequests.find((j) => j.id === jobId);
  const [newMessage, setNewMessage] = useState('');

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Job Not Found</h2>
            <p className="text-gray-600 mb-6">The job you're looking for doesn't exist.</p>
            <Link href="/jobs" className="text-[hsl(14,100%,60%)] hover:underline">
              Return to Jobs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const professional = getProfessionalById(job.professionalId);
  const scheduledDate = new Date(job.scheduledDate);

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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Simulate sending message
      alert('Message sent! (This is a demo)');
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container-max">
          {/* Back Button */}
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Jobs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      statusColors[job.status]
                    }`}
                  >
                    {statusLabels[job.status]}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-600">Scheduled Date</p>
                      <p className="font-medium text-gray-900">{scheduledDate.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-600">Estimated Time</p>
                      <p className="font-medium text-gray-900">{job.estimatedHours}h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-600">Total Cost</p>
                      <p className="font-medium text-gray-900">${job.totalCost}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-600">Messages</p>
                      <p className="font-medium text-gray-900">{job.messages.length}</p>
                    </div>
                  </div>
                </div>

                {job.status === 'in_progress' && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span className="font-medium">Job Progress</span>
                      <span className="font-semibold text-gray-900">{job.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${job.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Messages Thread */}
              <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Communication</h2>

                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {job.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'customer' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-4 ${
                          message.sender === 'customer'
                            ? 'bg-[hsl(14,100%,60%)] text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm mb-1">{message.message}</p>
                        <p className={`text-xs ${
                          message.sender === 'customer' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {new Date(message.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {job.status !== 'completed' && (
                  <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(14,100%,60%)] focus:ring-2 focus:ring-[hsl(14,100%,60%)]/20"
                    />
                    <button
                      type="submit"
                      className="bg-[hsl(14,100%,60%)] text-white px-6 py-3 rounded-lg font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Professional Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Professional</h3>

                {professional && (
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100 mx-auto mb-3">
                      <Image
                        src={professional.photo}
                        alt={professional.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{professional.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{professional.specialty}</p>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      <span className="text-sm font-medium text-gray-900">{professional.rating}</span>
                    </div>
                    <Link
                      href={`/professional/${professional.id}`}
                      className="block w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                )}

                {job.status === 'completed' && job.rating && (
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Your Rating</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: job.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                )}

                {job.status === 'completed' && !job.rating && (
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Rate This Service</h4>
                    <button className="w-full bg-[hsl(14,100%,60%)] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[hsl(14,100%,55%)] transition-colors">
                      Leave a Review
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
