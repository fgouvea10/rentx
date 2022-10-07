import { ReactElement, ReactNode } from "react";

type BadgeProps = {
  type: "green" | "blue" | "red" | "yellow";
  children: ReactNode;
};

export function Badge({ type = "green", children }: BadgeProps): ReactElement {
  switch (type) {
    case "blue":
      return (
        <span className="bg-blue-200 text-blue-500 text-xs font-normal mr-2 px-2.5 py-0.5 rounded">
          {children}
        </span>
      );
    case "red":
      return (
        <span className="bg-red-100 text-red-400 text-xs font-normal mr-2 px-2.5 py-0.5 rounded">
          {children}
        </span>
      );
    case "yellow":
      return (
        <span className="bg-yellow-100 text-yellow-500 text-xs font-normal mr-2 px-2.5 py-0.5 rounded">
          {children}
        </span>
      );

    default:
      return (
        <span className="bg-green-200 text-green-500 text-xs font-normal mr-2 px-2.5 py-0.5 rounded">
          {children}
        </span>
      );
  }
}
