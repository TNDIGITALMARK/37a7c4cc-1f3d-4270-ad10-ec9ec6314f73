/**
 * Mock Data for ServicePro Home Service Marketplace
 * Matches the MVP specification exactly
 */

export type ServiceCategory =
  | 'Plumbing'
  | 'Electrical'
  | 'HVAC'
  | 'Carpentry'
  | 'Painting'
  | 'Cleaning'
  | 'Landscaping'
  | 'General Handyman';

export interface Professional {
  id: string;
  name: string;
  specialty: ServiceCategory;
  rating: number;
  jobsCompleted: number;
  verified: boolean;
  certifications: string[];
  hourlyRate: { min: number; max: number };
  photo: string;
  bio: string;
  location: string;
  availability: 'available' | 'busy' | 'unavailable';
  services: string[];
  reviews: Review[];
  portfolio: PortfolioItem[];
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  jobType: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  completedDate: string;
}

export interface JobRequest {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed';
  professionalId: string;
  scheduledDate: string;
  estimatedHours: number;
  totalCost: number;
  description: string;
  progress: number;
  rating?: number;
  messages: JobMessage[];
  photos: string[];
}

export interface JobMessage {
  id: string;
  sender: 'customer' | 'professional';
  message: string;
  timestamp: string;
  hasPhoto?: boolean;
}

export interface Service {
  category: ServiceCategory;
  icon: string;
  description: string;
  startingPrice: number;
}

// Service Categories
export const services: Service[] = [
  {
    category: 'Plumbing',
    icon: 'wrench',
    description: 'Leak repairs, fixture installation, pipe maintenance',
    startingPrice: 85
  },
  {
    category: 'Electrical',
    icon: 'bolt',
    description: 'Outlet installation, panel upgrades, wiring repairs',
    startingPrice: 95
  },
  {
    category: 'HVAC',
    icon: 'wind',
    description: 'AC repair, heating installation, vent cleaning',
    startingPrice: 100
  },
  {
    category: 'Carpentry',
    icon: 'hammer',
    description: 'Custom woodwork, furniture repair, cabinet installation',
    startingPrice: 80
  },
  {
    category: 'Painting',
    icon: 'paintbrush',
    description: 'Interior/exterior painting, wall repairs, finishing',
    startingPrice: 65
  },
  {
    category: 'Cleaning',
    icon: 'sparkles',
    description: 'Deep cleaning, move-out cleaning, regular maintenance',
    startingPrice: 50
  },
  {
    category: 'Landscaping',
    icon: 'leaf',
    description: 'Lawn care, garden maintenance, tree trimming',
    startingPrice: 60
  },
  {
    category: 'General Handyman',
    icon: 'tools',
    description: 'Furniture assembly, minor repairs, home maintenance',
    startingPrice: 65
  }
];

// Professional Profiles (as specified in MVP)
export const professionals: Professional[] = [
  {
    id: 'mike_rodriguez_plumbing',
    name: 'Mike Rodriguez',
    specialty: 'Plumbing',
    rating: 4.8,
    jobsCompleted: 127,
    verified: true,
    certifications: ['Licensed Plumber', 'Insured'],
    hourlyRate: { min: 85, max: 120 },
    photo: '/generated/professional-mike.png',
    bio: 'Experienced plumber with over 10 years in residential and commercial plumbing. Specializing in leak detection, fixture installation, and emergency repairs.',
    location: 'Downtown Area',
    availability: 'available',
    services: ['Leak repairs', 'Fixture installation', 'Drain cleaning', 'Water heater repair'],
    reviews: [
      {
        id: 'r1',
        customerName: 'Jennifer M.',
        rating: 5,
        comment: 'Mike was prompt, professional, and fixed our kitchen faucet leak quickly. Highly recommend!',
        date: '2025-10-15',
        jobType: 'Faucet repair'
      },
      {
        id: 'r2',
        customerName: 'David K.',
        rating: 5,
        comment: 'Great service! Fixed our water heater issue and explained everything clearly.',
        date: '2025-10-10',
        jobType: 'Water heater repair'
      },
      {
        id: 'r3',
        customerName: 'Sarah L.',
        rating: 4,
        comment: 'Very professional and thorough. Would hire again.',
        date: '2025-10-05',
        jobType: 'Pipe installation'
      }
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Kitchen Faucet Installation',
        description: 'Modern faucet installation with new fixtures',
        imageUrl: '/generated/portfolio-plumbing-1.jpg',
        completedDate: '2025-10-12'
      }
    ]
  },
  {
    id: 'sarah_chen_electrical',
    name: 'Sarah Chen',
    specialty: 'Electrical',
    rating: 4.9,
    jobsCompleted: 203,
    verified: true,
    certifications: ['Master Electrician', 'Licensed', 'Insured'],
    hourlyRate: { min: 95, max: 140 },
    photo: '/generated/professional-sarah.png',
    bio: 'Master electrician with 15 years of experience. Specialized in residential electrical systems, panel upgrades, and smart home installations.',
    location: 'North District',
    availability: 'available',
    services: ['Outlet installation', 'Panel upgrades', 'Lighting installation', 'Electrical troubleshooting'],
    reviews: [
      {
        id: 'r4',
        customerName: 'Michael T.',
        rating: 5,
        comment: 'Sarah upgraded our electrical panel efficiently and safely. Excellent work!',
        date: '2025-10-18',
        jobType: 'Panel upgrade'
      },
      {
        id: 'r5',
        customerName: 'Lisa R.',
        rating: 5,
        comment: 'Professional, knowledgeable, and punctual. Best electrician we\'ve worked with.',
        date: '2025-10-14',
        jobType: 'Outlet installation'
      },
      {
        id: 'r6',
        customerName: 'James B.',
        rating: 5,
        comment: 'Fixed our electrical issue quickly and explained the problem clearly.',
        date: '2025-10-08',
        jobType: 'Electrical repair'
      }
    ],
    portfolio: [
      {
        id: 'p2',
        title: 'Whole Home Rewiring',
        description: 'Complete electrical system upgrade for safety',
        imageUrl: '/generated/portfolio-electrical-1.jpg',
        completedDate: '2025-10-09'
      }
    ]
  },
  {
    id: 'david_thompson_handyman',
    name: 'David Thompson',
    specialty: 'General Handyman',
    rating: 4.7,
    jobsCompleted: 89,
    verified: true,
    certifications: ['Background Checked', 'Insured'],
    hourlyRate: { min: 65, max: 85 },
    photo: '/generated/professional-david.png',
    bio: 'Versatile handyman skilled in furniture assembly, minor repairs, and general home maintenance. No job too small!',
    location: 'West Side',
    availability: 'available',
    services: ['Furniture assembly', 'Minor repairs', 'Drywall patching', 'Door installation'],
    reviews: [
      {
        id: 'r7',
        customerName: 'Amanda S.',
        rating: 5,
        comment: 'David assembled all our IKEA furniture quickly and professionally. Great service!',
        date: '2025-10-16',
        jobType: 'Furniture assembly'
      },
      {
        id: 'r8',
        customerName: 'Robert P.',
        rating: 4,
        comment: 'Fixed multiple items around the house. Very reliable.',
        date: '2025-10-11',
        jobType: 'General repairs'
      },
      {
        id: 'r9',
        customerName: 'Emily W.',
        rating: 5,
        comment: 'Friendly, efficient, and reasonably priced. Highly recommend!',
        date: '2025-10-06',
        jobType: 'Door repair'
      }
    ],
    portfolio: [
      {
        id: 'p3',
        title: 'Living Room Furniture Assembly',
        description: 'Complete living room furniture setup',
        imageUrl: '/generated/portfolio-handyman-1.jpg',
        completedDate: '2025-10-13'
      }
    ]
  }
];

// Sample Job Requests (as specified in MVP)
export const jobRequests: JobRequest[] = [
  {
    id: 'kitchen_faucet_replacement',
    title: 'Kitchen Faucet Replacement',
    status: 'pending',
    professionalId: 'mike_rodriguez_plumbing',
    scheduledDate: '2025-10-22T14:00:00',
    estimatedHours: 2,
    totalCost: 180,
    description: 'Replace old kitchen faucet with new modern fixture. Includes shutoff valve check.',
    progress: 0,
    messages: [
      {
        id: 'm1',
        sender: 'customer',
        message: 'Looking forward to getting this fixed tomorrow!',
        timestamp: '2025-10-21T09:30:00'
      },
      {
        id: 'm2',
        sender: 'professional',
        message: 'I\'ll be there at 2 PM sharp. I\'ve got all the necessary tools and parts.',
        timestamp: '2025-10-21T10:15:00'
      }
    ],
    photos: []
  },
  {
    id: 'ceiling_fan_installation',
    title: 'Ceiling Fan Installation',
    status: 'completed',
    professionalId: 'sarah_chen_electrical',
    scheduledDate: '2025-10-14T10:00:00',
    estimatedHours: 2,
    totalCost: 145,
    description: 'Install new ceiling fan in master bedroom. Includes removal of old fixture.',
    progress: 100,
    rating: 5,
    messages: [
      {
        id: 'm3',
        sender: 'professional',
        message: 'Installation complete! Fan is working perfectly. Tested all speeds.',
        timestamp: '2025-10-14T12:00:00'
      },
      {
        id: 'm4',
        sender: 'customer',
        message: 'Thank you! It looks great and works perfectly!',
        timestamp: '2025-10-14T12:30:00'
      }
    ],
    photos: ['/generated/job-completed-fan.jpg']
  },
  {
    id: 'bathroom_tile_repair',
    title: 'Bathroom Tile Repair',
    status: 'in_progress',
    professionalId: 'david_thompson_handyman',
    scheduledDate: '2025-10-21T09:00:00',
    estimatedHours: 3,
    totalCost: 220,
    description: 'Repair cracked bathroom tiles and regrout. 5 tiles need replacement.',
    progress: 80,
    messages: [
      {
        id: 'm5',
        sender: 'professional',
        message: 'Making great progress! Almost done with the grouting.',
        timestamp: '2025-10-21T11:30:00',
        hasPhoto: true
      },
      {
        id: 'm6',
        sender: 'customer',
        message: 'Looks great! Thanks for the update.',
        timestamp: '2025-10-21T11:45:00'
      }
    ],
    photos: ['/generated/job-progress-bathroom.jpg']
  }
];

// Helper function to get professional by ID
export function getProfessionalById(id: string): Professional | undefined {
  return professionals.find(p => p.id === id);
}

// Helper function to get jobs by status
export function getJobsByStatus(status: JobRequest['status']): JobRequest[] {
  return jobRequests.filter(job => job.status === status);
}

// Helper function to filter professionals by category
export function getProfessionalsByCategory(category: ServiceCategory): Professional[] {
  return professionals.filter(p => p.specialty === category);
}

// Simulated booking function
export function simulateBooking(
  professionalId: string,
  serviceType: string,
  date: string,
  estimatedHours: number
): { success: boolean; bookingId?: string; estimatedCost?: number; message: string } {
  const professional = getProfessionalById(professionalId);

  if (!professional) {
    return { success: false, message: 'Professional not found' };
  }

  if (professional.availability !== 'available') {
    return { success: false, message: 'Professional is not available at this time' };
  }

  const estimatedCost = Math.floor(
    ((professional.hourlyRate.min + professional.hourlyRate.max) / 2) * estimatedHours
  );

  const bookingId = `booking_${Date.now()}`;

  return {
    success: true,
    bookingId,
    estimatedCost,
    message: 'Booking confirmed! Professional will contact you shortly.'
  };
}
