import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import useAuth from "./pages/useAuth";

function App() {
  const {user}=useAuth();
  if (!user) return <Navigate to={"/login"} />;
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
