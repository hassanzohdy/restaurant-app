import styles from "./_CommonTile.module.scss";

export type CommonTitleProps = {
  children: React.ReactNode;
  className: string;
};

export default function CommonTitle({ children, className }: CommonTitleProps) {
  return (
    <span className={`${styles.commonText} ${className} text-primary-main `}> {children} </span>
  );
}