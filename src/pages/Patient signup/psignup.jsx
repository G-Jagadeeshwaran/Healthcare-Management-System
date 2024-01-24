import React from "react";
import "../Patient signup/psignup.css";
import { useForm } from "react-hook-form";

const Psignup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues
  } = useForm('onChange');

  const submit = (data) => {};

  return (
    <div className="signup" id="psignup">
      <form onSubmit={handleSubmit(submit)} className="psignup-content">
        <h1>PATIENT SIGNUP</h1>

        <div className="input-div">
          <input
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
              minLength: {
                value: 4,
                message: "username should have atleast 4 characters",
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
                message: "password is required",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "password should have atleast one number,one character,one symbol",
              },
            })}
            name="password"
            placeholder="Enter password"
          />
          <small>{errors.password?.message}</small>
          <br />
          <input
            type="Password"
            {...register("reEnterPassword", {
              required: {
                value: true,
                message: "re-enter password required",
              },
              validate: (value) => {
                console.log(value);
                console.log(getValues("password"));
                // alert(value)
                return value === getValues("password")
                  ? true
                  : "password and retype password not match";
              },
            })}
            name="reEnterPassword"
            placeholder="Re-Enter Password"
          />
          <small>{errors.reEnterPassword?.message}</small>
        </div>

        <div className="summit-btn">
          <input type="submit" value="signup" />
        </div>

        <div className="login-link">
          <span>
            Back to login page <a href="/Plogin">Login</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Psignup;
