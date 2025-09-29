import { memo } from "react";
import { CiLogin } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/app/store";
import { Dropdown, Space, type MenuProps } from "antd";
import { delteuser } from "@/features/auth";

export const Login = memo(({ className = "" }: { className?: string }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="/#">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: <span onClick={() => dispatch(delteuser())}>Log out</span>,
    },
  ];

  return (
    <>
      {user ? (
        <div>
          <Space direction="vertical">
            <Space wrap>
              <Dropdown menu={{ items }} placement="bottomRight">
                <img
                  className={`size-10 rounded-full`}
                  src={user.picture}
                  alt=""
                />
              </Dropdown>
            </Space>
          </Space>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className={`flex items-center gap-2 lg:py-2 lg:px-5 lg:text-[16px] text-[12px] py-[8px] px-2 text-white bg-[#C61F1F] hover:bg-[#9e2020] rounded-[10px] ${className}`}
        >
          <span className="lg:flex md:flex hidden">Login</span>
          <CiLogin className="lg:size-6 size-5" />
        </button>
      )}
    </>
  );
});
