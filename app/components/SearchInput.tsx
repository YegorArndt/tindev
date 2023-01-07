"use client";

import { forwardRef } from "react";
import cn from "classnames";
import type { ReactNode } from "react";

import { Input } from "app/components/ui";
import type { InputProps } from "app/components/ui";

type SearchInputProps = Omit<InputProps, "ref"> & {
  wrapperCn?: string;
  children?: ReactNode;
};

export default forwardRef(function SearchInput(
  { wrapperCn, children, ...props }: SearchInputProps,
  ref
) {
  return (
    <div
      className={cn(
        "bg-base pt-10 sticky top-10 pb-8 border-bottom",
        wrapperCn
      )}
    >
      <Input
        placeholder="Search for fields here"
        baseCn="w-full"
        ref={ref}
        {...props}
      />
      {children}
    </div>
  );
});
