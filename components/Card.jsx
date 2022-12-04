import styles from "../styles/Body.module.css";

export default function Card({id, content, text}) {

  return(
    <div id={id} className={`${styles["my-cards"]} ${"col-2"}`}>
      {content}
      <p className="text-center">{text}</p>
    </div>  
  );
  
}