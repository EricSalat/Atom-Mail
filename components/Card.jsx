import styles from "../styles/Body.module.css";

export default function Card({id, content, text, onclick, classname}) {

  return(
      <div id={id} 
      className="my-cards col-2"
      onClick={onclick}
      >
        {content}
        <p className="text-center">{text}</p>
      </div>
  );
  
}