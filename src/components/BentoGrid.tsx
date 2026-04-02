import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(260px,_1fr)] gap-1.5 ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const size =
          (child.props as Record<string, unknown>)?.size ||
          (child.props as Record<string, unknown>)?.["data-size"] ||
          "medium";

        let spanClass = "";
        switch (size) {
          case "large":
            spanClass = "md:col-span-2 md:row-span-2";
            break;
          case "small":
            spanClass = "md:col-span-1 md:row-span-1";
            break;
          case "medium":
          default:
            spanClass = "md:col-span-1 md:row-span-1";
            break;
        }

        return (
          <div className={`rounded-2xl overflow-hidden ${spanClass}`}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
