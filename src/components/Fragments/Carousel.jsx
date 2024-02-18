/* eslint-disable react/prop-types */
const Carousel = (props) => {
  const { image } = props;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default Carousel;
