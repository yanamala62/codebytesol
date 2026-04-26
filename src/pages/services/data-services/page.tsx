import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-database-2-line',
    title: 'Data Engineering',
    points: [
      'We build scalable data pipelines that improve data quality, accelerate insights, and prepare organizations for advanced analytics and AI.',
      'Our approach optimizes data platforms and governance, ensuring reliable, secure, and growth-ready data ecosystems.'
    ]
  },
  {
    icon: 'ri-archive-line',
    title: 'Data Warehousing & ETL',
    points: [
      'We deliver enterprise data warehouses that creates a trusted data foundation for faster insights and confident business decisions.',
      'Our designs optimize integration, performance, and governance, supporting scalable analytics and long-term data reliability.'
    ]
  },
  {
    icon: 'ri-dashboard-line',
    title: 'Business Intelligence & Dashboards',
    points: [
      'We Transform Data to dashboards that turn data into clear insights, enabling faster decisions and better business visibility.',
      'Our analytics solutions ensure accurate reporting, strong governance, and scalable insight delivery across teams.'
    ]
  },
  {
    icon: 'ri-server-line',
    title: 'Big Data Solutions',
    points: [
      'We design scalable big data platforms that process large, fast-moving datasets to improve decision speed and operational insight.',
      'Our architectures ensure secure ingestion, real-time processing, and governed analytics across distributed and cloud environments.'
    ]
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Data Governance & Quality',
    points: [
      'We implement data governance frameworks that ensure accuracy, security, and compliance across enterprise data assets.',
      'Our approach builds trust in data, enabling confident analytics, AI initiatives, and scalable decision making.'
    ]
  }
];

const dataFrameworks = [
  {
    category: 'Data Engineering',
    tools: ['Apache Spark', 'Apache Kafka', 'Apache Flink', 'Databricks', 'Hadoop', 'Snowflake', 'Python', 'Scala', 'SQL', 'Airflow', 'dbt', 'Azure Data Factory', 'AWS Glue']
  },
  {
    category: 'Business Intelligence & Dashboards',
    tools: ['Power BI', 'Tableau', 'Looker', 'Qlik Sense', 'Amazon QuickSight', 'Superset', 'Metabase', 'DAX', 'MDX', 'SQL']
  },
  {
    category: 'Data Warehouse & ETL',
    tools: ['Snowflake', 'Amazon Redshift', 'Google BigQuery', 'Azure Synapse Analytics', 'Teradata', 'Informatica', 'Talend', 'Fivetran', 'Matillion', 'SSIS', 'dbt', 'Custom ETL Pipelines']
  },
  {
    category: 'Data Governance',
    tools: ['Collibra', 'Alation', 'Apache Atlas', 'AWS Lake Formation', 'Azure Purview', 'Data Catalogs, Lineage & Metadata Management', 'Data Quality, Access Controls, Compliance & Audits']
  }
];

export default function DataServices() {




  /* const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  }; */

  /* const setPlatformRef = (index: number) => (el: HTMLDivElement | null) => {
    platformsRef.current[index] = el;
  }; */

  const getCardClasses = () => {
    return 'bg-white border border-gray-200 rounded-xl p-8 hover:border-[#00C896] hover:shadow-lg transition-all duration-500 transform opacity-100 translate-x-0 scale-100 flex flex-col h-full';
  };



  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/data-services-hero-bg-002--98de717c5cfc.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-database-2-line text-white"></i>
              <span className="text-sm font-medium text-white">Data Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Data Into <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Strategic Assets</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Unlock the full potential of your data with comprehensive analytics, engineering, and governance solutions that drive informed decision-making.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C896] text-white rounded-lg font-medium hover:bg-[#00B085] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Unlock Your Data
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Data Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive data solutions from engineering to insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={getCardClasses()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                    <i className={`${service.icon} text-xl text-[#00C896]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-3 flex-grow">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#00C896] mt-1.5">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Ready <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Data Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ForgeByte follows a tool-agnostic, AI-infused data approach, powered by our proprietary FB Data Framework, enabling trusted data, governed analytics, and scalable insights across enterprise data ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#00C896] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                  {framework.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {framework.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#00C896] to-[#00D9FF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness Your Data?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build a data strategy that drives informed decisions and business growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00C896] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Start Your Data Journey
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
