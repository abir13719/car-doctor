import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Base = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Base;
