import MailStatistic1 from "./Statistics/MailStatistic1";
import MailStatistic2 from "./Statistics/MailStatistic2";
import NavBar from "./NavBar";
import styles from "../../styles/MailStatistic.module.css";

export default function Layout() {
  return(
    //TODO: Encontrar la forma de hacer las cajas más responsive
    //Aquí está el problema de las columnas del layout
    <section className="col-12"  >
      <div className={styles.layout}>
        <NavBar />
        <div className={styles.layout2}>
          <div>
            <p className="text-start h2">Welcome to AtomMail</p>
            <p className="text-start highlight-text">A powertful, simplified platform for your email marketing.</p>
          </div>
          <div className={styles.grid}>
            <MailStatistic1
            classname={styles["statistic-layout"]} />
            <MailStatistic2
            classname={styles["statistic-layout-2"]} />
            <MailStatistic2
            classname={styles["statistic-layout-3"]} />
          </div>
        </div>
      </div>
    </section>
    
  );
}