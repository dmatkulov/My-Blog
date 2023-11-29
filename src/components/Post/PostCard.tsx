import React from 'react';

interface Props {
  title: string;
  date: string
}
const PostCard: React.FC<Props> = () => {
  return (
    <div>
      <span>Date</span>
      <h1>Title</h1>
      <button>Read more</button>
    </div>
  );
};

export default PostCard;