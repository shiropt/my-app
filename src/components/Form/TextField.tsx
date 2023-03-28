import { ComponentProps, FC } from "react";
import styled from "styled-components";

type Props = ComponentProps<"input">;
export const TextField: FC<Props> = ({ ref, ...props }) => {
  return <InputWrapper data-testid="email" {...props} />;
};

const InputWrapper = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid skyblue;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  }
`;
