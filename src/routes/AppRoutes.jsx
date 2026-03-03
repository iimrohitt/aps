import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import ScanDetail from "../pages/ScanDetail/ScanDetail";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scan/:id" element={<ScanDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}