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

  export {ProfileComponent, ProfileViewers, PremiumAdvertisement};