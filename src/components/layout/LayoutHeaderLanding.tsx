"use client";

import Link from "next/link";
import { ProjectLogo } from "@stellar/design-system";

import { Box } from "@/components/layout/Box";

import "./LayoutHeaderLanding.scss";

export const LayoutHeaderLanding = () => {
  return (
    <div className="LabLayout__header LabLayout__header--landing">
      <header className="LabLayout__header__main">
        <Box
          gap="md"
          direction="row"
          align="center"
          addlClassName="LabLayout__header__left"
        >
          <ProjectLogo
            title="Skills"
            link="/"
            customAnchor={<Link href="/" prefetch={true} />}
          />
        </Box>
      </header>
    </div>
  );
};
