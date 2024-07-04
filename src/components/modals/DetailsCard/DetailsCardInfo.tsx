import { ComponentPropsWithoutRef, FC } from "react";

const DetailsCardInfo: FC<ComponentPropsWithoutRef<"span">> = ({
  children,
  className,
  ...rest
}) => {
  const styles = "text-xs";

  return (
    <span {...rest} className={className ? className + " " + styles : styles}>
      {children}
    </span>
  );
};
export default DetailsCardInfo;
