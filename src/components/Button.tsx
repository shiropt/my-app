import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  variant?: "secondary" | "disabled";
  size?: "large" | "small";
} & ComponentProps<"button">;

export const Button: FC<Props> = ({ children, ref, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
const primary = { "background-color": "#0077FF", color: "#fff" };
const secondary = { "background-color": "#fff", color: "#0077FF", border: "1px solid #0077FF" };
const disabled = {
  "background-color": "#ccc",
  color: "#fff",
  cursor: "default",
  "&:hover": {
    opacity: 1,
  },
};
const ButtonWrapper = styled.button`
  padding: 8px 32px;
  width: ${({ size }: Props) => (size === "large" ? "250px" : size === "small" ? "120px" : "170px")};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${({ variant }: Props) => {
    switch (variant) {
      case "secondary":
        return secondary;
      case "disabled":
        return disabled;
      default:
        return primary;
    }
  }}
`;
