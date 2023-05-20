import { IRepoItem } from '../../utils/interfaces';
import styles from './RepoItem.module.scss';
import starIcon from '../../assets/star-icon.png';
import { formatDate, removeProtocol } from '../../utils/utls';
import { Link } from 'react-router-dom';

interface IRepoItemProps {
  item: IRepoItem;
}

function RepoItem({ item }: IRepoItemProps) {
  return (
    <tr>
      <td className={`${styles.tdStyle} ${styles.nameStyle}`}>
        <Link to={`/${item.owner.login}/${item.name}`}>{item.name ?? '-'}</Link>
      </td>
      <td className={`${styles.tdStyle} ${styles.starContainer}`}>
        <img src={starIcon} alt="star" className={styles.starIcon} />
        {item.stargazers_count ?? '0'}
      </td>
      <td className={styles.tdStyle}>{formatDate(item.updated_at ?? '-')}</td>
      <td>
        <a
          className={`${styles.tdStyle} ${styles.repoLink}`}
          href={item.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {removeProtocol(item.html_url)}
        </a>
      </td>
    </tr>
  );
}

export default RepoItem;
