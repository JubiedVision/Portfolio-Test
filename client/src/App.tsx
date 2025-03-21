import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import { useEffect, useState } from "react";
import SpotlightEffect from "./components/SpotlightEffect";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative w-full overflow-hidden min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F1F5F9]">
        <SpotlightEffect mousePosition={mousePosition} />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
