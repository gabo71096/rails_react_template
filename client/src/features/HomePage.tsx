import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import railsLogo from "../assets/rails.png";
import { useState } from "react";
import agent from "../app/api/agent";
import LoadingComponent from "../components/LoadingComponent";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";

const logoClasses = "hover:animate-wiggle-more hover:animate-infinite inline h-10";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState({ text: "" });

  function handleClick() {
    setLoading(true);
    toast.promise(
      agent.Home.root()
        .then((res) => setText(res))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false)),
      {
        pending: "Loading...",
        success: "Success!",
        error: "Error",
      },
    );
  }

  return (
    <>
      <div className="hero h-full bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Vite + React + Rails</h1>
            <div className="flex justify-evenly mb-5">
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className={logoClasses} alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className={logoClasses} alt="React logo" />
              </a>
              <a href="https://rubyonrails.org/" target="_blank">
                <img src={railsLogo} className={logoClasses} alt="Rails logo" />
              </a>
            </div>
            <div className="mb-5">
              {loading ? (
                <LoadingComponent className="text-info w-10" message="Loading..." textSize="text-lg" />
              ) : (
                <p>{text.text || "If you click the button below, this text will change."}</p>
              )}
            </div>
            <LoadingButton
              className="btn btn-primary"
              handleClick={handleClick}
              loading={loading}
              loadingText="Loading..."
              text="Make API request to backend"
            />
          </div>
        </div>
      </div>
    </>
  );
}
