const Carousel = () => {
  return (
    <div className="overflow-hidden my-4" ref={emblaRef}>
      <div className="flex rounded-lg">
        {images.map((image) => (
          <div
            className="embla__slide cursor-grab active:cursor-grabbing"
            key={image}
          >
            <img src={image} className="w-full" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
