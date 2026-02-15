import React, { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const { signIn, googleLogin, resetPassword, setUser, setLoading, user } =
    useContext(AuthContext);

  const emailRef = useRef();

  const location = useLocation();
  // const from = location.state || "/";
  const from = location.state?.from?.pathname || "/"; 
  const navigate = useNavigate();
  console.log(location);

  // if (user) {
  //   navigate("/");
  //   return;
  // }

  if (user && user.emailVerified) {
    navigate("/");
    return;
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    console.log("Sign In button Click", email, password);
    console.log("Sign In button Click", { email, password });

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please enter both email and password!",
      });
      return;
    }

    signIn(email, password)
      .then((result) => {
        setLoading(false);
        // if (result.emailVerified == false)
        //   if (!result.user.emailVerified) {
        //     Swal.fire({
        //       icon: "warning",
        //       title: "Email Not Verified",
        //       text: "Please verify your email before logging in.",
        //     });
        //     return;
        //   }
        //   console.log(result);
        //   setUser(result.user);
        //   Swal.fire({
        //     title: "Sign In Successful!",
        //     icon: "success",
        //     draggable: true,
        //   });
        //   navigate(from);
        // })
        const loggedUser = result.user;

        // if (!loggedUser.emailVerified) {
        //   Swal.fire({
        //     icon: "warning",
        //     title: "Email Not Verified",
        //     text: "Please verify your email before logging in.",
        //   });
        //   return;
        // }

        setUser(loggedUser); 
        Swal.fire({
          title: "Sign In Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          //   footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        setLoading(false);
        console.log(result);
        setUser(result.user);
        navigate(from);
        Swal.fire({
          title: "Google Sign in Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(from);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
        });
      });
  };
  const handleForgetPassword = () => {
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Enter your email first!",
      });
      return;
    }

    resetPassword(email)
      .then((result) => {
        setLoading(false);
        console.log(result);
        Swal.fire({
          title: "Password Reset Email Sent!",
          text: "Check your inbox to reset your password.",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#8D6E63] mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              required
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className="input input-bordered w-full text-[#8D6E63] placeholder-[#8D6E62] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full text-[#8D6E63] placeholder-[#8D6E62] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-[8px] top-[36px] cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>
          <button
            type="button"
            onClick={handleForgetPassword}
            className="hover:underline cursor-pointer"
          >
            Forget Password ?
          </button>
          <button
            type="submit"
            className="btn w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn w-full border border-[#8D6E63] hover:bg-[#8D6E63] hover:text-white"
        >
          <img
            src="https://img.icons8.com/fluency/24/google-logo.png"
            alt="google"
          />
          Login with Google
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#8D6E63] font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;