import HeaderStyles from "../styles/Header.module.css";
import Button from "../components/Button";
import ButtonStyles from "../styles/Button.module.css";
import { TfiMenu } from "react-icons/tfi";



export default function Header() {
  return(
  // <div className="container">
    <header className="py-4 px-5 bg-transparent">
        <div className="d-flex justify-content-between align-items-baseline bg-transparent">
          <h1 className="visually-hidden">AtomMail</h1>
          <p className={HeaderStyles.logo}>AtomMail</p>
          <div className="d-none d-lg-flex">
            <nav>
              <ul className="d-flex">
                <li><a href="">Solution</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Support</a></li>
              </ul>
            </nav>
          </div>
            <div className="d-none d-lg-flex align-items-center">
              <Button
              href="#"
              className={ButtonStyles["secondary-button"]}
              text="Log in"
               />
              <Button
              href="#"
              className={ButtonStyles["main-button"]}
              text="Sing Up"
               />
            </div>
          <div className="d-lg-none">
          <TfiMenu size="25" style={{color: "var(--mainColor)"}} />
          </div>
        </div>
    </header>
  // </div>
  );
}