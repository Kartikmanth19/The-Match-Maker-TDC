import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerDetails from "./pages/CustomerDetails";
import ProtectedRoute from "./routes/ProtectedRoute";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/analytics"
  element={<Analytics />}
      />
      
      

      <Route
        path="/customer/:id"
        element={
          <ProtectedRoute>
            <CustomerDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
