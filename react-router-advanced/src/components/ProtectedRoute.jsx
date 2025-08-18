import { Navigate } from "react-router-dom";

// Mock authentication (replace with real auth logic later)
const isAuthenticated = false; 

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
