import SubscribeForm from '../components/SubscribeForm';
import styles from "../styles/Footer.module.css";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold logo">AtomMail</p>
            <p>Subscribe to keep up with the latest news</p>

            <SubscribeForm
              id="subscribe"
              content={<HiArrowNarrowRight size="25" />}
             />
          </div>

          <div>
            <ul>
              <li className="fw-bold">Learn</li>
              <li>
                <a href="">Our Product</a>
              </li>
              <li>
                <a href="">Our Service</a>
              </li>
              <li>
                <a href="">Tutorials</a>
              </li>
              <li>
                <a href="">Best Features</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="fw-bold">Company</li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">News & Blog</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="text-uppercase fw-bold">Get in touch</p>
            <div>
              <a href="">
                <BsLinkedin
                  className={styles["social-media-icons"]}
                />
              </a>
              <a href="">
                <BsTwitter
                  className={styles["social-media-icons"]} />
              </a>
              <a href="">
                <BsFacebook
                  className={styles["social-media-icons"]}
                />
              </a>
            </div>

            <div>
              <p className="text-center py-4 mb-2">Developed with 💚 by <a href="https://ericsalat.com/">Èric Salat</a></p>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
}