const STORAGE_KEY = "yapper-theme";

export const toggleTheme = (): void => {
  const root = document.documentElement;
  const isDarkMode = root.classList.toggle("dark");
  localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
};
