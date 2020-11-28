import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Post from './components/pages/Post';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AddPost from './components/addpost/addPost';
import AddPhoto from './components/addpost/addPhoto'

function App() {
  return (
    <div>
      <Router>
        {/* <Switch>  */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/post" component={Post} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/addphoto" exact component={AddPhoto} />
        {/* </Switch> */}
      </Router>

    </div>
  )
}

export default App