import React from 'react'
import './User.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
function User() {
  return (
    <div className='user'>
        <img src="./images/avatar2.jpg" alt="avatar" className='user__avatar'/>
        <h1 className="user__name">Alaeddin ben hammed</h1>
        <p className="user__profession">Développeur web</p>
        <div className="user__infos">
            <p className="user__info">
                <HomeIcon/> 22 rue de la liberté 5555 Sfax
            </p>
            <p className="user__info"> 
                <PhoneAndroidIcon/>
                <a href="tel:+21621507622">21 50 76 22</a>
            </p>
            <p className="user__info">
               <EmailIcon/>
               <a href="mailto:alaeddinbenhammed@yahoo.fr">alaeddinbenhammed@yahoo.fr</a>
            </p>
            <p className="user__info">
               <EventIcon/>
               Date de naissance: 22 septembre 1987
            </p>
            <p className="user__info">
               <LocationOnIcon/>
               Lieu de naissance: Djerba
            </p>
        </div>
    </div>
  )
}

export default User
