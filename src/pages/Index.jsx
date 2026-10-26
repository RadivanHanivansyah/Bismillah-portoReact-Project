import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
