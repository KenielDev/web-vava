import { Heptagon, SvgArrow } from "./styles";

interface Tooltip {
  x: number;
  y: number;
}

export function TooltipSlider({ x, y }: Tooltip) {
  return (
    <div
      style={{
        position: "absolute",
        left: x - 44,
        top: y - 40,
        pointerEvents: "none",
      }}
    >
      <Heptagon>
        <div className="flex items-center h-full gap-2 justify-center flex-col">
          <div className="animate-up">
            <SvgArrow rotate={true} src="/img/valorant-arrow.svg" />
          </div>

          <div className="animate-down mt-1">
            <SvgArrow src="/img/valorant-arrow.svg" />
          </div>
        </div>
      </Heptagon>
    </div>
  );
}
