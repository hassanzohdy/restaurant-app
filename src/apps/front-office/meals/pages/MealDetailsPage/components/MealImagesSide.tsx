type Props = {
  images: string[];
};

export const MealImagesSide = ({ images }: Props) => {
  return (
    <div className="flex gap-y-4 flex-col flex-1">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden bg-primary-orange-100 w-fit">
          <img
            loading="lazy"
            src={image}
            alt="Product image"
            width={800}
            height={800}
          />
        </div>
      ))}
    </div>
  );
};
