import { IButton } from '../../utils/interfaces';
import styles from './Button.module.scss';

function Button({ title, setClick }: IButton) {
  return (
    <button className={styles.test} onClick={setClick}>
      {title}
    </button>
  );
}

export default Button;
