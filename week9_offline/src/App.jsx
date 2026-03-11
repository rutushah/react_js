import './App.css'
import './home.css'
import PostComponent from './Post';
import { ProfileComponent, ProfileViewers, PremiumAdvertisement } from './SideBar';
import React from 'react';
import ToggleMessage from './Notification';
import { useState } from 'react';

function App() {

  //adding post on button click using useState hook
  const [posts, setPosts] = useState([]);

  const PostComponents = posts.map(post => <PostComponent
  name = {post.name}
  subtitle = {post.subtitle}
  time = {post.time}
  imgSrc = {post.imgSrc}
  description = {post.description}
  />)

  function addPost() {
    setPosts([...posts,{
      name: "Rutu Shah",
      subtitle: "23,888 followers",
      time: "12m",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQE3Izpap56JrQ/profile-displayphoto-scale_100_100/B56ZxouBamH0Ag-/0/1771283437375?e=1774483200&v=beta&t=pndDDRoiqRrAI8ojN1MQrAwGy8wua0zNHOPb0vKKHGI",
      description: "Want to know how to win big? Check out our latest article on how to win big in the world of tech!"
    }])
  }

  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  setInterval(increment, 5000);


  return (
    <div className="container">
      <div className="leftSection">

      {/* <ToggleMessage /> */}
      <br />       
        <ProfileComponent />
        <br />
        <ProfileViewers />
        <br />
        <PremiumAdvertisement />
      </div>

      {/* button to be added in the global div */}
      
      <button onClick={addPost} >Add Post </button>
      <div className="feedSection">

      <div className="notificationBar">
        <div className="notificationBadge">{count}</div>

        <img
          className="notificationIcon"
          src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg="
          alt="notification_icon"
        />
      </div>
      {[
        PostComponents
      ]}  
       
      </div>
    </div>
  )
}

export default App