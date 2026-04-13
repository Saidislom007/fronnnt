import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Director } from "./pages/Director";
import { Teachers } from "./pages/Teachers";
import { About } from "./pages/About";
import { Achievements } from "./pages/Achievements";
import { SchoolLife } from "./pages/SchoolLife";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Library } from "./pages/Library";
import { Graduates } from "./pages/Graduates";
import { Blog } from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "director", Component: Director },
      { path: "teachers", Component: Teachers },
      { path: "about", Component: About },
      { path: "achievements", Component: Achievements },
      { path: "school-life", Component: SchoolLife },
      { path: "gallery", Component: Gallery },
      { path: "library", Component: Library },
      { path: "graduates", Component: Graduates },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);