import { useState, type ReactNode } from 'react'
import { readTheme, writeTheme, type Theme } from '../theme'
import { ThemeContext } from './theme-context'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readTheme)

  function toggleTheme() {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      writeTheme(next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`lf-page lf-theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
