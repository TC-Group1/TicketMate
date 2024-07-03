import { ComponentPropsWithoutRef, FC } from "react";

const DetailsCardButton: FC<ComponentPropsWithoutRef<"button">> = ({
  className,
  children,
  ...rest
}) => {
  const styles = "h-fit py-2 px-16 rounded";

  return (
    <button
      type="button"
      className={className ? styles + " " + className : styles}
    >
      {children}
    </button>
  );
};
export default DetailsCardButton;
