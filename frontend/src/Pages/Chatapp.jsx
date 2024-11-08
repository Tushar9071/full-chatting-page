import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftMenu from '../Components/Leftmenu';
import ChatDetail from '../Components/Rightmenu';
import '../styles/mainpage.css';


function App() {
 

  return (
    <div className="app-container">
      {/* Wrapper to center the glass-effect panels */}
      <div className="glass-wrapper glass-effect">
        {/* Left Menu */}
        <div className="left-menu">
          <LeftMenu />
        </div>

        {/* Chat Detail */}
        <div className="chat-detail ">
          <ChatDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
