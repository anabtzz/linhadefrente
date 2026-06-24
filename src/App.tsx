import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Marketing from "./pages/Marketing";
import MarketingService from "./pages/MarketingService";
import TI from "./pages/TI";
import TIService from "./pages/TIService";
import Eventos from "./pages/Eventos";
import EventosService from "./pages/EventosService";
import RH from "./pages/RH";
import RHService from "./pages/RHService";
import Podcast from "./pages/Podcast";
import PodcastService from "./pages/PodcastService";
import Pesquisa from "./pages/Pesquisa";
import PesquisaService from "./pages/PesquisaService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/marketing/servicos/:serviceSlug" element={<MarketingService />} />
            <Route path="/ti" element={<TI />} />
            <Route path="/ti/servicos/:serviceSlug" element={<TIService />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/servicos/:serviceSlug" element={<EventosService />} />
            <Route path="/rh" element={<RH />} />
            <Route path="/rh/servicos/:serviceSlug" element={<RHService />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/podcast/servicos/:serviceSlug" element={<PodcastService />} />
            <Route path="/pesquisa" element={<Pesquisa />} />
            <Route path="/pesquisa/servicos/:serviceSlug" element={<PesquisaService />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
