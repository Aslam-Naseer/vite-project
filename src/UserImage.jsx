import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const UserImage = () => {
  const webRef = useRef(null);
  const [img, setImg] = useState(undefined);

  const showImage = () => {
    setImg(webRef.current.getScreenshot());
  };

  useEffect(() => {
    console.log(img);
  });

  return (
    <div>
      <Webcam ref={webRef} />
      event webcam
      <button onClick={showImage}>click Image</button>
      <br />
      <img src={img} />
    </div>
  );
};

export default UserImage;
