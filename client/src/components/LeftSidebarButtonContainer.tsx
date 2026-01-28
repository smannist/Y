import LeftSidebarButton from "./LeftSidebarButton";

import type { JSX } from "react";

type LeftSidebarButtonContainerProps = {
  onCreateAccount: () => void;
  onSignIn: () => void;
};

const LeftSidebarButtonContainer = ({
  onCreateAccount,
  onSignIn,
}: LeftSidebarButtonContainerProps): JSX.Element => {
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
