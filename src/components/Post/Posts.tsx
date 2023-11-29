import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {PostApi} from '../../types';
import PostCard from './PostCard';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostApi>({});
  
  const fetchData = useCallback( async () => {
    try{
      const postResponse = await axiosApi.get<PostApi>(
        'posts.json');
      const fireBaseData = postResponse.data;
      
      Object.keys(fireBaseData).forEach((key) => {
        setPosts((prevState) => ({
          ...prevState,
          [key]: {
            id: fireBaseData[key].id,
            title: fireBaseData[key].title,
            description: fireBaseData[key].description,
            date: fireBaseData[key].date,
          },
        }));
      });
    } finally {
      console.log('done');
    }
  }, []);
  
  useEffect(() => {
    void  fetchData();
  }, [fetchData]);
  
  return (
    <div className="container">
      {Object.keys(posts).map((key) => (
        <PostCard post={posts[key]} key={posts[key].id} />
      ))}
    </div>
  );
};

export default Posts;