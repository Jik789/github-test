import Button from '../../components/Button/Button';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

function RepoCardPage() {
  return (
    <div>
      <h1>Поиск GitHub</h1>
      <SearchPanel></SearchPanel>
      <Button setClick={() => console.log('123')} title={'Искать'}></Button>
    </div>
  );
}

export default RepoCardPage;
