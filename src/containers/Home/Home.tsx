import React, {useCallback, useEffect, useState} from 'react';
import {PostApi} from '../../types';
import PostCard from '../../components/Post/PostCard';
import axiosApi from '../../axiosApi';
import Title from '../../components/Title/Title';
import Spinner from "../../components/Spinner/Spinner";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostApi>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isExists, setIsExists] = useState(false);
  
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
        setIsExists(true);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  
  return (
    <div className="container">
      <Title title="Discover latest articles about culinary"/>
      {isLoading && (
        <div className="mx-auto">
          <Spinner/>
        </div>
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
      {!isExists && !isLoading && (
        <div className="text-center mt-10">
          <p className="mb-10">No articles found</p>
          <Link
            className="px-4 py-2 bg-blue-700 text-white rounded-md mt-8 w-full mb-4"
            to="/new-post"
          >
            Create an article
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;