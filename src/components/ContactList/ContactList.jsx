import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactAdd, contactDelete } from '../../redux/contactsSlice';
import {
  ListItem,
  DeleteButton,
  EditButton,
  SaveButton,
  CancelButton,
  ListItemChanged,
  InputChange,
  DivChangeWrap,
} from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  ///
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');
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
        setEditNumber(item.number);
        setEditName(item.name);
        setA(e.currentTarget.value);
      }
      return false;
    });
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setEditName(e.target.value);

        break;
      case 'number':
        setEditNumber(e.target.value);

        break;
      default:
        console.log(`Unknown input ${editName}`);
    }
  };

  const handleBtnSave = e => {
    const newContact = { id: a, name: editName, number: editNumber };
    contacts.map(item => {
      if (e.target.value === item.id) {
        dispatch(contactDelete(item.id));
        dispatch(contactAdd(newContact));
      }
      return false;
    });
    setA('');
  };

  const handleBtnCancel = e => {
    setA('');
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
            <ListItemChanged>
              <DivChangeWrap>
                <div>
                  <InputChange
                    type="text"
                    value={editName}
                    name="name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    value={editNumber}
                    name="number"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <SaveButton
                    value={item.id}
                    type="button"
                    onClick={handleBtnSave}
                  >
                    Save
                  </SaveButton>
                  <CancelButton
                    value={item.id}
                    type="button"
                    onClick={handleBtnCancel}
                  >
                    Cancel
                  </CancelButton>
                </div>
              </DivChangeWrap>
            </ListItemChanged>
          )}
        </ListItem>
      ))}
    </>
  );
}
