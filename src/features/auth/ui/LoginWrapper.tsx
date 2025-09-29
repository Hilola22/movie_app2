import { GoogleLogin } from "@react-oauth/google";
import { memo } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setuser } from "../model/authSlice";


export const LoginWrapper = memo(() => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const payload = jwtDecode(credentialResponse.credential as string);
            dispatch(setuser(payload))
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
});
