import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { contactAdd } from '../../redux/contactsSlice';
import { filterChange } from '../../redux/filterSlice';
import { MainWrap } from './App.styled';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const addNewContact = newContact => {
    console.log('newContact:', newContact);
    if (
      contacts.find(contact => {
        console.log('App-contact:', contact);
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }
    dispatch(contactAdd(newContact));
  };

  const handleFilterChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <MainWrap>
      <h1>Phonebook-HW6</h1>
      <ContactForm addNewContact={addNewContact} props={contacts} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} value={filter} />
      <ContactList />
    </MainWrap>
  );
}
