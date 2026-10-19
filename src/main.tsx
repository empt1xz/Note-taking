import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/Dashboard/dashboard";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
);
