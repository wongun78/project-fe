import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout";
import HomePage from "@/pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import QuizPage from "./pages/quizzes";

import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";

// import UserManagementPage from "./pages/admin/UserManagementPage";

import NotFoundPage from "./pages/error/404";
import ForbiddenPage from "./pages/error/403";
import AdminLayout from "./components/layout/admin-layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quizzes" element={<QuizPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div>Admin Dashboard Overview</div>} />

        {/* <Route path="users" element={<UserManagementPage />} /> */}

        <Route path="quizzes" element={<div>Manage Quizzes</div>} />
        <Route path="questions" element={<div>Manage Questions</div>} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/403" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
