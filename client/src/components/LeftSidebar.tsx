import { useMediaQuery } from "@uidotdev/usehooks";

import YapperLogoContainer from "./YapperLogoContainer";
import LeftSidebarButtonContainer from "./LeftSidebarButtonContainer";
import cn from "../utils/cn";

import type { JSX } from "react";

type LeftSidebarProps = {
  isSidebarOpenMobile: boolean;
  onCreateAccount: () => void;
  onSignIn: () => void;
};

const BASE_STYLES =
  "fixed left-0 top-0 z-50 flex flex-col h-screen w-72 p-6 " +
  "overflow-y-auto md:overflow-visible overflow-x-hidden " +
  "border-r border-yapper-border bg-yapper-surface " +
  "transition-all duration-300 ease-in-out " +
  "md:translate-x-0";

const MOBILE_TRANSLATE: Record<"open" | "closed", string> = {
  open: "translate-x-0",
  closed: "-translate-x-full",
};

const LeftSidebar = ({
  isSidebarOpenMobile,
  onCreateAccount,
  onSignIn,
}: LeftSidebarProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const mobileState = isSidebarOpenMobile ? "open" : "closed";

  return (
    <div
      className={cn(BASE_STYLES, MOBILE_TRANSLATE[mobileState])}
      aria-hidden={!isDesktop && !isSidebarOpenMobile}
    >
      <YapperLogoContainer size="large" />
      <LeftSidebarButtonContainer
        onCreateAccount={onCreateAccount}
        onSignIn={onSignIn}
      />
    </div>
  );
};

export default LeftSidebar;
