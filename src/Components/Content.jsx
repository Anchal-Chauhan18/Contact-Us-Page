import React from 'react'
import service from '../assets/service.svg'
import './Content.css';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Button from "../Components/Button"
const Content = () => {
  return (
    <div>
      <h1>CONTACT US</h1>
      <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
      <section className='sec'>
       <form className='form' action="">
        <div className='btns'>
        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />}></Button>
        <Button text="VIA CALL" icon={<IoMdCall fontSize="24px"/>}></Button>
        </div>
        <Button emailbtn={true} text="VIA EMAIL FORM" icon={<MdOutlineMessage  fontSize="24px"/>}>
        </Button>
        <div className='data'>
        <div className='form_control'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
        </div>
        <div className='form_control'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
        </div>
        <div className='form_control'>
            <label htmlFor="Text">Text</label>
            <textarea type="text" name='text' />
        </div>
</div>         
<div className='submbtn'><Button text="SUBMIT"/> </div>      
 </form>
       <div><img className='secImg' src={service} alt="" /></div>
      </section>
    </div>
  )
}
export default Content