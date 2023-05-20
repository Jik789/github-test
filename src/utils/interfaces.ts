interface IButton {
  title: string;
  setClick: () => void;
}

interface IRepoListInfo {
  total_count: number;
  items: IRepoItem[];
}

interface IRepoItem {
  id: number;
  name: string;
  owner: { login: string; avatar_url: string; html_url: string };
  language: string;
  description: string;
  updated_at: string;
  stargazers_count: number;
  html_url: string;
}

interface IRepoPagination {
  totalCountRepo: number;
}

interface ISearchAndPage {
  inputSearch: string;
  inputPage: string;
}

interface IUserAndRepo {
  userName: string;
  repoName: string;
}

export type { IButton, IRepoListInfo, IRepoPagination, IRepoItem, ISearchAndPage, IUserAndRepo };
