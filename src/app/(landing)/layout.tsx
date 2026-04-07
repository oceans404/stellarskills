import { ReactNode } from "react";

import "./layout.scss";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return <div className="LandingLayout">{children}</div>;
}
