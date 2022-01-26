import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isHide, setIsHide] = useState(true);

  const [hide] = useState({
    show: "none"
  });
  const [noHide] = useState({
    show: "block"
  });

  const toggleHide = () => {
    setIsHide(!isHide);
  };
  return (
    <ThemeContext.Provider value={{ isHide, hide, noHide, toggleHide}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;