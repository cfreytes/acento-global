export function Card({ children, className }: any) {
  return <div className={`border rounded-lg p-4 shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ children }: any) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }: any) {
  return <h3 className="text-lg font-bold">{children}</h3>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}

