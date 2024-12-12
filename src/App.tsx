import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-red-400"> App Component </h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
