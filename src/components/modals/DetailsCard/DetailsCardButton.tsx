import { ComponentPropsWithoutRef, FC } from "react";

const DetailsCardButton: FC<ComponentPropsWithoutRef<"button">> = ({
  className,
  children,
  ...rest
}) => {
  const styles = "h-fit py-1 px-16 rounded-md text-sm";

  return (
    <button
      type="button"
      className={className ? styles + " " + className : styles}
      {...rest}
    >
      {children}
    </button>
  );
};
export default DetailsCardButton;
