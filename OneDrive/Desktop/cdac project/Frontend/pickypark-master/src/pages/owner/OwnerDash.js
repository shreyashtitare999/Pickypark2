import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OwnerDash() {
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalReservation, setTotalReservation] = useState(0);
    const [allAttendant, setAllAttendant] = useState([]);
    const [totalAttendant, setTotalAttendant] = useState(0);
    const [isAuthorized, setIsAuthorized] = useState(false);

    const ownerEmail = localStorage.getItem("pEmail");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOwnerAndRelatedData = async () => {
            try {
                console.log("Owner Email from localStorage:", ownerEmail);

                // Step 1: Fetch owner by email
                const ownerRes = await axios.get(http://localhost:8081/owners/email?Email=${ownerEmail});
                const ownerData = ownerRes.data;
                const pAddress = ownerData.p_address;

                console.log("Owner Address:", pAddress);

                if (pAddress) {
                    setIsAuthorized(true);

                    // Step 2: Fetch attendants by address
                    const attendentRes = await axios.get(http://localhost:8082/attendent/address/${pAddress});
                    const attendantsByAddress = attendentRes.data;

                    console.log("Attendants from Owner Address:", attendantsByAddress);
                    setAllAttendant(attendantsByAddress);
                    setTotalAttendant(attendantsByAddress.length);

                    // ✅ Step 3: Fetch reservations by p_address
                    const bookingRes = await axios.get(http://localhost:8083/attendent/paddress/${pAddress});
                    const bookingList = bookingRes.data;

                    console.log("Bookings for this address:", bookingList);
                    setTotalReservation(bookingList.length);

                    // You can also store this list in a state if needed later
                } else {
                    console.warn("Owner address not found.");
                    navigate("/OwnerDash");
                }

            } catch (error) {
                console.error("Error in dashboard owner data fetch:", error);
            }
        };

        fetchOwnerAndRelatedData();
    }, [ownerEmail, navigate]);

    return (
        <div className="right-content">
            <h1 className="boxHead">Dashboard</h1>

            <div className="dash-container">
                <div className="dash-box">
                    <h3>Total Payment</h3>
                    <p>₹ {totalPayment}</p>
                </div>
                <div className="dash-box">
                    <h3>Total Reservations</h3>
                    <p>{totalReservation}</p>
                </div>
                <div className="dash-box">
                    <h3>Total Attendants</h3>
                    <p>{totalAttendant}</p>
                </div>
            </div>

            <div className="attendant-table">
                <h2>Attendant List</h2>
                {allAttendant.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allAttendant.map((attendant, index) => (
                                <tr key={index}>
                                    <td>{attendant.a_id}</td>
                                    <td>{attendant.a_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No attendants found for this address.</p>
                )}
            </div>
        </div>
    );
}

export default OwnerDash;