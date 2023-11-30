import React, {useCallback, useEffect, useState} from 'react';
import {Post} from '../../types';
import axiosApi from '../../axiosApi';
import {useNavigate, useParams} from 'react-router-dom';

const PostForm: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams() as {postId: string};
  const url = 'posts/' + params.postId + '.json';
  
  const [post, setPost] = useState<Post>({
    title: "",
    description: "",
    date: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const fetchExistingPost = useCallback(async () => {
    setLoading(true);
    try {
      const postResponse = await axiosApi.get<Post>(url);
      
      setPost(postResponse.data);
    } finally {
      setLoading(false);
    }
  }, [url]);
  
  useEffect(() => {
    if (params.postId) {
     void fetchExistingPost();
    }
  }, [params.postId, fetchExistingPost]);
  
  const postChanged = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
      date: new Date().valueOf().toString(),
    }));
  }, []);
  
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    
    try {
      if (params.postId) {
        await axiosApi.put(`posts/${params.postId}.json`, post);
      } else {
        await axiosApi.post('posts.json', post);
      }
    } finally {
      navigate('/');
      setLoading(false);
    }
    
  };
  
  let title = 'Add new article';
  
  if (params.postId) {
    title = 'Edit article';
  }
  
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl text-orange-500 border-b pb-5 mb-10">
          {title}
        </h1>
      </div>
      <div className="flex items-center">
        <form onSubmit={onFormSubmit} className="inline-block p-4 bg-white rounded mx-auto">
          <div>
            <label htmlFor="title" className="w-96 text-gray-500">Title</label>
            <input
              required
              id="title"
              type="text"
              name="title"
              className="w-96 font-bold py-1.5 px-2 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-sky-500 mb-4 mt-2"
              value={post.title}
              onChange={postChanged}
            />
          </div>
          <div>
            <label htmlFor="description" className="w-96 text-gray-500">Description</label>
            <textarea
              required
              id="description"
              name="description"
              className="w-96 h-52 py-1.5 px-2 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-sky-500 mt-2"
              value={post.description}
              onChange={postChanged}
            />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md mt-8 w-full mb-4"
              disabled={loading}
              type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;