import type { JSX } from "react";

const MainContentCenter = (): JSX.Element => {
  return (
    <main
      className={`
        flex items-center justify-center
        min-h-screen
        px-4 pt-20
        md:pl-78 md:pr-6 md:pt-6
      `}
    >
      <h1
        className={`
          font-bold text-small
          text-yapper-dark dark:text-yapper-light
          transition-colors
        `}
      >
        Yapper is coming to you soon...
      </h1>
    </main>
  );
};

export default MainContentCenter;
