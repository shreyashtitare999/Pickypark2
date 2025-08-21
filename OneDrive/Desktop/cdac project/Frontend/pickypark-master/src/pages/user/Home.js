import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../pagesStyleCss/userCss.css';

const Home = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/reserve'); 
    };

    return (
        <>
            <Header />
            <div className="home">
                <div className="home-text">
                    <h1>Welcome to PickyPark</h1>
                    <p>
                        Find and reserve parking slots with ease. Save time, avoid hassle.
                    </p>
                    <button className="btn1" onClick={handleSearchClick}>
                        Reserve
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
