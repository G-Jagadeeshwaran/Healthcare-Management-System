import React from "react";
import "../Patient login/plogin.css";
import { useForm } from "react-hook-form";

const Plogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {};

  return (
    <div className="login" id="plogin">
      <form onSubmit={handleSubmit(submit)} className="plogin-content">
        <h1>PATIENT LOGIN</h1>

        <div className="input-div">
          <input
            type="text"
            {...register("username", {
                required: {
                    value: true,
                    message: "Username is required"    
                },
                minLength: {
                    value: 4,
                    message: "Password should have atleast 4 characters"
                }
            })}
            placeholder="Enter username"
            name="username"
          />
          <small>
            {errors.username?.message}
          </small>
          <br />
          <input
            type="password"
            {...register("password", {
                required: {
                    value: true,
                    message: "Password is required"
                }
            })}
            placeholder="Enter password"
            name="password"
          />
          <small>
            {errors.password?.message}
          </small>
        </div>

        <div className="summit-btn">
          <input type="submit" value="Login" />
        </div>

        <div className="signup-link">
          <span>
            Don't have an account register ? <a href="/Psignup">Signup</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Plogin;
