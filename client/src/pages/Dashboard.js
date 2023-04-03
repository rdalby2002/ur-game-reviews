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
            <di>
               
                
                    <Routes>
                        <Route
                            exact path="/"
                            element={<TopRated />}
                        />
                    </Routes>
            
               
            </di>
        </>
    );
}

export default Dashboard;