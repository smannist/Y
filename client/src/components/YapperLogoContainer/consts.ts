import type { YapperLogoContainerProps } from "./types";

export const BASE_STYLES =
  "bg-center bg-no-repeat bg-contain " +
  "bg-[url('/img/yapper_white.webp')] " +
  "dark:bg-[url('/img/yapper_dark.webp')]";

export const LOGO_SIZE_STYLES: Record<
  YapperLogoContainerProps["size"],
  string
> = {
  small: "h-10 w-32",
  large: "w-64 aspect-[4/2]",
};
