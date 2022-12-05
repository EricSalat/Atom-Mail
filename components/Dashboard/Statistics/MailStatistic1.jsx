import styles from "../../../styles/MailStatistic.module.css";
import StatisticHeader from "./MailStatisticHeader";
import StatisticLegend from "./StatisticLegend";
import Circle from "./Circle";

export default function MailStatistic1({classname}) {
  return(
  
    <div className={classname}>
      <StatisticHeader />
      <div className={styles["statistic-body"]}>
        <div className="circle-div">
          <Circle 
            style={{ backgroundColor: "var(--mainColor)"}} 
            value="60%" 
          />
          {/* <Circle 
            style={{ backgroundColor: "#000",}} 
            value="30%" 
          />
          <Circle 
            style={{ backgroundColor: "var(--auxiliarColor)"}} 
            value="10%" 
          /> */}
          </div>
      </div>
      <div className={`${styles["statistic-footer"]} `}>
        <StatisticLegend text="Opened" mails="100" style={{backgroundColor: "var(--mainColor)"}}/>
        <StatisticLegend text="Pending" mails="30" style={{backgroundColor: "#000"}}/>
        <StatisticLegend text="Bounced" mails="10" style={{backgroundColor: "var(--auxiliarColor)"}}/>
      </div>
    </div>
    
  );
}