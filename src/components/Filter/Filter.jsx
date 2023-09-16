import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "redux/filterSlice";
import { StyledFilter, StyledFilterTitle } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter); // Get the filter state from the Redux store

  const handleFilterChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value)); // Dispatch the action to update the filter in the store
  };

  return (
    <>
      <StyledFilterTitle>Find contacts by name:</StyledFilterTitle>
      <StyledFilter type="text" value={filter} onChange={handleFilterChange} />
    </>
  );
};
  