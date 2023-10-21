export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const PostsKey = 'Posts';

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const CommentsKey = 'Comments';
