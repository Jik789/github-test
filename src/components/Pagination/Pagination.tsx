import { inputPage } from '../../store/features/inputRepoSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ITEM_FOR_PAGE, MAX_PAGE } from '../../utils/const';
import { IRepoPagination } from '../../utils/interfaces';
import { numForArr, setCountPage } from '../../utils/utls';
import styles from './Pagination.module.scss';

function Pagination({ totalCountRepo }: IRepoPagination) {
  const inputSelector = useAppSelector((state) => state.inputValue);
  const countPage = Math.min(setCountPage(totalCountRepo), MAX_PAGE);
  const paginationList = numForArr(countPage);
  const dispatch = useAppDispatch();

  const currentPage = Math.min(Number(inputSelector.inputPage), countPage);
  const sidePages = Math.floor(ITEM_FOR_PAGE / 2);
  const startIndex = Math.max(currentPage - sidePages, 1);
  const endIndex = Math.min(startIndex + ITEM_FOR_PAGE - 1, countPage);
  const visiblePaginationList = paginationList.slice(startIndex - 1, endIndex);

  const handlePageChange = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch(inputPage(event.currentTarget.value));
  };

  return (
    <div className={styles.pagiList}>
      {startIndex > 1 && (
        <>
          <input
            type="button"
            value="1"
            className={`${styles.pagiItem} ${1 === currentPage ? styles.active : ''}`}
            onClick={handlePageChange}
          />
          {startIndex > 2 && <span className={styles.separator}>...</span>}
        </>
      )}

      {visiblePaginationList.map((item) => (
        <input
          type="button"
          value={item}
          className={`${styles.pagiItem} ${item === currentPage ? styles.active : ''}`}
          key={item}
          onClick={handlePageChange}
        />
      ))}

      {endIndex < countPage && (
        <>
          {endIndex < countPage - 1 && <span className={styles.separator}>...</span>}
          <input
            type="button"
            value={countPage}
            className={`${styles.pagiItem} ${countPage === currentPage ? styles.active : ''}`}
            onClick={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default Pagination;
