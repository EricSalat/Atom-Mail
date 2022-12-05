import styles from "../../../styles/MailStatistic.module.css";

export default function StatisticLegend({text, mails, style}) {
  return(
    <div className={styles["legend-layout"]}>
      <div className={styles["legend-color-container"]}>
        <div className={styles["legend-color"]} style={style}>
        </div>
      </div>
      <div className={styles["legend-text"]}>
        <p>{text}</p>
        <p>{mails} Mails</p>
      </div>
    </div>  
  );
}