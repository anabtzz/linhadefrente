import { createContext, useContext, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface TransitionContextType {
  triggerTransition: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
};

interface TransitionProviderProps {
  children: ReactNode;
}

export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const navigate = useNavigate();

  const triggerTransition = useCallback((path: string) => {
    const scrollTop = () => {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: { immediate?: boolean }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    };

    if (path.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const id = path.replace("/#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(path);
      // Run after navigation commits and again on next frame to beat Lenis/layout
      scrollTop();
      requestAnimationFrame(scrollTop);
      setTimeout(scrollTop, 50);
    }
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};
