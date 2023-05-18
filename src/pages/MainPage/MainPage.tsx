import RepoList from '../../components/RepoList/RepoList';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.titleText}>Поиск GitHub</h1>
      <SearchPanel></SearchPanel>
      <RepoList></RepoList>
    </div>
  );
}

export default MainPage;
