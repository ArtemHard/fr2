import { createBrowserRouter } from "react-router-dom"
import { CheckEmail } from "features/auth/CheckEmail/CheckEmail"
import { Profile } from "components/Profile/Profile"
import App from "app/App"
import ErrorPage from "components/404/ErrorPage"
import { Auth } from "features/auth/Auth/Auth"
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword"
import { SetNewPassword } from "features/auth/SetNewPassword/SetNewPassword"
import { Packs } from "features/packs/Packs/Packs"
import { Cards } from "features/cards/Cards/Cards"
import { Learn } from "components/Learn/Learn"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sign-in",
        element: <Auth type="Sign In" key={"sign-in"} />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "sign-up",
        element: <Auth type="Sign Up" key={"sign-up"} />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "check-email",
        element: <CheckEmail />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "set-new-password",
        element: <SetNewPassword />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "profile",
        element: <Profile />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "packs",
        element: <Packs />,
        // ErrorBoundary: ErrorPage,
        // children: [
        //   {
        //     path: "pack-name",
        //   },
        //   {
        //     path: "friends-pack",
        //   },
        //   {
        //     path: "my-pack",
        //   },
        //   {
        //     path: "friends-pack",
        //   },
        // ],
      },
      {
        path: "cards/:cardId",
        element: <Cards />,
        // ErrorBoundary: ErrorPage,
      },
      {
        path: "learn/:cardId",
        element: <Learn />,
        // ErrorBoundary: ErrorPage,
      },
    ],
  },
])
