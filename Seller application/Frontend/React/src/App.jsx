import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/Home/Home";

import Login from "./component/Log in/Login";
import New_password from "./component/Change_password/forgotpassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <New_password />
    </div>
  );
}

export default App;
