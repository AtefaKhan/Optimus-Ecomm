import { useState, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { theme } from "../theme/theme.jsx";
import { motion } from "framer-motion";
import {
  Phone, Mail, ArrowRight, CheckCircle,
  Briefcase, User, Package,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Reveal from "../components/Reveal";

// ✅ MOVED OUTSIDE — fixes the single-character bug
const ModernInput = ({
  icon: Icon, label, name, type = "text",
  value, onChange, placeholder, required = false, themeMode,
}) => (
  <div className="space-y-3">
    <label className={`text-sm font-semibold tracking-wide ${themeMode === "dark" ? "text-gray-200" : "text-gray-700"}`}>
      {label}
    </label>
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-orange-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
      {Icon && (
        <div className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-all duration-300 group-focus-within:text-blue-500 ${themeMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          <Icon size={19} />
        </div>
      )}
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`relative w-full rounded-2xl border py-4 ${Icon ? "pl-12" : "pl-5"} pr-5 text-[15px] font-medium outline-none transition-all duration-300 focus:scale-[1.01] hover:scale-[1.01] focus:ring-4 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
          themeMode === "dark"
            ? "border-white/10 bg-white/[0.04] text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-white/20"
            : "border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/15 hover:border-gray-300"
        }`}
      />
    </div>
  </div>
);

// ✅ MOVED OUTSIDE — fixes the single-character bug
const ModernTextarea = ({
  label, name, value, onChange,
  placeholder, rows = 5, themeMode,
}) => (
  <div className="space-y-3">
    <label className={`text-sm font-semibold tracking-wide ${themeMode === "dark" ? "text-gray-200" : "text-gray-700"}`}>
      {label}
    </label>
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-orange-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`relative w-full rounded-2xl border p-5 text-[15px] font-medium outline-none resize-none transition-all duration-300 focus:scale-[1.01] hover:scale-[1.01] focus:ring-4 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
          themeMode === "dark"
            ? "border-white/10 bg-white/[0.04] text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-white/20"
            : "border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/15 hover:border-gray-300"
        }`}
      />
    </div>
  </div>
);

// ✅ MOVED OUTSIDE — consistent design with ModernInput wrapper
const ModernSelect = ({
  label, name, value, onChange,
  options, placeholder, required = false, themeMode,
}) => (
  <div className="space-y-3">
    <label className={`text-sm font-semibold tracking-wide ${themeMode === "dark" ? "text-gray-200" : "text-gray-700"}`}>
      {label}
    </label>
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-orange-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
      <Briefcase size={19} className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-all duration-300 group-focus-within:text-blue-500 ${themeMode === "dark" ? "text-gray-400" : "text-gray-500"}`} />
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`relative w-full appearance-none rounded-2xl border py-4 pl-12 pr-12 text-[15px] font-medium outline-none transition-all duration-300 focus:scale-[1.01] hover:scale-[1.01] focus:ring-4 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
          themeMode === "dark"
            ? "border-white/10 bg-white/[0.04] text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-white/20"
            : "border-gray-200 bg-white/80 text-gray-900 focus:border-blue-500 focus:ring-blue-500/15 hover:border-gray-300"
        }`}
      >
        <option value="" className={themeMode === "dark" ? "bg-slate-900 text-gray-400" : "bg-white text-gray-500"}>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item} value={item} className={themeMode === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}>
            {item}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

// ✅ MOVED OUTSIDE — consistent design with ModernInput wrapper
const ModernMarketplaces = ({ label, name, value, onChange, themeMode, setFormData }) => (
  <div className="space-y-3">
    <label className={`text-sm font-semibold tracking-wide ${themeMode === "dark" ? "text-gray-200" : "text-gray-700"}`}>
      {label}
    </label>
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-orange-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div className={`relative rounded-2xl border p-4 transition-all duration-300 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
        themeMode === "dark"
          ? "border-white/10 bg-white/[0.04] hover:border-white/20 focus-within:border-blue-500"
          : "border-gray-200 bg-white/80 hover:border-gray-300 focus-within:border-blue-500"
      }`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Amazon", "Flipkart", "Meesho", "Myntra", "Ajio"].map((marketplace) => (
            <button
              type="button"
              key={marketplace}
              onClick={() => {
                const current = value.split(",").map((i) => i.trim()).filter(Boolean);
                if (!current.includes(marketplace)) {
                  setFormData((prev) => ({
                    ...prev,
                    marketplaces: [...current, marketplace].join(", "),
                  }));
                }
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                themeMode === "dark"
                  ? "bg-white/5 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {marketplace}
            </button>
          ))}
        </div>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Amazon, Flipkart, Meesho..."
          className={`w-full bg-transparent outline-none text-[15px] ${
            themeMode === "dark"
              ? "text-white placeholder:text-gray-500"
              : "text-gray-900 placeholder:text-gray-400"
          }`}
        />
      </div>
    </div>
  </div>
);

function Contact() {
  const { themeMode } = useTheme();
  const t = theme[themeMode];

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    businessType: "", marketplaces: "",
    products: "", message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const debounceTimer = useRef(null);

  // Debounced form change handler - prevents excessive re-renders while typing
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
    
  //   // Clear previous timer
  //   if (debounceTimer.current) {
  //     clearTimeout(debounceTimer.current);
  //   }

  //   // Set new debounced state update
  //   debounceTimer.current = setTimeout(() => {
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   }, 50); // 50ms debounce for instant feel but reduced re-renders
  // };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  // Add inside the Contact function, before the return:
const location = useLocation()

useEffect(() => {
  if (location.hash === '#consultation-form') {
    setTimeout(() => {
      const el = document.getElementById('consultation-form')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
}, [location])

  const contactInfo = [
    { icon: Phone, title: "Phone", value: "+91-9479889877", link: "tel:+919479889877" },
    { icon: Mail, title: "Email", value: "Info@optimusecommerce.in", link: "mailto:Info@optimusecommerce.in" },
    { icon: SiWhatsapp, title: "WhatsApp", value: "Chat with us", link: "https://wa.me/919479889877" },
  ];

  const handleSubmit = async (e) => {
  e.preventDefault(); // prevent page reload
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/mnjrbadd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <MainLayout>
      <div className={`relative overflow-hidden ${t.background}`}>
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        {/* HERO */}
        <Reveal>
          <section className="relative mx-auto flex flex-col items-center justify-center px-6 py-16 text-center max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className={`mb-8 rounded-full border px-5 py-2 text-sm backdrop-blur-xl ${t.card}`}
            >
              🚀 Seller Consultation
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className={`max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight ${t.text}`}
            >
              Start Growing Your Online Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className={`mt-8 max-w-3xl text-lg md:text-xl leading-relaxed ${t.muted}`}
            >
              Get a free consultation from our marketplace experts and discover how to scale your business on Amazon, Flipkart & Meesho.
            </motion.p>
          </section>
        </Reveal>

        {/* CONTACT CARDS */}
        <Reveal>
          <section className="px-6 pb-10">
            <div className="mx-auto max-w-7xl">
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={idx} href={info.link} target="_blank" rel="noopener noreferrer"
                      whileHover={{ y: -6 }}
                      className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${t.card} hover:border-blue-500/50`}
                    >
                      <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 w-fit">
                        <Icon size={28} className="text-blue-500" />
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${t.text}`}>{info.title}</h3>
                      <p className={t.muted}>{info.value}</p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </section>
        </Reveal>

        {/* FORM */}
        <Reveal>
          <section id="consultation-form" className="px-6 py-20 scroll-mt-20">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className={`p-8 md:p-12 rounded-3xl backdrop-blur-xl ${t.card}`}
              >
                <div className="text-center mb-12">
                  <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${t.text}`}>Free Seller Consultation</h2>
                  <p className={`text-lg ${t.muted}`}>Fill out the form below and our team will contact you shortly.</p>
                </div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="flex justify-center mb-6">
                      <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle size={40} className="text-green-500" />
                      </div>
                    </div>
                    <h3 className={`text-3xl font-bold mb-4 ${t.text}`}>Form Submitted Successfully</h3>
                    <p className={`text-lg ${t.muted}`}>Our team will contact you soon.</p>
                  </motion.div>
                ) : (
                  <form
                    // action="https://formspree.io/f/mnjrbadd"
                    // method="POST"
                    // onSubmit={() => {
                    //   setIsSubmitting(true);
                    //   setTimeout(() => { setSubmitted(true); setIsSubmitting(false); }, 1500);
                    // }}
                    onSubmit={handleSubmit}
                     autoComplete="on"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <ModernInput icon={User} label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required themeMode={themeMode} />
                      <ModernInput icon={Mail} label="Email Address" type="email" name="email" value={formData.email}   autoComplete="email" onChange={handleChange} placeholder="you@example.com" required themeMode={themeMode} />
                    </div>

                    <ModernInput icon={Phone} label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required themeMode={themeMode} />

                    <ModernSelect label="Business Type" name="businessType" value={formData.businessType} onChange={handleChange} options={["Seller", "Brand", "Manufacturer", "Distributor"]} placeholder="Select business type" required themeMode={themeMode} />

                    <ModernMarketplaces label="Current Marketplaces" name="marketplaces" value={formData.marketplaces} onChange={handleChange} themeMode={themeMode} setFormData={setFormData} />

                    <ModernInput icon={Package} label="Number of Products" type="number" name="products" value={formData.products} onChange={handleChange} placeholder="10" themeMode={themeMode} />

                    <ModernTextarea label="Tell us about your business" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your products, goals, marketplaces, or any challenges you're facing..." themeMode={themeMode} />

                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      type="submit" disabled={isSubmitting}
                      // onClick={() => {
                      //   handleSubmit();
                      // }}
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Book Free Consultation"}
                      <ArrowRight size={20} />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </section>
        </Reveal>
      </div>
    </MainLayout>
  );
}

export default Contact;