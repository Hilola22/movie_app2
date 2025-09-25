import { memo } from "react";
import Shape1 from "@/shared/assets/shape1.svg"
import Shape2 from "@/shared/assets/shape1.svg";
import Shape3 from "@/shared/assets/shape3.svg";

export const Loading = memo(() => {
  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .bounce1 { animation: bounce 1s infinite ease-in-out; }
        .bounce2 { animation: bounce 1s infinite ease-in-out 0.2s; }
        .bounce3 { animation: bounce 1s infinite ease-in-out 0.4s; }
      `}</style>

      <div className="fixed inset-0 flex flex-col gap-3 items-center justify-center z-50">
        <div className="flex gap-2">
          <img src={Shape1} className="w-4 bounce1" alt="shape1" />
          <img src={Shape2} className="w-4 bounce2" alt="shape2" />
          <img src={Shape3} className="w-5 bounce3" alt="shape3" />
        </div>
        <div>Loading...</div>
      </div>
    </>
  );
});
