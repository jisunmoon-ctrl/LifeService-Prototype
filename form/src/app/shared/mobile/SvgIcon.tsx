import svgPaths from "../../../imports/svg-yso1yl2guq";

interface SvgIconProps {
  path: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  viewBox?: string;
  className?: string;
}

export function SvgIcon({
  path,
  size = 24,
  width,
  height,
  color = "currentColor",
  viewBox = "0 0 24 24",
  className = "",
}: SvgIconProps) {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox={viewBox}
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <path d={path} fill={color} />
    </svg>
  );
}
