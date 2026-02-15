import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const {
    createUser,
    updateProfileFunction,
    // emailVerification,
    setLoading,
    // logOut,
    setUser,
    googleLogin,
  } = useContext(AuthContext);

  const location = useLocation();
  // const from = location.state || "/";
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(location);

  //  password validation function
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    } else if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    return "";
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const displayName = event.target.name?.value;
    const photoURL = event.target.photo?.value;
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    console.log("Sign Up  Function Entered", {
      displayName,
      photoURL,
      email,
      password,
    });
    // password validation
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    // createUser(email, password)
    //   .then((result) => {
    //     updateProfileFunction(displayName, photoURL)
    //       .then(() => {
    //         console.log(result);
    //         emailVerification()
    //           .then(() => {
    //             setLoading(false);
    //             // logout user
    //             logOut().then(() => {
    //               Swal.fire({
    //                 title:
    //                   "Sign Up Successful!\nCheck your email to verify your account.",
    //                 icon: "success",
    //                 draggable: true,
    //               });
    //               setUser(null);
    //               navigate("/signin");
    //             });
    //             // toast.success("Sign Up Successful");
    //           })
    //           .catch((error) => {
    //             Swal.fire({
    //               icon: "error",
    //               title: "Email Verification Error",
    //               text: error.message,
    //             });
    //           });
    //       })
    //       .catch((error) => {
    //         Swal.fire({
    //           icon: "error",
    //           title: "Profile Update Error",
    //           text: error.message,
    //         });
    //       });
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Sign Up Failed",
    //       text: error.message,
    //     });
    //     // .catch((error) => {
    //     //   console.log("Firebase Error:", error);
    //     //   console.log("Error Code:", error.code);
    //   });
    createUser(email, password)
      .then((result) => {
        // Update user profile
        updateProfileFunction(displayName, photoURL)
          .then(() => {
            setUser({
              ...result.user,
              displayName,
              photoURL,
            });
            Swal.fire({
              title: "Sign Up Successful!",
              text: "Welcome to WarmPaws",
              icon: "success",
              confirmButtonColor: "#8D6E63",
            });
            navigate(from);
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Profile Update Error",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: error.message,
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
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#8D6E63] mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full text-[#8D6E63] placeholder-[#8D6E62] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full text-[#8D6E63] placeholder-[#8D6E62] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Photo</label>
            <input
              required
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full text-[#8D6E63] placeholder-[#8D6E62] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
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
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button className="btn w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white">
            Register
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
          Signup with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#8D6E63] font-semibold hover:underline"
          >
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;