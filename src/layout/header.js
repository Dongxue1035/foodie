import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../logo";

function Header() {
  const router = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="header">
      <nav className="flex items-center justify-between w-full">
        <div className="w-[250px]">
          <Logo />
        </div>
        <ul className=" flex-row hidden lg:flex  text-xl space-x-8">
          <li className={pathname === "/home" ? "active-link" : "nav-link"}
            onClick={() => router("home")}>Home</li>
          <li
            className={pathname === "/why-smartfoodie" ? "active-link" : "nav-link"}
            onClick={() => router("why-smartfoodie")}
          >
            Why SmartFoodie
          </li>
          <li
            className={pathname === "/our-food" ? "active-link" : "nav-link"}
            onClick={() => router("our-food")}
          >
            Our Food
          </li>
          <li
            className={pathname === "/contact" ? "active-link" : "nav-link"}
            onClick={() => router("contact")}
          >
            Contact us
          </li>
        </ul>

        <div className="flex items-center hidden lg:flex space-x-4">
          <button
            className="demo-button"
            onClick={() =>
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a demo
          </button>
        </div>
        <div className="flex lg:hidden">--</div>
      </nav>
    </div>
  );
}

export default Header;
