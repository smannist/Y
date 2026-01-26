import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../utils/theme";

import type { JSX } from "react";

const ThemeToggler = (): JSX.Element => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-30 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer shadow-lg flex items-center justify-center"
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className="w-5 h-5 text-yapper-peach block dark:hidden" />
      <Moon className="w-5 h-5 text-gray-400 hidden dark:block" />
    </button>
  );
};

export default ThemeToggler;
