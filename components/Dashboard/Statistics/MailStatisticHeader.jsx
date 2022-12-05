import styles from "../../../styles/MailStatistic.module.css";
import { BsThreeDots } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

export default function StatisticHeader() {
  return(
    <div className={`${styles["statistic-header"]}`}>
      <div>
        <p>Mail Statistic</p>
        <p>2022 <BiChevronDown size="22" /></p>
      </div>
      <div>
      <BsThreeDots size="23" />
      </div>
  </div>  
  );
}