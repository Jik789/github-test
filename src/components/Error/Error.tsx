import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Ошибка</h2>
      <p className={styles.message}>Произошла ошибка. Пожалуйста, вернитесь на главную страницу.</p>
      <Link to="/" className={styles.link}>
        Перейти на главную
      </Link>
    </div>
  );
};

export default Error;
