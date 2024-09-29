import { Outlet } from 'react-router-dom';
import './App.css';
import GNB from './components/nav/gnb/GNB';
import SNB from './components/nav/snb/SNB';

function App() {
  return (
    <>
      <GNB />
      <div className="mainArea">
        <SNB />
        <Outlet />
      </div>
    </>
  );
}

export default App;
