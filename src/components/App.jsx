import { nanoid } from 'nanoid';
import { Component } from 'react';
import InputForm from './InputForm/InputForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContact = data => {
    if (this.state.contacts.some(item => item.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prev => {
      return { contacts: [...prev.contacts, newContact] };
    });
  };

  handleDelete = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(contact => contact.id !== id) };
    });
  };

  handleFilter = filterString => {
    this.setState({ filter: filterString.toLowerCase() });
  };

  filtredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactsList
          contacts={this.filtredContacts()}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
