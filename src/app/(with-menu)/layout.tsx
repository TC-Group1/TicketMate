import Menu from "@/components/Menu/Menu";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      <div>{children}</div>
    </>
  );
};

export default RootLayout;
