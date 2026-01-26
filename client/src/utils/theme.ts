const STORAGE_KEY = "yapper-theme";

export const toggleTheme = (): void => {
  const root = document.documentElement;

  const toggle = () => {
    root.classList.toggle("dark");
    localStorage.setItem(
      STORAGE_KEY,
      root.classList.contains("dark") ? "dark" : "light",
    );
  };

  if (document.startViewTransition) {
    document.startViewTransition(toggle);
  } else {
    toggle();
  }
};
