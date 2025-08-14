import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function RegistrationOwner() {
  const [owner, setOwner] = useState({
    pName: "",
    pEmail: "",
    pPassword: "",
    pPhoneNumber: "",
    pAddress: "",
    totalSlot2wheeler: "",
    totalSlot4wheeler: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateMobile(owner.pPhoneNumber)) {
      setError("Mobile number must contain exactly 10 digits.");
      return;
    }

    if (!validateEmail(owner.pEmail)) {
      setError("Invalid email format.");
      return;
    }

    if (!validatePassword(owner.pPassword)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError("");

    try {
      await axios.post("http://localhost:8081/owners", {
        ...owner,
        totalSlot2wheeler: parseInt(owner.totalSlot2wheeler),
        totalSlot4wheeler: parseInt(owner.totalSlot4wheeler),
      });

      alert("Registration successful!");
      navigate("/loginowner");
    } catch (error) {
      console.error("Error registering:", error.response?.data || error.message);
      alert("Registration failed.");
    }
  };

  return (
    <>
      <Header />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          paddingTop: "80px", 
        }}
      >
        <div
          className="p-4 shadow"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "16px",
            backgroundColor: "rgba(35, 26, 96, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
          }}
        >
          <h3 className="text-center mb-4">Owner Registration Form</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                value={owner.pName}
                onChange={(e) => setOwner({ ...owner, pName: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={owner.pEmail}
                onChange={(e) => setOwner({ ...owner, pEmail: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={owner.pPassword}
                onChange={(e) => setOwner({ ...owner, pPassword: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                value={owner.pPhoneNumber}
                onChange={(e) => setOwner({ ...owner, pPhoneNumber: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Parking Address</label>
              <input
                type="text"
                className="form-control"
                value={owner.pAddress}
                onChange={(e) => setOwner({ ...owner, pAddress: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">2-Wheeler Slots</label>
              <input
                type="number"
                className="form-control"
                value={owner.totalSlot2wheeler}
                onChange={(e) => setOwner({ ...owner, totalSlot2wheeler: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">4-Wheeler Slots</label>
              <input
                type="number"
                className="form-control"
                value={owner.totalSlot4wheeler}
                onChange={(e) => setOwner({ ...owner, totalSlot4wheeler: e.target.value })}
                required
              />
            </div>

            <button
  type="submit"
  className="btn w-100"
  style={{
    backgroundColor: "#ffc107", // yellow
    border: "none",
    color: "#000",
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#28a745")} // green
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffc107")} // back to yellow
>
  Register
</button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationOwner;
