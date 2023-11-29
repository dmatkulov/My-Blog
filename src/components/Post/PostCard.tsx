import React from 'react';
import {Post} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  post: Post;
  id: string;
}
const PostCard: React.FC<Props> = React.memo(function postCard({post, id}) {
  const date = new Date(parseInt(post.date));
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  
  return (
    <div className="bg-white rounded-md p-5">
      <div className="pb-3 border-b mb-5">
        <h4 className="font-bold text-lg mb-2"
        >
          {post.title}
        </h4>
        <p
          className="text-gray-500 text-sm"
        >
          Created at {formattedDate}
        </p>
      </div>
      <Link
        className="inline-block px-4 py-1.5 rounded-md bg-amber-100 text-orange-500"
        to={'/posts/' + id}
      >
        Read more
      </Link>
    </div>
  );
}, (prevProps, nexProps) => {
  return prevProps.post.title === nexProps.post.title && prevProps.post.description === nexProps.post.description;
});

export default PostCard;