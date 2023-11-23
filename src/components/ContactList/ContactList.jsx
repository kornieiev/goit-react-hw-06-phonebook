import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactDelete } from '../../redux/contactsSlice';
import { ListItem, DeleteButton } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const contactsFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name, number }) => {
      return (
        name.trim().toLowerCase().includes(normalizeFilter) ||
        number.trim().toLowerCase().includes(normalizeFilter)
      );
    });
  };

  const deleteContact = id => {
    dispatch(contactDelete(id));
  };

  return (
    <div>
      {contactsFilter().map(item => (
        <ListItem key={item.id}>
          {item.name}: {item.number}
          <DeleteButton value={item.id} onClick={() => deleteContact(item.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </div>
  );
}
