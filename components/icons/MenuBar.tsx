import type { FC } from "react";
import type { IconProps } from "./icons";

const MenuBar: FC<IconProps> = ({ size, color }) => {
  const _size = size ?? 24;
  const _color = color ?? "currentcolor";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={_size}
      height={_size}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 8.25H4.5V6.75H19.5V8.25Z"
        fill={_color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 12.75H4.5V11.25H19.5V12.75Z"
        fill={_color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 17.25H4.5V15.75H19.5V17.25Z"
        fill={_color}
      />
    </svg>
  );
};

export default MenuBar;
