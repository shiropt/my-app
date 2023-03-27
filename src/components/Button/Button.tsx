import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../style/color";

export type Props = {
  children: ReactNode;
  variant?: "primary" | "outlineBlue" | "important" | "outlineRed";
  size?: "large" | "middle" | "small";
} & ComponentProps<"button">;

export const Button: FC<Props> = ({ children, ref, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

const primary = { "background-color": colors.primary, color: colors.white };
const outlineBlue = { "background-color": colors.white, color: colors.primary, border: `1px solid ${colors.primary}` };
const important = { "background-color": colors.important, color: colors.white };
const outlineRed = {
  "background-color": colors.white,
  color: colors.important,
  border: `1px solid ${colors.important}`,
};

const ButtonWrapper = styled.button`
  padding: 8px 32px;
  width: ${({ size }: Props) => {
    switch (size) {
      case "large":
        return "250px";
      case "middle":
        return "170px";
      case "small":
        return "120xp";
      default:
        return "170px";
    }
  }};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${({ variant }: Props) => {
    switch (variant) {
      case "outlineBlue":
        return outlineBlue;
      case "outlineRed":
        return outlineRed;
      case "important":
        return important;
      default:
        return primary;
    }
  }}
`;
