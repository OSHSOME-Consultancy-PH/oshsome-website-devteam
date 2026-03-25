import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Layout & Static Pages
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

// The Unified Template
import ServiceModulePage from "./pages/ServiceModulePage";

// Centralized Data Import
import { 
  so1Content, 
  so2Content, 
  so3aContent, 
  so3bContent, 
  wemContent 
} from "./mock";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function App() {
  // Connectivity Health Check
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const { data } = await axios.get(`${API}/`);
        console.log("✅ Backend Online:", data.message);
      } catch (e) {
        console.warn("⚠️ Running in Frontend-Only mode. Local caching enabled.");
      }
    };
    checkBackend();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <BrowserRouter>
        <SiteHeader />
        
        <main className="flex-1">
          <Routes>
            {/* --- Core Pages --- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* --- Dynamic Service Modules (Unified Template) --- */}
            <Route 
              path="/module/so1" 
              element={<ServiceModulePage content={so1Content} endpoint="so1-requests" />} 
            />
            <Route 
              path="/module/so2" 
              element={<ServiceModulePage content={so2Content} endpoint="so2-requests" />} 
            />
            <Route 
              path="/module/so3a" 
              element={<ServiceModulePage content={so3aContent} endpoint="so3a-requests" />} 
            />
            <Route 
              path="/module/so3b" 
              element={<ServiceModulePage content={so3bContent} endpoint="so3b-requests" />} 
            />
            <Route 
              path="/module/wem" 
              element={<ServiceModulePage content={wemContent} endpoint="wem-requests" />} 
            />

            {/* Fallback for 404s */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <SiteFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;