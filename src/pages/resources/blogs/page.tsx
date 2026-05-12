import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../../components/animations/FadeIn';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '../../../components/primitives/Button';

const categories = ['All', 'AI & ML', 'Cloud Computing', 'Data Analytics', 'Digital Transformation', 'Industry Insights'];

const blogs = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: Trends to Watch in 2025',
    category: 'AI & ML',
    author: 'Dr. Sarah Chen',
    role: 'Chief AI Strategist',
    date: 'March 15, 2024',
    readTime: '8 min read',
    excerpt: 'Explore the emerging AI trends that will reshape enterprise operations in 2025, from autonomous agents to multimodal AI systems.',
    image: '/source_images/services/service_ai.png',
    tags: ['AI Strategy', 'Enterprise AI', 'Future Trends']
  },
  {
    id: 2,
    title: 'Building Scalable Machine Learning Pipelines: Best Practices',
    category: 'AI & ML',
    author: 'Michael Rodriguez',
    role: 'Senior ML Engineer',
    date: 'March 12, 2024',
    readTime: '12 min read',
    excerpt: 'A comprehensive guide to designing and implementing production-ready ML pipelines that scale with your business needs.',
    image: '/source_images/services/service_data.png',
    tags: ['MLOps', 'Data Engineering', 'Best Practices']
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies for Legacy Enterprise Systems',
    category: 'Cloud Computing',
    author: 'James Patterson',
    role: 'Cloud Solutions Architect',
    date: 'March 10, 2024',
    readTime: '10 min read',
    excerpt: 'Learn proven strategies for migrating legacy systems to the cloud while minimizing risk and maximizing ROI.',
    image: '/source_images/services/service_cloud.png',
    tags: ['Cloud Migration', 'Enterprise Architecture', 'Digital Transformation']
  },
  {
    id: 4,
    title: 'Real-Time Data Analytics: From Batch to Stream Processing',
    category: 'Data Analytics',
    author: 'Emily Zhang',
    role: 'Lead Data Architect',
    date: 'March 8, 2024',
    readTime: '9 min read',
    excerpt: 'Discover how to transition from traditional batch processing to real-time stream analytics for instant business insights.',
    image: '/source_images/services/service_data.png',
    tags: ['Stream Processing', 'Real-Time Analytics', 'Big Data']
  },
  {
    id: 5,
    title: 'Implementing Zero Trust Security in Cloud Environments',
    category: 'Cloud Computing',
    author: 'David Kumar',
    role: 'Security Architect',
    date: 'March 5, 2024',
    readTime: '11 min read',
    excerpt: 'A practical guide to implementing zero trust security principles in modern cloud infrastructure.',
    image: '/source_images/services/service_cloud.png',
    tags: ['Cloud Security', 'Zero Trust', 'Cybersecurity']
  },
  {
    id: 6,
    title: 'The ROI of Digital Transformation: Measuring Success',
    category: 'Digital Transformation',
    author: 'Lisa Anderson',
    role: 'Digital Strategy Consultant',
    date: 'March 3, 2024',
    readTime: '7 min read',
    excerpt: 'Learn how to measure and maximize the return on investment from your digital transformation initiatives.',
    image: '/source_images/home_hero.png',
    tags: ['ROI', 'Digital Strategy', 'Business Value']
  },
  {
    id: 7,
    title: 'Generative AI in Healthcare: Opportunities and Challenges',
    category: 'Industry Insights',
    author: 'Dr. Robert Williams',
    role: 'Healthcare AI Specialist',
    date: 'March 1, 2024',
    readTime: '10 min read',
    excerpt: 'Exploring how generative AI is transforming healthcare delivery while addressing ethical and regulatory challenges.',
    image: '/source_images/industries/ind_healthcare.png',
    tags: ['Healthcare AI', 'Generative AI', 'Medical Technology']
  },
  {
    id: 8,
    title: 'Data Governance in the Age of AI: A Practical Framework',
    category: 'Data Analytics',
    author: 'Jennifer Lee',
    role: 'Data Governance Lead',
    date: 'February 28, 2024',
    readTime: '13 min read',
    excerpt: 'Establish robust data governance practices that enable AI innovation while ensuring compliance and data quality.',
    image: '/source_images/services/service_data.png',
    tags: ['Data Governance', 'Compliance', 'AI Ethics']
  },
  {
    id: 9,
    title: 'Kubernetes at Scale: Lessons from Production Deployments',
    category: 'Cloud Computing',
    author: 'Alex Thompson',
    role: 'DevOps Principal Engineer',
    date: 'February 25, 2024',
    readTime: '14 min read',
    excerpt: 'Real-world insights and best practices from managing large-scale Kubernetes deployments in production.',
    image: '/source_images/services/service_cloud.png',
    tags: ['Kubernetes', 'DevOps', 'Container Orchestration']
  }
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/resources/res_blog.png" 
            alt="Blogs Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>

        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase italic">
              Expert <br />
              <span className="text-primary-500">Insights.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              Stay ahead with the latest trends, best practices, and thought leadership in AI, digital transformation, and enterprise technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter & Search */}
      <section className="py-8 bg-white border-y border-border sticky top-[72px] z-20 backdrop-blur-md bg-white/80">
        <div className="container-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                    selectedCategory === category
                      ? 'bg-primary-500 border-primary-500 text-white shadow-sm'
                      : 'bg-gray-50 border-border text-text-muted hover:bg-white hover:border-primary-500 hover:text-primary-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-faint" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full h-11 pl-12 pr-4 bg-gray-50 border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="container-xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <FadeIn key={blog.id} direction="up">
                <article
                  className="bg-white rounded-3xl overflow-hidden border border-border hover:border-primary-500 hover:shadow-soft transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-border shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-text-faint uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-500" />
                        {blog.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-text-muted mb-8 line-clamp-3 font-medium leading-relaxed text-sm">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100 text-primary-500 font-bold text-sm">
                          {blog.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-primary leading-tight">{blog.author}</p>
                          <p className="text-[10px] text-text-faint font-bold uppercase tracking-widest">{blog.role}</p>
                        </div>
                      </div>
                      <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-text-primary border border-border hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 group/btn shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50 border-t border-border">
        <div className="container-xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center border border-border relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 blur-[120px] rounded-full translate-x-1/2" />
              
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight relative z-10">
                Insights Delivered.
              </h2>
              <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-medium relative z-10">
                Subscribe to receive our latest engineering breakthroughs and AI strategy direct to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto relative z-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-14 px-6 rounded-xl bg-gray-50 border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
                <Button className="h-14 px-10 rounded-xl">
                  Subscribe
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
