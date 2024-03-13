import { useState } from "react";
import { Link } from "react-router-dom";

const Photo = () => {
  const [events, setEvents] = useState([1, 2, 3, 4, 5]);

  const elems = [];
  events.forEach((e) =>
    elems.push(
      <Link to={`${e}`}>
        <button>event {e}</button>
      </Link>
    )
  );

  return (
    <div>
      <button onClick={() => setEvents([...events, events.length + 1])}>
        Add event
      </button>
      {elems}
    </div>
  );
};

export default Photo;
