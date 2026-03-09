import './App.css'
import './home.css'
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <div className="leftSection">

      <ToggleMessage />
      <br />       

        <ProfileComponent />
        <br />
        <ProfileViewers />

        <br />
        <PremiumAdvertisement />
      </div>

      <div className="feedSection">
        <PostComponent 
          name = {"Rutu Shah"}
          subtitle = {"23,888 followers"}
          time = {"12m"}
          imgSrc = {"https://media.licdn.com/dms/image/v2/D5603AQE3Izpap56JrQ/profile-displayphoto-scale_100_100/B56ZxouBamH0Ag-/0/1771283437375?e=1774483200&v=beta&t=pndDDRoiqRrAI8ojN1MQrAwGy8wua0zNHOPb0vKKHGI"}
          description = {"Want to know how to win big? Check out our latest article on how to win big in the world of tech!"}
        />
        <br />
        <PostComponent 
            name = {"Rutu Shah"}
            subtitle = {"Promoted"}
            time = {"12m"}
            imgSrc = {"https://media.licdn.com/dms/image/v2/D5603AQE3Izpap56JrQ/profile-displayphoto-scale_100_100/B56ZxouBamH0Ag-/0/1771283437375?e=1774483200&v=beta&t=pndDDRoiqRrAI8ojN1MQrAwGy8wua0zNHOPb0vKKHGI"}
            description = {"Want to know how to win big? Check out our latest article on how to win big in the world of tech!"}
        />
        <br />
        <PostComponent 
            name = {"Rutu Shah"}
            subtitle = {"23,888 followers"}
            // time = {"12m"}
            imgSrc = {"https://media.licdn.com/dms/image/v2/D5603AQE3Izpap56JrQ/profile-displayphoto-scale_100_100/B56ZxouBamH0Ag-/0/1771283437375?e=1774483200&v=beta&t=pndDDRoiqRrAI8ojN1MQrAwGy8wua0zNHOPb0vKKHGI"}
            description = {"Want to know how to win big? Check out our latest article on how to win big in the world of tech!"}
        />
      </div>
    </div>
  )
}

function PostComponent({name,subtitle,time,imgSrc,description}) {
  return (
    <div className="cardStyle">
      <div className="headerStyle">
        <img src={imgSrc} alt="profile" className="profileImg"/>
        <div>
          <div className="nameText">{name}</div>
          <div className="subText">{subtitle}</div>
          {time !== undefined && <div style={{display:'flex'}}>
            <div className="timeText">{time}</div>
            <img src="https://thumbs.dreamstime.com/b/black-round-wall-clock-isolated-white-vector-illustration-166769728.jpg" alt="world clock" 
            style={{width: '12px', height: '12px'}} />
          </div>}
          
        </div>
      </div>

      <div className="description">
        {description}
      </div>
    </div>
  )
}

function ProfileComponent() {
  return (
    <div className="profileCard">
      <div className="profileBanner"></div>

      <div className="profileContent">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQE3Izpap56JrQ/profile-displayphoto-scale_100_100/B56ZxouBamH0Ag-/0/1771283437375?e=1774483200&v=beta&t=pndDDRoiqRrAI8ojN1MQrAwGy8wua0zNHOPb0vKKHGI"
          alt="Rutu Shah"
          className="profilePhotoLarge"
        />

        <h3 className="profileName">Rutu Shah</h3>
        <div className="profileText">Software Engineer | SDET | Backend & Automation</div>
        <div className="locationText">Dallas, Texas</div>
        <div className="companyText">Phoenix Innovations</div>
      </div>
    </div>
  )
}

function ProfileViewers() {
  return (
    <div className="cardStyle viewersCard">
      <div className="viewerRow">
        <span>Profile Viewers</span>
        <span>98</span>
      </div>
      <div className="viewerRow">
        <span>Post Impressions</span>
        <span>903</span>
      </div>
    </div>
  )
}

function PremiumAdvertisement() {
  return (
    <div className="cardStyle premiumCard">
      <div className="premiumText">Access to exclusive insights</div>
      <div className="premiumButton">Try Premium for $0</div>
    </div>
  )
}



const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
      <div>
          <button onClick={increment}>
              Increase count
          </button>
          {notificationCount && <p style={{color:"GrayText"}}>You have a new notification {notificationCount}</p>}
      </div>
  );
};



export default App