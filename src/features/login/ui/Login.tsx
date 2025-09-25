import { memo } from 'react'
import { CiLogin } from "react-icons/ci";

export const Login = memo(() => {
  return (
    <button className="flex items-center gap-2 py-[8px] px-[26px] text-white bg-[#C61F1F] rounded-xl">
      <span>Enter</span>
      <CiLogin size={22} />
    </button>
  );
})
