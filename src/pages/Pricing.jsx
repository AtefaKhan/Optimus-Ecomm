import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

function Pricing() {
  const navigate = useNavigate();
  const { themeMode } = useTheme();
  const t = theme[themeMode];
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for new sellers getting started",
      monthlyPrice: 3999,
      yearlyPrice: 39999,
      highlighted: false,
      features: [
        "Account Setup & Verification",
        "Basic Product Listing (up to 50)",
        "Monthly Performance Report",
        "Email Support",
        "Listing Optimization",
        "Ads Management",
        "Dedicated Account Manager",
        "A+ Content Creation",
      ],
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 6999,
      yearlyPrice: 69999,
      highlighted: true,
      features: [
        "Everything in Starter",
        "Advanced Listing Optimization",
        "Sponsored Ads Management",
        "Weekly Strategy Calls",
        "A+ Content Creation (5 products/month)",
        "Product Image Editing",
        "Priority Email & Phone Support",
        "Dedicated Account Manager",
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For established brands & sellers",
      monthlyPrice: null,
      yearlyPrice: null,
      isCustom: true,
      highlighted: false,
      features: [
        "Everything in Professional",
        "Dedicated Account Manager",
        "Multi-Marketplace Management",
        "Custom Growth Strategy",
        "Unlimited A+ Content & Infographics",
        "3D Mockups & Video Production",
        "24/7 Priority Support",
        "Quarterly Business Reviews",
      ],
    },
  ];

  const addOns = [
    { name: "Product Image Editing (per 10 images)", price: 2000 },
    { name: "A+ Content Creation (per product)", price: 1500 },
    { name: "Infographic Design (per design)", price: 3000 },
    { name: "3D Mockup Creation (per product)", price: 5000 },
    { name: "Video Production (per video)", price: 10000 },
    { name: "Catalog Creation (per 100 products)", price: 5000 },
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a contract or lock-in period?",
      answer: "No, all our plans are month-to-month with no long-term contracts. You can cancel anytime.",
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer: "Yes, we offer 15% discount on annual subscriptions. Contact us for details.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and digital payment methods like UPI and PayPal.",
    },
    {
      question: "Can I customize a plan for my specific needs?",
      answer: "Absolutely! We offer custom packages tailored to your business requirements. Contact our sales team for a quote.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a free consultation and can provide a limited trial period for new clients.",
    },
  ];

  const comparisonFeatures = [
    "Monthly Price",
    "Product Listings",
    "Marketplaces",
    "Account Manager",
    "Support",
    "Strategy Calls",
    "A+ Content/Month",
    "Ads Management",
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

  const getPrice = (plan) => {
    if (plan.isCustom) return "Custom";
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const getPeriod = (plan) => {
    if (plan.isCustom) return "pricing";
    return billingCycle === "monthly" ? "/month" : "/year";
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
              💰 Simple, Transparent Pricing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight ${t.text}`}
            >
              Choose the Perfect Plan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`mt-8 max-w-3xl text-lg md:text-xl leading-relaxed ${t.muted}`}
            >
              All plans include core services and can be customized to fit your business needs.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center gap-4"
            >
              <span className={`text-sm font-medium ${billingCycle === "monthly" ? t.text : t.muted}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${
                  billingCycle === "yearly" ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                <motion.span
                  animate={{ x: billingCycle === "yearly" ? 28 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="inline-block h-6 w-6 transform rounded-full bg-white"
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === "yearly" ? t.text : t.muted}`}>
                Yearly
              </span>
              {billingCycle === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="ml-3 inline-block bg-gradient-to-r from-blue-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                >
                  Save 15%
                </motion.span>
              )}
            </motion.div>
          </section>
        </Reveal>

        {/* ================= PRICING CARDS ================= */}
        <Reveal>
          <section className="px-6 py-12">
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 lg:gap-6"
              >
                {plans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    variants={itemVariants}
                    whileHover={!plan.isCustom ? { y: -16 } : {}}
                    className={`relative rounded-2xl backdrop-blur-xl transition-all duration-300 flex flex-col h-full ${
                      plan.highlighted
                        ? `p-8 bg-gradient-to-br from-blue-600/20 to-orange-500/20 border-2 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.25)]`
                        : `p-8 ${t.card}`
                    }`}
                  >
                    {/* Most Popular Badge */}
                    {plan.highlighted && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-5 left-1/2 -translate-x-1/2"
                      >
                        <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          🌟 Most Popular
                        </span>
                      </motion.div>
                    )}

                    {/* Plan Header */}
                    <div className="mb-8">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${t.text}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm mb-6 ${t.muted}`}>
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-2">
                        {plan.isCustom ? (
                          <div>
                            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
                              Custom
                            </p>
                            <p className={`text-sm mt-2 ${t.muted}`}>
                              Contact sales for pricing
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
                              {getPrice(plan)}
                            </span>
                            <span className={`text-sm ${t.muted}`}>
                              {getPeriod(plan)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle
                            className={`flex-shrink-0 mt-1 ${
                              plan.highlighted ? "text-blue-500" : "text-gray-500"
                            }`}
                            size={20}
                          />
                          <span className={`text-sm leading-relaxed ${t.muted}`}>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => navigate('/contact#consultation-form')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full rounded-lg font-semibold py-3 md:py-4 transition-all duration-300 flex items-center justify-center gap-2 ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                          : `border-2 border-blue-500/30 ${t.text} hover:border-blue-500/60 hover:bg-blue-500/5`
                      }`}
                    >
                      {/* {plan.isCustom ? "Get Free Consultation" : "Get Started"} */}"Get Started"
                      <ArrowRight size={18} />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= ADD-ON SERVICES ================= */}
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
                  Add-On Services
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-lg max-w-2xl mx-auto ${t.muted}`}
                >
                  Enhance your plan with premium add-ons tailored to boost your e-commerce success
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {addOns.map((addon, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className={`p-6 rounded-xl backdrop-blur-xl transition-all duration-300 ${t.card} group`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h4 className={`text-lg font-semibold mb-2 ${t.text}`}>
                          {addon.name}
                        </h4>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg px-3 py-1 flex-shrink-0">
                        <p className="text-white font-bold text-sm">
                          ₹{addon.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= COMPARISON TABLE ================= */}
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
                  Detailed Comparison
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden backdrop-blur-xl ${t.card}`}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b ${themeMode === "dark" ? "border-white/10" : "border-gray-200/70"}`}>
                        <th className={`px-6 py-4 text-left font-semibold ${t.text}`}>
                          Feature
                        </th>
                        <th className={`px-6 py-4 text-center font-semibold ${t.text}`}>
                          Starter
                        </th>
                        <th className={`px-6 py-4 text-center font-semibold ${t.text}`}>
                          Professional
                        </th>
                        <th className={`px-6 py-4 text-center font-semibold ${t.text}`}>
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature, idx) => (
                        <tr
                          key={idx}
                          className={`border-b ${themeMode === "dark" ? "border-white/10" : "border-gray-200/70"}`}
                        >
                          <td className={`px-6 py-4 font-medium ${t.text}`}>
                            {feature}
                          </td>
                          <td className={`px-6 py-4 text-center ${t.muted}`}>
                            {feature === "Monthly Price" && plans[0].monthlyPrice}
                            {feature === "Product Listings" && "50"}
                            {feature === "Marketplaces" && "1"}
                            {feature === "Account Manager" && "❌"}
                            {feature === "Support" && "Email"}
                            {feature === "Strategy Calls" && "❌"}
                            {feature === "A+ Content/Month" && "❌"}
                            {feature === "Ads Management" && "❌"}
                          </td>
                          <td className={`px-6 py-4 text-center font-semibold`}>
                            {feature === "Monthly Price" && (
                              <span className="bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
                                ₹{plans[1].monthlyPrice}
                              </span>
                            )}
                            {feature === "Product Listings" && "299"}
                            {feature === "Marketplaces" && "1"}
                            {feature === "Account Manager" && "Shared"}
                            {feature === "Support" && "Email + Phone"}
                            {feature === "Strategy Calls" && "Weekly"}
                            {feature === "A+ Content/Month" && "5"}
                            {feature === "Ads Management" && "✅"}
                          </td>
                          <td className={`px-6 py-4 text-center ${t.muted}`}>
                            {feature === "Monthly Price" && "Custom"}
                            {feature === "Product Listings" && "Unlimited"}
                            {feature === "Marketplaces" && "Unlimited"}
                            {feature === "Account Manager" && "Dedicated"}
                            {feature === "Support" && "24/7 Priority"}
                            {feature === "Strategy Calls" && "Custom"}
                            {feature === "A+ Content/Month" && "Unlimited"}
                            {feature === "Ads Management" && "✅"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>
        </Reveal>

        {/* ================= FAQ SECTION ================= */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
                >
                  Frequently Asked Questions
                </motion.h2>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`p-6 rounded-xl backdrop-blur-xl ${t.card} group`}
                  >
                    <details className="cursor-pointer">
                      <summary className="flex items-center justify-between font-semibold select-none">
                        <span className={t.text}>{faq.question}</span>
                        <motion.span
                          className="text-blue-500"
                          animate={{ rotate: 0 }}
                        >
                          +
                        </motion.span>
                      </summary>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-4 pt-4 border-t ${
                          themeMode === "dark" ? "border-white/10" : "border-gray-200/70"
                        } ${t.muted}`}
                      >
                        {faq.answer}
                      </motion.p>
                    </details>
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
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-bold mb-6 ${t.text}`}
              >
                Ready to Grow Your Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-lg mb-10 max-w-2xl mx-auto ${t.muted}`}
              >
                Start with a free consultation and find the perfect plan for your e-commerce business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  className={`inline-flex items-center gap-2 rounded-xl px-8 md:px-12 py-4 md:py-5 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] ${t.primary}`}
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

export default Pricing;
