import Container from "../../../../container";
import BasketCardStyle from "./BasketCard.style";

function BasketCard({
  img,
  alt,
  text,
  count,
  cost,
  imgCross,
  handleDecrement,
  handleIncrement,
  handleDelete,
  id,
}) {
  return (
    <Container>
      <BasketCardStyle>
        <img className="basketCard__img" src={img} alt={alt} />
        <p className="basketCard__text">{text}</p>
        <div className="basketCard__btn-wrapper">
          <button
            className="basketCard__decrement"
            onClick={() => handleDecrement(id)}
            disabled={count <= 1 ? true : false}
          >
            -
          </button>
          <p className="basketCard__">{count}</p>
          <button
            className="basketCard__increment"
            onClick={() => handleIncrement(id)}
          >
            +
          </button>
        </div>
        <p className="basketCard__count">{count ? cost * count : cost} ₽</p>
        <img
          className="basketCard__cross-icon"
          src={imgCross}
          alt="cross-icon"
          onClick={() => handleDelete(id)}
        />
      </BasketCardStyle>
    </Container>
  );
}

export default BasketCard;
