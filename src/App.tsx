
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Doctors from "./pages/Doctors";
import DietPlan from "./pages/DietPlan";
import HelpCenter from "./pages/HelpCenter";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BottomDrawer from "./components/BottomDrawer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomDrawer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
