import styled from 'styled-components';

export const ListItem = styled.li`
  margin-top: 15px;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
`;

export const ListItemChanged = styled.div``;

export const DeleteButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  margin-right: 5px;
  margin-left: 15px;
  &:hover {
    background-color: #d96a6a;
  }
`;

export const EditButton = styled.button`
  background-color: white;
  margin-right: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin-left: 15px;
  &:hover {
    background-color: #d9ad6a;
  }
`;

export const SaveButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  margin-left: 10px;
  &:hover {
    background-color: #5d7fe3;
  }
`;

export const CancelButton = styled.button`
  background-color: white;
  margin-right: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin-left: 10px;
  &:hover {
    background-color: #f0e96e;
  }
`;

export const InputChange = styled.input`
  margin-right: 10px;
`;

export const DivChangeWrap = styled.div`
  display: flex;
`;
