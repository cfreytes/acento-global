import React from "react";

export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-blue-600 text-white py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
