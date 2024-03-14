import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EventTile = ({ id }) => {
  return (
    <div>
      eventTile: {id}
      <Link to={`${id}`}>
        <button>Select</button>
      </Link>
      <br />
    </div>
  );
};

export default EventTile;
