import welcomeImage1 from "assets/images/about-us/welcome-image-1.jpg";
import welcomeImage2 from "assets/images/about-us/welcome-image-2.jpg";
import welcomeImage3 from "assets/images/about-us/welcome-image-3.jpg";

export default function AboutUSWelcomeGallery() {
  return (
    <>
      <div className="about-us-welcome-gallery flex justify-between w-[51.6%] max-md:w-[100%]">
        <div className="w-[40.6%]">
          <div className="image relative top-0 hover:top-[-5px] rounded-md overflow-hidden duration-1000 transition-all ease-in-out">
            <img src={welcomeImage1} alt="" />
          </div>
        </div>
        <div className="w-[calc(59.4%-20px)] max-xl:w-[calc(59.4%-10px)]">
          <div className="image mb-[20px] relative top-0 hover:top-[-5px] rounded-md overflow-hidden duration-1000 transition-all ease-in-out max-xl:mb-[10px]">
            <img src={welcomeImage2} alt="" />
          </div>
          <div className="image w-[72%] relative top-0 hover:top-[-5px] rounded-md overflow-hidden  duration-1000 transition-all ease-in-out">
            <img src={welcomeImage3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
