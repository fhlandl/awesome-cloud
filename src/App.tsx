import { Outlet } from 'react-router-dom';
import './App.css';
import GNB from './components/nav/gnb/GNB';
import SNB from './components/nav/snb/SNB';
import { FileSystemProvider } from './context/FileSystemContext';
import { StorageRepositoryProvider } from './context/StorageRepositoryContext';

function App() {
  return (
    <StorageRepositoryProvider>
      <FileSystemProvider>
        <GNB />
        <div className="mainArea">
          <SNB />
          <Outlet />
        </div>
      </FileSystemProvider>
    </StorageRepositoryProvider>
  );
}

export default App;
