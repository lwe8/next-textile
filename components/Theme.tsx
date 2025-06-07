"use client";
import React from "react";

type Props = {
  theme: string;
  func: () => void;
  classname?: string;
};
type ThemeSwitchProps = {
  attribute?: "class" | "data-theme";
  classname?: string;
};
const ThemeContext = React.createContext<"light" | "dark">("light");
const storageKey = "theme-preference";

function useTheme(): {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return { theme, setTheme };
}

function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

const DarkLight: React.FC<Props> = ({ theme, func, classname }) => {
  const cn = classname ?? "";
  const _theme = theme === "dark" ? "To Light" : "To Dark";
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <button
      id="dark-light"
      aria-label={`${theme} mode`}
      onClick={func}
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn}
    >
      <svg
        fill={theme}
        height="18"
        width="18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <title>{_theme}</title>
        <g>
          <g>
            <g>
              <path
                d="M256,108.936c-81.091,0-147.064,65.973-147.064,147.064S174.909,403.064,256,403.064S403.064,337.091,403.064,256
                           S337.091,108.936,256,108.936z M256,370.383c-63.071,0-114.383-51.312-114.383-114.383c0-63.071,51.312-114.383,114.383-114.383
                           c63.071,0,114.383,51.312,114.383,114.383C370.383,319.071,319.071,370.383,256,370.383z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M256,83.708c9.024,0,16.34-7.316,16.34-16.34V16.34C272.34,7.316,265.024,0,256,0c-9.024,0-16.34,7.316-16.34,16.34
                           v51.027C239.66,76.391,246.976,83.708,256,83.708z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M256,428.292c-9.024,0-16.34,7.316-16.34,16.34v51.027c0,9.024,7.316,16.34,16.34,16.34c9.024,0,16.34-7.316,16.34-16.34
                           v-51.027C272.34,435.609,265.024,428.292,256,428.292z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M111.062,134.171c6.38,6.381,16.727,6.381,23.109,0c6.381-6.38,6.381-16.727,0-23.109L98.089,74.981
                           c-6.38-6.381-16.727-6.381-23.109,0c-6.381,6.38-6.381,16.727,0,23.109L111.062,134.171z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M400.938,377.829c-6.38-6.381-16.727-6.38-23.109,0c-6.381,6.38-6.381,16.727,0,23.109l36.081,36.082
                           c6.38,6.382,16.727,6.382,23.109,0c6.382-6.38,6.382-16.727,0-23.109L400.938,377.829z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M83.708,256c0-9.024-7.316-16.34-16.34-16.34H16.34C7.316,239.66,0,246.976,0,256c0,9.024,7.316,16.34,16.34,16.34
                           h51.027C76.391,272.34,83.708,265.024,83.708,256z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M495.66,239.66h-51.027c-9.024,0-16.34,7.316-16.34,16.34c0,9.024,7.316,16.34,16.34,16.34h51.027
                           c9.024,0,16.34-7.316,16.34-16.34C512,246.976,504.684,239.66,495.66,239.66z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M111.062,377.829l-36.081,36.082c-6.381,6.382-6.381,16.727,0,23.109c6.38,6.382,16.727,6.383,23.109,0l36.081-36.082
                           c6.381-6.381,6.381-16.727,0-23.109C127.79,371.447,117.443,371.447,111.062,377.829z"
                fill="currentColor"
                strokeWidth="2"
              />
              <path
                d="M400.938,134.171l36.081-36.082c6.382-6.381,6.382-16.727,0-23.109c-6.38-6.381-16.727-6.381-23.109,0l-36.081,36.082
                           c-6.381,6.381-6.381,16.727,0,23.109C384.21,140.552,394.557,140.553,400.938,134.171z"
                fill="currentColor"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ attribute, classname }) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    "light"
  );
  const getColorPreference = React.useCallback((): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as "light" | "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }, []);
  const set_themes = React.useCallback(
    (theme: "light" | "dark") => {
      if (attribute === "class") {
        document.documentElement.classList.add(theme);
      }
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(storageKey, theme);
      setCurrentTheme(theme);
      setTheme(theme);
    },
    [attribute, setTheme]
  );
  React.useEffect(() => {
    const initTheme = getColorPreference();
    set_themes(initTheme);
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      set_themes(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [getColorPreference, set_themes]);
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    set_themes(newTheme);
  };
  if (!mounted) {
    return null;
  }
  return (
    <DarkLight theme={currentTheme} func={toggleTheme} classname={classname} />
  );
};

export { ThemeProvider, ThemeSwitch };
