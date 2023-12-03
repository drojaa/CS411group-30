import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import bookifyIcon from '../../images/bookify-icon.png';
import Nav from '../nav/Nav';
import Form from '../form-page/Form'; // Import the Form component


function Header() { 
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <div className='header-div'>
      <div className='header-left'>
        <img className='header-bookify-icon' src={bookifyIcon}/>
        <p className='header-app-name'>Bookify</p>
      </div>
      <Nav />
      <div className='header-right' >
        <button onClick={openFormModal}>Write a review</button>
        {isFormModalOpen && (
          <div className="form-modal">
            <div className="form-modal-content">
              {/* Close button for the form modal */}
              <span className="close" onClick={closeFormModal}>&times;</span>

              {/* Render the Form component */}
              <Form />
            </div>
          </div>
        )}

        <NavLink className='log-out-link' to='/'>Log out</NavLink>
      </div>
    </div>
  )
}
export default Header