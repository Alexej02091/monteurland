// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";

// Öffentliche Routen (Gast)
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Unauthorized from "../pages/Unauthorized";
import InseratDetail from "../pages/InseratDetail";

import NotFound from "../pages/NotFound";
import ServerError from "../pages/ServerError";

// Geschützte Bereiche
import ProtectedRoute from "./ProtectedRoute";

// Gesuchter
import Profile from "../pages/gesuchter/GesuchterProfil";
import Favoriten from "../pages/gesuchter/Favoriten";
import Anfragen from "../pages/gesuchter/Anfragen";

// Vermieter
import Dashboard from "../pages/vermieter/Dashboard";
import InseratErstellen from "../pages/vermieter/InseratErstellen";
import InseratBearbeiten from "../pages/vermieter/InseratBearbeiten";
import Buchungen from "../pages/vermieter/Buchungen";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserManagement from "../pages/admin/UserManagement";
import SystemLogs from "../pages/admin/SystemLogs";
import Einstellungen from "../pages/admin/Einstellungen";

export default function AppRouter() {
  return (
    <Routes>

      {/* Öffentliche Seiten */}
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inserat/:id" element={<InseratDetail />} />
      <Route path="/register" element={<Register />} />

      {/* Fehlerseiten */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/error" element={<ServerError />} />

      {/* Gesuchter-Bereich */}
      <Route
        path="/gesuchter/profile"
        element={
          <ProtectedRoute role="gesuchter">
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gesuchter/favoriten"
        element={
          <ProtectedRoute role="gesuchter">
            <Favoriten />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gesuchter/anfragen"
        element={
          <ProtectedRoute role="gesuchter">
            <Anfragen />
          </ProtectedRoute>
        }
      />

      {/* Vermieter-Bereich */}
      <Route
        path="/vermieter/dashboard"
        element={
          <ProtectedRoute role="vermieter">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vermieter/inserat-erstellen"
        element={
          <ProtectedRoute role="vermieter">
            <InseratErstellen />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vermieter/inserat-bearbeiten/:id"
        element={
          <ProtectedRoute role="vermieter">
            <InseratBearbeiten />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vermieter/buchungen"
        element={
          <ProtectedRoute role="vermieter">
            <Buchungen />
          </ProtectedRoute>
        }
      />

      {/* Admin-Bereich */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute role="admin">
            <UserManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/logs"
        element={
          <ProtectedRoute role="admin">
            <SystemLogs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute role="admin">
            <Einstellungen />
          </ProtectedRoute>
        }
      />

      {/* 404 ganz am Ende */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
