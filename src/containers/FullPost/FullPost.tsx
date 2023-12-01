import React, {useCallback, useEffect, useState} from 'react';
import {Post} from '../../types';
import axiosApi from '../../axiosApi';
import {useParams} from 'react-router-dom';
import FullPostCard from '../../components/Post/FullPostCard';
import Spinner from "../../components/Spinner/Spinner";

const FullPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const params = useParams() as {postId: string};
  const url = 'posts/' + params.postId + '.json';
  
  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    try {
      const postResponse = await axiosApi.get<Post>(url);
      const postData = postResponse.data;
      
      setPost({
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
        <Spinner/>
      )}
      {<FullPostCard
        id={params.postId}
        post={post}
      />}
    </div>
  );
};

export default FullPost;