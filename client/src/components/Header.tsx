import { Link } from "react-router-dom";
import { LuMoon, LuSun } from "react-icons/lu";
import Icon from "./Icon";
import { toggle } from "./darkModeSlice";
import { useAppSelector, useAppDispatch } from "../app/store";

export default function Header() {
  const { darkMode } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();
  const theme = darkMode ? "dark" : "light";

  localStorage.setItem("theme", theme);
  document.querySelector("html")?.setAttribute("data-theme", theme);

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/">Home</Link>
      </div>
      <div>
        <label className="swap swap-rotate">
          <input checked={darkMode} type="checkbox" onChange={() => dispatch(toggle())} />
          <Icon icon={<LuMoon />} values={{ size: "1.5rem", className: "swap-on" }} />
          <Icon icon={<LuSun />} values={{ size: "1.5rem", className: "swap-off" }} />
        </label>
      </div>
    </div>
  );
}
