import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../pagesStyleCss/attendentCss.css';


function AttendentDash() {
  const [reserve, setReserve] = useState([]);
  const [payment, setPayment] = useState([]);
  const [combineData, setCombineData] = useState([]);
  const[isAuthorized, setIsAuthorized] = useState([false]);

    const attendantEmail = localStorage.getItem("aEmail");

     const navigate = useNavigate();

    useEffect(() => {
        const validateAttendant = async () => {
            try {
                const res = await axios.get("http://localhost:8083/booking"); 
                const attendants = res.data;

                const isValid = attendants.some(att => att.email === attendantEmail);
                if (isValid) {
                    setIsAuthorized(true);
                } else {
                    //alert("Unauthorized Access. Redirecting to Login...");
                    navigate("");
                }
            } catch (error) {
                console.error("Error validating attendant:", error);
            }
        };

        validateAttendant();
    }, [attendantEmail, navigate]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reservationRes] = await Promise.all([
          axios.get("http://localhost:8083/booking"),
          // axios.get("")
        ]);

        const reservations = reservationRes.data;
        //const payments = paymentRes.data;

        setReserve(reservations);
       // setPayment(payments);

        const today = new Date().toISOString().slice(0, 10);

        const todaysReservations = reservations.filter(r =>
          r?.reservation_date &&
          new Date(r.reservation_date).toISOString().slice(0, 10) === today
        );

        const merged = todaysReservations.map(r => {
          //const pInfo = payments.find(p => p.r_id === r.r_id);
          return {
            v_no: r.v_no,
            v_type: r.v_type,
            r_id: r?.r_id ? "Reserved" : "Normal",
            slot_time: r?.slot_time || "Not fixed",
            checkin_time: r.checkin_time,
            checkout_time: r?.checkout_time || "Pending",
          //  amount: pInfo?.amount || 0
          };
        });

        setCombineData(merged);
      } catch {
        // console.error("Error while loading data: ", err);
      }
    };

    fetchData();
  }, []);

  const handleCheckOut = async (r_id) => {
    const currentTime = new Date().toISOString();
    try {
      await axios.post("http://localhost:8083/booking", {
        r_id,
        checkout_time: currentTime
      });

      alert("Checked out successfully!");

      setCombineData(prev =>
        prev.map(item =>
          item.r_id === r_id ? { ...item, checkout_time: currentTime } : item
        )
      );
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Check-out failed");
    }
  };

  return (
    <div className="attendent-wrapper">
      <h3 className="attendentHead">Daily Dashboard</h3>

      <div className="attendentTable">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Vehicle No</th>
              <th>Vehicle Type</th>
              <th>Parking Type</th>
              <th>Slot Time</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
              <th>Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {combineData.map((item, index) => (
              <tr key={index}>
                <td>{item.v_no}</td>
                <td>{item.v_type}</td>
                <td>{item.r_id}</td>
                <td>{item.slot_time}</td>
                <td>{item.checkin_time}</td>
                <td>
                  {item.checkout_time !== "Pending" ? (
                    item.checkout_time
                  ) : (
                    <button onClick={() => handleCheckOut(item.r_id)}>
                      Check-Out
                    </button>
                  )}
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default AttendentDash;
