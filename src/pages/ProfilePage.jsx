import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/auth/selectors'


const ProfilePage = () => {
const userInfo = useSelector(selectUser)
console.log('userInfo', userInfo)



  return (
    <>
    <div>ProfilePage</div>
    <p>{userInfo.name}</p>
    <p>{userInfo.email}</p>
    <img src={`${userInfo.avatar}`} alt='777'/>
    </>

  )
}

export default ProfilePage