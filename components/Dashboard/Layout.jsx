import MailStatistic1 from "./Statistics/MailStatistic1";
import NavBar from "./NavBar";
import styles from "../../styles/MailStatistic.module.css";

export default function Layout() {
  return(
    <section className="row justify-content-center">
      <div className={`${styles.layout} ${"col-10"}`}>
        <NavBar />
        <div className="row">
          <p className="h3 ">Welcome to AtomMail</p>
          <p>A powertful, simplified platform for your email marketing.</p>
        </div>
      
        {/* <div className="col-10">
          <MailStatistic1 />
          <MailStatistic1 />
        </div> */}
        {/* <MailStatistic2 /> */}
      
      </div>
    </section>
    
  );
}