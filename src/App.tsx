import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-700 flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-24 w-24 animate-spin" style={{ animationDuration: '20s' }} alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-5xl font-bold mb-8 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Vite + React + Tailwind
      </h1>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
                     hover:from-purple-600 hover:to-pink-600 active:scale-95 transition-all shadow-lg"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-300">
          Edit <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="mt-8 text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
