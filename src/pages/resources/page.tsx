import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../components/animations/FadeIn';
import resourcesHero from '../../assets/bg/download (4).jpg';
import { Trophy, Newspaper, FileText, PlayCircle, ArrowRight } from 'lucide-react';

const resourceCategories = [
  {
    id: 'success-stories',
    title: 'Success Stories',
    desc: 'Real-world case studies and client results achieved through AI transformation.',
    icon: <Trophy className="w-8 h-8 text-primary-500" />,
    link: '/resources/success-stories',
    color: 'primary'
  },
  {
    id: 'blogs',
    title: 'Expert Blogs',
    desc: 'Latest insights, engineering trends, and thought leadership from our experts.',
    icon: <Newspaper className="w-8 h-8 text-accent-500" />,
    link: '/resources/blogs',
    color: 'accent'
  },
  {
    id: 'white-papers',
    title: 'White Papers',
    desc: 'In-depth research, technical guides, and strategic industry frameworks.',
    icon: <FileText className="w-8 h-8 text-primary-500" />,
    link: '/resources/white-papers',
    color: 'primary'
  },
  {
    id: 'videos',
    title: 'Video Insights',
    desc: 'Educational tutorials, product demos, and webinar highlights.',
    icon: <PlayCircle className="w-8 h-8 text-accent-500" />,
    link: '/resources/videos',
    color: 'accent'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={resourcesHero}
            alt="Resources"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
        </div>

        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
              Knowledge <span className="gradient-text">Hub.</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
              Explore our collection of expert insights, technical research, and success stories at the intersection of AI and Engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="container-xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category) => (
              <FadeIn key={category.id} direction="up">
                <a 
                  href={category.link}
                  className="glass p-10 block group hover:border-primary-500/30 transition-all border-white/5 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${category.color}-500/5 blur-[60px] group-hover:bg-${category.color}-500/10 transition-all`} />
                  
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary-500/30 group-hover:scale-110 transition-all">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-xl text-text-muted mb-8 leading-relaxed font-medium">
                    {category.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary-500 font-bold group-hover:gap-4 transition-all">
                    Browse Category
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Featured Resource CTA */}
      <section className="py-24 bg-bg-primary border-t border-white/5">
        <div className="container-xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-[3rem] p-12 md:p-20 border border-white/10 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Stay Informed.</h2>
                  <p className="text-xl text-text-muted mb-8 font-medium">
                    Subscribe to our quarterly AI strategy newsletter for exclusive research and engineering breakthroughs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                    <input 
                      type="email" 
                      placeholder="Enter your enterprise email" 
                      className="flex-1 h-16 px-6 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    />
                    <button className="h-16 px-8 bg-gradient-aurora text-white font-bold rounded-xl hover:scale-[1.02] transition-transform">
                      Subscribe
                    </button>
                  </div>
               </div>
               <div className="w-full md:w-1/3 aspect-square glass rounded-3xl border-white/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20" />
                  <Newspaper className="w-32 h-32 text-white/20" />
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
