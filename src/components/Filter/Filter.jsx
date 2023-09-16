import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { StyledFilter, StyledFilterTitle } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <>
      <StyledFilterTitle>Find contacts by name:</StyledFilterTitle>
      <StyledFilter type="text" value={filter} onChange={handleFilterChange} />
    </>
  );
};
