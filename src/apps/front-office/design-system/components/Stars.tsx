import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  ratings: number;
};

const Stars = ({ ratings }: Props) => {
  return (
    <div className="flex items-center">
      {new Array(5)
        .fill(<AiOutlineStar className="text-primary-text" />)
        .map((item, idx) => (
          <span key={idx} className="inline-block">
            {idx < Math.round(ratings) ? (
              <AiFillStar className="text-primary-orange-400" />
            ) : (
              item
            )}
          </span>
        ))}
    </div>
  );
};

export default Stars;
