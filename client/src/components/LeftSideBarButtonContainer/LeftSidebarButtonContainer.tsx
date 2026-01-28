import LeftSidebarButton from "@/components/LeftSidebarButton";

import type { LeftSidebarButtonContainerProps } from "./types";

const LeftSidebarButtonContainer = ({
  onCreateAccount,
  onSignIn,
}: LeftSidebarButtonContainerProps) => {
  return (
    <>
      <div className="flex-1" />
      <div className="space-y-3">
        <LeftSidebarButton variant="create" onClick={onCreateAccount} />
        <LeftSidebarButton variant="signIn" onClick={onSignIn} />
      </div>
    </>
  );
};

export default LeftSidebarButtonContainer;
