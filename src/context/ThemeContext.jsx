import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("dark")

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)