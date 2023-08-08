import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Outlet } from "react-router-dom";
import { themeChange } from "theme-change";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <select data-choose-theme className="border h-10 rounded">
        <option value="">Default</option>
        <option value="dark">Dark</option>
      </select>
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
