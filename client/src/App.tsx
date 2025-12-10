import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BusinessFunding from "./pages/services/BusinessFunding";
import LocalBusinessMarketing from "./pages/services/LocalBusinessMarketing";
import WebDesign from "./pages/services/WebDesign";
import GoogleBusinessProfile from "./pages/services/GoogleBusinessProfile";
import EmailDeliverability from "./pages/services/EmailDeliverability";
import CustomAutomations from "./pages/services/CustomAutomations";
import DBAFiling from "./pages/services/DBAFiling";
import VirtualAssistantPlacement from "./pages/services/VirtualAssistantPlacement";
import EcommerceMarketing from "./pages/services/EcommerceMarketing";
import ColdEmailLeadGen from "./pages/services/ColdEmailLeadGen";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/business-funding" component={BusinessFunding} />
      <Route path="/services/local-business-marketing" component={LocalBusinessMarketing} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/google-business-profile" component={GoogleBusinessProfile} />
      <Route path="/services/email-deliverability" component={EmailDeliverability} />
      <Route path="/services/custom-automations" component={CustomAutomations} />
      <Route path="/services/dba-filing" component={DBAFiling} />
      <Route path="/services/virtual-assistant-placement" component={VirtualAssistantPlacement} />
      <Route path="/services/ecommerce-marketing" component={EcommerceMarketing} />
      <Route path="/services/cold-email-lead-gen" component={ColdEmailLeadGen} />
      <Route path="/partners" component={Partners} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      {/* Service sub-routes redirect to main services page for now */}
      <Route path="/services/:slug" component={Services} />
      <Route path="/partners/:slug" component={Partners} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
