import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import ManagerDashboard from './Component/ManagerDashboard';
// import EmolyeesLogin from './Component/EmolyeesLogin';
import RatingForm from './Component/RatingForm';
import Timesheet from './Component/Timesheet';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in (e.g., by checking the presence of a token in local storage)
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, [location.pathname]); // Update login status when route changes

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/timesheet" element={<Timesheet />} />
                <Route path="/ratingform" element={<RatingForm />} />
                <Route path="/signup" element={<Signup />} />
                {loggedIn ? (
                    <Route path="/" element={<Timesheet />} />
                ) : null}
            </Routes>
        </div>
    );
}

export default App;
