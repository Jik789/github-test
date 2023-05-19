import styles from './SearchPanel.module.scss';

interface ISearchProps {
  input: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchPanel({ input }: ISearchProps) {
  return <input className={styles.inputSearch} type="text" onChange={input}></input>;
}

export default SearchPanel;
