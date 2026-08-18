import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";

function AppLayout() {
  const location = useLocation();
  const isSupport = location.pathname === "/support";

  return (
    <div 
      className="min-h-screen flex flex-col transition-colors duration-500" 
      style={{ 
        fontFamily: '"Figtree", sans-serif', 
        background: isSupport ? "#0f0f0f" : "#fffaf5" 
      }}
    >
      <Toaster 
        position="bottom-center" 
        theme="dark" 
        toastOptions={{
          style: {
            borderRadius: '9999px',
            width: 'max-content',
            margin: '0 auto',
            left: '50%',
            transform: 'translateX(-50%)',
          }
        }}
      />
      
      <FloatingNav />
      
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
