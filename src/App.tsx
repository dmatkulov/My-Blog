import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PostForm from './components/PostForm/PostForm';

const App = () => {
  
  return (
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path="/new-post" element={(
          <PostForm/>
        )}/>
      </Routes>
    </div>
  );
};

export default App;
