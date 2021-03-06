import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Layout} from "./components/header_footer/";
import './App.css';
import {Login, Register} from "./components/auth";
import {NotFound} from './components/pages/index';
import {DashboardIndex} from "./components/dashboard";
import {AddPost, EditPost, PostDetails} from './components/posts'
import postsData from "./data/data";
import usePostHook from "./components/hooks/post.hook";

function App() {

    // const [posts, setPosts] = useState(postsData);
    const {posts, addPosts, updatePost, deletePost} =usePostHook(postsData); // applying custom hook and destructuring

  return (
    <>
    <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path='/' exact
                         render={ () => <DashboardIndex posts={posts}
                         /> }
                  />
                  <Route path='/add' component={AddPost}/>
                  <Route path='/edit/:id' component={EditPost}/>
                  <Route path='/post/:id' render={ () => <PostDetails posts={posts} deletePost={deletePost}/>}/>
                  <Route path='/register' component={Register}/>
                  <Route path='/login' component={Login}/>
                  <Route component={NotFound } />
              </Switch>
          </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
