import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Layout(props) {
    return (<>
    <Header />
        {props.children}
    <Footer />
    </>);
}

export default Layout;