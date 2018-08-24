import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './contact';

const Home = (props) => {
  console.log(props);
  const contactList = props.contacts.map((contact, index) => {
    return (
      <Contact contact={contact} key={index} updateSelectedContact={props.updateSelectedContact}/>
    )
  })

  return (
    <div>
    <header className="App-header">
      <h1 className="App-title">Recontact</h1>
    </header>
    <p/>

    <Link to='/contacts/new'>Add New Contact</Link>
    <p/>

    <div className="contacts">
      {contactList}
    </div>
    </div>
  )
}

export default Home
