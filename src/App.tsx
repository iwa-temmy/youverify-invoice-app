import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "@/routes/private-routes";

//pages
import Login from "@/pages/auth/login";
import Dashboard from "@/pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Login />} path="/auth/login" />
        <Route element={<PrivateRoutes />}>
          <Route path="/getting-started" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
