export default function CardDescription({title, description, id, classname, onclick}) {
  return (
    <div className={classname} onClick={onclick}>
      <div className="d-flex justify-content-center" >
        <div className="col-8" id={id} >
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}