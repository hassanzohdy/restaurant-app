import React, { SetStateAction, useState } from 'react'
import './LoginPage.scss'
import LoginForm from 'apps/front-office/account/pages/LoginPage/components/LoginForm';
import HeadForm from 'apps/front-office/account/pages/LoginPage/components/HeadForm';
const LoginPage = () => {
  return (
    <div>
      <HeadForm/>
      <LoginForm/>
    </div>
  )
}
export default LoginPage;