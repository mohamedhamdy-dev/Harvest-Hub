import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, useAuth } from "../slices/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignInForm({ className }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "admin@harvesthub.com",
    password: "admin123",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const handleCredentialsEntry = (e) => {
    const { name, value } = e.target;

    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password,
      );
      dispatch(
        login({
          email: user.user.email,
          uid: user.user.uid,
          accessToken: user.user.accessToken,
        }),
      );
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h2 className="text-center text-4xl">Sign In</h2>
      <label>
        Email
        <input
          required
          type="text"
          name="email"
          value={userCredentials.email}
          onChange={(e) => handleCredentialsEntry(e)}
          className="block w-full border-b-2 px-3 py-2 outline-none duration-300 hover:border-b-apple-500 focus:border-b-apple-500"
        />
      </label>
      <label>
        Password
        <div className="flex">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={userCredentials.password}
            onChange={(e) => handleCredentialsEntry(e)}
            className="block w-full border-b-2 px-3 py-2 outline-none duration-300 hover:border-b-apple-500 focus:border-b-apple-500"
          />
          <button
            type="button"
            className="rounded-sm bg-apple-500 p-1 text-white duration-300 hover:bg-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-6 w-7" />
            ) : (
              <EyeIcon className="h-6 w-7" />
            )}
          </button>
        </div>
      </label>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <button
        type="submit"
        className="rounded-xl bg-apple-500 py-3 text-sm font-semibold uppercase text-white duration-300 hover:bg-black focus:bg-black active:translate-y-1"
      >
        sign in
      </button>

      <div>
        <Link
          to="/account/forgotPassword"
          className="cursor-pointer capitalize text-gray-900 duration-300 hover:text-apple-500"
        >
          forget your password?
        </Link>
      </div>
    </form>
  );
}

SignInForm.propTypes = { className: propTypes.string };
