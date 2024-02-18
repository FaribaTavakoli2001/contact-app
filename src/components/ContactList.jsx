import React from 'react'
import ContactItems from './ContactItems'

import styles from './ContactList.module.css'

function ContactList({contacts , deleteHandler}) {
    // console.log(props)
  return (
    <div className={styles.container}>
      <div><h3>ContactList</h3></div>
    {contacts.length ? (<ul className={styles.contacts}>
      {contacts.map((contact) => <ContactItems 
        key={contact.id} 
        data={contact}
        deleteHandler={deleteHandler}
        />)}
    </ul>) : <p className={styles.message}>No Contacts Yet!</p>}
    
    </div>
  )
}

export default ContactList