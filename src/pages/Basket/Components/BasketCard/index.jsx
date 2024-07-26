import Container from "../../../../container";
import BasketCardStyle from "./BasketCard.style";
import CrossIcon from "../../../../assets/icons/Icon-cross.svg";
function BasketCard({
  img,
  text,
  count,
  cost,
  handleDecrement,
  handleIncrement,
  handleDelete,
  id,
}) {
  const totalAmount = count ? cost * count : cost;

  return (
    <BasketCardStyle>
      <img
        className="basketCard__img"
        src={img}
        style={{ objectFit: "cover" }}
        width="179px"
        height="169px"
        alt="bike"
      />
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
      <p className="basketCard__count">
        {totalAmount.toLocaleString("Fi-fi")} ₽
      </p>
      <img
        className="basketCard__cross-icon"
        src={CrossIcon}
        alt="cross-icon"
        onClick={() => handleDelete(id)}
      />
    </BasketCardStyle>
  );
}

export default BasketCard;
