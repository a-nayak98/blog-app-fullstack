import "./styles/scss/MyStyle.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/scss/MyResponsive.scss";
import Home from "./pages/Home";
import SinglePostPage from "./pages/SinglePostPage";
import CreatePost from "./pages/CreatePost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/single-post",
    element: <SinglePostPage />,
  },
  {
    path: "/create_post",
    element: <CreatePost />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
