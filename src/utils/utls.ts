import { ITEM_FOR_PAGE, MAX_PAGE } from './const';

const setCountPage = (itemCount: number) => Math.ceil(itemCount / ITEM_FOR_PAGE);

const numForArr = (num: number) => {
  const arr = [];
  for (let i = 0; i < Math.min(num, MAX_PAGE); i++) {
    arr.push(i + 1);
  }
  return arr;
};

const removeProtocol = (url: string) => {
  return url.replace(/^(https?:\/\/)?/, '');
};

const formatDate = (dateString: string) => {
  if (dateString === '') return '-';

  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
};

export { formatDate, setCountPage, numForArr, removeProtocol };
