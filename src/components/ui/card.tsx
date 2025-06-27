import React from "react";

export function Card({ children, className = "" }: any) {
  return <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children }: any) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children, className = "" }: any) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
