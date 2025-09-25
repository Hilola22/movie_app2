import { memo } from 'react'
import { CiLogin } from "react-icons/ci";

export const Login = memo(() => {
  return (
    <button className="lg:flex items-center gap-2 lg:py-[8px] lg:px-[26px] hidden text-white bg-[#C61F1F] hover:bg-[#9e2020] rounded-xl">
      <span>Login</span>
      <CiLogin size={22} />
    </button>
  );
})