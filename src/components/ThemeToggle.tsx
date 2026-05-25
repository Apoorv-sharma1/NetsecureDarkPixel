import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "netsecure-theme";
const DARK_THEME = "cyber-dark";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("theme-cyber-dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const shouldUseDark = savedTheme !== "light";

    setIsDark(shouldUseDark);
    applyTheme(shouldUseDark);
  }, []);

  function toggleTheme() {
    setIsDark((current) => {
      const next = !current;
      applyTheme(next);
      window.localStorage.setItem(THEME_KEY, next ? DARK_THEME : "light");
      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative inline-grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-card text-foreground shadow-sm transition hover:border-teal hover:bg-muted"
      aria-label={isDark ? "Switch to light theme" : "Switch to cyber blue theme"}
      aria-pressed={isDark}
      title={isDark ? "Light theme" : "Cyber blue theme"}
    >
      <Sun className="h-4 w-4 transition duration-300 group-aria-pressed:-translate-y-7 group-aria-pressed:opacity-0" />
      <Moon className="absolute h-4 w-4 translate-y-7 text-teal opacity-0 transition duration-300 group-aria-pressed:translate-y-0 group-aria-pressed:opacity-100" />
    </button>
  );
}
