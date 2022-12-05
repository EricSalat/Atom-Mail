import MailStatisticHeader from "./MailStatisticHeader";
import styles from "../../../styles/MailStatistic.module.css";
import Circle from "./Circle";


export default function MailStatistic2({classname}) {
  return(
  
  <div className={classname}>
    <MailStatisticHeader />
    <div>
      <p className={styles.results}>23,933</p>
      <p className={styles.difference}>+123%</p>
    </div>
    {/* <div>
      <Circle />
    </div> */}
  </div>
  
  );
}