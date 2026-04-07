import { ReactNode } from "react";

import { LayoutMain } from "@/components/layout/LayoutMain";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return <LayoutMain>{children}</LayoutMain>;
}
