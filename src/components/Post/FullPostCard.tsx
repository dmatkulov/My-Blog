import React from 'react';
import {Post} from '../../types';

interface Props {
  post: Post;
}
const FullPostCard: React.FC<Props> = React.memo(function FullPostCard({post}) {
  const date = new Date(parseInt(post.date));
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  
  return (
    <div>
      <div>
        <h2>
          {post.title}
        </h2>
      </div>
      <span>Created at {formattedDate}</span>
      <div>
        <p>
          {post.description}
        </p>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.post.title === nextProps.post.title && prevProps.post.description === nextProps.post.description;
});

export default FullPostCard;