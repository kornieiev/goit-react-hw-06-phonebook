import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactDelete } from '../../redux/contactsSlice';
import * as contactsSelectors from '../../redux/selectors';
import { ListItem, DeleteButton, EditButton } from './ContactList.styled';
import EditForm from 'EditForm/EditForm';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const filter = useSelector(contactsSelectors.selectFilter);

  const dispatch = useDispatch();

  ///
  const [a, setA] = useState('');

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

  const editContact = e => {
    contactsFilter().map(item => {
      if (item.id === e.currentTarget.value) {
        setA(e.currentTarget.value);
      }
      return false;
    });
  };

  return (
    <>
      {contactsFilter().map(item => (
        <ListItem key={item.id}>
          {a !== item.id ? (
            <>
              <div>
                {item.name}: {item.number}
              </div>
              <div>
                <EditButton type="button" value={item.id} onClick={editContact}>
                  Edit
                </EditButton>
                <DeleteButton
                  value={item.id}
                  onClick={() => deleteContact(item.id)}
                >
                  Delete
                </DeleteButton>
              </div>
            </>
          ) : (
            <EditForm item={item} setA={setA} />
          )}
        </ListItem>
      ))}
    </>
  );
}
