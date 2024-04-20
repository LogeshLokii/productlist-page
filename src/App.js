
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ProductList from "./components/productlist";

const router = createBrowserRouter([
  //  {
  //   path: "/",
  //   element: <Root />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/",
    element: <ProductList />
  }
]);

function App() {
  

  return <RouterProvider router={router} />;
}

export default App;
