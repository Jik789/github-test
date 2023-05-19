import { IRepoItem } from '../../utils/interfaces';
import styles from './RepoItem.module.scss';
import { Link } from 'react-router-dom';

interface IRepoItemProps {
  item: IRepoItem;
}

function RepoItem({ item }: IRepoItemProps) {
  return (
    <tr>
      <td className={styles.tdStyle}>{item.name ?? '-'}</td>
      <td className={styles.tdStyle}>{item.stargazers_count ?? '0'}</td>
      <td className={styles.tdStyle}>{item.updated_at ?? '-'}</td>
      <td>
        <Link className={`${styles.tdStyle} ${styles.repoLink}`} to={`/`}>
          {item.html_url}
        </Link>
      </td>
    </tr>
  );
}

export default RepoItem;
