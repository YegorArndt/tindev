import { memo, forwardRef } from "react";
import cn from "classnames";
import type { Ref } from "react";

import type { DefaultProps } from "app/components/ui/types";

export type InputProps = {} & DefaultProps & JSX.IntrinsicElements["input"];

export default memo(
  forwardRef(
    (
      { className, baseCn, ...props }: InputProps,
      ref: Ref<HTMLInputElement>
    ) => (
      <input
        className={cn(
          "bg-transparent py-1 px-3 rounded-md border outline-none hover:border-base focus:border-base transition duration-200",
          baseCn,
          className
        )}
        ref={ref}
        autoComplete="off"
        {...props}
      />
    )
  )
);

// border-color .2s ease,color .2s ease;
