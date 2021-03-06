import React, { useContext, useEffect } from 'react';
import Routes from './Routes';
import { ThemeContext } from "@context/ThemeContext";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const isActive = () => {
    const body = document.body.style
    darkMode
      ? body.backgroundColor = "#212222"
      : body.backgroundColor = "#f5f5f5"
  }

  useEffect(() => {
    isActive()
  }, [darkMode])

  return (
    <Routes />
  )
}

export default App
