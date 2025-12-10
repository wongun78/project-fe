import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
       <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-center mt-10 text-primary">Hello Quiz App</h1>} />
          <Route path="/login" element={<div>Login Page</div>} />
       </Routes>
    </div>
  )
}

export default App