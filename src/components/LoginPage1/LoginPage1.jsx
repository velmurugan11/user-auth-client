import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import "./LoginPage.css";

const LoginPage1 = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = signupData;

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!strongPasswordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/auth/register", signupData);
      alert("User registered!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
<<<<<<< HEAD:src/components/LoginPage1/LoginPage1.jsx
        "http://localhost:8080/api/auth/login",
        
=======
        "http://localhost:8081/api/auth/login",
>>>>>>> f05e4a4a06b9a05ca24d19238fef4baec71d1d27:src/LoginPage1.jsx
        {
          email: loginData.email,
          password: loginData.password,
        }
      );
      console.log("Logged-in user:", response.data.user);
      navigate("/otp");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="container">
      {/* Login Form */}
      <form onSubmit={handleLogin} style={{ float: "left", width: "50%" }}>
        <h1 style={{ marginLeft: "160px", marginTop: "20px" }}>Log in</h1>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const token = credentialResponse.credential;
              const decoded = jwtDecode(token);
              console.log(decoded);

<<<<<<< HEAD:src/components/LoginPage1/LoginPage1.jsx
              // const response = await axios.post(
              //   "http://localhost:8080/api/auth/google",
              //   {
              //     token: token,
              //   }
              // );

              // console.log("Server response:", response.data);
              navigate("/home");
            } catch (err) {
              console.error("Google login error:", err);
              alert("Google login failed");
            }
          }}
          onError={() => {
=======
        // const response = await axios.post("http://localhost:8080/api/auth/google", {
            // token: token,
        // });

        // console.log("Server response:", response.data);
        navigate("/home");
        } catch (err) {
        console.error("Google login error:", err);
        alert("Google login failed");
        }
        }}
        onError={() => {
>>>>>>> f05e4a4a06b9a05ca24d19238fef4baec71d1d27:src/LoginPage1.jsx
            console.log("Google login failed");
            alert("Google login failed");
          }}
        />
        <h2>OR</h2>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
<<<<<<< HEAD:src/components/LoginPage1/LoginPage1.jsx
          onChange={handleLoginChange}
        />

=======
          onChange={handleLoginChange}/>        
>>>>>>> f05e4a4a06b9a05ca24d19238fef4baec71d1d27:src/LoginPage1.jsx
        <button type="submit">LOG IN</button>
      </form>

      {/* Signup Form */}
      <form onSubmit={handleRegister} style={{ float: "right", width: "50%" }}>
        <h1 style={{ marginLeft: "140px", marginTop: "20px" }}>Sign up</h1>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          value={signupData.name}
          onChange={handleSignupChange}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={handleSignupChange}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleSignupChange}
        />
        <input
          className="input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={signupData.confirmPassword}
          onChange={handleSignupChange}
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default LoginPage1;
