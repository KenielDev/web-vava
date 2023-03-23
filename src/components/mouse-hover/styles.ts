import styled from "styled-components";
import { TooltipProps } from "./TooltipSlider";
import { Bounce } from "../Layout/styles";

export const WrapperTooltip = styled.div<TooltipProps>`
  position: absolute;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
`;

interface ImageProps {
  rotate?: boolean;
}

export const SvgArrow = styled.img<ImageProps>`
  animation: ${Bounce} 1s infinite;
  transform: ${(props) => props.rotate && "rotate(180deg)"};
  animation: 0.6s ease-in-out both infinite alternate;
`;
export const Heptagon = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
  clip-path: polygon(
    31% 0%,
    69% 0%,
    100% 31%,
    100% 69%,
    69% 100%,
    31% 100%,
    0% 69%,
    0% 31%
  );
`;
