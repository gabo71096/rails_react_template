import { Theme, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useAppSelector } from "./app/store";

function App() {
  const { darkMode } = useAppSelector((state) => state.darkMode);
  const theme = darkMode ? "dark" : "light";

  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer position="bottom-right" theme={theme as Theme} />
    </>
  );
}

export default App;
