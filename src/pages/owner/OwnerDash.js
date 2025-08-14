import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../pagesStyleCss/ownerCss.css';

//import './Style.css';

 function OwnerDash() {

    const [totalPayment, setTotalPayment] = useState(0);
    const [totalReservation, setTotalReservation] = useState(0);
    const [allAttendant, setAllAttendant] = useState([]);
    const[isAuthorized, setIsAuthorized] = useState([false]);

    const ownerEmail = localStorage.getItem("pEmail");

     const navigate = useNavigate();

    useEffect(() => {
        
        const validateOwner = async () => {
            try {
                const res = await axios.get("http://localhost:8081/owners"); //owner api url
                const owner = res.data;
                console.log("Owner Email from localStorage:", ownerEmail);
                const isValid = owner.some(owner =>owner.email === ownerEmail);
                if (isValid) {
                    setIsAuthorized(true);
                } else {
                    // alert("Unauthorized Access. Redirecting to Login...");
                    navigate("/OwnerDash");
                }
            } catch (error) {
                console.error("Error validating Owner:", error);
            }
        };

        validateOwner();
    }, [ownerEmail, navigate]);

    useEffect(() => {

        const fetchData = async () => {
            

            try{
                // tpres for totalpayment ,tr for totalreservation , aares for allattendant
                const[trres,aares] = await Promise.all([
                  axios.get("http://localhost:8083/booking"), 
                  axios.get("http://localhost:8082/attendent"), 
                  //axios.get("")  
                ])

                const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

                //to fetch reservation data  by day wise i use filter
                const todaysReservations = trres.data.filter(r =>
                    r.reservation_date &&
                    new Date(r.reservation_date).toISOString().slice(0, 10) === today
                );

                // const totalAmount = Array.isArray(tpres.data)
                // ? tpres.data.reduce((sum, payment) => sum + (payment.amount || 0), 0)
                // : (tpres.data.total || 0);

                // setTotalPayment(totalAmount);
                setTotalReservation(trres.data.length || 0);
                setAllAttendant(aares.data);

            }catch (err) {
                console.error("Error while loading data : " ,err);
            }
        }
        fetchData();
    },[isAuthorized]);

    return (
        
            <div className ="right-content">
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
                    <p>{allAttendant.length}</p>
                    </div>
                    </div>

                    <div className="attendant-table">
                    <h2>Attendant List</h2>
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
                    <td>{attendant.aId}</td>
                    <td>{attendant.aName}</td>

                    </tr>
                    ))}
                    </tbody>
                    </table>
                </div>
            </div>
        
    ) ; 
}
export default OwnerDash;