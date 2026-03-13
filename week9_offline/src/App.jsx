import './App.css'
import './home.css'
import PostComponent from './Post';
import { ProfileComponent, ProfileViewers, PremiumAdvertisement } from './SideBar';
import React from 'react';
import ToggleMessage from './Notification';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  //adding post on button click using useState hook
  const [posts, setPosts] = useState([]);
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);



  //defining useEffect for tabs
  useEffect(() => {
    setLoading(true);
    console.log("Send request to backend to get data for tab is " + currentTab);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab )
    .then(async res =>{
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    })
  }, [currentTab])


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

  function increment() {
    setCount(function(currentCount){
      console.log("Calling increased count every 1 second" + currentCount);
      return currentCount + 1;
    });
  }


  function decrement() {
    setCount(function(currentCount){
      console.log("Calling increased count every 1 second" + currentCount);
      return currentCount - 1;
    });
  }

  // useEffect(() => {
  //   console.log("Above setInterval");
  //   setInterval(increment, 5000);
  //   setInterval(decrement, 10000);
  // },[])
  

  // useEffect(() => {
  //   console.log("The count value has been updated to " + count);
  // }, [count, count2])

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
          className="notificationIcon" style={{color:currentTab == "Feed" ? "red" : "black"}}
          src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg="
          alt="notification_icon"
        />

<button
            onClick={() => setCurrentTab(1)}
            style={{ color: currentTab === 1 ? "red" : "black" }}
          >
            Todo #1 
          </button>

          <button
            onClick={() => setCurrentTab(2)}
            style={{ color: currentTab === 2 ? "red" : "black" }}
          >
         Todo # 2
          </button>

          <button
            onClick={() => setCurrentTab(3)}
            style={{ color: currentTab === 3 ? "red" : "black" }}
          >
            Todo # 3
          </button>

          <button
            onClick={() => setCurrentTab(4)}
            style={{ color: currentTab === 4 ? "red" : "black" }}
          >
            Todo # 4
          </button>
        {/* </div> */}
        <br/>
      </div>

      <div className="tabTitle">
          <h3>{loading? "LOADING..." : tabData.title}</h3>
        </div>

      {[
        PostComponents
      ]}  
      </div>
    </div>
  )
}

export default App