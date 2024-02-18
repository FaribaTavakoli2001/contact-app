import React, { useState } from 'react'
import ContactList from './ContactList'
import inputs from '../constans/inputs'

import { v4 } from 'uuid'
import styles from './Contact.module.css'

function Contact() {
    const [alert , setAlert] = useState('')
    const [contacts , setContacts] = useState([])
    const [contact , setContact] = useState({
        id:'',
        name:'',
        lastName:'',
        email:'',
        number:''
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact)=> ({...contact , [name]: value}))
    }

            <input type='text' placeholder='name'/>
    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.number){
            setAlert('Please Enter Valid Data !')
            return;
        }
        setAlert('')
        const newContact = { ...contact , id: v4() } 
        setContacts((contacts) => ([...contacts , newContact ]))
        setContact({
            name:'',
            lastName:'',
            email:'',
            number:''
        })
  // console.log(contacts)
    }
    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)
    }
  return (
    <div className={styles.container}>
        <div className={styles.form}>
            {
                inputs.map((input , index) => 
                <input 
                key={index}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                value={contact[input.name]}
                onChange={changeHandler}
                />
                )
            }
            <button onClick={addHandler}>Add Contact</button>
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <ContactList key={contact.id} contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contact