import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { InUser } from "../interfaces/InUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../utils/validation";
import { Link } from "react-router-dom";
import instance from "../api";

type Props = {
  isLogin?: boolean;
};

const AuthForm = ({ isLogin }: Props) => {
  const { login: contextLogin } = useAuth();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<InUser>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: InUser)=>{
    try{
        if(isLogin){
            const res =  await instance.post(`/auth/login`, data);
            contextLogin(res.data.accessToken, res.data.user);
        }else{
            const res =  await instance.post(`/auth/register`, {email: data.email, password: data.password});
            alert(res.data.message);
        }
    }catch(error: any){
      console.log(error);

      if (error.response) {
        // Error response from server
        console.log("Error Response:", error.response);
        alert(error.response.data.message || "Error");
      } else if (error.request) {
        // No response received (e.g., network issues)
        console.log("Network error or no response:", error.request);
        alert("Network error or no response from server");
      } else {
        // Other errors
        console.log("Error", error.message);
        alert("An unexpected error occurred");
      }
    }
  }
  return (
    <>
     <section className="max-w-screen-md mx-auto border p-3 rounded-md my-8">
     <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl text-center font-semibold">{isLogin ? "Login" : "Register"}</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-xl">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-xl">
            Password
          </label>
          <input
            type="password"
            id=""
            {...register("password", { required: true })}
            className="form-control"
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="confirmPass" className="form-label text-xl">
              Confirm Password
            </label>
            <input type="password" id="" className="form-control" {...register("confirmPass",{required: true})} />
            {errors.confirmPass && <p className="text-danger">{errors.confirmPass.message}</p>}
          </div>
        )}
        <button className="btn btn-danger w-full text-xl">{isLogin ? "Login" : "Register"}</button>
        <div className="text-base font-semibold mt-2">
        {isLogin ? <Link to="/register">Register?</Link> : <Link to="/login">Login?</Link>}
        </div>
      </form>
     </section>
    </>
  );
};

export default AuthForm;
