import {
  SpecialityItem,
  ProjectItem,
  PricingPlan,
  ClientItem,
  TestimonialItem,
  ProfileItem,
} from '../types';

export const HERO_SLIDESHOW_IMAGES = [
  '/legacy-assets/images/01.jpg',
  '/legacy-assets/images/02.jpg',
  '/legacy-assets/images/04.jpg',
  '/legacy-assets/images/05.jpg',
  '/legacy-assets/images/06.jpg',
  '/legacy-assets/images/07.jpg',
  '/legacy-assets/images/08.jpg',
  '/legacy-assets/images/09.jpg',
];

export const SPECIALITIES: SpecialityItem[] = [
  {
    id: 'ai-work',
    title: 'A I Work',
    description: 'I will setup your traditional business to online presents using ai workflows.',
    iconName: 'Cpu',
  },
  {
    id: 'online-setup',
    title: 'Online Business Setup',
    description: 'I will setup your traditional business to online presents or your idea base online business.',
    iconName: 'Globe',
  },
  {
    id: 'offline-scale',
    title: 'Offline Business Scale',
    description: 'You can scale your offline business to a large online consumers.',
    iconName: 'TrendingUp',
  },
  {
    id: 'easy-customize',
    title: 'Easy to Customize',
    description: 'You can easily customize/modify later, if you want to change anything on your hands.',
    iconName: 'Sliders',
  },
  {
    id: 'fresh-design',
    title: 'Fresh Quality Design',
    description: 'I will give you quality and professional layouts for your business and give a modern look.',
    iconName: 'Palette',
  },
  {
    id: 'google-supported',
    title: 'Google Supported',
    description: 'My work will be Google Supported and Your website will be Google Console Verified.',
    iconName: 'SearchCheck',
  },
  {
    id: 'future-update',
    title: 'Future Update',
    description: 'Your business will be future updatable and All themes and plugins will be auto update.',
    iconName: 'RefreshCw',
  },
  {
    id: 'after-sales',
    title: 'After Sales Support',
    description: 'After complete my work on your project, you will get support easily as per terms.',
    iconName: 'Headphones',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p-01',
    title: 'E-Commerce Marketplace Platform',
    categories: ['all', 'category-1'],
    categoryLabel: 'Online Business',
    image: '/legacy-assets/img/project/01.png',
    description: 'Custom e-commerce store architecture with payment gateways, automated inventory, and Google indexing.',
  },
  {
    id: 'p-02',
    title: 'Retail Store Consumer Expansion',
    categories: ['all', 'category-2'],
    categoryLabel: 'Offline Business Scaling',
    image: '/legacy-assets/img/project/02.png',
    description: 'Digital scaling strategy transforming local storefront operations into nationwide omnichannel fulfillment.',
  },
  {
    id: 'p-03',
    title: 'Corporate Web Presence & Portal',
    categories: ['all', 'category-1'],
    categoryLabel: 'Online Business',
    image: '/legacy-assets/img/project/03.png',
    description: 'High-performance responsive portal with lead generation pipelines and custom CRM integration.',
  },
  {
    id: 'p-05',
    title: 'Digital Services & Booking Hub',
    categories: ['all', 'category-1'],
    categoryLabel: 'Online Business',
    image: '/legacy-assets/img/project/05.png',
    description: 'Seamless client booking system with real-time calendar synchronization and automatic WhatsApp updates.',
  },
  {
    id: 'p-06',
    title: 'Modern AI-Assisted E-Catalog',
    categories: ['all', 'category-1'],
    categoryLabel: 'Online Business',
    image: '/legacy-assets/img/project/007.png',
    description: 'AI-categorized product catalog optimized for Google rich snippets and fast mobile checkout.',
  },
  {
    id: 'p-08',
    title: 'Brand Identity & Visual Marketing',
    categories: ['all', 'category-1', 'category-3'],
    categoryLabel: 'Marketing and Branding',
    image: '/legacy-assets/img/project/07.png',
    description: 'Comprehensive brand visual overhaul, high-converting copy, and visual asset preparation.',
  },
  {
    id: 'p-09',
    title: 'Enterprise Business Solutions',
    categories: ['all', 'category-1', 'category-4'],
    categoryLabel: 'Online Business & Sales',
    image: '/legacy-assets/img/project/09.png',
    description: 'Integrated business development architecture combining tech implementation with revenue growth.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'light',
    name: 'Light',
    tagline: 'Light for Single Business',
    price: '৳14,999',
    tierLabel: 'Essential',
    features: [
      'Dedicated Technical Support',
      'Required Business Options',
      'Standard Business Platform',
      'Standard Setup (No Advanced SEO)',
    ],
    note: 'All work will be milestone basis payments.',
  },
  {
    id: 'great',
    name: 'Great',
    tagline: 'Great for Single Business',
    price: '৳20,000',
    tierLabel: 'Professional',
    isPopular: true,
    features: [
      'Priority 1-on-1 Support',
      'Fully Customized Options',
      'Advanced Business Platform',
      'Google SEO & Console Verified',
    ],
    note: 'All work will be milestone basis payments.',
  },
  {
    id: 'fly',
    name: 'Fly',
    tagline: 'Great for Multiple Business',
    price: '% - %',
    tierLabel: 'Business',
    features: [
      'Comprehensive Enterprise Support',
      'Advanced Custom AI Options',
      'Multi-Brand Professional Platform',
      'Complete SEO & Digital Ads Ready',
    ],
    note: 'All work will be milestone basis payments.',
  },
];

export const CLIENTS: ClientItem[] = [
  { id: 'c-1', name: 'Client Partner 1', logo: '/legacy-assets/img/client01.png' },
  { id: 'c-2', name: 'Client Partner 2', logo: '/legacy-assets/img/client02.png' },
  { id: 'c-3', name: 'Client Partner 3', logo: '/legacy-assets/img/client03.png' },
  { id: 'c-4', name: 'Client Partner 4', logo: '/legacy-assets/img/client07.png' },
  { id: 'c-5', name: 'Client Partner 5', logo: '/legacy-assets/img/client05.png' },
  { id: 'c-6', name: 'Client Partner 6', logo: '/legacy-assets/img/client04.png' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    image: '/legacy-assets/img/feedback 001.PNG',
    clientTitle: 'International Client Feedback 1',
    rating: 5,
    highlight: 'Outstanding technical execution, prompt communication, and exceptional commitment to quality.',
  },
  {
    id: 't-2',
    image: '/legacy-assets/img/feedback 005.PNG',
    clientTitle: 'International Client Feedback 2',
    rating: 5,
    highlight: 'Shahid delivered ahead of schedule and solved our business workflows with high professionalism.',
  },
  {
    id: 't-3',
    image: '/legacy-assets/img/feedback 003.PNG',
    clientTitle: 'International Client Feedback 3',
    rating: 5,
    highlight: 'Highly recommended! Great knowledge of online store setups, speed optimization, and sales design.',
  },
  {
    id: 't-4',
    image: '/legacy-assets/img/feedback 006.PNG',
    clientTitle: 'International Client Feedback 4',
    rating: 5,
    highlight: 'Very polite, knowledgeable, and always available to assist with after-sales support.',
  },
  {
    id: 't-5',
    image: '/legacy-assets/img/feedback 004.PNG',
    clientTitle: 'International Client Feedback 5',
    rating: 5,
    highlight: 'Delivered an impressive digital platform that scaled our incoming customer inquiries.',
  },
];

export const PROFILES: ProfileItem[] = [
  {
    platform: 'Upwork',
    name: 'Top Rated Upwork Profile',
    url: 'https://www.upwork.com/freelancers/~019c155cde23fda6d9',
    image: '/legacy-assets/img/upwork.png',
    badge: '100% Job Success',
  },
  {
    platform: 'Facebook',
    name: 'Official Professional Page',
    url: 'https://www.facebook.com/Shahid.I.Apu/',
    image: '/legacy-assets/img/facebook.png',
    badge: 'Direct Social Connect',
  },
  {
    platform: 'Freelancer',
    name: 'Verified Freelancer BD',
    url: 'https://www.freelancer.com/u/ShahidLabBD',
    image: '/legacy-assets/img/freelancer.png',
    badge: 'Verified Preferred',
  },
];

export const CONTACT_INFO = {
  email: 'brainchilds.bd@gmail.com',
  whatsappNumber: '+8801780055080',
  whatsappCleanNumber: '8801780055080',
  location: 'Tangail / Dhaka, Bangladesh',
  company: 'Brainchild BD',
  author: 'M Shahid I',
};
