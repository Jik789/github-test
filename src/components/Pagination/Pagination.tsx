import { IRepoPagination } from '../../utils/interfaces';
import { setCountPage } from '../../utils/utls';

function Pagination({ totalCountRepo }: IRepoPagination) {
  const countPage = setCountPage(totalCountRepo);

  return <div>{countPage}</div>;
}

export default Pagination;
