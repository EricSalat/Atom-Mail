import styles from "../../styles/MailStatistic.module.css";


export default function Circle({value, style}) {
  return(
    <div className={styles.circle} style={style}>
      <p>{value}</p>
    </div>  
    
  );
}