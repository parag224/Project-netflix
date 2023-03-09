import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import "./ProfileScreen.css"

function ProfileScreen() {
    const user = useSelector(selectUser)
  return (
    <div className="profileScreen">
      <Nav/>
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img src="https://dynamic.brandcrowd.com/preview/logodraft/c8f05b32-b091-4f93-8033-7d6e58850629/image/large.png" 
            alt=""
             />
             <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                    <h3>Plans</h3>

                    <button
                     onClick={() => auth.signOut} 
                    className="profileScreen_signOut">Sign Out</button>
                </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen