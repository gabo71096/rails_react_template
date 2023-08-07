import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import railsLogo from "/rails.png";
import "./App.css";
import axios from "axios";

const url = "http://localhost:3000/api/v1";

function App() {
  const [text, setText] = useState({ text: "" });

  useEffect(() => {
    axios.get(url).then((res) => setText(res.data));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="inline logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="inline logo react" alt="React logo" />
        </a>
        <a href="https://rubyonrails.org/" target="_blank">
          <img src={railsLogo} className="inline logo" alt="Rails logo" />
        </a>
      </div>
      <h1>Vite + React + Rails</h1>
      <p>{text.text}</p>
    </>
  );
}

export default App;
