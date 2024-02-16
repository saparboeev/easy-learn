import { Link } from "react-router-dom";
import VerificationInput from "react-verification-input";

function Login() {

  return (
    <div className="container mx-auto mt-[200px] flex justify-center flex-col items-center ">
      <h1 className="font-bold text-4xl">Kodni kiriting</h1>

      <span className="mt-[100px] mb-[100px] font-thin text-2xl ">
        <Link>@onlineplatformrobot</Link> telegram botiga kiring va 1 daqiqalik
        kodingizni oling.
      </span>

      <VerificationInput />

    </div>
  );
}

export default Login;
