export type CommonTitleProps = {
  children: React.ReactNode;
  className: string;
};

export default function CommonTitle({ children, className }: CommonTitleProps) {
  return (
    <span className={`${className} font-norican`}>
      {" "}
      {children}{" "}
    </span>
  );
}
