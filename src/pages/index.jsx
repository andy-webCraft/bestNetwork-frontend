import { lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { authModel } from "entities/auth";
import useScrollNavigate from "shared/lib/hooks/useScrollNavigate";

const LoginPage = lazy(() => import("./LoginPage"));
const HomePage = lazy(() => import("./HomePage"));
const ProfilePage = lazy(() => import("./ProfilePage"));
const EditProfilePage = lazy(() => import("./EditProfilePage"));
const SearchPage = lazy(() => import("./SearchPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

function Routing() {
  const isAuth = useSelector(authModel.isAuth);

  useScrollNavigate();

  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<ProfilePage />} />
          <Route path="/user/:id/edit" element={<EditProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </>
      )}
    </Routes>
  );
}

export default Routing;
