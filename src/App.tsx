import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Post/Posts';

const App = () => {
  
  return (
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path="/" element={(
          <Posts/>
        )}/>
        <Route path="/new-post" element={(
          <PostForm/>
        )}/>
      </Routes>
    </div>
  );
};

export default App;
