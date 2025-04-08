import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./component/Home/Home.jsx";
import Profile from "./component/Profile/Profile.jsx";
import Your_stores from "./component/Your Store/Your_stores.jsx";
import Store from "./component/Stores/Store.jsx";
import Login from "./component/Log in/Login.jsx";
import Signup from "./component/Sign up/Signup.jsx";
import Protected from "./Protected/protected.jsx";
import New_password from "./component/Change_password/forgotpassword.jsx";
import Forgotpassword from "./component/Change_password/forgotpassword.jsx";
import Newpassword from "./component/Change_password/newpassword.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="newpassword" element={<Newpassword />} />
      <Route path="forgotpassword" element={<Forgotpassword />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route element={<Protected />}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/Your Stores" element={<Your_stores />} />
          <Route path="/Build Your Store" element={<Store />} />
        </Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
