import Overlay from "apps/front-office/design-system/components/Overlay";
<<<<<<< HEAD
import { useState } from "react";
import { MealType } from "../MealDetailsPage";
=======
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MealType } from "../utils/types";
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
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

<<<<<<< HEAD
  return (
    <>
      {isOverlayOpen ? (
        <Overlay onClose={overlayHandler}>
          <img
            onClick={e => e.stopPropagation()}
            src={src}
            alt="Meal image"
            className="bg-black"
          />
        </Overlay>
      ) : null}
      <div className="flex gap-y-4 flex-col flex-1">
=======
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
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
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
<<<<<<< HEAD
    <section className="py-20 flex gap-10 sm:flex-row flex-col container relative">
=======
    <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 container relative">
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
      <ImagesSide images={meal.images} />
      <DetailsSide {...meal} />
    </section>
  );
};

export default MealDetailsSection;
