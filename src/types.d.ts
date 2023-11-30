export interface Post {
  title: string;
  description: string;
  date: string;
}

export interface PostApi {
  [id: string]: Post;
}

