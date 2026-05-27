import { memo, useMemo } from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";

import { motion } from "framer-motion";

import {
  ShoppingCart,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Users2,
  Star,
  DollarSign,
  User,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

// Memoized service card component
const ServiceCard = memo(({ item, index, t }) => (
  <motion.div
    key={index}
    whileHover={{ y: -10, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className={`rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="mb-6 text-blue-500 transition-transform duration-300">
      {item.icon}
    </div>
    <h3 className={`text-2xl font-semibold ${t.text}`}>{item.title}</h3>
    <p className={`mt-4 leading-relaxed ${t.muted}`}>{item.desc}</p>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

// Memoized why choose us card
const WhyChooseCard = memo(({ item, index, t }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`flex gap-4 rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="flex-shrink-0 text-blue-500 transition-transform duration-300 hover:scale-125">
      {item.icon}
    </div>
    <p className={`font-semibold ${t.text}`}>{item.title}</p>
  </motion.div>
));

WhyChooseCard.displayName = "WhyChooseCard";

// Memoized process card
const ProcessCard = memo(({ item, index, t }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`relative rounded-2xl border p-6 md:p-8 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="flex items-start gap-4 md:gap-6">
      <div className="flex-shrink-0 mt-1 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-orange-500 shadow-lg shadow-blue-500/20">
        <span className="text-lg md:text-xl font-bold text-white">
          {item.step}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${t.text}`}>
          {item.title}
        </h3>
        <p className={`text-sm md:text-base leading-relaxed ${t.muted}`}>
          {item.desc}
        </p>
      </div>
    </div>
  </motion.div>
));

ProcessCard.displayName = "ProcessCard";

// Memoized testimonial card
const TestimonialCard = memo(({ item, index, t }) => (
  <motion.div
    key={index}
    whileHover={{ y: -8, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className={`rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card}`}
  >
    <div className="mb-4 flex gap-1">
      {[...Array(item.rating)].map((_, i) => (
        <span
          key={i}
          className="text-2xl transition-transform duration-300 hover:scale-110"
        >
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
        icon: <ShoppingCart size={32} className="text-blue-500" />,
        title: "Amazon Account Management",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <TrendingUp size={32} className="text-emerald-500" />,
        title: "Flipkart Account Management",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <BarChart3 size={32} className="text-violet-500" />,
        title: "Meesho Product Listing",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <CheckCircle size={32} className="text-cyan-500" />,
        title: "Product Listing Optimization",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <Award size={32} className="text-amber-500" />,
        title: "Sponsored Ads Management",
        desc: "Expert management and optimization for maximum results",
      },
      {
        icon: <Users2 size={32} className="text-pink-500" />,
        title: "Sales Growth Strategy",
        desc: "Proven strategies to boost your revenue",
      },
    ],
    [],
  );

  const whyChooseUs = useMemo(
    () => [
      {
        title: "Trusted by hundreds of sellers and brands across India",
        icon: <Users2 size={24} />,
      },
      {
        title: "Years of expertise in marketplace management",
        icon: <Star size={24} />,
      },
      {
        title: "Competitive rates without compromising quality",
        icon: <DollarSign size={24} />,
      },
      {
        title: "Personal attention to your business growth",
        icon: <User size={24} />,
      },
      {
        title: "Quick and efficient listing management",
        icon: <Zap size={24} />,
      },
      {
        title: "Proven strategies to boost your revenue",
        icon: <TrendingUp size={24} />,
      },
    ],
    [],
  );

  const process = [
    {
      step: 1,
      title: "Consultation",
      desc: "Understand your business goals and requirements",
    },
    {
      step: 2,
      title: "Account Analysis",
      desc: "Analyze your current marketplace presence",
    },
    {
      step: 3,
      title: "Product Listing",
      desc: "Create optimized product listings",
    },
    {
      step: 4,
      title: "Optimization",
      desc: "Enhance visibility and conversion rates",
    },
    {
      step: 5,
      title: "Ads & Marketing",
      desc: "Run targeted advertising campaigns",
    },
    { step: 6, title: "Sales Growth", desc: "Monitor and scale your sales" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Fashion Brand",
      message:
        "Optimus helped us increase our Amazon sales by 300% in just 6 months. Their team is professional and results-driven.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Electronics Seller",
      message:
        "The product listing optimization service transformed our Flipkart presence. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Home Decor Business",
      message:
        "Best investment for our e-commerce business. The ROI has been exceptional.",
      rating: 5,
    },
  ];

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
          <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-10 text-center">
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
              We help brands and sellers scale their online business with
              complete e-commerce management solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-5"
            >
              {/* <button
                className={`flex items-center gap-2 rounded-xl px-7 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${t.primary}`}
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
              <button
                className={`rounded-xl border px-7 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/5 ${t.card} ${t.text}`}
              >
                Learn More
              </button> */}
              <Link
                to="/contact#consultation-form"
                className={`flex items-center gap-2 rounded-xl px-7 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${t.primary}`}
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
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
                  <h3 className="mt-3 text-3xl font-bold text-blue-500">
                    500+
                  </h3>
                  <div className="mt-4 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="rounded-2xl bg-white/5 p-6">
                  <p className={`text-sm ${t.muted}`}>Avg Sales Growth</p>
                  <h3 className="mt-3 text-3xl font-bold text-orange-400">
                    +300%
                  </h3>
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
                <h2
                  className={`text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-6 ${t.text}`}
                >
                  About Optimus E-commerce Consultancy
                </h2>
                <p
                  className={`text-lg leading-relaxed max-w-3xl mx-auto ${t.muted}`}
                >
                  We are a team of dedicated e-commerce experts committed to
                  helping sellers, brands, startups, and local businesses
                  succeed on major online marketplaces.
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
                        <h3
                          className={`text-xl font-semibold mb-2 ${t.text} group-hover:text-orange-600 transition-colors duration-300`}
                        >
                          {item.title}
                        </h3>
                        <p className={`${t.muted} leading-relaxed`}>
                          {item.desc}
                        </p>
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
                        <h3
                          className={`text-xl font-semibold mb-2 ${t.text} group-hover:text-blue-600 transition-colors duration-300`}
                        >
                          {item.title}
                        </h3>
                        <p className={`${t.muted} leading-relaxed`}>
                          {item.desc}
                        </p>
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
              <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>
                Our Services
              </h2>
              <p
                className={`text-lg leading-relaxed max-w-3xl mx-auto ${t.muted}`}
              >
                Comprehensive E-commerce Solutions tailored to your business
                needs
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card} ${
                    themeMode === "light" ? t.cardHover : ""
                  }`}
                >
                  <div className="mb-6 text-blue-500 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold ${t.text}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-4 leading-relaxed ${t.muted}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ================= WHY CHOOSE US ================= */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center">
              <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>
                Why Choose Optimus?
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`flex gap-4 rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${t.card} ${
                    themeMode === "light" ? t.cardHover : ""
                  }`}
                >
                  <div className="text-3xl transition-transform duration-300 hover:scale-125">
                    {item.icon}
                  </div>
                  <p className={`font-semibold ${t.text}`}>{item.title}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ================= PROCESS ================= */}
        <Reveal>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>
                  Our Process
                </h2>
                <p className={`mt-4 text-lg ${t.muted}`}>
                  A proven 6-step approach to your e-commerce success
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`relative rounded-2xl border p-5 sm:p-6 lg:p-8 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                      t.card
                    } ${themeMode === "light" ? t.cardHover : ""}`}
                  >
                    {/* Gradient Glow */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 to-orange-500/10 pointer-events-none" />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-orange-500 shadow-lg shadow-blue-500/20 shrink-0">
                        <span className="text-base sm:text-lg font-bold text-white">
                          {item.step}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3
                          className={`text-lg sm:text-xl lg:text-2xl font-semibold leading-snug ${t.text}`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mt-4 text-sm sm:text-base leading-relaxed ${t.muted}`}
                    >
                      {item.desc}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
                  </motion.div>
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
                <h2 className={`text-4xl font-bold md:text-5xl ${t.text}`}>
                  What Our Clients Say
                </h2>
                <p className={`mt-4 text-lg ${t.muted}`}>
                  Real success stories from sellers and brands we've helped
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {testimonials.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 ${t.card} ${
                      themeMode === "light" ? t.cardHover : ""
                    }`}
                  >
                    <div className="mb-4 flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-2xl transition-transform duration-300 hover:scale-110"
                        >
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
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= CTA ================= */}

        {/* ================= CTA ================= */}
        <Reveal>
          <section className="px-6 py-28">
            <div className="mx-auto max-w-5xl">
              {/* Outer glow ring */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-blue-500 via-orange-400 to-blue-600 opacity-30 blur-2xl animate-pulse" />

                <div
                  className={`relative rounded-[32px] border overflow-hidden backdrop-blur-2xl ${t.card}`}
                >
                  {/* Animated grid background */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Floating orbs */}
                  <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500/20 blur-[80px] -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-500/20 blur-[80px] translate-x-1/2 translate-y-1/2" />

                  <div className="relative px-8 py-16 md:px-16 md:py-20">
                    {/* Eyebrow */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex justify-center mb-8"
                    >
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-xl ${t.card}`}
                      >
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        <span className={t.muted}>Free consultation</span>
                      </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className={`text-center text-4xl md:text-6xl font-bold leading-tight tracking-tight ${t.text}`}
                    >
                      Ready to{" "}
                      <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                        10x Your Sales
                      </span>
                      ?
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className={`mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed ${t.muted}`}
                    >
                      Join 500+ sellers already scaling on Amazon, Flipkart &
                      Meesho. Our experts will audit your account and build a
                      growth roadmap — free.
                    </motion.p>

                    {/* Interactive stats row */}
                    {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto"
            >
              {[
                { value: '500+', label: 'Sellers' },
                { value: '300%', label: 'Avg Growth' },
                { value: '3+', label: 'Platforms' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl border p-4 text-center backdrop-blur-xl cursor-default ${t.card}`}
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className={`text-xs mt-1 ${t.muted}`}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div> */}

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                      <Link
                        to="/contact#consultation-form"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-blue-500"
                      >
                        {/* Shine sweep */}
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                        Get Free Consultation
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Link>

                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 rounded-xl border px-8 py-4 font-medium backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/5 ${t.card} ${t.text}`}
                      >
                        Contact Us
                      </Link>
                    </motion.div>

                    {/* Trust badges */}
                    {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6"
            >
              {['No credit card required', 'Response within 24hrs', '100% Free audit'].map((badge, i) => (
                <span key={i} className={`flex items-center gap-1.5 text-sm ${t.muted}`}>
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </MainLayout>
  );
}

export default Home;
