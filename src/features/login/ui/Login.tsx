import { memo } from "react";
import { CiLogin } from "react-icons/ci";

export const Login = memo(({ className = "" }: { className?: string }) => {
  return (
    <button
      className={`items-center gap-2 py-2 px-5 text-white bg-[#C61F1F] hover:bg-[#9e2020] rounded-xl ${className}`}
    >
      <span>Login</span>
      <CiLogin size={22} />
    </button>
  );
});
