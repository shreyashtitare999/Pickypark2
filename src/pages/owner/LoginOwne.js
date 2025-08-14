import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LoginOwner() {
  const [owner, setOwner] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/owners", owner);
      if (res.status === 200) {
        localStorage.setItem("owner", JSON.stringify(res.data));
        alert("Login successfully...");

        //email will store in localStorage      
        localStorage.setItem("pEmail",owner.email);
        
        navigate("/ownerdash");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Login Failed... Invalid login details");
      }
    }
  };

  return (
    <>
      <Header />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="p-4 shadow"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "16px",
            backgroundcolor: "#23224280", // transparent white
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(38, 40, 121, 0.3)",
            color: "#fff",
          }}
        >
          <h3 className="text-center mb-4">Owner Login </h3>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={owner.email}
                onChange={(e) => setOwner({ ...owner, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={owner.password}
                onChange={(e) => setOwner({ ...owner, password: e.target.value })}
                required
              />
            </div>

            <button
  type="submit"
  className="btn w-100"
  style={{
    backgroundColor: "#ffc107", 
    border: "none",
    color: "#000",
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#28a745")} 
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffc107")} 
>
  Login
</button>

            <div className="text-center">
              <a href="/registerowner" style={{ color: "#ddd" }}>
                Create New Account
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LoginOwner;
