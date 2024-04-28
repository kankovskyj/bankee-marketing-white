import { cn } from "@/lib/utils";

const random = (from: number, to: number): number =>
  Math.floor(Math.random() * (to - from) + from);

interface Props {
  children: string;
  className?: string;
  isVisible?: boolean;
}

export const UnderlineText = ({
  children,
  className,
  isVisible = true,
}: Props) => {
  const strokeWidth = random(12, 16) / 100;
  const height = random(3, 6);
  let d = `M ${random(-5, 15)} ${random(-2, 2)}`;

  // Draw the single line
  const y = height - 6; // Since there's only one line, y will be the height
  d +=
    ` Q ${random(30, 70)}` + // The x coordinate of the curve's center
    ` ${random(y - 10, y - 5)}` + // The y coordinate of the curve's center, adjusted to bend more upwards
    ` ${random(85, 105)}` + // The x coordinate of the curve's end
    ` ${random(y - 2, y + 2)}`; // The y coordinate of the curve's end

  return (
    <span
      className={cn(
        className,
        "underline-text relative inline"
      )}
    >
      {children}
      {isVisible && (
        <svg
          viewBox={`0 0 100 ${height}`}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute -bottom-2.5 left-0 w-full overflow-visible"
        >
          <path
            stroke="currentColor"
            className="fill-none"
            d={d}
            strokeWidth={`${strokeWidth}em`}
          />
        </svg>
      )}
    </span>
  );
};
