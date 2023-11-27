import React from 'react'
import { Navbar } from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer className="w-full h-[87px] bg-[#3D3D3D]" />
        </div>
    )
}

export { Layout };