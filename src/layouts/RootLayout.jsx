import { NavLink, Outlet } from "react-router-dom";
import Breadcrubms from "../components/Breadcrubms";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Your Dream Job</h1>
          {/* Link and NavLink swap the content they dont send the request to the server  */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrubms />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
