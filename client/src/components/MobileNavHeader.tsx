import { Menu } from "lucide-react";

import cn from "../utils/cn";
import YapperLogoContainer from "./YapperLogoContainer";

import type { JSX } from "react";

type MobileNavHeaderProps = {
  onToggle: () => void;
};

const BASE_CONTAINER_STYLES =
  "fixed top-0 left-0 right-0 z-40 " +
  "flex items-center h-16 px-4 " +
  "border-b border-yapper-border " +
  "bg-yapper-surface transition-colors";

const BASE_BUTTON_STYLES =
  "p-2 rounded-lg cursor-pointer transition-colors hover:bg-yapper-hover";

const BASE_ICON_STYLES = "h-6 w-6 text-yapper-text";

const MobileNavHeader = ({ onToggle }: MobileNavHeaderProps): JSX.Element => {
  const handleClick = (): void => {
    console.log("Hamburger menu pressed.");
    onToggle();
  };

  return (
    <div className={cn(BASE_CONTAINER_STYLES)}>
      <button
        onClick={handleClick}
        className={cn(BASE_BUTTON_STYLES)}
        aria-label="Toggle menu"
        type="button"
      >
        <Menu className={cn(BASE_ICON_STYLES)} />
      </button>
      <div className="ml-2">
        <YapperLogoContainer size="small" />
      </div>
    </div>
  );
};

export default MobileNavHeader;
