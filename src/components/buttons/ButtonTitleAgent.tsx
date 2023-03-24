import React from "react";

interface ButtonTitle {
  children?: React.ReactNode;
  onClick: () => void;
}

export function ButtonTitleAgent({ children, ...rest }: ButtonTitle) {
  return (
    <button
      {...rest}
      className="text-[120px] w-full leading-[103px] text-left duration-300 hover:translate-x-4"
    >
      {children}
    </button>
  );
}
