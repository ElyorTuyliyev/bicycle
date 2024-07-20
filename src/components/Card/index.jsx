import CardStyle from "./Cart.style";

function Card({ flagImg, soldText, img, text, cost, button }) {
  return (
    <CardStyle className=" card__wrapper">
      <div className="card__flag-wrapper">
        <img src={flagImg} alt="flag" />
        <p className="card__sold-text">{soldText}</p>
      </div>
      <img className="card__img" src={img} alt="bicycle" />
      <p className="card__text">{text}</p>
      <p className="card__cost">{cost}</p>
      <div className="card__button">{button}</div>
    </CardStyle>
  );
}

export default Card;
