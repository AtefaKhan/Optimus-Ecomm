import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";

function MainLayout({ children }) {
  const { themeMode } = useTheme();
  const t = theme[themeMode];

  return (
   <div className={`${t.background} ${t.text} min-h-screen transition-all duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10"></div>
      <Navbar />

      <main className="pt-24 px-6">{children}</main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
export default MainLayout;
