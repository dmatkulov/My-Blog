import React, {useCallback, useEffect, useState} from 'react';
import {Post} from '../../types';
import axiosApi from '../../axiosApi';
import {useParams} from 'react-router-dom';
import FullPostCard from './FullPostCard';

const FullPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const params = useParams();
  const url = 'posts/' + params.postId + '.json';
  
  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    try {
      const postResponse = await axiosApi.get<Post>(url);
      const postData = postResponse.data;
      
      setPost({
        id: postData.id,
        title: postData.title,
        description: postData.description,
        date: postData.date,
      });
    } finally {
      setIsLoading(false);
    }
  }, [url]);
  
  
  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);
  
  return post && (
    <div>
      {isLoading && (
        <h1>Loading...</h1>
      )}
      {<FullPostCard post={post}/>}
    </div>
  );
};

export default FullPost;