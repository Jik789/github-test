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
  updated_at: string;
  stargazers_count: number;
  html_url: string;
}

interface IRepoPagination {
  totalCountRepo: number;
}

export type { IButton, IRepoListInfo, IRepoPagination, IRepoItem };
