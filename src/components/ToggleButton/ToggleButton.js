import React, { useContext } from "react";
import { ThemeContext } from "@context/ThemeContext";
import sun from '@assets/sun.png';
import night from '@assets/night.png';
import './toggleButton.scss';

const ToggleButton = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    darkMode
      ? theme.dispatch({ type: "LIGHTMODE" })
      : theme.dispatch({ type: "DARKMODE" })
  };

  return (
    <div
      onClick={onClick}
      className={`toggle ${darkMode ? 'toggle-checked' : ''}`}>
      <div
        style={{ backgroundImage: `${darkMode ? `url(${night})` : `url(${sun})`}` }}
        className="toggle-container" ></div>
    </div >
  );
}

export default ToggleButton