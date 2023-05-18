import RepoItem from '../RepoItem/RepoItem';

function RepoList() {
  const data: number[] = [1, 2, 3];

  return <div> {data ? data.map((item) => <RepoItem key={item} />) : []}</div>;
}

export default RepoList;
