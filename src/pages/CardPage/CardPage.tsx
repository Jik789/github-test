import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSearchUserAndRepoQuery } from '../../api/api';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import { formatDate } from '../../utils/utls';
import starIcon from '../../assets/star-icon.png';
import styles from './CardPage.module.scss';

const CardPage = () => {
  const { username, reponame } = useParams();
  const { isLoading, isError, data } = useSearchUserAndRepoQuery(
    {
      userName: username || '',
      repoName: reponame || '',
    },
    { skip: !username || !reponame }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const renderName = data?.name || 'Имя пользователя не указано';
  const renderStargazersCount = data?.stargazers_count ?? 0;
  const renderUpdatedAt = formatDate(data?.updated_at || '');
  const renderOwnerLogin = data?.owner.login || 'Нет владельца';
  const renderDescription = data?.description || 'Нет описания';

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{renderName}</h2>
      <div className={styles.details}>
        <span className={styles.stars}>
          Количество звезд: <img src={starIcon} alt="star" className={styles.starIcon} />
          {renderStargazersCount}
        </span>
        <span className={styles.updated}>Последнее обновление: {renderUpdatedAt}</span>
      </div>
      <div className={styles.owner}>
        <img
          src={data?.owner.avatar_url}
          alt={`${renderOwnerLogin}'s avatar`}
          className={styles.avatar}
        />
        <a
          href={data?.owner.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ownerLink}
        >
          {renderOwnerLogin}
        </a>
      </div>
      <div className={styles.languages}>
        {data?.language && <span className={styles.language}>{data.language}</span>}
      </div>
      <p className={styles.description}>{renderDescription}</p>
      <Link to="/" className={styles.goBackButton}>
        Перейти на главную
      </Link>
    </div>
  );
};

export default CardPage;
