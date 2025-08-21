import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function RegistrationAttendent() {
  const [attendent, setAttendent] = useState({
    aName: "",
    aPhoneNumber: "",
    aEmail: "",
    aPassword: "",
    pAddress: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateMobile(attendent.aPhoneNumber)) {
      setError("Mobile number must be 10 digits.");
      return;
    }

    if (!validateEmail(attendent.aEmail)) {
      setError("Invalid email format.");
      return;
    }

    if (!validatePassword(attendent.aPassword)) {
      setError("Password must contain uppercase, lowercase, number & symbol.");
      return;
    }

    setError("");

    try {
      const ownerRes = await axios.get(
        `http://localhost:8081/owners/address/${attendent.pAddress}`
      );
      const pId = ownerRes.data.pId;

      const payload = {
        ...attendent,
        pId: pId
      };

      await axios.post("http://localhost:8082/attendent", payload);

      alert("Attendant registered successfully!");
      navigate("/loginattendent");
    } catch (err) {
      console.error("Registration Error:", err);
      setError(
        err.response?.data?.message ||
        "Registration failed. Check parking address or server."
      );
    }
  };

  return (
    <>
      <Header />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          paddingTop: "80px"
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
            color: "#fff"
          }}
        >
          <h3 className="text-center mb-4">Attendant Registration Form</h3>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", key: "aName", type: "text", placeholder: "Enter your name" },
              { label: "Mobile No", key: "aPhoneNumber", type: "tel", placeholder: "10-digit mobile number" },
              { label: "Email", key: "aEmail", type: "email", placeholder: "Enter your email" },
              { label: "Password", key: "aPassword", type: "password", placeholder: "Strong password" },
              { label: "Parking Address", key: "pAddress", type: "text", placeholder: "Enter parking address" }
            ].map((field) => (
              <div className="mb-3" key={field.key}>
                <label className="form-label">{field.label}</label>
                <input
                  type={field.type}
                  className="form-control"
                  placeholder={field.placeholder}
                  value={attendent[field.key]}
                  onChange={(e) =>
                    setAttendent({ ...attendent, [field.key]: e.target.value })
                  }
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#ffc107",
                color: "#000",
                border: "none",
                fontWeight: "bold"
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#28a745")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#ffc107")
              }
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

export default RegistrationAttendent;
