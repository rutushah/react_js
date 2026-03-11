import { useState } from 'react';

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

  export default ToggleMessage;