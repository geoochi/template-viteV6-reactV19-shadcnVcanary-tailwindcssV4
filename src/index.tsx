import { createRoot } from 'react-dom/client'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <p className='flex flex-col h-screen items-center justify-center text-3xl'>
    static template - vite@6 - react@19 - tailwindcss@4
  </p>
)
