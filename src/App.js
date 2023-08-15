import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import { Suspense, lazy } from "react";

const App = () => {
  const HomePage = lazy(() => import("./pages/Home"));
  const ProjectDetailPage = lazy(() => import("./pages/ProjectDetail"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <p className="text-white text-xs text-center my-10">
                  Loading...
                </p>
              }
            >
              <HomePage />
            </Suspense>
          ),
          loader: () =>
            import("./pages/Home").then((module) => module.loader()),
        },
        {
          path: ":projectId?",
          element: (
            <Suspense
              fallback={
                <p className="text-white text-xs text-center my-10">
                  Loading...
                </p>
              }
            >
              <ProjectDetailPage />
            </Suspense>
          ),
          loader: (meta) =>
            import("./pages/ProjectDetail").then((module) =>
              module.loader(meta)
            ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
