import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PostForm from './containers/PostForm/PostForm';
import Home from './containers/Home/Home';
import Contacts from './containers/Contacts/Contacts';
import About from './containers/About/About';
import FullPost from './containers/FullPost/FullPost';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path="/posts" element={(
          <Home/>
        )}/>
        <Route path="/new-post" element={(
          <PostForm/>
        )}/>
        <Route path="/about" element={(
          <About/>
        )}/>
        <Route path="/contacts" element={(
          <Contacts/>
        )}/>
        <Route path="/posts/:postId" element={(
          <FullPost/>
        )}/>
        <Route path="/posts/:postId/edit" element={(
          <PostForm/>
        )}/>
      </Routes>
    </div>
  );
};

export default App;
