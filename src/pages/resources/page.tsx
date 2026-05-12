import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../components/animations/FadeIn';
import { Trophy, Newspaper, FileText, PlayCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/primitives/Button';

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
    icon: <Newspaper className="w-8 h-8 text-primary-500" />,
    link: '/resources/blogs',
    color: 'primary'
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
    icon: <PlayCircle className="w-8 h-8 text-primary-500" />,
    link: '/resources/videos',
    color: 'primary'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/resources/res_success.png" 
            alt="Resources Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>

        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase italic">
              Knowledge <br />
              <span className="text-primary-500">Hub.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              Explore our collection of expert insights, technical research, and success stories at the intersection of AI and Engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container-xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category) => (
              <FadeIn key={category.id} direction="up">
                <a 
                  href={category.link}
                  className="bg-gray-50 p-10 block group hover:bg-white hover:border-primary-500 hover:shadow-soft transition-all border border-border rounded-3xl relative overflow-hidden"
                >
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-border group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-primary-500 transition-colors tracking-tight">
                    {category.title}
                  </h3>
                  
                  <p className="text-lg text-text-muted mb-8 leading-relaxed font-medium">
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
      <section className="py-24 bg-gray-50 border-t border-border">
        <div className="container-xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="bg-white rounded-[2.5rem] p-12 md:p-20 border border-border shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 blur-[120px] rounded-full translate-x-1/2" />
               
               <div className="flex-1 relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">Stay Informed.</h2>
                  <p className="text-lg text-text-muted mb-8 font-medium">
                    Subscribe to our quarterly AI strategy newsletter for exclusive research and engineering breakthroughs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                    <input 
                      type="email" 
                      placeholder="Enter your enterprise email" 
                      className="flex-1 h-14 px-6 rounded-xl bg-gray-50 border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                    <Button className="h-14 px-8 rounded-xl">
                      Subscribe
                    </Button>
                  </div>
               </div>
               <div className="w-full md:w-1/3 aspect-square bg-gray-50 rounded-3xl border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Newspaper className="w-32 h-32 text-primary-500/20 relative z-10 group-hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
