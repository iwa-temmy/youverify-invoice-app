import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "@/routes/private-routes";

//toast
import { Toaster } from "sonner";

//pages
import Login from "@/pages/auth/login";
import Invoice from "@/pages/invoice";
import ComingSoon from "./pages/coming-soon";
import Register from "./pages/auth/register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Login />} path="/auth/login" />
          <Route element={<Register />} path="/auth/register" />
          <Route element={<PrivateRoutes />}>
            <Route path="/getting-started" element={<ComingSoon />} />
            <Route path="/overview" element={<ComingSoon />} />
            <Route path="/accounts" element={<ComingSoon />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/beneficiary-management" element={<ComingSoon />} />
            <Route path="/help-center" element={<ComingSoon />} />
            <Route path="/settings" element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-center" richColors={true} />
    </>
  );
}

export default App;
