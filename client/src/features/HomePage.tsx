import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import railsLogo from "../assets/rails.png";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/api/v1";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState({ text: "" });

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setText(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
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
      {loading ? (
        <span className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
        </span>
      ) : (
        text.text
      )}
    </>
  );
}
