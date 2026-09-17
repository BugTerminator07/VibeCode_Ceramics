import Footer from '@/components/footer/page';
import Navbar from '@/components/navbar/page';
import React from 'react';

const MainLayOut = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayOut;