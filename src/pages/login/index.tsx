import { nopeResolver } from "@hookform/resolvers/nope";
import * as Nope from "nope-validator";
import { useForm } from "react-hook-form";
import { TextField } from "../../ui/input";
import { useAppDispatch } from "../../store";
import { loginUserWithEmailAndPassword } from "../../slice/auth";
import withoutAuth from "../../hoc/without-auth.tsx";

type LoginInput = {
  email: string;
  password: string;
};

const validation = Nope.object().shape({
  email: Nope.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Nope.string()
    .min(6, "Password has to be minimum of 6 letters.")
    .max(255, "Password must be maximum of 255 letters")
    .required("Password is required"),
});

const LoginPage = () => {
  const { formState, register, handleSubmit } = useForm<LoginInput>({
    resolver: nopeResolver(validation),
  });

  const dispatch = useAppDispatch();

  const loginUser = (values: LoginInput) => {
    dispatch(loginUserWithEmailAndPassword(values));
  };

  return (
    <div className="bg-[url('/code_bg.png')] bg-cover h-screen flex w-full justify-center items-center text-white">
      <div className="w-[95%] max-w-[800px] bg-slate-900 d-flex justify-center items-center p-4 rounded-xl">
        <img src="/dark_logo.png" className="w-[120px]" />
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="flex justify-between">
            <div className="flex flex-col items-start space-y-2 ml-4 w-full">
              <h1 className="text-3xl">Login </h1>
              <p>Use email and password to login.</p>
            </div>
            <div className="flex flex-col items-start space-y-4 ml-4 w-full">
              <TextField
                error={formState.errors.email && formState.errors.email.message}
                {...register("email")}
                label="Email"
              />
              <TextField
                error={
                  formState.errors.password && formState.errors.password.message
                }
                {...register("password")}
                label="Password"
              />
              <span className="text-sm underline">Forgot Password ?</span>
              <button
                type="submit"
                className="bg-violet-900  w-full p-4 rounded-2xl text-xl"
              >
                {" "}
                Get started
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withoutAuth(LoginPage);
