import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

import NewReleases from './NewReleases';
import TopRated from './TopRated'




function App() {
  return (
    <main className="">
      <div> <Header /> </div>
      <div> <Navbar /> </div>
      <div> <Section /> </div>
      <div> <Footer /> </div>
    </main>
  );
}

export default App;

