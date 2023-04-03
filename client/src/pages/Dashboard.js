import React from 'react';
import Navbar from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';

import TopRated from '../pages/TopRated';

function Dashboard() {
    return (
        <>
            <main className="">
                <div> <Navbar /> </div>
            </main>
            <div>
               
                
                    <Routes>
                        <Route
                            exact path="/"
                            element={<TopRated />}
                        />
                    </Routes>
            
               
            </div>
        </>
    );
}

export default Dashboard;