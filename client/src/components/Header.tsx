import { Link } from "react-router-dom";
import { LuMoon, LuSun } from "react-icons/lu";
import Icon from "./Icon";
import { ChangeEvent, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  localStorage.setItem("theme", theme);
  document.querySelector("html")?.setAttribute("data-theme", theme);

  function handleToggle(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) setTheme("dark");
    else setTheme("light");
  }

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/">Home</Link>
      </div>
      <div>
        <label className="swap swap-rotate">
          <input checked={theme === "light" ? false : true} type="checkbox" onChange={handleToggle} />
          <Icon icon={<LuMoon />} values={{ size: "1.5rem", className: "swap-on" }} />
          <Icon icon={<LuSun />} values={{ size: "1.5rem", className: "swap-off" }} />
        </label>
      </div>
    </div>
  );
}
