import { Outlet } from 'react-router-dom';
import './App.css';
import GNB from './components/nav/gnb/GNB';
import SNB from './components/nav/snb/SNB';
import { FileSystemProvider } from './context/FileSystemContext';

function App() {
  return (
    <FileSystemProvider>
      <GNB />
      <div className="mainArea">
        <SNB />
        <Outlet />
      </div>
    </FileSystemProvider>
  );
}

export default App;
