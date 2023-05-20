import { IRepoItem } from '../../utils/interfaces';
import RepoItem from '../RepoItem/RepoItem';
import styles from './RepoList.module.scss';

interface IRepoItemListProps {
  itemList: IRepoItem[];
}

function RepoList({ itemList }: IRepoItemListProps) {
  return (
    <table className={styles.table}>
      {itemList.length > 0 && (
        <thead>
          <tr>
            <th>Название репозитория</th>
            <th>Количество звезд</th>
            <th>Дата последнего коммита</th>
            <th>Ссылка на репозиторий</th>
          </tr>
        </thead>
      )}
      <tbody>
        {itemList.map((item) => (
          <RepoItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}

export default RepoList;
