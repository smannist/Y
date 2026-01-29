export const BASE_STYLES =
  "fixed left-0 top-0 z-50 flex flex-col h-[100dvh] w-72 p-6 " +
  "overflow-x-hidden overflow-y-hidden overscroll-contain touch-pan-y " +
  "[-webkit-overflow-scrolling:touch] " +
  "desktop:h-screen desktop:overflow-visible " +
  "border-r border-yapper-border bg-yapper-surface " +
  "transition-all duration-300 ease-in-out " +
  "desktop:translate-x-0";

export const MOBILE_TRANSLATE: Record<"open" | "closed", string> = {
  open: "translate-x-0 overflow-y-auto max-h-[100dvh]",
  closed: "-translate-x-full overflow-y-hidden",
};
