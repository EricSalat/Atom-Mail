import ButtonStyles from "../styles/Button.module.css";

export default function SubscribeForm(props) {
  return(
    <form action="#" method="post">
    <input
      type="email"
      id={props.id}
      name={props.id}
      placeholder="Email address"
    />
    <a href="#">
      <button type="submit"
        className={`${ButtonStyles["main-button"]} ${"ms-2"}`}>
        {props.content}
      </button>
    </a>
  </form> 
    
  );
}