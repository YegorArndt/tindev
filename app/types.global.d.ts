import type { ReactNode } from "react";

declare global {
  interface Layout {
    children: ReactNode;
  }
}
