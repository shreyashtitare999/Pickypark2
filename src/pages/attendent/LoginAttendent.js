import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LoginAttendent() {
  const [attendant, setAttendant] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/attendent", attendant);
      if (res.status === 200) {
        alert("Login successful");

        //email will store in localStorage
        localStorage.setItem("aEmail",attendant.email);
        
        navigate("/attendentdash");
      }
    } catch (error) {
      alert("Login failed: Invalid credentials");
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
            backgroundColor: "#ffffff10", // translucent white
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(38, 40, 121, 0.3)",
            color: "#fff",
          }}
        >
          <h3 className="text-center mb-4">Attendant Login</h3>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={attendant.email}
                onChange={(e) =>
                  setAttendant({ ...attendant, email: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={attendant.password}
                onChange={(e) =>
                  setAttendant({ ...attendant, password: e.target.value })
                }
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
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#28a745")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#ffc107")
              }
            >
              Login
            </button>

            <div className="text-center mt-3">
              <Link to="/registerattendent" style={{ color: "#ddd" }}>
                Create New Account
              </Link>
            </div>

            
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LoginAttendent;
