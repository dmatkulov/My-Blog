import React, {useCallback, useState} from 'react';
import {Post} from '../../types';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';

const PostForm: React.FC = () => {
  const navigate = useNavigate();
  
  const [newPost, setNewPost] = useState<Post>({
    id: '',
    title: '',
    description: '',
    date: ''
  });
  const [loading, setLoading] = useState(false);
  
  const postChanged = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    
    setNewPost((prevState) => ({
      ...prevState,
      id: new Date().valueOf().toString(),
      [name]: value,
      date: new Date().valueOf().toString(),
    }));
  }, []);
  
  
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    
    try {
      await axiosApi.post('posts.json', newPost);
    } finally {
      navigate('/');
      setLoading(false);
    }
    
  };
  
  return (
    <div>
      <form onSubmit={onFormSubmit}
            className="flex flex-col justify-center">
        <div>
          <label htmlFor="title">Title</label>
          <input
            required
            id="title"
            type="text"
            name="title"
            className="w-full font-bold py-1.5 px-2 mx-1.5 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none focus:border-sky-500"
            value={newPost.title}
            onChange={postChanged}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            className="w-full font-bold py-1.5 px-2 mx-1.5 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none focus:border-sky-500"
            value={newPost.description}
            onChange={postChanged}
          />
        </div>
        <div>
          <button
            disabled={loading}
            type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;