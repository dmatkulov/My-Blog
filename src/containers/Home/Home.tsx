import React, {useCallback, useEffect, useState} from 'react';
import {PostApi} from '../../types';
import PostCard from '../../components/Post/PostCard';
import axiosApi from '../../axiosApi';
import Title from '../../components/Title/Title';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostApi>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const postResponse = await axiosApi.get<PostApi>(
        'posts.json');
      const fireBaseData = postResponse.data;
      
      if (fireBaseData !== null) {
        const promises = Object.keys(fireBaseData).map(async (id) => {
          return {
            [id]: {
              title: fireBaseData[id].title,
              description: fireBaseData[id].description,
              date: fireBaseData[id].date,
            }
          };
        });
        const newPosts = await Promise.all(promises);
        newPosts.forEach((post) => {
          setPosts((prevState) => ({
            ...post,
            ...prevState,
          }));
        });
      } else {
        setPosts({});
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  
  return (
    <div className="container">
      <Title title="Discover latest articles about culinaary"/>
      {isLoading && (
        <h1 className="text-center">Loading...</h1>
      )}
      {Object.keys(posts).length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {Object.keys(posts).map((id) => (
            <PostCard
              post={posts[id]}
              key={id}
              id={id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;