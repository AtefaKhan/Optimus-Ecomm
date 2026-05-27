import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Users, Star } from "lucide-react";
import Reveal from "../components/Reveal";

function Portfolio() {
  const { themeMode } = useTheme();
  const t = theme[themeMode];
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Stats data with icons
  const stats = [
    { value: "500+", label: "Projects Completed", icon: Award, color: "from-blue-500 to-blue-600" },
    { value: "5000+", label: "Products Optimized", icon: TrendingUp, color: "from-green-500 to-green-600" },
    { value: "₹50Cr+", label: "Sales Generated", icon: Star, color: "from-orange-500 to-orange-600" },
    { value: "4.8/5", label: "Client Rating", icon: Users, color: "from-purple-500 to-purple-600" },
  ];

  // Featured case studies
  const caseStudies = [
    {
      id: 1,
      icon: "📸",
      title: "Fashion Brand Growth",
      platform: "Amazon",
      brand: "Premium Fashion Store",
      description:
        "Helped a fashion brand scale from 50 to 500+ listings with optimized content and strategic ads management.",
      metrics: { growth: "300%", listings: "500+", rating: "4.8" },
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      icon: "📱",
      title: "Electronics Seller Success",
      platform: "Flipkart",
      brand: "Tech Gadgets India",
      description:
        "Increased sales by 250% through product optimization and sponsored ads campaigns.",
      metrics: { growth: "250%", listings: "200+", rating: "4.7" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      icon: "🏠",
      title: "Home Decor Expansion",
      platform: "Meesho",
      brand: "Artisan Home Co.",
      description:
        "Launched 150+ products on Meesho with complete catalog management and seller optimization.",
      metrics: { growth: "180%", listings: "150+", rating: "4.9" },
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: 4,
      icon: "💄",
      title: "Beauty Products Launch",
      platform: "Multi-Platform",
      brand: "Natural Beauty Brand",
      description:
        "Multi-marketplace launch with coordinated listing strategy across Amazon and Flipkart.",
      metrics: { growth: "400%", listings: "300+", rating: "4.8" },
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      id: 5,
      icon: "🛒",
      title: "Grocery Business Scaling",
      platform: "Amazon",
      brand: "Organic Foods Store",
      description:
        "Optimized grocery listings for better visibility and conversion on Amazon Fresh.",
      metrics: { growth: "220%", listings: "100+", rating: "4.6" },
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 6,
      icon: "⚽",
      title: "Sports Equipment Success",
      platform: "Flipkart",
      brand: "Athletic Gear Co.",
      description:
        "Complete account management resulting in top seller status and increased visibility.",
      metrics: { growth: "350%", listings: "250+", rating: "4.9" },
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Portfolio showcase categories
  const portfolioShowcase = [
    { id: "listings", category: "Product Listing Samples", count: "50+", description: "Optimized listings that drive conversions", icon: "📝" },
    { category: "Before & After", count: "30+", description: "Transformation and impact examples", icon: "🔄" },
    { category: "Infographic Designs", count: "100+", description: "Professional A+ content", icon: "🎨" },
    { category: "Marketplace Dashboards", count: "20+", description: "Performance metrics", icon: "📊" },
    { category: "3D Mockups", count: "40+", description: "High-quality visualizations", icon: "🎭" },
    { category: "Video Content", count: "25+", description: "Professional videos", icon: "🎬" },
  ];

  // Success stories with better content
  const successStories = [
    {
      id: 1,
      title: "From Startup to Top Seller",
      description:
        "A new e-commerce startup went from 0 to becoming a top seller on Amazon within 6 months with our complete account management and optimization services.",
      metrics: "6 months",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Multi-Platform Expansion",
      description:
        "A successful Amazon seller expanded to Flipkart and Meesho simultaneously with our coordinated marketplace strategy, achieving 250% growth.",
      metrics: "250% growth",
      icon: "📈",
    },
    {
      id: 3,
      title: "Crisis Recovery",
      description:
        "A seller with account issues and low ratings recovered to become a 5-star seller through our account health monitoring and optimization services.",
      metrics: "5-star status",
      icon: "⭐",
    },
    {
      id: 4,
      title: "Product Line Scaling",
      description:
        "A brand with 50 SKUs scaled to 500+ products across multiple marketplaces with our bulk listing and optimization expertise.",
      metrics: "10x growth",
      icon: "📦",
    },
  ];

  // Animation variants
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

        {/* ================= HERO SECTION ================= */}
        <Reveal>
          <section className="relative mx-auto flex flex-col items-center justify-center px-6 py-10 text-center max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-8 rounded-full border px-5 py-2 text-sm backdrop-blur-xl ${t.card}`}
            >
              🎯 Our Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight ${t.text}`}
            >
              Proven Success Stories
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`mt-8 max-w-3xl text-lg md:text-xl leading-relaxed ${t.muted}`}
            >
              Explore our work and see how we've helped 500+ sellers and brands succeed on major e-commerce platforms
            </motion.p>
          </section>
        </Reveal>

        {/* ================= STATS SECTION ================= */}
        <Reveal>
          <section className="px-6 py-12">
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -8 }}
                      className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${t.card}`}
                    >
                      <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${stat.color} w-fit`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className={`${t.muted} text-sm md:text-base`}>{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= FEATURED CASE STUDIES ================= */}
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
                  Featured Case Studies
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg max-w-2xl mx-auto ${t.muted}`}
                >
                  Real results from sellers and brands across multiple platforms
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {caseStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    variants={itemVariants}
                    whileHover={{ y: -12 }}
                    className={`relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden ${t.card} group`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />

                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-5xl p-2 rounded-lg bg-gradient-to-r ${study.color} bg-clip-text`}>
                        {study.icon}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        {study.platform}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${t.text}`}>{study.title}</h3>
                    <p className={`text-sm font-medium mb-4 ${t.muted}`}>{study.brand}</p>
                    <p className={`text-sm leading-relaxed mb-6 ${t.muted}`}>{study.description}</p>

                    <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${themeMode === "dark" ? "border-white/10" : "border-gray-200/70"}`}>
                      <div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                          {study.metrics.growth}
                        </div>
                        <div className={`${t.muted} text-xs mt-1`}>Sales Growth</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${t.text}`}>{study.metrics.listings}</div>
                        <div className={`${t.muted} text-xs mt-1`}>Listings</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-500">{study.metrics.rating}</div>
                        <div className={`${t.muted} text-xs mt-1`}>Rating</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= PORTFOLIO SHOWCASE ================= */}
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
                  Portfolio Showcase
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg max-w-2xl mx-auto ${t.muted}`}
                >
                  Explore examples of our work across different categories
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {portfolioShowcase.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedCategory(item.id || "all")}
                    className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer group ${t.card} hover:border-blue-500/50`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl">{item.icon}</div>
                      <span className="text-2xl font-bold text-blue-500">{item.count}</span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${t.text}`}>{item.category}</h3>
                    <p className={`text-sm ${t.muted} mb-4`}>{item.description}</p>
                    <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm group-hover:gap-3 transition-all">
                      View Gallery <ArrowRight size={16} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= SUCCESS STORIES ================= */}
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
                  Success Stories
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg max-w-2xl mx-auto ${t.muted}`}
                >
                  Inspiring journeys of sellers and brands we've helped transform
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {successStories.map((story) => (
                  <motion.div
                    key={story.id}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${t.card} group`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{story.icon}</div>
                      <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-500 font-bold text-sm">
                        {story.metrics}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${t.text}`}>{story.title}</h3>
                    <p className={`text-base leading-relaxed ${t.muted}`}>{story.description}</p>
                    <div className="mt-6 pt-6 border-t border-gray-200/10 group-hover:border-blue-500/30 transition-colors">
                      <a href="/contact" className="text-blue-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={18} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= CTA SECTION ================= */}
        {/* <Reveal>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-12 rounded-3xl backdrop-blur-xl ${t.card} border-2 border-blue-500/30 bg-gradient-to-br ${
                  themeMode === "dark"
                    ? "from-blue-600/10 to-orange-500/10"
                    : "from-blue-50/50 to-orange-50/50"
                }`}
              >
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
                >
                  Ready to Add Your Success Story?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg mb-10 max-w-2xl mx-auto ${t.muted}`}
                >
                  Join hundreds of sellers and brands who have achieved remarkable growth with Optimus. Let's start your transformation today.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${t.primary}`}
                  >
                    Get Started Today
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="/pricing"
                    className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 border-2 border-blue-500/30 ${t.text} hover:border-blue-500/60 hover:bg-blue-500/5`}
                  >
                    View Pricing
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </Reveal> */}
      </div>
    </MainLayout>
  );
}

export default Portfolio;
