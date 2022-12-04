import "../styles/Footer.module.css";
import {
  BsArrowRight,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="d-flex justify-content-between">
        <div className="container">
          <div>
            <p className="fw-bold logo">AtomMail</p>
            <p>Subscribe to keep up with the latest news</p>
            <form action="#" method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
              />
              <a href="#">
                <button type="submit" className="main-button ms-2">
                  <BsArrowRight size="2rem" />
                </button>
              </a>
            </form>
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
        <div>
          <p className="text-uppercase fw-bold">Get in touch</p>
          <div>
            <a href="">
              <BsLinkedin
                className="social-media-icons"
              // size="16"
              />
            </a>
            <a href="">
              <BsTwitter
                className="social-media-icons" />
            </a>
            <a href="">
              <BsFacebook
                className="social-media-icons"

              />
            </a>
          </div>
        </div>  
        </div> 
    </footer>   
  );          
}