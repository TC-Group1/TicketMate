import { ComponentPropsWithoutRef, FC } from "react";

const DetailsCardLabel: FC<ComponentPropsWithoutRef<"span">> = ({
  children,
  className,
  ...rest
}) => {
  const styles = "text-xs font-semibold";

  return (
    <span {...rest} className={className ? styles + " " + className : styles}>
      {children}
    </span>
  );
};
export default DetailsCardLabel;
