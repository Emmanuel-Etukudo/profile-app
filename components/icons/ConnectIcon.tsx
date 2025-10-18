import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ConnectIcon({ width, height }: { width?: number; height?: number }) {
  return (
    <Svg
      width={width || 800}
      height={height || 800}
      viewBox="0 0 48 48"
      fill="none"
    >
      <Path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12a4 4 0 100-8 4 4 0 000 8zM10 42a6 6 0 100-12 6 6 0 000 12zM38 44a6 6 0 100-12 6 6 0 000 12zM22 28a8 8 0 100-16 8 8 0 000 16zM34 12a4 4 0 100-8 4 4 0 000 8z"
        fill="#9340aa"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 11l4 4M30 12l-2 2M34 33.5L28 26M14 31l4-4"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ConnectIcon;
