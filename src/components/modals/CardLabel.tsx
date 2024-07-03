import { ComponentPropsWithoutRef, FC } from "react";

const CardLabel: FC<ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
  ...rest
}) => {
  const styles = "text-lg font-semibold";

  return (
    <p {...rest} className={className ? styles + " " + className : styles}>
      {children}
    </p>
  );
};
export default CardLabel;
