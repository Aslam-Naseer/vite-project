import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./User.jsx";
import Photo from "./Photo.jsx";
import React from "react";
import { PhotoSet } from "./PhotoSet.jsx";
import UserImage from "./UserImage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "user/:userId",
    element: <UserImage />,
  },
  {
    path: "photographer",
    element: <Photo />,
  },
  {
    path: "photographer/:eventId",
    element: <PhotoSet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
