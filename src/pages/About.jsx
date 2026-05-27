import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";
import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Zap } from "lucide-react";
import Reveal from "../components/Reveal";

function About() {
  const { themeMode } = useTheme();
  const t = theme[themeMode];

  const stats = [
    { label: "Happy Clients", value: "500+", icon: <Users size={28} className="text-blue-500" /> },
    { label: "Products Listed", value: "1000+", icon: <TrendingUp size={28} className="text-emerald-500" /> },
    { label: "Avg. Sales Growth", value: "300%", icon: <Award size={28} className="text-amber-500" /> },
    { label: "Years Experience", value: "5+", icon: <Zap size={28} className="text-violet-500" /> },
  ];

  const specializations = [
    {
      title: "Seller Onboarding",
      description: "Complete guidance for new sellers to get started",
    },
    {
      title: "Product Listing",
      description: "Optimized listings that convert browsers into buyers",
    },
    {
      title: "Marketplace Management",
      description: "Full account management across multiple platforms",
    },
    {
      title: "Ads & Sales Growth",
      description: "Strategic advertising and sales optimization",
    },
    {
      title: "Graphic Designing",
      description: "Professional visuals and content creation",
    },
    {
      title: "Brand Growth Strategies",
      description: "Long-term strategies for sustainable growth",
    },
  ];

  const team = [
    {
      name: "Shahrukh Khan",
      role: "Founder & E-commerce Growth Strategist",
      expertise: "Strategic Leadership",
      initial: "S",
    },
    {
      name: "Nayab Khan",
      role: "Sr. Business Development Executive & Social Media Manager",
      expertise: "Business Growth & Social Media",
      initial: "N",
    },
    {
      name: "Pradyumn Gautam",
      role: "Business Development Executive & Flipkart Account Manager",
      expertise: "Flipkart Marketplace",
      initial: "P",
    },
    {
      name: "Kefia Khan",
      role: "Global Marketplace Account Manager",
      expertise: "Marketplace Management",
      initial: "K",
    },
    {
      name: "Atefa Khan",
      role: "Full Stack Web & App Developer",
      expertise: "Technology & Development",
      initial: "A",
    },
    {
      name: "Sameer Khan",
      role: "Quick Commerce Seller Account Manager",
      expertise: "Quick Commerce",
      initial: "S",
    },
  ];

  const reasons = [
    {
      title: "Dedicated Support",
      description: "Each client gets a dedicated account manager for personalized attention",
    },
    {
      title: "Proven Results",
      description: "Our strategies are backed by years of experience and real success stories",
    },
    {
      title: "Continuous Growth",
      description: "We focus on sustainable growth and long-term success for your business",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <MainLayout>
      <div className={`relative overflow-hidden ${t.background}`}>
        {/* ================= BACKGROUND GLOW ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        {/* ================= HERO ================= */}
        <Reveal>
          <section className="relative mx-auto flex flex-col items-center justify-center px-6 py-10 text-center max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-8 rounded-full border px-5 py-2 text-sm backdrop-blur-xl ${t.card}`}
            >
              📖 Our Journey
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight ${t.text}`}
            >
              About Optimus E-commerce Consultancy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`mt-8 max-w-3xl text-lg md:text-xl leading-relaxed ${t.muted}`}
            >
              We are committed to helping sellers and brands succeed on major e-commerce marketplaces through expert guidance and proven strategies.
            </motion.p>
          </section>
        </Reveal>

        {/* ================= OUR STORY ================= */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}>
                    Our Story
                  </h2>
                  <p className={`text-lg leading-relaxed mb-6 ${t.muted}`}>
                    Optimus E-commerce Consultancy was founded with a simple mission: to empower sellers, brands, startups, and local businesses to grow their online presence on major marketplaces like Amazon, Flipkart, and Meesho.
                  </p>
                  <p className={`text-lg leading-relaxed mb-6 ${t.muted}`}>
                    With over 5 years of experience in the e-commerce industry, our team has successfully helped hundreds of businesses scale their operations, optimize their listings, and achieve remarkable sales growth. We understand the challenges sellers face and provide tailored solutions that deliver real results.
                  </p>
                  <p className={`text-lg leading-relaxed ${t.muted}`}>
                    Today, we are proud to be one of the most trusted e-commerce consultancy firms in India, known for our professional approach, affordable pricing, and dedication to client success.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className={`rounded-2xl p-6 backdrop-blur-xl ${t.card}`}
                    >
                      <div className="text-blue-500 mb-4">{stat.icon}</div>
                      <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </p>
                      <p className={`text-sm ${t.muted}`}>{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= SPECIALIZATIONS ================= */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
                >
                  Our Specializations
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg max-w-3xl mx-auto ${t.muted}`}
                >
                  We offer comprehensive solutions across all aspects of e-commerce management
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {specializations.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${t.card} group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${t.text}`}>
                          {spec.title}
                        </h3>
                        <p className={`${t.muted} leading-relaxed`}>
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= OUR TEAM ================= */}
     {/* ================= OUR TEAM ================= */}
{/* ================= OUR TEAM ================= */}
<Reveal>
  <section className="px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-4 ${t.text}`}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-lg max-w-2xl mx-auto ${t.muted}`}
        >
          A dedicated team of e-commerce experts with years of combined experience
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative group rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${t.card}`}
          >
            {/* Card inner */}
            <div className="flex flex-col items-center text-center px-8 pt-10 pb-8">

              {/* Avatar */}
              <div className="relative mb-6">
                {/* Outer glow ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-orange-400 opacity-40 blur-md group-hover:opacity-80 transition-all duration-500" />
                {/* Ring border */}
                <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-blue-500 to-orange-400" />
                {/* Avatar circle */}
                <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {member.initial}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className={`text-xl font-bold leading-snug mb-1 ${t.text}`}>
                {member.name}
              </h3>

              {/* Role */}
              <p className={`text-sm leading-relaxed mb-5 px-2 ${t.muted}`}>
                {member.role}
              </p>

              {/* Expertise pill */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-400/10 border border-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                {member.expertise}
              </span>
            </div>

            {/* Bottom accent line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
</Reveal>

        {/* ================= WHY WE'RE DIFFERENT ================= */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
                >
                  Why We're Different
                </motion.h2>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {reasons.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className={`p-8 rounded-2xl backdrop-blur-xl border-l-4 border-blue-500 transition-all duration-300 ${t.card} group`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <span className="text-lg">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-semibold mb-3 ${t.text}`}>
                          {reason.title}
                        </h3>
                        <p className={`text-lg leading-relaxed ${t.muted}`}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= CTA ================= */}
        {/* <Reveal>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
              >
                Ready to Grow Your E-Commerce Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-lg mb-10 max-w-2xl mx-auto ${t.muted}`}
              >
                Let's work together to scale your business on major e-commerce platforms. Our team is ready to help you succeed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-5"
              >
                <button
                  className={`flex items-center gap-2 rounded-xl px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${t.primary}`}
                >
                  Get Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </section>
        </Reveal> */}
      </div>
    </MainLayout>
  );
}

export default About;
