import styles from "../../styles/MailStatistic.module.css";

export default function NavBarButton({icon, text}) {
  return(
    <div>
      <div className={styles["tab-button"]}>
        {icon}
        <p>{text}</p>
      </div>
    </div>
    
  
  );
}