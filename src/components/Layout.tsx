import FluidBackground from "./FluidBackground";
import Stars3D from "./Stars3D";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import { useTheme } from "@/hooks/useTheme";
import { useScrollY } from "@/hooks/useScrollY";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useLowPerformanceMode } from "@/hooks/useLowPerformanceMode";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { TransitionProvider } from "@/context/TransitionContext";

const Layout = () => {
  const { isDark, toggle } = useTheme();
  const scrollY = useScrollY();
  const lowPerf = useLowPerformanceMode();
  useSmoothScroll(!lowPerf);
  useImagePreloader();

  return (
    <TransitionProvider>
      <div className="min-h-screen relative overflow-hidden">
        {!lowPerf && <FluidBackground />}
        <Stars3D scrollY={scrollY} reduced={lowPerf} />
        <Navbar isDark={isDark} toggleTheme={toggle} />
        <main className="relative z-10">
          <PageTransition />
        </main>
        <Footer />
      </div>
    </TransitionProvider>
  );
};

export default Layout;
