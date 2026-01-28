import clsx from "clsx";

import MobileNavHeader from "./components/MobileNavHeader";
import Backdrop from "./components/Backdrop";
import LeftSidebar from "./components/LeftSidebar";
import MainContentCenter from "./components/MainContentCenter";
import ThemeToggler from "./components/ThemeToggler";

import { useMobileSidebar } from "./hooks/useMobileSidebar";

import type { JSX } from "react";

const App = (): JSX.Element => {
  const {
    isOpen: isMobileSidebarOpen,
    isDesktop,
    toggle,
    close,
  } = useMobileSidebar();

  const handleCreateAccount = (): void => {
    console.log("Create account clicked.");
  };

  const handleSignIn = (): void => {
    console.log("Sign in clicked.");
  };

  return (
    <div
      className={clsx("min-h-screen", "bg-yapper-surface", "transition-colors")}
    >
      {!isDesktop && <MobileNavHeader onToggle={toggle} />}
      <Backdrop open={!isDesktop && isMobileSidebarOpen} onDismiss={close} />
      <LeftSidebar
        isSidebarOpenMobile={isMobileSidebarOpen}
        onCreateAccount={handleCreateAccount}
        onSignIn={handleSignIn}
      />
      <ThemeToggler />
      <MainContentCenter />
    </div>
  );
};

export default App;
