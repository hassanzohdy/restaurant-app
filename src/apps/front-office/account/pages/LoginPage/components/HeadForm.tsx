import React from 'react'

const HeadForm = () => {
  return (
    <div className=" text-center justify-center flex items-center py-[32px] w-[100%] h-[200px] bg-[url('shared/assets/images/breadcrumb1.jpg')]">
        <div className='content'>
        <h1 className='text-[52px] font-bold text-[#1e1d23] mb-[10px]'>My Account</h1>
        <p>Home {'>'} account</p>
        </div>
    </div>
  )
}

export default HeadForm
