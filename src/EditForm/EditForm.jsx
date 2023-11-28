import React, { useState } from 'react';
import { contactUpdate } from '../redux/contactsSlice';
import * as contactsSelectors from '../redux/selectors';
import {
  SaveButton,
  CancelButton,
  ListItemChanged,
  InputChange,
  DivChangeWrap,
} from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function EditForm(item) {
  const contacts = useSelector(contactsSelectors.selectContacts);

  const [editName, setEditName] = useState(item.item.name);
  const [editNumber, setEditNumber] = useState(item.item.number);

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

  const handleBtnSave = e => {
    const newContact = { id: item.item.id, name: editName, number: editNumber };
    contacts.map(i => {
      if (item.item.id === i.id) {
        dispatch(contactUpdate(newContact));
      }
      return false;
    });
    item.setA('');
  };

  const handleBtnCancel = e => {
    item.setA('');
  };

  return (
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
          <SaveButton value={item.id} type="button" onClick={handleBtnSave}>
            Save
          </SaveButton>
          <CancelButton value={item.id} type="button" onClick={handleBtnCancel}>
            Cancel
          </CancelButton>
        </div>
      </DivChangeWrap>
    </ListItemChanged>
  );
}
