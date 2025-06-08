"use client";
import { memo } from "react";

const ThemeScript = memo(function ThemeScript() {
  return (
    <script defer src="/script/theme.js"></script>
  );
});

export default ThemeScript;
