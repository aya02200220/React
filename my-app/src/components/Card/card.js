import "./card.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card--container">
      <div className="card--inside-container">
        <img src={props.avatar} alt="avatar" />
        <div className="allInfo">
          <div className="container--title">
            <p className="fullName">{props.fullName}</p>
            <p className="title">{props.title}</p>
            <p className="email">{props.email}</p>
          </div>
          <div className="container--btns">
            <button type="">Email</button>
            <button type="">LinkdIn</button>
          </div>
          <div className="container--about">
            <p>
              <strong>About</strong>
            </p>
            <p>{props.about}</p>
            <p>
              <strong>Interests</strong>
            </p>
            <p>{props.interests}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
