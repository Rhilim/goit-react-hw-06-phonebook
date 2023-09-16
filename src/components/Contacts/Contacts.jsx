import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { StyledDeleteBtn, StyledList, StyledListItem } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <StyledList>
        {filteredContacts.map(el => (
          <StyledListItem key={el.id}>
            {el.name}: {el.number}
            <StyledDeleteBtn onClick={() => handleDelete(el.id)}>
              delete
            </StyledDeleteBtn>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};