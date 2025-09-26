import { ThemeChanger } from "@/features/theme";
import { memo } from "react";
import LanguageSwitcher from "@/features/language-switcher/ui/LanguageSwitcher";
import { Login } from "@/features/login";

export const Option = memo(() => {
  return (
    <div className="flex gap-7 items-center">
      <LanguageSwitcher />
      <Login className="hidden lg:flex" />
      <ThemeChanger />
    </div>
  );
});
