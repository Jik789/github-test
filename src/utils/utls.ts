import { ITEM_FOR_PAGE } from './const';

const currentDate = (data: string) => data.split('T')[0];
const setCountPage = (itemCount: number) => Math.ceil(itemCount / ITEM_FOR_PAGE);

export { currentDate, setCountPage };
