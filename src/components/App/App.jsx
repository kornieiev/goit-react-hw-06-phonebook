import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { MainWrap } from './App.styled';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <MainWrap>
      <h1>Phonebook-HW6</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <hr />
          <Filter />
          <hr />
          <ContactList />
        </div>
      ) : (
        <p>You haven't any contact</p>
      )}
    </MainWrap>
  );
}
