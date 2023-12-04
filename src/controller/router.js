import App from "../App";
import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "../view/error/ErrorPage";
import Contact from "../view/pages/Contact";
import Homepage from "../view/Homepage.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/home",
          element: <Homepage></Homepage>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },
    
  ]);

export default router;