import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../../components/animations/FadeIn';
import blogHero from '../../../assets/bg/download.jpg';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

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
    image: '/images/blog-ai-future-001--1017f2b2660e.jpg',
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
    image: '/images/blog-ml-pipeline-002--80f4854982e9.jpg',
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
    image: '/images/blog-cloud-migration-003--182d57c6dd70.jpg',
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
    image: '/images/blog-realtime-analytics-004--9d62e0f4fb59.jpg',
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
    image: '/images/blog-zero-trust-005--dce57ab46a33.jpg',
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
    image: '/images/blog-digital-roi-006--b14008de1755.jpg',
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
    image: '/images/blog-healthcare-ai-007--0f6b99561e2e.jpg',
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
    image: '/images/blog-data-governance-008--23b7e0ef47a0.jpg',
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
    image: '/images/blog-kubernetes-009--5f6798050f30.jpg',
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
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={blogHero}
            alt="Blogs Hero"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
        </div>

        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
              Expert <span className="gradient-text">Insights.</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
              Stay ahead with the latest trends, best practices, and thought leadership in AI, digital transformation, and enterprise technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter & Search */}
      <section className="py-12 bg-bg-primary border-y border-white/5 sticky top-[72px] z-20 backdrop-blur-xl bg-bg-primary/80">
        <div className="container-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                    selectedCategory === category
                      ? 'bg-primary-500 border-primary-500 text-white shadow-glow-sm'
                      : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10 hover:border-white/20'
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
                className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="container-xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <FadeIn key={blog.id} direction="up">
                <article
                  className="glass rounded-3xl overflow-hidden border-white/5 hover:border-primary-500/30 transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-bg-primary/80 backdrop-blur-md text-primary-400 rounded-lg text-xs font-bold uppercase tracking-widest border border-white/10">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4 text-xs font-mono text-text-faint uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-500" />
                        {blog.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors leading-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-text-muted mb-8 line-clamp-3 font-medium leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-[1px]">
                          <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center text-white font-bold text-sm">
                            {blog.author.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{blog.author}</p>
                          <p className="text-[10px] text-text-faint font-mono uppercase tracking-widest">{blog.role}</p>
                        </div>
                      </div>
                      <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary-500 transition-colors group/btn">
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
      <section className="py-24 bg-bg-primary border-t border-white/5">
        <div className="container-xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-bg-primary to-primary-900/10 rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[100px] -z-10" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Insights Delivered.
              </h2>
              <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto font-medium">
                Subscribe to receive our latest engineering breakthroughs and AI strategy direct to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-16 px-6 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button className="h-16 px-10 bg-gradient-aurora text-white font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-glow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
