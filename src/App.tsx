import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/navbar';
import HomePage from '@/pages/home';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<div className="container-custom py-10">Login Page</div>} />
          <Route path="/register" element={<div className="container-custom py-10">Register Page</div>} />
          <Route path="/quizzes" element={<div className="container-custom py-10">Quizzes Page</div>} />
          <Route path="/about" element={<div className="container-custom py-10">About Page</div>} />
          <Route path="/contact" element={<div className="container-custom py-10">Contact Page</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App