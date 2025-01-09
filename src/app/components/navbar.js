import React from 'react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link href="/" className="navlink">
                Home
            </Link>
            <Link href="/pages/play" className="navlink">
                Play
            </Link>
            <Link href="/pages/rules" className="navlink">
                Rules
            </Link>
            <Link href="/pages/profile" className="navlink">
                Profile
            </Link>
            
        </nav>
    );
}
