import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/Auth.tsx";
import "./assets/css/tailwind.css";
import Shop from "./pages/Shop.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/home.tsx";
import Blog from "./pages/Blog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
        index: true
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <main className="min-h-screen w-full">
    <RouterProvider router={router} />
  </main>
);
