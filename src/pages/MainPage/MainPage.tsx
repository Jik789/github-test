import { useEffect } from 'react';
import { useSearchRepoQuery } from '../../api/api';
import Pagination from '../../components/Pagination/Pagination';
import RepoList from '../../components/RepoList/RepoList';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppSelector } from '../../store/store';
import styles from './MainPage.module.scss';
import Loader from '../../components/Loader/Loader';

function MainPage() {
  const inputSelector = useAppSelector((state) => state.inputValue);
  const timeoutInput = useDebounce(inputSelector.inputName, 500);

  const { isFetching, currentData } = useSearchRepoQuery({
    inputSearch: timeoutInput ?? '',
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
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {timeoutInput !== '' && currentData?.items.length === 0 ? (
            <p className={styles.noResultsText}>Нет результатов поиска</p>
          ) : (
            <>
              <RepoList itemList={currentData?.items || []}></RepoList>
              <Pagination totalCountRepo={currentData?.total_count || 0}></Pagination>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default MainPage;
