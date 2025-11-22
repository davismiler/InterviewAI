import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { VortexBackground } from "@/components/ui/vortex-background";
import LoadingScreen from "./components/LoadingScreen";
import { useLoading } from "./hooks/useLoading";

const queryClient = new QueryClient();

const AppContent = () => {
  const isLoading = useLoading(3000); // 3 second loading time

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen w-full font-sans relative">
      {/* Dark Horizon Glow - Base Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      {/* Animated Vortex Background - On top of gradient */}
      <div className="fixed inset-0 z-1">
        <VortexBackground />
      </div>
      <div className="relative z-10">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/blog" element={<BlogList />} /> */}
            {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
            {/* <Route path="/micro-projects" element={<MicroProjects />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
