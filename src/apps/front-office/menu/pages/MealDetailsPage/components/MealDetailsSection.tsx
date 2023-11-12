import Overlay from "apps/front-office/design-system/components/Overlay";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DetailsSide } from "./DetailsSide";

const ImagesSide = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [src, setSrc] = useState("");

  const {
    image: { url: image },
    name,
  } = mealAtom.useValue();

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
              alt={name}
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
        <div className="rounded-xl overflow-hidden bg-primary-light w-fit">
          <img
            onClick={() => {
              overlayHandler();
              setSrc(image);
            }}
            loading="lazy"
            src={image + "?w=800&h=800"}
            alt={name}
            width={800}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

const MealDetailsSection = () => {
  return (
    <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 container relative">
      <ImagesSide />
      <DetailsSide />
    </section>
  );
};

export default MealDetailsSection;
