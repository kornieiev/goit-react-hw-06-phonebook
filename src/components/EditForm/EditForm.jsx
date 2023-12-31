import React, { useState } from 'react';
import { contactUpdate } from '../../redux/contactsSlice';
import * as contactsSelectors from '../../redux/selectors';
import {
  SaveButton,
  CancelButton,
  ListItemChanged,
  InputChange,
  DivChangeWrap,
} from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function EditForm(props) {
  const contacts = useSelector(contactsSelectors.selectContacts);

  const [editName, setEditName] = useState(props.item.name);
  const [editNumber, setEditNumber] = useState(props.item.number);

  const dispatch = useDispatch();

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

  const handleBtnSave = () => {
    const newContact = {
      id: props.item.id,
      name: editName,
      number: editNumber,
    };
    if (
      contacts.find(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      alert(newContact.name + ' is already in contacts.');
      return;
    } else {
      dispatch(contactUpdate(newContact));
      props.setEdit('');
    }
  };

  const handleBtnCancel = e => {
    props.setEdit('');
  };

  return (
    <ListItemChanged>
      <DivChangeWrap>
        <form>
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
        </form>
        <div>
          <SaveButton
            value={props.item.id}
            type="button"
            onClick={handleBtnSave}
          >
            Save
          </SaveButton>
          <CancelButton
            value={props.item.id}
            type="button"
            onClick={handleBtnCancel}
          >
            Cancel
          </CancelButton>
        </div>
      </DivChangeWrap>
    </ListItemChanged>
  );
}
