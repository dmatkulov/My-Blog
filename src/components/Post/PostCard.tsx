import React from 'react';
import {Post} from '../../types';

interface Props {
  post: Post
}
const PostCard: React.FC<Props> = ({post}) => {
  const date = new Date(parseInt(post.date));
  
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <div>
      <span>Created at: {formattedDate}</span>
      <h1>{post.title}</h1>
      <button>Read more</button>
    </div>
  );
};

export default PostCard;