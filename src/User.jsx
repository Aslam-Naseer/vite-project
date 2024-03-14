import EventTile from "./EventTile.jsx";

const User = () => {
  const elems = [];
  [1, 2, 3].forEach((e) => elems.push(<EventTile id={e} />));
  return <div>{elems}</div>;
};

export default User;
