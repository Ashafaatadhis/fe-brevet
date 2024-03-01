"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRightIcon, LucideIcon } from "lucide-react";
import React, { useState } from "react";

interface ItemProps {
  documentIcon?: string;
  active?: boolean;
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
  children?: React.ReactNode;
}

const Item = ({
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  children,
}: ItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        className={cn(
          "group min-h-[27px] text-sm pl-3 py-1 pr-3 w-full hover:bg-primary/5 flex items-center justify-between text-muted-foreground font-medium",
          active && "bg-primary/5 text-primary"
        )}
        onClick={() => {
          onClick?.();
          if (children) {
            setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
          }
        }}
      >
        <div className="flex">
          {documentIcon ? (
            <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
          ) : (
            <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
          )}
          <span className="truncate">{label}</span>
        </div>
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1"
        >
          {children ? (
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          ) : (
            <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          )}
        </div>
      </div>
      {isDropdownOpen && children && <div className="pl-6">{children}</div>}
    </>
  );
};

export default Item;
