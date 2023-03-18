import React from "react";
import HomePage from "../Pages/Home.page";

import LoginPage from "../Pages/Login.page";
import SignupPage from "../Pages/Signup.page";
import Razorpay from "../Pages/Razorpay.page";
import Locationpage from "../Pages/Location.page";
import AnouncementPage from "../Pages/Anouncement.page";
import ForumPage from "../Pages/Forum.page";
import NewComponent from "../Components/Forum/New.Component";
import Single from "../Components/Forum/Single.Component";
import Localcropcomponent from "../Components/Local/Localcrop.component";
export const PRIVATE_ROUTES = [];
export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/forum",
    component: <ForumPage />,
  },
  {
    path: "/forum/new",
    component: <NewComponent />,
  },
  {
    path: "/forum/:id",
    component: <Single />,
  },
  {
    path: "/anouncement",
    component: <AnouncementPage />,
  },
  {
    path: "/crop",
    component: <Locationpage />,
  },
  {
    path: "/localcrop",
    component: <Localcropcomponent />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/signup",
    component: <SignupPage />,
  },
  {
    path: "/razorpay",
    component: <Razorpay />,
  },
];
