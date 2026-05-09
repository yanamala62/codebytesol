import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/blogs-hero-workspace-modern-v3-789--2533e9e01446.jpg"
            alt="Blogs Hero"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert Insights & <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Blogs</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay ahead with the latest trends, best practices, and thought leadership in AI, digital transformation, and enterprise technology
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

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{blog.author}</p>
                      <p className="text-xs text-gray-500">{blog.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 flex items-center gap-1 whitespace-nowrap">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <button className="px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
