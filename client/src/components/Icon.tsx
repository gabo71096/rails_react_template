import { ReactNode } from "react";
import { IconContext } from "react-icons";

interface Props {
  icon: ReactNode;
  values: object;
}

export default function Icon({ icon, values }: Props) {
  return <IconContext.Provider value={{ ...values }}>{icon}</IconContext.Provider>;
}
