import Overlay from "apps/front-office/design-system/components/Overlay";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MealType } from "../utils/types";
import { DetailsSide } from "./DetailsSide";

type Props = {
  meal: MealType;
};

const ImagesSide = ({ images }: { images: string[] }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [src, setSrc] = useState("");

  const overlayHandler = () => {
    setIsOverlayOpen(oldState => !oldState);
  };

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOverlayOpen]);

  return (
    <>
      {isOverlayOpen && (
        <Overlay onClose={overlayHandler}>
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              onClick={e => e.stopPropagation()}
              src={src}
              alt="Meal image"
              className="bg-black"
            />
            <button
              onClick={e => {
                e.stopPropagation();
                overlayHandler();
              }}
              className="absolute top-8 right-8">
              <AiOutlineClose className="text-white" size="30" />
            </button>
          </div>
        </Overlay>
      )}
      <div className="flex gap-y-4 flex-col">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden bg-primary-light w-fit">
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
    <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 container relative">
      <ImagesSide images={meal.images} />
      <DetailsSide {...meal} />
    </section>
  );
};

export default MealDetailsSection;
