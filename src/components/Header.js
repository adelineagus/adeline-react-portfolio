import React from 'react';
import '../assets/css/style3.css'

function Header({currentPage,handlePageChange}) {
    return (
        <>
            <header>
                <div class= "section-flex">
                    <h1>Adeline Aguspranoto</h1>
                </div>
                <nav>
                    <a href="#About" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                </nav>
            </header>
        </>
    )
}

export default Header;