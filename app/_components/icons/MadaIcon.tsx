import React, { ComponentPropsWithoutRef } from "react";

export const MadaIcon = (
  props: ComponentPropsWithoutRef<"svg">
) => {
  return (
    <svg
      viewBox="0 0 256 250"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fc3d32" d="M213.3 0H640v240H213.3z" />
        <path fill="#007e3a" d="M213.3 240H640v240H213.3z" />
        <path fill="#fff" d="M0 0h213.3v480H0z" />
      </g>
    </svg>
  );
};
