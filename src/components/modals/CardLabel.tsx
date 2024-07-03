import { ComponentPropsWithoutRef, FC } from "react";

const CardLabel: FC<ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={className ? "text-lg font-semibold" + className : className}
    >
      {children}
    </p>
  );
};
export default CardLabel;
