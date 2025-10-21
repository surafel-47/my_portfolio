import { React } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

function RootLayout() {
  return (
    <div class="w-full h-[2000px] bg-gray-800">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
