import { useSearchRepoQuery } from '../../api/api';
import Pagination from '../../components/Pagination/Pagination';
import RepoList from '../../components/RepoList/RepoList';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { useDebounce } from '../../hooks/useDebounce';
import { inputName } from '../../store/features/inputRepoSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import styles from './MainPage.module.scss';

function MainPage() {
  const InputSelector = useAppSelector((state) => state.inputValue);
  const dispatch = useAppDispatch();
  const timeoutInput = useDebounce(InputSelector.inputName, 3000);
  const { data } = useSearchRepoQuery(timeoutInput);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputName(event.target.value));
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.titleText}>Поиск GitHub</h1>
      <SearchPanel input={handleInputChange}></SearchPanel>
      <RepoList itemList={data?.items || []}></RepoList>
      <Pagination totalCountRepo={data?.total_count || 0}></Pagination>
    </div>
  );
}

export default MainPage;
