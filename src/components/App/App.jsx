import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { MainWrap } from './App.styled';

export default function App() {
  return (
    <MainWrap>
      <h1>Phonebook-HW6</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </MainWrap>
  );
}
