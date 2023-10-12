import Overlay from "apps/front-office/design-system/components/Overlay";
import { useState } from "react";
import { MealType } from "../MealDetailsPage";
import { DetailsSide } from "./DetailsSide";

type Props = {
  meal: MealType;
};

const ImagesSide = ({ images }: { images: string[] }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [src, setSrc] = useState<string>("");

  const overlayHandler = () => {
    setIsOverlayOpen(oldState => !oldState);
  };

  return (
    <>
      {isOverlayOpen ? (
        <Overlay closeHandler={overlayHandler}>
          <img
            onClick={e => e.stopPropagation()}
            src={src}
            alt="Meal image"
            className="bg-black"
          />
        </Overlay>
      ) : null}
      <div className="flex gap-y-4 flex-col flex-1">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden bg-primary-orange-100 w-fit">
            <img
              onClick={() => {
                overlayHandler();
                setSrc(image);
              }}
              loading="lazy"
              src={image}
              alt="Product image"
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const MealDetailsSection = ({ meal }: Props) => {
  return (
    <section className="py-20 flex gap-10 sm:flex-row flex-col container relative">
      <ImagesSide images={meal.images} />
      <DetailsSide {...meal} />
    </section>
  );
};

export default MealDetailsSection;
