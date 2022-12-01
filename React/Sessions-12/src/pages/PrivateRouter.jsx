import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true;
  //   user true olduğunda  Outlet ile childı olan contact sayfasını gösterecek false olduğunda login sayfasına yönlendirecek
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
  //   user truse ise Outlet değil ise to login
  //!   to loginde / taksim işareti kullanırsak <Login/> componentinin linkine gider
  //!    / taksim kullanmazsak contact/login e gitmeye çalışır ve hata verir
};

export default PrivateRouter;
