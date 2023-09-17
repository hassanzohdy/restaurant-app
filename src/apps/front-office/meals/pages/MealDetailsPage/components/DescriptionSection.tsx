type Props = {
  description: string;
  ingredients: string[];
};

const DescriptionSection = ({ description, ingredients }: Props) => {
  return (
    <section className=" text-primary-text max-w-[970px] mx-auto leading-7 space-y-4">
      <p>{description}</p>
      <div>
        <span className="inline-block font-bold mr-2">Ingredients:</span>
        {ingredients}
      </div>
    </section>
  );
};

export default DescriptionSection;
