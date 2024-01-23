import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Seacher } from "../seacher";
import { Footer } from "../footer";

export function Layout() {
  return (
    <>
      <Header />
      <Seacher/>
      <Outlet />
      <Footer/>
    </>
  );
}
