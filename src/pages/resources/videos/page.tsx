import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const categories = ['All', 'Keynotes', 'Tutorials', 'Webinars', 'Case Studies', 'Product Demos'];

const videos = [
  {
    id: 1,
    title: 'AI Transformation Summit 2024 Keynote',
    category: 'Keynotes',
    speaker: 'Dr. Sarah Chen',
    role: 'Chief AI Strategist',
    duration: '45:32',
    views: '12.5K',
    date: 'March 15, 2024',
    description: 'Explore the future of enterprise AI and learn how leading organizations are leveraging AI to drive innovation and competitive advantage.',
    thumbnail: '/images/video-keynote-001--4fc5595870ab.jpg',
    tags: ['AI Strategy', 'Digital Transformation', 'Innovation']
  },
  {
    id: 2,
    title: 'Building Production-Ready ML Pipelines',
    category: 'Tutorials',
    speaker: 'Michael Rodriguez',
    role: 'Senior ML Engineer',
    duration: '28:15',
    views: '8.3K',
    date: 'March 12, 2024',
    description: 'Step-by-step tutorial on designing, implementing, and deploying scalable machine learning pipelines using modern MLOps practices.',
    thumbnail: '/images/video-ml-tutorial-002--d8e9b0a6a3e0.jpg',
    tags: ['MLOps', 'Tutorial', 'Machine Learning']
  },
  {
    id: 3,
    title: 'Cloud Migration Success Story: Financial Services',
    category: 'Case Studies',
    speaker: 'James Patterson',
    role: 'Cloud Solutions Architect',
    duration: '22:48',
    views: '6.7K',
    date: 'March 10, 2024',
    description: 'Real-world case study of a major bank\'s cloud migration journey, including challenges faced, solutions implemented, and results achieved.',
    thumbnail: '/images/video-case-cloud-003--44cc3bd987e1.jpg',
    tags: ['Cloud Migration', 'Case Study', 'Financial Services']
  },
  {
    id: 4,
    title: 'Real-Time Analytics Architecture Deep Dive',
    category: 'Webinars',
    speaker: 'Emily Zhang',
    role: 'Lead Data Architect',
    duration: '52:20',
    views: '9.1K',
    date: 'March 8, 2024',
    description: 'Comprehensive webinar covering real-time data processing architectures, stream processing patterns, and best practices for building scalable analytics systems.',
    thumbnail: '/images/video-webinar-analytics-004--ea597f034139.jpg',
    tags: ['Real-Time Analytics', 'Data Architecture', 'Webinar']
  },
  {
    id: 5,
    title: 'Zero Trust Security Implementation Guide',
    category: 'Tutorials',
    speaker: 'David Kumar',
    role: 'Security Architect',
    duration: '35:42',
    views: '7.8K',
    date: 'March 5, 2024',
    description: 'Practical tutorial on implementing zero trust security principles in cloud environments, with hands-on demonstrations and configuration examples.',
    thumbnail: '/images/video-security-tutorial-005--6657a95bb62d.jpg',
    tags: ['Security', 'Zero Trust', 'Cloud Security']
  },
  {
    id: 6,
    title: 'AI Platform Demo: From Data to Insights',
    category: 'Product Demos',
    speaker: 'Lisa Anderson',
    role: 'Product Manager',
    duration: '18:30',
    views: '11.2K',
    date: 'March 3, 2024',
    description: 'Live demonstration of our AI platform capabilities, showing how to ingest data, train models, and deploy AI solutions in production.',
    thumbnail: '/images/video-product-demo-006--db81b1b71725.jpg',
    tags: ['Product Demo', 'AI Platform', 'Live Demo']
  },
  {
    id: 7,
    title: 'Healthcare AI: Transforming Patient Care',
    category: 'Keynotes',
    speaker: 'Dr. Robert Williams',
    role: 'Healthcare AI Specialist',
    duration: '41:15',
    views: '10.4K',
    date: 'March 1, 2024',
    description: 'Keynote presentation on how AI is revolutionizing healthcare delivery, from diagnostics to personalized treatment plans.',
    thumbnail: '/images/video-healthcare-keynote-007--1d17c597daba.jpg',
    tags: ['Healthcare', 'AI Innovation', 'Patient Care']
  },
  {
    id: 8,
    title: 'Data Governance Best Practices Webinar',
    category: 'Webinars',
    speaker: 'Jennifer Lee',
    role: 'Data Governance Lead',
    duration: '48:55',
    views: '5.9K',
    date: 'February 28, 2024',
    description: 'Expert webinar on establishing effective data governance frameworks that enable innovation while ensuring compliance and data quality.',
    thumbnail: '/images/video-governance-webinar-008--0418763b4756.jpg',
    tags: ['Data Governance', 'Compliance', 'Best Practices']
  },
  {
    id: 9,
    title: 'Kubernetes Deployment Tutorial Series',
    category: 'Tutorials',
    speaker: 'Alex Thompson',
    role: 'DevOps Principal Engineer',
    duration: '1:02:18',
    views: '14.6K',
    date: 'February 25, 2024',
    description: 'Comprehensive tutorial series covering Kubernetes deployment strategies, from basic concepts to advanced production patterns.',
    thumbnail: '/images/video-k8s-tutorial-009--b2436d69e6b1.jpg',
    tags: ['Kubernetes', 'DevOps', 'Container Orchestration']
  },
  {
    id: 10,
    title: 'Manufacturing AI Success Story',
    category: 'Case Studies',
    speaker: 'Rachel Martinez',
    role: 'Industry Solutions Lead',
    duration: '26:40',
    views: '7.2K',
    date: 'February 22, 2024',
    description: 'Detailed case study of how computer vision and AI transformed quality control processes in automotive manufacturing.',
    thumbnail: '/images/video-manufacturing-case-010--4ac469c9eff0.jpg',
    tags: ['Manufacturing', 'Computer Vision', 'Quality Control']
  },
  {
    id: 11,
    title: 'Generative AI for Enterprise Applications',
    category: 'Webinars',
    speaker: 'Dr. Marcus Chen',
    role: 'AI Research Director',
    duration: '55:30',
    views: '13.8K',
    date: 'February 20, 2024',
    description: 'Explore practical applications of generative AI in enterprise settings, including use cases, implementation strategies, and ethical considerations.',
    thumbnail: '/images/video-genai-webinar-011--a6c3a9038074.jpg',
    tags: ['Generative AI', 'Enterprise AI', 'Innovation']
  },
  {
    id: 12,
    title: 'Data Platform Architecture Demo',
    category: 'Product Demos',
    speaker: 'Kevin Park',
    role: 'Solutions Architect',
    duration: '32:25',
    views: '8.9K',
    date: 'February 18, 2024',
    description: 'Live demonstration of modern data platform architecture, showcasing data ingestion, processing, storage, and analytics capabilities.',
    thumbnail: '/images/video-data-platform-012--edd5bb640149.jpg',
    tags: ['Data Platform', 'Architecture', 'Live Demo']
  }
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/videos-hero-production-v1-321--c5edf4d53872.png"
            alt="Videos Hero"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Educational <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Videos</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn from expert tutorials, webinars, and thought leadership sessions on AI, cloud technologies, and enterprise solutions
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative w-full h-56 overflow-hidden bg-gray-900 cursor-pointer"
                     onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className="ri-play-fill text-white text-3xl ml-1"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      {video.category}
                    </span>
                    <span className="text-xs text-gray-500">{video.views} views</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {video.speaker.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{video.speaker}</p>
                      <p className="text-xs text-gray-500">{video.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {video.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-youtube-line text-white text-4xl"></i>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Channel
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get notified when we publish new videos, tutorials, and webinars. Join our growing community of technology professionals.
          </p>

          <a
           href="https://www.youtube.com/@ForgebyteSoftwareService"
           rel="noopener noreferrer"
           className="inline-block"
>
          <button className="px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer">
            <i className="ri-notification-line text-xl"></i>
            Subscribe for Updates
          </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
