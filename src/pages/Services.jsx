import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Store,
  Smartphone,
  Sparkles,
  Megaphone,
  Image,
  BarChart3,
  Video,
  Package,
  TrendingUp,
  Rocket,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

function Services() {
  const { themeMode } = useTheme();
  const t = theme[themeMode];
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <ShoppingCart size={32} className="text-blue-500" />,
      title: "Amazon Account Management",
      description: "Complete management of your Amazon seller account including inventory, pricing, and performance optimization.",
      features: ["Account setup & verification", "Inventory management", "Pricing strategy", "Performance monitoring"],
    },
    {
      id: 2,
      icon: <Store size={32} className="text-emerald-500" />,
      title: "Flipkart Account Management",
      description: "Expert management of your Flipkart seller account to maximize visibility and sales.",
      features: ["Account optimization", "Catalog management", "Seller metrics improvement", "Compliance support"],
    },
    {
      id: 3,
      icon: <Smartphone size={32} className="text-purple-500" />,
      title: "Meesho Product Listing",
      description: "Specialized product listing services for Meesho marketplace with focus on reseller appeal.",
      features: ["Product data entry", "Image optimization", "Description writing", "Category mapping"],
    },
    {
      id: 4,
      icon: <Sparkles size={32} className="text-amber-500" />,
      title: "Product Listing Optimization",
      description: "Optimize your product listings for better visibility, conversion, and search rankings.",
      features: ["Keyword research", "Title optimization", "Description enhancement", "A+ content creation"],
    },
    {
      id: 5,
      icon: <Megaphone size={32} className="text-pink-500" />,
      title: "Sponsored Ads Management",
      description: "Strategic sponsored advertising campaigns to increase product visibility and sales.",
      features: ["Campaign setup", "Bid optimization", "Performance tracking", "ROI improvement"],
    },
    {
      id: 6,
      icon: <Image size={32} className="text-cyan-500" />,
      title: "Product Image Editing",
      description: "Professional image editing and enhancement to make your products stand out.",
      features: ["Background removal", "Color correction", "Image enhancement", "Watermarking"],
    },
    {
      id: 7,
      icon: <BarChart3 size={32} className="text-violet-500" />,
      title: "Infographics & A+ Content",
      description: "Create compelling infographics and A+ content to boost product appeal and conversion rates.",
      features: ["Infographic design", "A+ content creation", "Brand storytelling", "Visual hierarchy"],
    },
    {
      id: 8,
      icon: <Video size={32} className="text-red-500" />,
      title: "3D Mockups & Short Videos",
      description: "Professional 3D mockups and short video content to showcase your products effectively.",
      features: ["3D mockup creation", "Video production", "Animation", "Product showcase videos"],
    },
    {
      id: 9,
      icon: <Package size={32} className="text-orange-500" />,
      title: "Catalog Creation",
      description: "Complete catalog creation and management across multiple marketplaces.",
      features: ["Bulk data entry", "Category organization", "Attribute mapping", "Multi-platform sync"],
    },
    {
      id: 10,
      icon: <TrendingUp size={32} className="text-green-500" />,
      title: "Seller Account Health Monitoring",
      description: "Continuous monitoring and maintenance of your seller account health and metrics.",
      features: ["Performance tracking", "Issue resolution", "Policy compliance", "Rating management"],
    },
    {
      id: 11,
      icon: <Rocket size={32} className="text-indigo-500" />,
      title: "Sales Growth Strategy",
      description: "Comprehensive strategies to accelerate your sales growth and market expansion.",
      features: ["Market analysis", "Growth planning", "Competitor analysis", "Strategy implementation"],
    },
    {
      id: 12,
      icon: <Lightbulb size={32} className="text-yellow-500" />,
      title: "E-commerce Consultation",
      description: "Expert consultation services to guide your e-commerce business decisions and strategy.",
      features: ["Business assessment", "Strategy planning", "Implementation support", "Performance review"],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹10,000",
      period: "/month",
      description: "Perfect for new sellers",
      features: [
        "Account setup",
        "Basic listing optimization",
        "Monthly reporting",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₹25,000",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Everything in Starter",
        "Ads management",
        "Weekly calls",
        "Priority support",
        "A+ content creation",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For scaling brands",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Multi-marketplace management",
        "Custom strategy",
        "24/7 support",
      ],
      highlighted: false,
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
              🎯 Our Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight ${t.text}`}
            >
              Comprehensive E-commerce Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`mt-8 max-w-3xl text-lg md:text-xl leading-relaxed ${t.muted}`}
            >
              Tailored to help your business grow on major marketplaces with expert guidance and proven strategies.
            </motion.p>
          </section>
        </Reveal>

        {/* ================= SERVICES GRID ================= */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer ${t.card} group hover:border-blue-500/50`}
                  >
                    <div className="mb-6">
                      <div className="mb-4 transform transition-transform group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${t.text}`}>{service.title}</h3>
                      <p className={`text-sm leading-relaxed ${t.muted}`}>
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: expandedService === service.id ? "auto" : 0, opacity: expandedService === service.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-gray-200/20 space-y-3">
                        {service.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3">
                            <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                            <span className={`text-sm ${t.muted}`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold py-3 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      {expandedService === service.id ? "Hide Details" : "View Details"}
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= PRICING ================= */}
        {/* <Reveal>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
                >
                  Service Packages
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg max-w-3xl mx-auto ${t.muted}`}
                >
                  Choose the perfect service package for your business and start growing today
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 lg:gap-8"
              >
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -12 }}
                    className={`relative rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                      pkg.highlighted
                        ? `p-8 bg-gradient-to-br from-blue-600/20 to-orange-500/20 border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.2)]`
                        : `p-8 ${t.card}`
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className={`text-2xl font-bold mb-2 ${t.text}`}>{pkg.name}</h3>
                      <p className={`text-sm ${t.muted} mb-6`}>{pkg.description}</p>
                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
                          {pkg.price}
                        </span>
                        <span className={`text-sm ${t.muted}`}>{pkg.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, fidx) => (
                        <motion.div
                          key={fidx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: fidx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className={`${pkg.highlighted ? "text-blue-500" : "text-gray-500"} flex-shrink-0 mt-0.5`} size={20} />
                          <span className={`text-sm ${t.muted}`}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full rounded-lg font-semibold py-4 transition-all duration-300 ${
                        pkg.highlighted
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                          : `border-2 border-blue-500/30 ${t.text} hover:border-blue-500/60 hover:bg-blue-500/5`
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal> */}

        {/* ================= PRICING CTA ================= */}
{/* ================= PRICING CTA ================= */}
<Reveal>
  <section className="px-6 py-20">
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative rounded-3xl overflow-hidden border backdrop-blur-xl ${t.card}`}
      >
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-orange-500/5 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Pricing
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-3 ${t.text}`}>
              Simple, Transparent Plans
            </h2>
            <p className={`text-base leading-relaxed max-w-md ${t.muted}`}>
              From new sellers to scaling brands — find a plan that fits your goals.
            </p>
          </div>

          {/* Divider */}
          <div className={`hidden md:block w-px self-stretch ${themeMode === 'dark' ? 'bg-white/10' : 'bg-gray-200'}`} />

          {/* Right: Plans preview + CTA */}
          <div className="flex flex-col items-center md:items-end gap-5 flex-shrink-0">
            {/* Plan pills */}
            <div className="flex items-center gap-2">
              {['Starter', 'Professional', 'Enterprise'].map((plan, i) => (
                <span
                  key={i}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                    i === 1
                      ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      : themeMode === 'dark'
                        ? 'border-white/10 text-gray-400'
                        : 'border-gray-200 text-gray-500'
                  }`}
                >
                  {plan}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              View All Plans
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
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
                Ready to Get Started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-lg mb-10 max-w-2xl mx-auto ${t.muted}`}
              >
                Choose the perfect service package for your business and start growing today.
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
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>
          </section>
        </Reveal> */}
      </div>
    </MainLayout>
  );
}

export default Services;
