"use client";
import cn from "classnames";
import type { ReactNode } from "react";

import { Input } from "app/components/ui";
import type { InputProps } from "app/components/ui";

type SearchInputProps = Omit<InputProps, "ref"> & {
  wrapperCn?: string;
  children?: ReactNode;
};

export default function SearchInput({
  wrapperCn,
  children,
  ...props
}: SearchInputProps) {
  return (
    <div
      className={cn(
        "bg-base pt-10 sticky top-10 pb-8 border-bottom",
        wrapperCn
      )}
    >
      <Input placeholder="Search for fields here" baseCn="w-full" {...props} />
      {children}
    </div>
  );
}
