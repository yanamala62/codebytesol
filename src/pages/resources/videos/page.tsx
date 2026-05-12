import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FadeIn } from '../../../components/animations/FadeIn';
import { Play, Eye, Video } from 'lucide-react';
import { Button } from '../../../components/primitives/Button';

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
    thumbnail: '/source_images/services/service_ai.png',
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
    thumbnail: '/source_images/services/service_data.png',
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
    thumbnail: '/source_images/services/service_cloud.png',
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
    thumbnail: '/source_images/services/service_data.png',
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
    thumbnail: '/source_images/services/service_cloud.png',
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
    thumbnail: '/source_images/services/service_ai.png',
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
    thumbnail: '/source_images/industries/ind_healthcare.png',
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
    thumbnail: '/source_images/services/service_data.png',
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
    thumbnail: '/source_images/services/service_cloud.png',
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
    thumbnail: '/source_images/industries/ind_manufacturing.png',
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
    thumbnail: '/source_images/services/service_ai.png',
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
    thumbnail: '/source_images/services/service_data.png',
    tags: ['Data Platform', 'Architecture', 'Live Demo']
  }
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/resources/res_video.png" 
            alt="Videos Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>

        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase italic">
              Educational <br />
              <span className="text-primary-500">Videos.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              Learn from expert tutorials, webinars, and thought leadership sessions on AI, cloud technologies, and enterprise solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-y border-border sticky top-[72px] z-20 backdrop-blur-md bg-white/80 overflow-x-auto">
        <div className="container-xl mx-auto px-6">
          <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start md:justify-center min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                  selectedCategory === category
                    ? 'bg-primary-500 border-primary-500 text-white shadow-sm'
                    : 'bg-gray-50 border-border text-text-muted hover:bg-white hover:border-primary-500 hover:text-primary-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 bg-white">
        <div className="container-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <FadeIn key={video.id} direction="up">
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-border hover:border-primary-500 hover:shadow-soft transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="relative w-full h-56 overflow-hidden bg-gray-100 cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-colors">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-primary-500 fill-primary-500 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-[10px] font-bold rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-primary-100">
                        {video.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                      {video.title}
                    </h3>
                    
                    <p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed font-medium">
                      {video.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100 text-primary-500 font-bold text-sm">
                          {video.speaker.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-primary leading-tight">{video.speaker}</p>
                          <p className="text-[10px] text-text-faint font-bold uppercase tracking-widest">{video.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-bold text-text-faint uppercase tracking-widest">
                         <div className="flex items-center gap-1">
                           <Eye className="w-3.5 h-3.5" />
                           {video.views}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-gray-50 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <div className="w-20 h-20 bg-primary-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Video className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Subscribe to Our Channel
            </h2>
            <p className="text-xl text-text-muted mb-10 font-medium">
              Get notified when we publish new videos, tutorials, and webinars. Join our growing community of technology professionals.
            </p>

            <Button
              size="lg"
              className="h-16 px-12 rounded-2xl"
              onClick={() => window.open("https://www.youtube.com/@ForgebyteSoftwareService", "_blank")}
            >
              <Video className="w-6 h-6 mr-3" />
              Subscribe for Updates
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
