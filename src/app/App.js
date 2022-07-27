import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
// import Posts from "./components/posts";
import Home from "./components/home";
import PostList from "./components/postList";
import Post from "./components/post";

function App() {
    const posts = [
        {id:1, label: "post 1"},
        {id:2, label: "post 2"},
        {id:3, label: "post 3"}
    ];
  return (
      <div>
          <NavBar />
        <h1>App</h1>
          <Switch>
              <Route path="/posts" render={(props)=> (<PostList posts = {posts}{...props}/>)}/>

              <Route path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/login" component={Login}/>
              <Route path="/posts/:postID" render={(props)=> (<Post posts = {posts} {...props}/>)}/>
          </Switch>
      </div>
  );
}

export default App;
