import styles from "../../styles/MailStatistic.module.css";

export default function StatisticHeader() {
  return(
    <div className={`${styles["statistic-header"]}`}>
    <p>Mail Statistic</p>
    <p>2022</p>
  </div>  
  );
}