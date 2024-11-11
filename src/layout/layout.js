
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
function  Layout() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}

export default Layout;
//webpackage