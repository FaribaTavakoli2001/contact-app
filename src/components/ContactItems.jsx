import React from 'react'
import styles from './ContactItem.module.css'

function ContactItems({ data :{id ,name , lastName , email , number} , deleteHandler , }) {
  return (
    <div>
        <li className={styles.items}>
        <p>
        {name} {lastName}</p> 
         <p><span>📬</span>
         {email} </p>
        <p><span>☎️</span>
        {number} </p>
        <button onClick={() => deleteHandler(id)}>🗑️</button>
         </li>
    </div>
  )
}

export default ContactItems;