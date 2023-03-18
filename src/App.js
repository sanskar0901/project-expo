import "./App.css";

import { useState, useEffect } from "react";
import Navigate from "./Navigation";
import Voice from "./Components/Voice/Voice.component";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onBoarding, setIsOnBoarding] = useState(true);
  const handleClick = () => {
    setTimeout(() => {
      const el = document.getElementById(":1.close");
      console.log(el);
      if (el) {
        el.click();
      }
    }, 200);
  };
  // useEffect(() => {

  // }, [])
  return (
    <div className="App">
      <div className="absolute right-5 top-0"></div>

      <Navigate isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
    </div>
  );
}

export default App;
