import React, {useCallback, useEffect, useState} from 'react';
import {PostApi} from '../../types';
import PostCard from './PostCard';
import axiosApi from '../../axiosApi';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostApi>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const postResponse = await axiosApi.get<PostApi>(
        'posts.json');
      const fireBaseData = postResponse.data;
      
      Object.keys(fireBaseData).forEach((key) => {
        setPosts((prevState) => ({
          [key]: {
            id: fireBaseData[key].id,
            title: fireBaseData[key].title,
            description: fireBaseData[key].description,
            date: fireBaseData[key].date,
          },
          ...prevState,
        }));
      });
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  
  return (
    <div className="container">
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl text-orange-500 border-b pb-5 mb-10">
          Discover latest posts
        </h1>
      </div>
      {isLoading && (
        <h1 className="text-center">Loading...</h1>
      )}
      <div className="grid grid-cols-3 gap-3">
      {Object.keys(posts).map((id) => (
        <PostCard
          post={posts[id]}
          key={posts[id].id}
          id={id}
        />
      ))}
      </div>
    </div>
  );
};

export default Posts;