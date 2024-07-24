import CardStyle from "./Card.style";

function Card() {
  return (
    <CardStyle>
      <div className="mountain__card-icon-wrapper">
        <p className="mountain__icon-name">{iconName}</p>
        <img src={icon} alt={alt} />
      </div>
      <p className="mountain__icon-text">{text}</p>
    </CardStyle>
  );
}

export default Card;
