import { useEffect } from 'react';
import { useSearchRepoQuery } from '../../api/api';
import Pagination from '../../components/Pagination/Pagination';
import RepoList from '../../components/RepoList/RepoList';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppSelector } from '../../store/store';
import styles from './MainPage.module.scss';

function MainPage() {
  const inputSelector = useAppSelector((state) => state.inputValue);
  const timeoutInput = useDebounce(inputSelector.inputName, 1000);

  const { data } = useSearchRepoQuery({
    inputSearch: timeoutInput ?? '*',
    inputPage: inputSelector.inputPage ?? '1',
  });

  useEffect(() => {
    localStorage.setItem('searchInput', inputSelector.inputName);
  }, [inputSelector.inputName]);

  useEffect(() => {
    localStorage.setItem('currentPage', inputSelector.inputPage);
  }, [inputSelector.inputPage]);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.titleText}>Поиск GitHub</h1>
      <SearchPanel></SearchPanel>
      <RepoList itemList={data?.items || []}></RepoList>
      <Pagination totalCountRepo={data?.total_count || 0}></Pagination>
    </div>
  );
}

export default MainPage;
