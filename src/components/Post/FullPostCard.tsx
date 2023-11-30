import React from 'react';
import {Post} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  post: Post;
  id: string;
}
const FullPostCard: React.FC<Props> = React.memo(function FullPostCard({post, id}) {
  const date = new Date(parseInt(post.date));
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

  return (
    <div className="bg-white rounded-lg p-5 mt-5">
      <div className="flex justify-between py-5 border-b mb-10">
        <h2 className="font-bold text-3xl mb-2"
        >
          {post.title}
        </h2>
        <div className="flex items-stretch">
          <Link
            to={'/posts/' + id + '/edit'}
            className="bg-gray-200 border-gray-400 px-4 py-2 hover:bg-blue-400 rounded-md"
          >
            Edit article
          </Link>
          <button
            className="px-4 py-2 rounded-md bg-red-300 text-red-950 hover:text-white hover:bg-red-800 ml-4"
          >
            Delete article
          </button>
        </div>
      </div>
      <p
        className="text-gray-500 text-sm mb-10"
      >
        Created at {formattedDate}
      </p>
      <div className="pb-5">
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