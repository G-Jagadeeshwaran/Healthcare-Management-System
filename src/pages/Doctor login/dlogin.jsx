import React from "react";
import "../Doctor login/dlogin.css";
import { useForm } from "react-hook-form";

const Dlogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {};

  return (
    <div className="dlogin" id="doclogin">
      <form onSubmit={handleSubmit(submit)} className="dlogin-content">
        <h1>DOCTOR LOGIN</h1>

        <div className="input-div">
          <input
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 4,
                message: "Username should have atleast 4 characters",
              },
            })}
            name="username"
            placeholder="Enter username"
          />
          <small>{errors.username?.message}</small>
          <br />
          <input
            type="password"
            {...register("password", {
                required: {
                    value: true,
                    message: "Password is required"
                },
            })}
            name="password"
            placeholder="Enter password"
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
            Don't have an account register ? <a href="/Dsignup">Signup</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Dlogin;
