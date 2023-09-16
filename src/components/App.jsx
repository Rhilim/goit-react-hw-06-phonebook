import { useEffect} from 'react';
import  { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';
import { Wrapper } from './Wrapper';

export const App = () => {

  const contacts = useSelector(state => state.contacts);


  useEffect(() => {
    localStorage.setItem('phone-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrapper>
      <StyledTitle>Phonebook</StyledTitle>
      <PhoneBook  />
      <StyledTitle>Contacts</StyledTitle>
      <Filter/>
      <Contacts />
      <Toaster />
    </Wrapper>
  );
};

export default App;
