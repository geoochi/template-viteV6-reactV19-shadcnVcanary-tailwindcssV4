import { Button } from './components/ui/button'
import { useState, useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    // 从 localStorage 获取主题，默认为 system
    return (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system'
  })

  useEffect(() => {
    // 保存主题到 localStorage
    localStorage.setItem('theme', theme)
    
    // 根据主题设置 document.documentElement 的 class
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <p className='text-3xl'>
        template - vite@6 - react@19 - shadcn@canary - tailwindcss@4
      </p>
      <div className='flex gap-2'>
        <Button onClick={() => setTheme('light')}>Light</Button>
        <Button onClick={() => setTheme('dark')}>Dark</Button>
        <Button onClick={() => setTheme('system')}>System</Button>
      </div>
      <p className='text-sm'>Current theme: {theme}</p>
    </div>
  )
}

export default App
