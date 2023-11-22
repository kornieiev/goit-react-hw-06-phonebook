import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { nameChange } from '../../redux/nameSlice';
import { numberChange } from '../../redux/numberSlice';

import {
  PhonebookWrap,
  FormButton,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

export default function ContactForm({ addNewContact }) {
  const name = useSelector(state => state.name);
  const number = useSelector(state => state.number);

  const dispatch = useDispatch();

  const handleBtnClick = e => {
    e.preventDefault();
    if (!name && !number) {
      return;
    }
    addNewContact({ id: nanoid(), name, number });
    dispatch(nameChange(''));
    dispatch(numberChange(''));
  };

  const handleInputChange = e => {
    e.preventDefault();
    switch (e.target.name) {
      case 'name':
        dispatch(nameChange(e.target.value));

        break;
      case 'number':
        dispatch(numberChange(e.target.value));

        break;
      default:
        console.log(`Unknown input ${name}`);
    }
  };
  return (
    <div>
      <PhonebookWrap onSubmit={handleBtnClick}>
        <label htmlFor="name">Name</label>
        <FormInput
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <br />
        <FormButton type="submit">Add contact</FormButton>
      </PhonebookWrap>
    </div>
  );
}

ContactForm.propTypes = {
  props: PropTypes.array.isRequired,
};
