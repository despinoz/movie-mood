import { useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const Star = ({ filled }) => {
  return <>{filled ? <StarIcon /> : <StarBorderIcon />}</>;
};

const Popularity = () => {
  const [value, setValue] = useState(0);

  const handleOnClick = (newValue) => {
    value === newValue ? setValue(0) : setValue(newValue);
  };

  return (
    <>
      <span onClick={() => handleOnClick(2)}>
        <Star filled={value >= 2 && true} />
      </span>
      <span onClick={() => handleOnClick(4)}>
        <Star filled={value >= 4 && true} />
      </span>
      <span onClick={() => handleOnClick(6)}>
        <Star filled={value >= 6 && true} />
      </span>
      <span onClick={() => handleOnClick(8)}>
        <Star filled={value >= 8 && true} />
      </span>
      <span onClick={() => handleOnClick(10)}>
        <Star filled={value >= 10 && true} />
      </span>
    </>
  );
};

export default Popularity;
