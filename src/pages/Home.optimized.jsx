import { memo, useMemo } from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import Reveal from "../components/Reveal";

// Memoized service card component
const ServiceCard = memo(({ item, index, t }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className={`rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="mb-6 text-blue-500 transition-transform duration-300">{item.icon}</div>
    <h3 className={`text-2xl font-semibold ${t.text}`}>{item.title}</h3>
    <p className={`mt-4 leading-relaxed ${t.muted}`}>{item.desc}</p>
  </motion.div>
));
ServiceCard.displayName = "ServiceCard";

// Memoized why choose us card
const WhyChooseCard = memo(({ item, index, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`flex gap-4 rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="text-3xl transition-transform duration-300 hover:scale-125">{item.icon}</div>
    <p className={`font-semibold ${t.text}`}>{item.title}</p>
  </motion.div>
));
WhyChooseCard.displayName = "WhyChooseCard";

// Memoized process card
const ProcessCard = memo(({ item, index, t }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`relative rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-orange-500 shadow-lg shadow-blue-500/20">
      <span className="text-lg font-bold text-white">{item.step}</span>
    </div>
    <h3 className={`text-2xl font-semibold ${t.text}`}>{item.title}</h3>
    <p className={`mt-3 ${t.muted}`}>{item.desc}</p>
  </motion.div>
));
ProcessCard.displayName = "ProcessCard";

// Memoized testimonial card
const TestimonialCard = memo(({ item, index, t }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className={`rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="mb-4 flex gap-1">
      {[...Array(item.rating)].map((_, i) => (
        <span key={i} className="text-2xl transition-transform duration-300 hover:scale-110">
          ⭐
        </span>
      ))}
    </div>
    <p className={`italic ${t.muted}`}>"{item.message}"</p>
    <div className="mt-6 border-t border-gray-300/50 pt-6">
      <p className={`font-semibold ${t.text}`}>{item.name}</p>
      <p className={`text-sm ${t.muted}`}>{item.company}</p>
    </div>
  </motion.div>
));
TestimonialCard.displayName = "TestimonialCard";

function Home() {
  const { themeMode } = useTheme();
  const t = theme[themeMode];

  // Memoize data to prevent unnecessary recalculations
  const services = useMemo(
    () => [
      {
        icon: <FiShoppingCart size={32} />,
        title: "Amazon Account Management",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <FiTrendingUp size={32} />,
        title: "Flipkart Account Management",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <FiTrendingUp size={32} />,
        title: "Meesho Product Listing",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <FiCheckCircle size={32} />,
        title: "Product Listing Optimization",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <FiAward size={32} />,
        title: "Sponsored Ads Management",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <FiUsers size={32} />,
        title: "Sales Growth Strategy",
        desc: "Proven strategies to boost your revenue",
      },
    ],
    []
  );

  const whyChooseUs = useMemo(
    () => [
      { title: "Trusted by hundreds of sellers and brands across India", icon: "👥" },
      { title: "Years of expertise in marketplace management", icon: "⭐" },
      { title: "Competitive rates without compromising quality", icon: "💰" },
      { title: "Personal attention to your business growth", icon: "👤" },
      { title: "Quick and efficient listing management", icon: "⚡" },
      { title: "Proven strategies to boost your revenue", icon: "📈" },
    ],
    []
  );

  const process = useMemo(
    () => [
      { step: 1, title: "Consultation", desc: "Understand your business goals and requirements" },
      { step: 2, title: "Account Analysis", desc: "Analyze your current marketplace presence" },
      { step: 3, title: "Product Listing", desc: "Create optimized product listings" },
      { step: 4, title: "Optimization", desc: "Enhance visibility and conversion rates" },
      { step: 5, title: "Ads & Marketing", desc: "Run targeted advertising campaigns" },
      { step: 6, title: "Sales Growth", desc: "Monitor and scale your sales" },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Rajesh Kumar",
        company: "Fashion Brand",
        message: "Optimus helped us increase our Amazon sales by 300% in just 6 months. Their team is professional and results-driven.",
        rating: 5,
      },
      {
        name: "Priya Sharma",
        company: "Electronics Seller",
        message: "The product listing optimization service transformed our Flipkart presence. Highly recommended!",
        rating: 5,
      },
      {
        name: "Amit Patel",
        company: "Home Decor Business",
        message: "Best investment for our e-commerce business. The ROI has been exceptional.",
        rating: 5,
      },
    ],
    []
  );

  return (
    <MainLayout>
      <main className={`relative overflow-hidden ${t.background}`}>
        {/* ================= BACKGROUND GLOW ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        {/* ================= HERO ================= */}
        <Reveal>
          <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-8 rounded-full border px-5 py-2 text-sm backdrop-blur-xl ${t.card}`}
            >
              🚀 Scale Your E-Commerce Business
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl ${t.text}`}
            >
              Grow Your Business on
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                Amazon, Flipkart & Meesho
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`mt-8 max-w-2xl text-lg leading-relaxed md:text-xl ${t.muted}`}
            >
              We help brands and sellers scale their online business with complete e-commerce management solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-5"
            >
              <button
                className={`flex items-center gap-2 rounded-xl px-7 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${t.primary}`}
              >
                Get Free Consultation
                <FiArrowRight />
              </button>
              <button
                className={`rounded-xl border px-7 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/5 ${t.card} ${t.text}`}
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`mt-20 w-full max-w-5xl rounded-3xl border p-6 backdrop-blur-2xl ${t.card}`}
            >
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-6">
                  <p className={`text-sm ${t.muted}`}>Sellers Helped</p>
                  <h3 className="mt-3 text-3xl font-bold text-blue-500">500+</h3>
                  <div className="mt-4 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="rounded-2xl bg-white/5 p-6">
                  <p className={`text-sm ${t.muted}`}>Avg Sales Growth</p>
                  <h3 className="mt-3 text-3xl font-bold text-orange-400">+300%</h3>
                  <div className="mt-4 h-2 rounded-full bg-orange-400" />
                </div>
                <div className="rounded-2xl bg-white/5 p-6">
                  <p className={`text-sm ${t.muted}`}>Marketplaces Managed</p>
                  <h3 className="mt-3 text-3xl font-bold text-amber-400">3+</h3>
                  <div className="mt-4 h-2 rounded-full bg-amber-400" />
                </div>
              </div>
            </motion.div>
          </section>
        </Reveal>

        {/* ================= ABOUT ================= */}
        <Reveal>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-6 ${t.text}`}>
                  About Optimus E-commerce Consultancy
                </h2>
                <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${t.muted}`}>
                  We are a team of dedicated e-commerce experts committed to helping sellers, brands, startups, and local businesses succeed on major online marketplaces.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column */}
                <motion.div className="space-y-8">
                  {[
                    {
                      icon: "🟠",
                      title: "Seller Onboarding",
                      desc: "Complete guidance for new sellers to get started on marketplaces",
                    },
                    {
                      icon: "🟠",
                      title: "Product Listing",
                      desc: "Optimized listings that convert browsers into buyers",
                    },
                    {
                      icon: "🟠",
                      title: "Marketplace Management",
                      desc: "Full account management across multiple platforms",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex gap-5 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-400/30 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${t.text} group-hover:text-orange-600 transition-colors duration-300`}>
                          {item.title}
                        </h3>
                        <p className={`${t.muted} leading-relaxed`}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Right Column */}
                <motion.div className="space-y-8">
                  {[
                    {
                      icon: "🔵",
                      title: "Ads & Sales Growth",
                      desc: "Strategic advertising and sales optimization",
                    },
                    {
                      icon: "🔵",
                      title: "Graphic Designing",
                      desc: "Professional visuals and content creation",
                    },
                    {
                      icon: "🔵",
                      title: "Brand Growth Strategies",
                      desc: "Long-term strategies for sustainable growth",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: -8 }}
                      className="flex gap-5 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${t.text} group-hover:text-blue-600 transition-colors duration-300`}>
                          {item.title}
                        </h3>
                        <p className={`${t.muted} leading-relaxed`}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= SERVICES ================= */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center">
              <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>Our Services</h2>
              <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${t.muted}`}>
                Comprehensive E-commerce Solutions tailored to your business needs
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item, index) => (
                <ServiceCard key={index} item={item} index={index} t={t} />
              ))}
            </div>
          </section>
        </Reveal>

        {/* ================= WHY CHOOSE US ================= */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center">
              <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>Why Choose Optimus?</h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <WhyChooseCard key={index} item={item} index={index} t={t} />
              ))}
            </div>
          </section>
        </Reveal>

        {/* ================= PROCESS ================= */}
        <Reveal>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>Our Process</h2>
                <p className={`mt-4 text-lg ${t.muted}`}>A proven 6-step approach to your e-commerce success</p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {process.map((item, index) => (
                  <ProcessCard key={index} item={item} index={index} t={t} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= TESTIMONIALS ================= */}
        <Reveal>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>What Our Clients Say</h2>
                <p className={`mt-4 text-lg ${t.muted}`}>Real success stories from sellers and brands we've helped</p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {testimonials.map((item, index) => (
                  <TestimonialCard key={index} item={item} index={index} t={t} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= CTA ================= */}
        <Reveal>
          <section className="px-6 py-28">
            <div
              className={`mx-auto max-w-5xl rounded-[32px] border p-12 text-center backdrop-blur-2xl ${t.card}`}
            >
              <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>Ready to Grow Your Business?</h2>

              <p className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${t.muted}`}>
                Let's create powerful digital experiences with premium UI, modern technologies, and scalable architecture.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${t.primary}`}
              >
                Get Started Today
                <FiArrowRight size={20} />
              </motion.button>
            </div>
          </section>
        </Reveal>
      </main>
    </MainLayout>
  );
}

export default Home;
