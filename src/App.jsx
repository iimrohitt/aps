import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ui/ThemeToggle";

const App = () => {
  return (
    <div className="relative min-h-screen">

      <AppRoutes />


      {location.pathname === "/" && (
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      )}

    </div>
  );
};

export default App;