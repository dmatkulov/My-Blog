export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface PostApi {
  [id: string]: Post;
}

