

export default function Button({className, text, href}) {
  return(
    <>
      <a href={href}>
        <button className={className}>{text}</button>
      </a>
      
    </>
    
  );

}