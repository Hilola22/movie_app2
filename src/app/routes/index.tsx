import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const Login = lazy(() => import("@/pages/login"));
const Search = lazy(() => import("@/pages/search"));
const BookMark = lazy(() => import("@/pages/bookmark"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));
const Cast = lazy(() => import("@/pages/movie-detail/cast"));
const Others = lazy(() => import("@/pages/movie-detail/others"));
const Reviews = lazy(() => import("@/pages/movie-detail/review"));
const CrewDetail = lazy(() => import("@/pages/crew-detail"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movie", element: <Movie /> },
        { path: "/bookmark", element: <BookMark /> },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
          children: [
            { path: "cast", element: <Cast /> },
            { path: "other", element: <Others /> },
            { path: "review", element: <Reviews /> },
          ],
        },
        { path: "/crew/:id", element: <CrewDetail /> },
        { path: "login", element: <Login /> },
        { path: "search", element: <Search /> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
