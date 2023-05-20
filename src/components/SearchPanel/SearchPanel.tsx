import { useEffect } from 'react';
import { inputName } from '../../store/features/inputRepoSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import styles from './SearchPanel.module.scss';

function SearchPanel() {
  const inputSelector = useAppSelector((state) => state.inputValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('searchInput');
    if (savedSearchValue) {
      dispatch(inputName(savedSearchValue));
    }
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputName(event.target.value));
  };

  return (
    <input
      className={styles.inputSearch}
      type="text"
      value={inputSelector.inputName}
      onChange={handleInputChange}
    />
  );
}

export default SearchPanel;
