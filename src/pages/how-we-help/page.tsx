import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const HowWeHelpPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-slate-50 flex flex-col font-sans">
            <Header />

            <main className="flex-1 mt-[72px]">

                {/* ===================== SECTION 1 ===================== */}
                <div className="flex flex-col lg:flex-row border-b border-gray-100">

                    {/* LEFT — What We Do (65%) */}
                    <section className="w-full lg:w-[65%] bg-white px-5 sm:px-6 py-6 border-r border-gray-100 rounded-br-xl">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                            What We Do
                        </h1>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Build',
                                    items: ['App Development', 'UI / UX', 'Integration', 'Data Engineering', 'AI / ML'],
                                },
                                {
                                    title: 'Run',
                                    items: ['Testing', 'QA Automation', 'Cloud Operations', 'Monitoring', 'Process Automation'],
                                },
                                {
                                    title: 'Scale',
                                    items: ['Cloud Migration', 'BI & Analytics', 'AI Automation', 'Modernization', 'Architecture Advisory'],
                                },
                            ].map((section, index, arr) => (
                                <div key={section.title} className="flex gap-4">

                                    {/* LEFT — connector */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-primary-500)]/10 flex items-center justify-center text-[var(--color-primary-500)]">
                                            <i className="ri-arrow-right-line text-sm" />
                                        </div>

                                        {index !== arr.length - 1 && (
                                            <div className="w-px flex-1 bg-slate-200 mt-1" />
                                        )}
                                    </div>

                                    {/* RIGHT — content */}
                                    <div className="flex-1">
                                        <h2 className="text-sm sm:text-base font-semibold text-gray-700 uppercase tracking-wide mb-3">
                                            {section.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-2">
                                            {section.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 bg-slate-100 rounded-full
                                                               hover:bg-[var(--color-primary-500)]/10 hover:text-[var(--color-primary-500)] transition-colors"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RIGHT — Engagement Models (35%) */}
                    <section className="w-full lg:w-[35%] bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] px-5 sm:px-6 py-6 lg:rounded-bl-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                            Engagement Models
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    title: 'PoC / MVP',
                                    desc: 'Rapid prototyping (2–6 weeks) to validate business value and feasibility.',
                                    icon: 'ri-flask-line',
                                },
                                {
                                    title: 'Fixed Price / T&M',
                                    desc: 'Flexible delivery for fixed scope or ongoing development.',
                                    icon: 'ri-time-line',
                                },
                                {
                                    title: 'Staff Augmentation',
                                    desc: 'Instant access to specialized AI, data, and app engineers.',
                                    icon: 'ri-group-line',
                                },
                            ].map((model) => (
                                <div
                                    key={model.title}
                                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        <i className={`${model.icon} text-[var(--color-primary-500)]`} />
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {model.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {model.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* ===================== SECTION 2 ===================== */}
                <div className="flex flex-col lg:flex-row border-b border-gray-100">

                    {/* LEFT — Why ForgeByte (35%) */}
                    <section className="w-full lg:w-[35%] bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] px-5 sm:px-6 py-8 border-r border-gray-100 lg:rounded-tr-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                            Why ForgeByte
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-white p-4 rounded-lg">
                            {[
                                { icon: 'ri-brain-line', label: 'AI-First Engineering' },
                                { icon: 'ri-stack-line', label: 'Structured Delivery' },
                                { icon: 'ri-rocket-line', label: 'Faster Deployment' },
                                { icon: 'ri-shake-hands-line', label: 'Long-Term Partnership' },
                            ].map((pillar) => (
                                <div key={pillar.label} className="flex items-center gap-2 text-gray-900">
                                    <i className={`${pillar.icon} text-[var(--color-primary-500)]`} />
                                    <span className="text-sm font-semibold">
                                        {pillar.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { num: '23+', label: 'AI Engineers' },
                                { num: '50+', label: 'Data Engineers' },
                                { num: '30+', label: 'App Engineers' },
                                { num: '25+', label: 'QA Specialists' },
                                { num: '50+', label: 'Projects Delivered' },
                                { num: '9+', label: 'Industries' },
                            ].map((metric) => (
                                <div key={metric.label}>
                                    <div className="text-lg font-semibold text-white">
                                        {metric.num}
                                    </div>
                                    <div className="text-[11px] text-white/80 uppercase tracking-wide">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RIGHT — How We Engage (65%) */}
                    <section className="w-full lg:w-[65%] bg-white px-5 sm:px-6 py-8 rounded-tl-xl">
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                How We Engage
                            </h2>
                            <p className="text-sm text-gray-600">
                                A structured, transparent approach to delivering value from day one.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="hidden md:block absolute top-[26px] left-0 right-0 h-[2px] bg-slate-200" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                                {[
                                    {
                                        title: 'Identify',
                                        icon: 'ri-search-eye-line',
                                        desc: 'Analyze workflows, pain points, and manual processes',
                                    },
                                    {
                                        title: 'Assess',
                                        icon: 'ri-file-list-3-line',
                                        desc: 'Evaluate data readiness, integration, and ROI potential',
                                    },
                                    {
                                        title: 'Define',
                                        icon: 'ri-pencil-ruler-2-line',
                                        desc: 'Select high-value Engineering, Automation or AI opportunity',
                                    },
                                    {
                                        title: 'Build',
                                        icon: 'ri-hammer-line',
                                        desc: 'Develop production-grade, scalable architecture',
                                    },
                                    {
                                        title: 'Deploy',
                                        icon: 'ri-rocket-2-line',
                                        desc: 'Deploy securely and optimize continuously',
                                    },
                                ].map((step) => (
                                    <div
                                        key={step.title}
                                        className="flex flex-col items-center text-center max-w-[220px] mx-auto"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--color-primary-500)] mb-2">
                                            <i className={step.icon} />
                                        </div>

                                        <span className="text-md font-semibold mb-1">
                                            {step.title}
                                        </span>

                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HowWeHelpPage;