import React from 'react'
import './Footer.css'
import {adress, city, email} from '../../assets/CompanyInfo.json';
export const Footer = () => {

   
  return (
    <div className="container-footer">
        <ul>
           
            <li>{adress}</li>
            <li>{city}</li>
            <li>{email}</li>
        </ul>
        
    </div>
  )
}
