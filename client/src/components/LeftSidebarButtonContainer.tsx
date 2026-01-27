import type { JSX } from "react";

import LeftSidebarButtonCreate from "./LeftSidebarButtonCreate";
import LeftSidebarButtonSignIn from "./LeftSidebarButtonSignIn";

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
        <LeftSidebarButtonCreate onClick={onCreateAccount} />
        <LeftSidebarButtonSignIn onClick={onSignIn} />
      </div>
    </>
  );
};

export default LeftSidebarButtonContainer;
