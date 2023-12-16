import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./pages/app/learn/Learn";
import Details from "./pages/app/details/Details";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from "./pages/misc/Page404/Page404";
function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: "/courses",
          children: [
            {
              index: true,
              element: <Courses />,
            },
            {
              path: ":courseId",
              element: <Details />,
            },
          ],
        },
        {
          path: "/learn/:courseId",
          element: <Learn />,
          children: [
            {
              path: "chapter/:chapterId",
              element: <Chapter />,
            },
          ],
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;
