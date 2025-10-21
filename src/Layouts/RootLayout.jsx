import { React } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

function RootLayout() {
  return (
    <div class="w-full">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
