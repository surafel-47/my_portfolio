import { React } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <div class="w-full">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
