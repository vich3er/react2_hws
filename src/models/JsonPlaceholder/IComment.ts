export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}; 
export type IComments =  IComment[];
