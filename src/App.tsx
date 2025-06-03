import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="mb-8">
        <a href="https://vite.dev" target="_blank" className="inline-block p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]">
          <img src={viteLogo} className="h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin motion-safe:[animation-duration:20s]">
          <img src={reactLogo} className="h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl leading-tight mb-8">Vite + React</h1>
      <div className="p-8 mb-8">
        <Button onClick={() => setCount((count) => count + 1)} variant="destructive">
          count is {count}
        </Button>
        <p className="mt-4">
          Edit <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
