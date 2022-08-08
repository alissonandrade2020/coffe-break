import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { createContext, useState } from "react";
import { darkTheme } from "./styles/theme/dark";

type Themes = 'default' | 'dark'

interface ThemeContextType {
  theme: Themes
  toogleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

function App() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageValue = localStorage.getItem('COFFEE_ITEMS_STORAGE:theme-1.0.0')

    if (storageValue) {
      return JSON.parse(storageValue)
    }

    return 'default'
  })

  function toogleTheme() {
    const themeNow = theme === 'default' ? 'dark' : 'default'

    setTheme(themeNow)

    localStorage.setItem('COFFEE_ITEMS_STORAGE:theme-1.0.0', JSON.stringify(themeNow))
  }
  
  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
