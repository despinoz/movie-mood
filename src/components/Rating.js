import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const Star = ({ filled }) => {
  return (
    <>
      {filled ? (
        <StarIcon style={{ color: "#d31718" }} />
      ) : (
        <StarBorderIcon style={{ color: "#d31718" }} />
      )}
    </>
  );
};

const Rating = ({ handleOnRatingFilter, rating, setRating }) => {
  const handleOnClick = (newValue) => {
    rating === newValue ? setRating(0) : setRating(newValue);
    handleOnRatingFilter(rating === newValue ? 0 : newValue);
  };

  return (
    <>
      <span onClick={() => handleOnClick(2)}>
        <Star filled={rating >= 2 && true} />
      </span>
      <span onClick={() => handleOnClick(4)}>
        <Star filled={rating >= 4 && true} />
      </span>
      <span onClick={() => handleOnClick(6)}>
        <Star filled={rating >= 6 && true} />
      </span>
      <span onClick={() => handleOnClick(8)}>
        <Star filled={rating >= 8 && true} />
      </span>
      <span onClick={() => handleOnClick(10)}>
        <Star filled={rating >= 10 && true} />
      </span>
    </>
  );
};

export default Rating;
