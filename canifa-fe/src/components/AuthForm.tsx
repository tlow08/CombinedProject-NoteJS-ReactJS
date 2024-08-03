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
        console.log("Error Response:", error.response)
        alert(error.response?.data?.message || "Error")
    }
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
          <label htmlFor="password" className="form-label">
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
            <label htmlFor="confirmPass" className="form-label">
              Confirm Password
            </label>
            <input type="password" id="" className="form-control" {...register("confirmPass",{required: true})} />
            {errors.confirmPass && <p className="text-danger">{errors.confirmPass.message}</p>}
          </div>
        )}
        <button className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
        {isLogin ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>}
      </form>
    </>
  );
};

export default AuthForm;
