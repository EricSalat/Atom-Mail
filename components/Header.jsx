import Image from 'next/image'
import "../styles/Header.module.css";
import Button from "../components/Button";
import ButtonStyles from "../styles/Button.module.css";

export default function Header() {
  return(
  <header className="pt-3 pb-2 px-5">
      <div className="d-flex justify-content-between align-items-baseline bg-transparent">
        <h1 className="visually-hidden">AtomMail</h1>
        <p className="logo">AtomMail</p>
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
        <Image src="/../asssets/list.svg" alt="" height="25" width="25"/>
        </div>
      </div>
  </header>
  );
}