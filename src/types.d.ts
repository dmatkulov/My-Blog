export interface Post {
  id: string;
  title: string;
  date: string;
}

export interface PostApi {
  [id: string]: PostCard;
}

export interface PostCard {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface NewPost {
  newPost: PostCard
}

