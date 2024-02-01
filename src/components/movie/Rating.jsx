import Star from '../../assets/icons/star.svg';

const Rating = ({ value }) => {
  const ratings = Array(value).fill(Star);
  return (
    <>
      <div className="flex items-center space-x-1 mb-5">
        {ratings.map((rating, i) => (
          <img src={Star} key={i} width="14" height="14" alt="star" />
        ))}
      </div>
    </>
  );
};

export default Rating;
