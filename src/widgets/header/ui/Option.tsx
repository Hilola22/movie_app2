import { ThemeChanger } from "@/features/theme";
import { memo } from "react";
import { Login } from "@/features/login";
import { LanguageSwitcher } from "@/features/language-switcher";

export const Option = memo(() => {
  return (
    <div className="flex gap-7 items-center">
      <LanguageSwitcher />
      <Login/>
      <ThemeChanger />
    </div>
  );
});
