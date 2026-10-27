import { Button as PaperButton } from "react-native-paper";
import type { ButtonProps } from "react-native-paper";

type Props = Omit<ButtonProps, "children" | "mode"> & {
  label: string;
  variant?: "primary" | "secondary" | "text";
};

const modes = {
  primary: "contained",
  secondary: "outlined",
  text: "text",
} as const;

export default function Button({
  label,
  variant = "primary",
  style,
  ...rest
}: Props) {
  return (
    <PaperButton mode={modes[variant]} style={style} {...rest}>
      {label}
    </PaperButton>
  );
}
