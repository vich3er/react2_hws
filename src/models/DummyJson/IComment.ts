export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface  ICommentDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface ICommentsDummy {
  comments: ICommentDummy[];
  total: number;
  skip: number;
  limit: number;
}