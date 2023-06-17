import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// layouts

import CareersLayout from "./layouts/CareersLayout";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
// pages
import About from "./pages/About";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";
import Careers, { careersLoader } from "./pages/careers/Careers";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// new way of router 6.4 version
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// old version of react router
// <BrowserRouter>
//   <header>
//     <nav>
//       <h1>Jobarouter</h1>
//       {/* Link and NavLink swap the content they dont send the request to the server  */}
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="about">About</NavLink>
//     </nav>
//   </header>
//   <main>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//     </Routes>
//   </main>
// </BrowserRouter>
