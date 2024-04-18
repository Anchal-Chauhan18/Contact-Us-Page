import React from 'react'
import styles from './Button.module.css'
const Button = ({emailbtn,icon,text}) => {
  return (    
        <button className={emailbtn?styles.emailbtn:styles.button}>
       {icon} {text}</button>        
  )
}

export default Button
