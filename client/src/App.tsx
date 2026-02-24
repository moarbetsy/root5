import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import HowItWorks from "./pages/HowItWorks";
import ForParents from "./pages/ForParents";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Normalize Vite BASE_URL for wouter:
// - "/" -> ""
// - "/root5/" or "/root5//" -> "/root5"
const wouterBase = (() => {
  const raw = import.meta.env.BASE_URL || "/";
  if (raw === "/") return "";
  // trim trailing slashes, keep leading slash
  const trimmed = raw.replace(/\/+$/, "");
  return trimmed || "";
})();

function AppRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/programs"} component={Programs} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/for-parents"} component={ForParents} />
      <Route path={"/faqs"} component={FAQs} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <WouterRouter base={wouterBase}>
                <AppRoutes />
              </WouterRouter>
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
