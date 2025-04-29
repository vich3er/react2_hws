export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface IPostDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface IPostsDummy {
  posts: IPostDummy[];
  total: number;
  skip: number;
  limit: number;
}