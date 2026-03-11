


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

export default PostComponent;