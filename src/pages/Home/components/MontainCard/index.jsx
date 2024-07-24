import { useState } from "react";
import CardStyle from "./Card.style";

function CardMountain({ iconTitle, img, alt, text }) {
  const [users, setUsers] = useState([
    {
      name: "Elyor",
      lastName: "Tuyliyev",
      age: 22,
      id: 50,
    },
    {
      name: "werety",
      lastName: "asc",
      age: 254545482,
      id: 7824,
    },
    {
      name: "sdcwef",
      lastName: "erf",
      age: 22784685,
      id: 577,
    },
  ]);

  // const handleChange = () => {
  //   setUser({ ...user, age: user.age + 1 });
  // };
  // const handleDecrement = () => {
  //   setUser({ ...user, age: user.age + 1 });
  // };

  const handleDelete = (id) => {
    const updatedUsers = users.map((item) =>
      item?.id === id ? { ...item, age: item.age + 1 } : item
    );
    setUsers(updatedUsers);
  };

  console.log(users);

  return (
    <CardStyle>
      <div className="mountain__card-icon-wrapper">
        <p className="mountain__icon-name">{iconTitle}</p>
        <img src={img} alt={alt} />
      </div>
      {/* <h3>
        {user.name} {user.lastName}
      </h3>
      <p className="mountain__icon-text">{user.age}</p>
      <button onClick={handleChange}>+</button>
      <button disabled={user.age == 0} onClick={handleDecrement}>
        -
      </button> */}
      <div>
        {" "}
        {users.map((item) => (
          <div key={item?.id}>
            <h2>
              {item.name} {item.lastName}
            </h2>
            <p>{item.age} </p>
            <button onClick={() => handleDelete(item.id)}>Increase age</button>
          </div>
        ))}
      </div>
    </CardStyle>
  );
}

export default CardMountain;
